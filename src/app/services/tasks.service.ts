import { Injectable } from '@angular/core';
import { Task } from '../module/TaskModule';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  public tasks:Task[]=[];

  constructor() { }

  public load(){
    let data=localStorage.getItem("tasks");
    if (data!=null){
      this.tasks=JSON.parse(data);
    }
  }

  private save(){
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  public add(taskName:string, taskType:string){
      this.tasks.push({
        taskName : taskName,
        taskType : taskType
      });
 
      this.save();
  }

  public delete(index:number){
    this.tasks.splice(index,1);
    this.save();
  }

}
