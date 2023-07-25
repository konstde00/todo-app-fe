import {Component, OnInit} from '@angular/core';
import {Status} from '../Status';
import {TaskService} from '../task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  taskService: TaskService;

  availableStatuses = [
    {
      display: 'Not started',
      value: Status.NOT_STARTED
    },
    {
      display: 'In progress',
      value: Status.IN_PROGRESS
    },
    {
      display: 'Completed',
      value: Status.COMPLETED
    }
  ]

  constructor(taskService: TaskService) {
    this.taskService = taskService;
  }

  ngOnInit() {
  }

  onSubmit(submittedForm) {
    if (submittedForm.invalid) {
      return;
    }
    const c = submittedForm.value;
    console.log('in form ' + JSON.stringify(c))
    this.taskService.addTaskToList(c.name, Status[c.status]);
  }
}
