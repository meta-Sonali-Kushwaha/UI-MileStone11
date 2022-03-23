import { Component, OnInit, Input } from '@angular/core';
import { Task } from "../../Task";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task : Task;
  // @Input() taskData : Task;
  constructor() { 
    // console.log("task-item");
    // console.log(this.taskData);
  }

  ngOnInit(): void {
  }
  getpriorityTaskColor(){
    if (this.task.Priority === 'High') {
      return 'red';
    }
    else if (this.task.Priority === 'Low') {
      return 'green';
    }
    else{
      return 'yellow'
    }
  }
}
