export interface NewsList {
  title: string;
  content: string;
  published?: Date;
  urlToImage: string;
  description: string;
  showOnHomepage: string;
  isLiked: boolean;
}

export interface APIResponse<T> {
  News: Array<T>;
}
