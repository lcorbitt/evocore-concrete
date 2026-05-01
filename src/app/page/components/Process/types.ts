export type ProcessCardIconId = "phone" | "calendar" | "check-circle";

export interface ProcessCardData {
  icon: ProcessCardIconId;
  title: string;
  description: string;
  timeLabel: string;
  timeCaption: string;
}
