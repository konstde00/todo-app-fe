import {Component, OnInit} from '@angular/core';
import {Status} from '../Status';
import {TaskService} from '../task.service';
import {CdkDragDrop} from '@angular/cdk/drag-drop';
import {Task} from '../Task';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  status = Status.COMPLETED;

  taskService: TaskService;

  constructor(taskService: TaskService) {
    this.taskService = taskService;
  }

  ngOnInit() {
  }

  onTaskDrop(event: CdkDragDrop<Task[]>, status: string) {
    console.log('event: ' + JSON.stringify(event))
    this.taskService.onStatusChosen(this.taskService.tasks[event.currentIndex], status);
  }
}
