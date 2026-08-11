<template>
  <ProjectTemplate id="lulalab" :media="media">
    <n-p class="squid-semi-title">The Story</n-p>
    <n-p>
      I've been building things for over a decade and none of it was written down anywhere someone else could read it - boards in drawers,
      enclosures in a CAD folder, photos scattered across three phones. This site started as the place to finally park all of that, and then
      turned into a project of its own. Every project here is just a Vue component, but the machinery around them - the board viewer, the image
      pipeline, the layout - ended up being the part worth writing about.
    </n-p>
    <n-p>
      The constraint that shaped everything is that there is no backend. No CMS, no database, no image server:
      <span class="squid-text-alt">projects.ts</span> is a plain array, every page is a component, and the whole thing builds into a folder of
      static files sitting on GitHub Pages. That costs nothing to run and can't fall over at 3am, but it also means anything clever has to
      happen in the browser, on the visitor's connection, with whatever the visitor's browser happens to support.
    </n-p>

    <n-p class="squid-semi-title">The Board Viewer</n-p>
    <n-p>
      Photos of a PCB only tell you so much, so the hardware projects embed the actual board. KiCad exports the model, it gets Draco compressed
      into a <span class="squid-text-alt">.glb</span> (this replaced VRML, which was the same geometry at several times the size) and three.js
      renders it with orbit controls. The picker walks a tree - board, then revision - and a <strong>Bare board</strong> checkbox swaps in a
      second model with no components on it, so you can look at the copper instead of the parts sitting on top of it. Assemblies get one more
      trick: an explode toggle that pushes every part outward along the vector from the assembly centre to its own centre, with per part offsets
      and rotations when that guess isn't good enough.
    </n-p>
    <n-p>
      The interesting work was making all of that cost nothing when you're not using it. three.js is a big dependency, so the viewer is an async
      component that isn't fetched until an IntersectionObserver says you're 200px away from it. Once it's up, there is no permanent render loop:
      frames are requested, and the loop keeps going only while the orbit damping is still settling or an explode tween is running, then it stops
      dead. A second observer kills rendering entirely while the viewer is scrolled off screen. On unmount the geometries, materials and the
      renderer are disposed and the WebGL context is force released, because browsers only allow a handful of live contexts and route changes
      churn through them fast.
    </n-p>
    <n-p>
      The rest are small things that only show up under load. Every load gets a token so a slow model that was superseded mid flight drops its
      result instead of interleaving meshes into the scene. The noise normal map is built once and shared by every material rather than
      generating 65k random values per part. Device pixel ratio is capped at 2, because a retina panel will happily render four times the
      fragments for no visible gain.
    </n-p>

    <n-p class="squid-semi-title">Serving the Lighter Image</n-p>
    <n-p>
      There is a lot of media here - photos, board renders and screen recordings - and all of it has an AVIF sibling generated next to it, so
      <span class="squid-text-alt">project/images/board.png</span> has a <span class="squid-text-alt">project/images/avif/board.avif</span>. That
      layout means the rewrite is pure string manipulation, no manifest to keep in sync, and it survives subfolders.
    </n-p>
    <n-p>
      The part I like is that nothing waits to find out whether AVIF is supported. Feature detection does run once per session, but the components
      don't block on it - they optimistically ask for the AVIF, and an <span class="squid-text-alt">@error</span> handler swaps that one source
      back to the original and remembers the failure. Browsers that support AVIF (nearly all of them now) pay nothing for the check, and the ones
      that don't take a single failed request per image. On the project cards it's even cheaper: a plain
      <span class="squid-text-alt">&lt;picture&gt;</span> with an AVIF <span class="squid-text-alt">&lt;source&gt;</span> lets the browser pick
      before a request is made at all.
    </n-p>
    <n-p>
      Videos get the same treatment, which was the surprise. The clips are re-encoded as <strong>animated</strong> AVIF and rendered in an
      <span class="squid-text-alt">&lt;img&gt;</span> tag, with the <span class="squid-text-alt">&lt;video&gt;</span> element kept only as the
      fallback - no autoplay policies to fight, no player to style, and under 40% of the bytes. Across the whole media folder the AVIF side
      is about 87 MB against 219 MB of originals, and a browser that speaks AVIF only ever downloads the smaller half. The screenshots on this
      very page are 2.2 MB as JPEG and 436 KB as AVIF.
    </n-p>
    <n-p>
      Above that sits ordinary restraint about what gets requested at all. The carousel keeps every slide in the DOM, so a 14 image project would
      fire 14 full size requests on mount - only the current slide and its two neighbours load eagerly, and flipping the flag back resumes the
      deferred fetch so the next slide is already in flight by the time you swipe to it. The tree listing has the same problem at a larger scale,
      since it renders every project's media on one page, and gets out of it by letting the browser handle it natively with lazy loading. The
      Netscore firmware simulators are iframes that only
      get their <span class="squid-text-alt">src</span> once they scroll into view, since the sims go to sleep when idle and there's no point
      booting one you're never going to look at.
    </n-p>

    <n-p class="squid-semi-title">Small Screens</n-p>
    <n-p>
      Most of the responsive work is regular CSS - the project grid drops from three columns to one, the project tree's sticky sidebar unsticks
      and stacks above the content, the carousel gives up its fixed height, the viewer controls stack into a column, and body text drops a point
      below 600px. The carousel also swaps its side arrows for dots below 768px, driven by a tiny composable rather than by CSS, because that one
      is a prop on the component and not something a media query can reach.
    </n-p>
    <n-p>
      The CV is the exception and the one I'd defend. It's a three column layout - education on the left, experience on the right, everything else
      down the middle - and there is no honest way to squeeze that into 400px. So it doesn't try: below 800px the whole component is swapped for a
      different one that renders the same data as a single vertical timeline. Two components, one data file, no compromise layout that reads badly
      on both.
    </n-p>

    <n-p class="squid-semi-title">Key Features</n-p>
    <n-ul>
      <n-li>Static by Design: <span class="squid-text-alt">no backend, no database and no build server - a plain array of project metadata drives the home page, both project listings and every project header.</span></n-li>
      <n-li>Interactive Board Viewer: <span class="squid-text-alt">Draco compressed GLB rendered with three.js, with revision picking, a bare board toggle and an animated explode view for assemblies.</span></n-li>
      <n-li>Renders On Demand: <span class="squid-text-alt">the viewer is lazily imported 200px before it's needed, only runs its render loop while something is actually moving, and stops entirely when scrolled off screen.</span></n-li>
      <n-li>Optimistic AVIF: <span class="squid-text-alt">every image and video on the site resolves to an AVIF sibling by path convention, with a per source fallback on error - about 87 MB of AVIF standing in for 219 MB of originals.</span></n-li>
      <n-li>Animated AVIF Instead of Video: <span class="squid-text-alt">clips play from an &lt;img&gt; tag, sidestepping autoplay policies entirely, with &lt;video&gt; kept as the fallback.</span></n-li>
      <n-li>Layouts That Change, Not Shrink: <span class="squid-text-alt">the CV swaps its three column layout for a vertical timeline component below 800px instead of squeezing it.</span></n-li>
      <n-li>Two Ways to Browse: <span class="squid-text-alt">a year grouped tree or a card grid, filterable by clicking any keyword tag, with the choice remembered in localStorage.</span></n-li>
      <n-li>Pick Your Own Accent: <span class="squid-text-alt">the palette is user chosen and persisted, deriving the hover, pressed and complementary underline colors from a single hex - and skipping the picker enough times gets you something you deserve.</span></n-li>
    </n-ul>

    <n-p class="squid-semi-title">Tech Stack</n-p>
    <n-ul>
      <n-li>Framework: <span class="squid-text-alt">Vue 3 (Composition API, &lt;script setup&gt;)</span></n-li>
      <n-li>Language: <span class="squid-text-alt">TypeScript</span></n-li>
      <n-li>Build Tool: <span class="squid-text-alt">Vite, with auto imported components and composables</span></n-li>
      <n-li>UI Library: <span class="squid-text-alt">Naive UI (dark theme, overridden at runtime with the picked accent color)</span></n-li>
      <n-li>3D: <span class="squid-text-alt">three.js - GLTF/Draco, STL and VRML loaders, OrbitControls, a shader patched standard material for the rim light</span></n-li>
      <n-li>Styling: <span class="squid-text-alt">Sass, plus a CSS variable driven palette and a CRT interlace overlay over the whole page</span></n-li>
      <n-li>Routing: <span class="squid-text-alt">Vue Router in hash mode, with lazily imported project pages</span></n-li>
      <n-li>Hosting: <span class="squid-text-alt">GitHub Pages, deployed straight from the build output</span></n-li>
    </n-ul>

    <n-p class="squid-semi-title">Challenges &amp; Lessons Learned</n-p>
    <n-p>
      The viewer was where most of the time went, and almost none of it on getting a board on screen - that part is a loader and a light rig.
      It went on everything after: a render loop quietly burning a core on a page you'd scrolled past, WebGL contexts leaking on every route
      change until the browser started dropping the oldest one, and models arriving out of order and stacking two revisions of the same board on
      top of each other. Every one of those only shows up once real content is in front of it.
    </n-p>
    <n-p>
      The AVIF work taught the opposite lesson. My first instinct was to detect support properly and only then decide what to request, which
      means every image on the page waits for a promise that resolves the same way for 95% of visitors. Asking for the better format and handling
      the failure turned out to be both faster and less code - the detection is still there, it just isn't in anyone's way.
    </n-p>
    <n-p>
      The honest bit of unfinished business is the media itself. Everything is generated once and committed, which is fine at this size but means
      new images need the AVIF pass run by hand. That wants to be a build step, and one day it will be.
    </n-p>

    <n-p class="squid-semi-title">Links</n-p>
    <n-ul>
      <n-li><n-a href="https://github.com/arcticlula/lulalab" target="_blank">[GitHub Repository]</n-a></n-li>
      <n-li><n-a href="https://lulalab.pt/" target="_blank">[Live Site]</n-a></n-li>
      <n-li><router-link :to="{ name: 'netscore-v3' }"><n-a>[A page using the board viewer]</n-a></router-link></n-li>
    </n-ul>
  </ProjectTemplate>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import ProjectTemplate from '../../components/ProjectTemplate.vue';
import { IMedia } from '../../models/media';

const media = ref<IMedia[]>([
  { type: 'image', src: 'lulalab/images/projects-grid.jpg', description: "the project grid - cards served as avif through a <picture> element, falling back to the original on error" },
  { type: 'image', src: 'lulalab/images/model-viewer.jpg', description: "the board viewer - draco compressed glb, with revision picking and a bare board toggle" },
  { type: 'image', src: 'lulalab/images/responsive-projects.jpg', description: "same project listing at desktop and narrow widths - three columns down to one" },
  { type: 'image', src: 'lulalab/images/responsive-cv.jpg', description: "the cv doesn't reflow, it swaps - a three column layout on desktop, a different component rendering the same data as a timeline on mobile" },
  { type: 'image', src: 'lulalab/images/project-page.jpg', description: "a project page - carousel, description and the lazily loaded viewer further down" },
  { type: 'image', src: 'lulalab/images/projects-tree.jpg', description: "the tree view - projects grouped by year, jumping to the entry on select" },
  { type: 'image', src: 'lulalab/images/home.jpg', description: "the landing page, with the crt interlace overlay running over everything" }
]);
</script>

<style scoped lang="sass">
</style>
