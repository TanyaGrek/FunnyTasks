export interface IAchievement {
  id: number;
  description: string;
  icon: string;
  checkComplete: void;
}

export type getTaskArchiveType = {
  (id: number): IAchievement[],
};
