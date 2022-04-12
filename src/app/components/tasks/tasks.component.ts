import { Component, OnInit } from '@angular/core';
import {Task} from 'src/app/module/TaskModule'
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  public tasks:Task[]=[];

  constructor(private tasksService:TasksService) { 
    tasksService.load();
    this.tasks = tasksService.tasks;

  }
  
  ngOnInit(): void {
  }


  public addNewTask(taskName:HTMLInputElement, taskType:HTMLSelectElement){
    if (taskName.value!=''){
    this.tasksService.add(taskName.value,taskType.value)
      taskName.value='';
      taskType.value='';
    }
  }



}
