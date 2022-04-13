import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/tasks/task-item/task-item.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TaskNewComponent } from './components/tasks/task-new/task-new.component';
import { RouterModule, Routes } from '@angular/router';

const tasksRoutes:Routes=[
  {path:"",component:TasksComponent},
  {path:"new", component:TaskNewComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskItemComponent,
    NavigationComponent,
    TaskNewComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(tasksRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
