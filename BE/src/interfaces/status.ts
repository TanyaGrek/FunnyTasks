export interface IStatus {
  state: StatusState;
  updated: string;
}

enum StatusState {
  Pending = 0,
  Success,
  Failure
}
