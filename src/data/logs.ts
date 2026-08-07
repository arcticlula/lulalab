// import { ref } from "vue";

export interface Log {
  name: string;
  date: string;
  keywords: string[];
  description: string;
  src: string;
  srcType: 'image' | 'video';
  routeName: string;
  componentName: string;
}

export const logData: Log[] = [
  {
    name: 'Walkman Battery Replacement',
    date: '2025-12-17',
    keywords: ['Hardware', 'Software', 'Web App', 'BLE', 'Upcycling', 'Lighting', '3D Modeling'],
    description: 'A diffused ambient light built from repurposed materials, controlled directly from any modern web browser using the Web Bluetooth API.',
    src: 'mood-light/videos/PXL_20250911_232403363.mp4',
    srcType: 'video',
    routeName: 'walkman-battery-replacement',
    componentName: 'Walkman',
  },
  {
    name: 'Lorem Ipsum I',
    date: '2025-05-01',
    keywords: ['Test', 'Design'],
    description: 'First test log with lorem ipsum content.',
    src: '',
    srcType: 'image',
    routeName: 'lorem-ipsum-1',
    componentName: 'Lorem1',
  },
  {
    name: 'Lorem Ipsum II',
    date: '2025-04-15',
    keywords: ['Draft', 'Concept'],
    description: 'Second test log with different lorem ipsum content.',
    src: '',
    srcType: 'image',
    routeName: 'lorem-ipsum-2',
    componentName: 'Lorem2',
  }
];

export function getLogByRouteName(routeName: string): Log | undefined {
  return logData.find(log => log.routeName === routeName);
}