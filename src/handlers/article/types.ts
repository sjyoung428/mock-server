export interface Article {
  id: number;
  title: string;
  description: string;
  body: string;
  date: Date;
  image: string;
  userId: number;
}

export type ArticleResponse = Article | null;
