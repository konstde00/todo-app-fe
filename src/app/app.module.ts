import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import {TaskService} from './task.service';
import { CreateTaskComponent } from './create-task/create-task.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import {RouterModule, Routes} from '@angular/router';
import {CdkDrag, CdkDragHandle, CdkDragPlaceholder, CdkDropList} from '@angular/cdk/drag-drop';

const routes: Routes = [
  {path: 'tasks', component: TabsComponent, children: [
      {path: '', redirectTo: 'not_started', pathMatch: 'full'},
      {path: ':status', component: ListComponent}
    ]},
  {path: 'new-task', component: CreateTaskComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ListComponent,
    ItemComponent,
    CreateTaskComponent,
    HeaderComponent
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule.forRoot(routes),
        CdkDrag,
        CdkDropList,
        CdkDragHandle,
        CdkDragPlaceholder
    ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
