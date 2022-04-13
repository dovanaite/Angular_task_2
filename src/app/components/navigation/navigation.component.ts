import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public taskCount:number=0;
  public index:number=0;
  public taskType:string='';
  public skubuTaskCount:number=0;
  public neskubuTaskCount:number=0;
  public labaiSkubuTaskCount:number=0;
  public rutinineTaskCount:number=0;


constructor(private taskService:TasksService,){
  this.taskCount=this.taskService.getTaskCount();
  this.skubuTaskCount=this.taskService.getSkubuTaskCount();
  this.neskubuTaskCount=this.taskService.getNeskubuTaskCount();
  this.labaiSkubuTaskCount=this.taskService.getlabaiSkubuTaskCount();
  this.rutinineTaskCount=this.taskService.getRutininiuTaskCount();

  this.taskService.onTasksChange.subscribe(()=>{
    this.taskCount=this.taskService.getTaskCount();
    this.skubuTaskCount=this.taskService.getSkubuTaskCount();
    this.neskubuTaskCount=this.taskService.getNeskubuTaskCount();
    this.labaiSkubuTaskCount=this.taskService.getlabaiSkubuTaskCount();
    this.rutinineTaskCount=this.taskService.getRutininiuTaskCount();
  });



}  

  ngOnInit(): void {
    

  }

}
