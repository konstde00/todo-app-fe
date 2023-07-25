import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../Task';
import {TaskService} from '../task.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  mouseOn = false;

  @Input() task: Task;

  taskService: TaskService;

  constructor(taskService: TaskService) {
    this.taskService = taskService;
  }

  ngOnInit() {
  }

  onMouseEnter() {
    this.mouseOn = true;
  }

  onMouseLeave() {
    this.mouseOn = false;
  }

  onAssign(status: string) {
    this.taskService.onStatusChosen(this.task, status);
  }
}
