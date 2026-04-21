export interface IUser {
  _id: string;
  name: string;
  email?: string;
  avatar?: string;
}

export interface IReview {
  _id: string;
  review: string;
  rating: number;
  product: string | { _id: string; title?: string };
  user: IUser;
  createdAt: string;
  updatedAt: string;
}

export interface IReviewsMetadata {
  currentPage: number;
  limit: number;
  numberOfPages: number;
}

export interface IReviewsResponse {
  data: IReview[];
  metadata: IReviewsMetadata;
  results: number;
}