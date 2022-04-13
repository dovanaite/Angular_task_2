import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})
export class TaskNewComponent implements OnInit {

  constructor(private tasksService:TasksService,private router:Router) { }

  ngOnInit(): void {
  }

  public addNewTask(taskName:HTMLInputElement, taskType:HTMLSelectElement){
    if (taskName.value!=''){
    this.tasksService.add(taskName.value,taskType.value)
      taskName.value='';
      taskType.value='';
      this.router.navigate(['/']);
    }
  }

}
