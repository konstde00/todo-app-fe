import {Status} from './Status';

export class Task {

  name: string;
  status: Status;

  constructor(name: string, status: Status) {
    this.name = name;
    this.status = status;
  }
}
