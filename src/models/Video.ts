import { category } from "./Category";

export interface Video {
  title: string;
  description: string;
  poster: File | null | string;
  link: File | null | string;
  author?: string;
  category: string;
  isAvailable: boolean;
  created_at?: Date;
  updated_at?: Date;
}

