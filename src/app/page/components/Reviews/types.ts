export interface ReviewCardData {
  category: string;
  date: string;
  body: string;
  authorName: string;
  authorInitial: string;
  /** e.g. `Denver, CO • Verified Google Review` */
  locationLine: string;
}
