export interface SearchResult {
  price: number;
  discount: number;
  start: string;
  end: string;
  categories: {
    hiking: number,
    playing: number,
    sightseeing: number,
    eating: number,
    going_out: number
  }
  // vehicles: string[]
}