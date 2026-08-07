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
  /** same model with no components on it - enables the "Bare board" toggle */
  bareSrc?: string;
  colorHex?: string;
  opacity?: number;
  explodeOffset?: { x: number; y: number; z: number };
  explodeRotation?: { x: number; y: number; z: number };
  rotationPivot?: { x: number; y: number; z: number };
}

export interface ICascadeCategory {
  label: string;
  key: string;
  children?: Array<ICascadeCategory | IModel>;
  isGroup?: boolean;
  src?: string;
  bareSrc?: string;
  mtl?: string;
  colorHex?: string;
  opacity?: number;
  explodeOffset?: { x: number; y: number; z: number };
  explodeRotation?: { x: number; y: number; z: number };
  rotationPivot?: { x: number; y: number; z: number };
}