import { Category } from "./Category";

export interface Video {
  _id?: string;
  title: string;
  description: string;
  poster: File | Blob | null | string;
  link: File | Blob | null | string;
  author?: string;
  category: string;
  isAvailable: boolean;
  created_at?: Date;
  updated_at?: Date;
}
