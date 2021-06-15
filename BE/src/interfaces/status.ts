export interface IStatus {
  state: StatusState;
  updated: string;
}

export enum StatusState {
  Pending = 0,
  Success,
  Failure
}
