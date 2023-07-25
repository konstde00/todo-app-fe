import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Task} from '../Task';
import {ActivatedRoute} from '@angular/router';
import {TaskService} from '../task.service';
import {Subscription} from 'rxjs/Subscription';
import {NgFor} from '@angular/common';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
// import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

  tasks: Task[];
  activatedRoute: ActivatedRoute;
  taskService: TaskService;
  loadedStatus = 'NOT_STARTED';
  subscription: Subscription;

  constructor(activatedRoute: ActivatedRoute, taskService: TaskService) {
    this.activatedRoute = activatedRoute;
    this.taskService = taskService;
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe(
      (params) => {
        this.tasks = this.taskService.getTasks(params.status);
        this.loadedStatus = params.status;
      }
    );

    this.subscription = this.taskService.tasksChanged.subscribe(
      () => {
        this.tasks = this.taskService.getTasks(this.loadedStatus);
      }
    )
  }

  drop(event: CdkDragDrop<Task[]>) {
    moveItemInArray(this.taskService.tasks, event.previousIndex, event.currentIndex);
    this.taskService.tasksChanged.next();
  }

  ngOnDestroy(): void {

    this.subscription.unsubscribe();
  }
}
