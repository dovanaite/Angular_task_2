import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Task} from 'src/app/module/TaskModule'
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() public task:Task={taskName:"",taskType:""};
  @Input() public index:number=0;



  constructor(private tasksService:TasksService) { }

  ngOnInit(): void {
  }

  public deleteTask(){
    this.tasksService.delete(this.index);
  }

}
