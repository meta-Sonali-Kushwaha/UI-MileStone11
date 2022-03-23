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

  tasks: Task[] = [];
  taskData: Task;
  // temp: Task;
  taskAdd(event){
    this.taskData = event;
    console.log(typeof(this.tasks));
    // console.log(typeof(this.taskData));
    // console.log(typeof(this.temp));
    this.tasks.push(this.taskData);
    // console.log(this.tasks);
  }
}
