export type CVType = 'Education' | 'Experience' | 'Other';

export interface CVEntryData {
  title: string;
  time: string;
  subtitle: string;
  description: string;
  type: CVType;
}

export const cvData: CVEntryData[] = [
  {
    title: 'Web Developer',
    time: 'August 2020 - October 2025',
    subtitle: 'Fujifilm',
    description: 'Web development - <i>full-stack</i> - in the medical field.',
    type: 'Experience'
  },
  {
    title: 'Web Developer',
    time: 'November 2017 - July 2020',
    subtitle: 'Dotlogic - IT Solutions',
    description: 'Web development - <i>frontend</i> - in the medical field (cardiology), and some <i>hardware</i> projects.',
    type: 'Experience'
  },
  {
    title: 'Make Or Break',
    time: 'September 8-12, 2017',
    subtitle: '48 Hour Hackathon',
    description: 'Part of the winning team of the 2017 edition of <i>Make Or Break</i> in the <i>funny</i> category.',
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
    time: 'September 2012 - August 2015',
    subtitle: 'Bachelor in Electrical Engineering',
    description: 'Rua Dr. António Benardino de Almeida, 431 - 4249-015 Porto',
    type: 'Education'
  },
  {
    title: 'Advanced Electronics Course - 175 Hours',
    time: 'July 2013 - December 2013',
    subtitle: 'ATEC',
    description: 'Edf. Siemens, Av. Mário Brito (EN 107) 3570 - Freixieiro 4455-491 Perafita',
    type: 'Education'
  }
];
