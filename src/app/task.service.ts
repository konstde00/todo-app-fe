import {Task} from './Task';
import {Status} from './Status';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class TaskService {

  tasks = [
    new Task('Buy groceries for the week', Status.NOT_STARTED),
    new Task('Pay the utility bills ', Status.IN_PROGRESS)
  ];

  tasksChanged = new Subject<void>();

  getTasks(statusStr: string) {
    const status: Status = Status[statusStr.toUpperCase()];
    return this.tasks.filter(ch => ch.status === status);
  }

  onStatusChosen(character: Task, newStatus: string) {
      const pos = this.tasks.findIndex(ch => ch.name === character.name);
      this.tasks[pos].status = Status[newStatus];
      this.tasksChanged.next();
  }

  addTaskToList(name: string, status: string) {
    const pos = this.tasks.findIndex(ch => ch.name === name);
    if (pos !== -1) {
      return;
    }
    const newTask = new Task(name, Status[status as string]);
    this.tasks.push(newTask);
  }
}
