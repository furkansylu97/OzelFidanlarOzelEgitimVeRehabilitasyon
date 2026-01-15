export interface Blog {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  publishedAt: string;
  coverUrl?: string;
}
