export interface Post {
  id?: string;
  title: string;
  content: string;
  views?: number;
  updatedAt?: string;
  createdAt?: string;
}
export interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  date: string;
}
