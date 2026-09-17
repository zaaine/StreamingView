import { category } from "./Category";

export interface video {
  title: string;
  description: string;
  poster: string;
  link: string;
  author: string;
  categories: Array<category>;
  isAvailable: boolean;
  created_at: Date;
  updated_at: Date;
}
