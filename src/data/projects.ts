// import { ref } from "vue";

export interface Project {
  name: string;
  date: string;
  keywords: string[];
  description: string;
  status: 'Ongoing' | 'Prototype' | 'Completed' | 'Deprecated';
  src: string;
  srcType: 'image' | 'video';
  routeName: string;
  /** keeps the entry out of the listings and the home page - the page itself still works if you know the url */
  hidden?: boolean;
}

export const projectData: Project[] = [
  {
    name: 'Mood Light',
    date: '2025-09-08',
    keywords: ['Hardware', 'Software', 'Web App', 'BLE', 'Upcycling', 'Lighting', '3D Modeling'],
    description: 'A diffused ambient light built from repurposed materials, controlled directly from any modern web browser using the Web Bluetooth API.',
    status: 'Ongoing',
    src: 'mood-light/videos/PXL_20250911_232403363.mp4',
    srcType: 'video',
    routeName: 'mood-light',
  },
  {
    name: 'Netscore',
    date: '2024-10-01',
    keywords: ['Hardware', 'Software', 'Embedded C++', 'ESP32', 'BLE', 'Lighting', 'Sports'],
    description: "A real-time, dual-sided scoreboard system that uses external Bluetooth buttons for control and score updates.",
    status: 'Completed',
    src: 'netscore/images/PXL_20250301_000104064.jpg',
    srcType: 'image',
    routeName: 'netscore'
  },
  {
    name: 'Netscore V2',
    date: '2025-05-05',
    keywords: ['Hardware', 'Software', 'Embedded C++', 'ESP32', 'BLE', 'Lighting', 'Sports'],
    description: "Revision of the original Netscore scoreboard, featuring a clock display, extra leds and some other improvements.",
    status: 'Completed',
    src: 'netscore-v2/images/logo.jpg',
    srcType: 'image',
    routeName: 'netscore-v2'
  },
  {
    name: 'Netscore V3',
    date: '2026-04-01',
    keywords: ['Hardware', 'Software', 'Embedded C++', 'ESP32', 'BLE', 'Sports'],
    description: "Third revision of the Netscore scoreboard, rebuilt around a proper piezo driver, a beefier power rail and FPC display slots.",
    status: 'Ongoing',
    src: 'netscore-v3/images/pcbs/main-board-front.png',
    srcType: 'image',
    routeName: 'netscore-v3'
  },
  {
    name: 'Lulalab',
    date: '2025-11-09',
    keywords: ['Software', 'Web App', 'Vue', 'Three.js', 'WebGL', 'Performance', 'Responsive Design'],
    description: 'This website - a static Vue app that ships its own WebGL board viewer, hands out AVIF whenever the browser takes it, and rebuilds its layout instead of shrinking it on small screens.',
    status: 'Ongoing',
    src: 'lulalab/images/projects-grid.jpg',
    srcType: 'image',
    routeName: 'lulalab',
    hidden: true
  },
  {
    name: 'Plant Sniffer',
    date: '2023-08-30',
    keywords: ['Hardware', 'Software', '3D Modeling', 'Sensors', 'Nature', 'Embedded C++'],
    description: 'A portable soil moisture monitor with calibration and multiple visualization modes, built in one week for an Erasmus+ nature program.',
    status: 'Completed',
    src: 'plant-sniffer/videos/PXL_20230904_143511372.mp4',
    srcType: 'video',
    routeName: 'plant-sniffer'
  },
  {
    name: 'Home OpenSCAD',
    date: '2020-04-28',
    keywords: ['3D Modeling', 'Parametric Design', 'OpenSCAD', 'Furniture'],
    description: "A collection of real-world furniture pieces from my parents' house, modeled from scratch with parametric dimensions using OpenSCAD.",
    status: 'Completed',
    src: 'home-scad/images/IMG-20200428-WA0016.jpg',
    srcType: 'image',
    routeName: 'home-openscad'
  },
  {
    name: 'FM Transmitter',
    date: '2013-06-01',
    keywords: ['Hardware', 'Analog Electronics', 'RF Design', 'Deadbug Soldering', 'Audio'],
    description: 'A simple, battery-powered monophonic FM transmitter built "deadbug-style" with discrete components, designed to broadcast audio from a device like a mp3 player to any standard FM radio receiver.',
    srcType: 'image',
    status: 'Completed',
    src: 'fm-transmitter/images/IMG_3963.jpg',
    routeName: 'fm-transmitter'
  },
  {
    name: 'Goalie Rotation Timer',
    date: '2023-12-19',
    keywords: ['Hardware', 'Software', 'Embedded Systems', 'ESP32', 'Sports'],
    description: "A portable, ESP32-based timer with a display and buzzer, prototyped to automate goalie rotation intervals during football games.",
    srcType: 'video',
    status: 'Prototype',
    src: 'goalie-rotation-timer/videos/cover.mp4',
    routeName: 'goalie-rotation-timer'
  },
  {
    name: 'Foosball Goal Counter',
    date: '2021-04-08',
    keywords: ['Hardware', 'Software', 'Sensors', 'Sports', '3D Modeling'],
    description: 'An automated foosball goal counter that detects and logs goals using a physical ramp with a sensor assembly, displaying scores in real time.',
    status: 'Prototype',
    src: 'foosball-goal-counter/videos/cover.mp4',
    srcType: 'video',
    routeName: 'foosball-goal-counter'
  },
  {
    name: "Rita's Garage Door Remote",
    date: '2024-06-29',
    keywords: ['Hardware', '3D Modeling', 'Power Management'],
    description: 'A custom 3D-printed enclosure with integrated Li-ion battery and charging module to convert a coin cell powered garage remote into a rechargeable device.',
    status: 'Completed',
    srcType: 'image',
    src: 'comando-rita/images/PXL_20240818_233012353.jpg',
    routeName: 'comando-rita'
  },
  {
    name: 'Battery Charger',
    date: '2024-09-11',
    keywords: ['Hardware', 'PCB Design', 'Power Management'],
    description: 'A compact Li-ion charging module designed as a reusable power block for battery powered projects, with integrated charging, protection, and safe USB bypass.',
    status: 'Completed',
    srcType: 'image',
    src: 'bat-charger/images/cover.jpg',
    routeName: 'bat-charger'
  },
  {
    name: 'Dumbledoor',
    date: '2024-09-12',
    keywords: ['Hardware', 'Software', 'Reverse Engineering', 'Intercom', 'Smart Home'],
    description: "A not-too-invasive hardware hack that adds smart capabilities, like keyless entry, to a traditional apartment intercom system.",
    status: 'Ongoing',
    srcType: 'video',
    src: 'dumb-le-door/videos/PXL_20250902_143514640.mp4',
    routeName: 'dumb-le-door'
  },
  {
    name: 'Better Courts',
    date: '2022-04-30',
    keywords: ['Software', 'Web App', 'API Integration', 'Reverse Engineering', 'Sports'],
    description: 'A faster, simplified alternative interface for booking football and padel courts, built on top of the AirCourts API.',
    status: 'Deprecated',
    srcType: 'image',
    src: 'better-courts/images/cover.jpg',
    routeName: 'better-courts'
  },
  {
    name: 'What The Fuzz!',
    date: '2015-12-22',
    keywords: ['Hardware', 'Audio', 'Guitar Effects'],
    description: 'A handmade fuzz/distortion guitar pedal built from scratch on a custom PCB, featuring switchable diode clipping options for a wide range of tones.',
    status: 'Completed',
    srcType: 'image',
    src: 'wtf/images/cover.jpg',
    routeName: 'wtf'
  },
  {
    name: 'Mondays',
    date: '2020-03-12',
    keywords: ['Software', 'Web App', 'Data Tracking', 'Sports'],
    description: 'An app to record and analyze stats for our weekly soccer games, including goals, assists, wins, and personalized user results.',
    status: 'Completed',
    src: 'mondays/videos/cover.mp4',
    srcType: 'video',
    routeName: 'mondays'
  },
  {
    name: 'Things',
    date: '2024-03-20',
    keywords: ['Software', 'Web App', 'Inventory Management', 'Organization'],
    description: 'A web app to create a personal digital inventory of items/parts in storage boxes, drawers, and cabinets, making it easy to find where things are.',
    status: 'Ongoing',
    srcType: 'video',
    src: 'things/videos/cover.mp4',
    routeName: 'things'
  }
];

export function getProjectByRouteName(routeName: string): Project | undefined {
  return projectData.find(project => project.routeName === routeName);
}