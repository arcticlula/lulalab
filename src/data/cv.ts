export type CVType = 'Education' | 'Experience' | 'Other';

export interface CVEntryData {
  title: string;
  time: string;
  subtitle: string;
  description: string;
  details?: string[];
  type: CVType;
}

export const cvData: CVEntryData[] = [
  {
    title: 'Full-Stack Developer',
    time: 'August 2020 - October 2025',
    subtitle: 'Fujifilm',
    description: 'Web development - <i>full-stack</i> - across internal tools and client-facing products in the medical field.',
    details: [
      'Internal management app for overseeing and maintaining photo kiosks.',
      'Design framework to standardize and speed up development across multiple Fujifilm projects.',
      '<i>SYNAPSE Clinical Workflow Manager (CWM 5)</i> - involved from the inception of the latest version, contributing extensively to its development and feature implementation using a <i>microservices</i> architecture on both frontend and backend.'
    ],
    type: 'Experience'
  },
  {
    title: 'Software Engineer',
    time: 'November 2017 - July 2020',
    subtitle: 'Dotlogic - IT Solutions',
    description: 'Architecture and development of web applications in the medical field, mostly <i>cardiology</i>. Responsible for frontend, backend and database design, with some <i>hardware</i> work along the way.',
    details: [
      'Web apps for medical staff to report and manage patient exam data, tailored for cardiology and gastroenterology departments.',
      'Signal viewer for analyzing long-duration heart monitor waveforms (e.g. 24-hour Holter data), including integration with the acquisition hardware.',
      'Mobile web app that talks to a blood pressure monitor over <i>Bluetooth</i>, enabling real-time data capture, patient monitoring and automatic reporting back to the hospital system.'
    ],
    type: 'Experience'
  },
  {
    title: 'Make Or Break',
    time: 'September 8-12, 2017',
    subtitle: '48 Hour Hackathon',
    description: 'Part of the winning team of the 2017 edition of <i>Make Or Break</i> in the <i>funny</i> category. Built a web app to rate public restrooms in two days - plus a remote controlled toilet paper dispenser to go with it.',
    type: 'Other'
  },
  {
    title: 'Volunteer Tutor',
    time: 'September 2016 - 2019',
    subtitle: "Já T'Explico",
    description: 'Tutoring support for children and teenagers from 5th to 9th grade in the Porto district.',
    type: 'Other'
  },
  {
    title: 'ISEP - Porto School of Engineering',
    time: '2015 - 2018',
    subtitle: "Master's in Electrical and Computer Engineering",
    description: 'Thesis: development of a <i>LED wall that responds to violin notes</i>, displaying dynamic patterns. Tested live in two small concerts.',
    type: 'Education'
  },
  {
    title: 'ISEP - Porto School of Engineering',
    time: 'September 2012 - August 2015',
    subtitle: "Bachelor's in Electrical Engineering",
    description: "Thesis: <i>PID control of a drone's camera gimbal system</i>.",
    type: 'Education'
  },
  {
    title: 'Advanced Electronics Course - 175 Hours',
    time: 'July 2013 - December 2013',
    subtitle: 'ATEC',
    description: 'Training in advanced electronic systems.<br/>Edf. Siemens, Av. Mário Brito (EN 107) 3570 - Freixieiro 4455-491 Perafita',
    type: 'Education'
  }
];
