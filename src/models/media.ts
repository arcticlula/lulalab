export interface IMedia {
  type: 'image' | 'video';
  src: string;
  description?: string;
  linkTo?: string;
  linkLabel?: string;
}

export interface IModel {
  label: string;
  key: string;
  src: string;
  colorHex?: string;
  opacity?: number;
  explodeOffset?: { x: number; y: number; z: number };
}

export interface ICascadeCategory {
  label: string;
  key: string;
  children?: Array<ICascadeCategory | IModel>;
  isGroup?: boolean;
  src?: string;
  mtl?: string;
  colorHex?: string;
  opacity?: number;
  explodeOffset?: { x: number; y: number; z: number };
}