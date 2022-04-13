import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from './services/tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

constructor(private taskService:TasksService) { 
    taskService.load();
  }


  title = 'tasks';
}
