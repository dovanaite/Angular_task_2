import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {

public index:number=0;
public taskName:string='';
public taskType:string='';

  constructor(private taskService:TasksService, private route:ActivatedRoute, private router:Router) {  } 
        //išsaugo objekte task'ų informacija     //visa info apie esamą route  //nuveda mane į puslapį (29 eilutėj)

  ngOnInit(): void {
   this.index = this.route.snapshot.params['index'] //dabartinio kelio informacija, iš parametrų paims indexą
   const task = this.taskService.get(this.index)
   console.log('INDEX',this.index)
    this.taskName=task.taskName;
    this.taskType=task.taskType;
  }

  public update(){
    this.taskService.update(this.index,this.taskName,this.taskType);
    this.router.navigate(["/"])
    this.taskService.onTasksChange.emit();
  }

}
