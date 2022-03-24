import { Component } from '@angular/core';
import { Task } from "./Task";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TaskManagement';
  showMe = false;
  toggleCreateTask(event){
    this.showMe = !this.showMe;
  };

  Newtasks: Task[] = [];
  taskData: Task;

  taskAdd(event){
    this.taskData = event;
    this.Newtasks.push(this.taskData);
  }

  taskTobeEdited: Task;
  EditTask(event){
    this.showMe = true
    this.taskTobeEdited = event;
  }
}
