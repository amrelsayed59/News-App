export interface NewsList {
  title: string;
  content: string;
  published?: Date;
  urlToImage: string;
  description: string;
  showOnHomepage: string;
}

export interface APIResponse<T> {
  News: Array<T>;
}
