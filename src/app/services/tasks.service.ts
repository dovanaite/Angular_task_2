import { EventEmitter, Injectable } from '@angular/core';
import { Task } from '../module/TaskModule';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  public tasks:Task[]=[];
  public onTasksChange = new EventEmitter();

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
      this.onTasksChange.emit();
  }

  public delete(index:number){
    this.tasks.splice(index,1);
    this.save();
    this.onTasksChange.emit();
  }

  public get(index:number){
    return this.tasks[index];
  }

  public update(index:number, taskName:string, taskType:string){
    this.tasks[index].taskName=taskName;
    this.tasks[index].taskType=taskType;
    this.save();
  }

  public getTaskCount(){
      
      return this.tasks.length;
    }

  public getSkubuTaskCount(){
      let count=0;
      this.tasks.forEach(task=>{
        if(task.taskType=="skubu") count++
      })
      return count;
  }
  public getNeskubuTaskCount(){
      let count=0;
      this.tasks.forEach(task=>{
        if(task.taskType=="neskubu") count++
      })
      return count;
  }
  public getlabaiSkubuTaskCount(){
      let count=0;
      this.tasks.forEach(task=>{
        if(task.taskType=="labai skubu") count++
      })
      return count;
  }
  public getRutininiuTaskCount(){
      let count=0;
      this.tasks.forEach(task=>{
        if(task.taskType=="rutininis") count++
      })
      return count;
  }




}
