import { IStatus } from './status';

export interface IArchiveItem {
  id: number;
  description: string;
  status: IStatus;
}
