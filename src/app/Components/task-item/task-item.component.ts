import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from "../../Task";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task : Task;
  @Input() index : Number;

  @Output() taskTobeDeleted = new EventEmitter<Number>();
  @Output() taskTobeEdited = new EventEmitter<Task>();

  constructor() {
  }
  ngOnInit(): void {
  }

  deleteTask(idx){
    this.taskTobeDeleted.emit(idx);
    console.log("dlt");
    // This also works:-
    // this.taskTobeDeleted.emit("abcd");
    // i.e anything inside curly braces does not have any effect
  }

  editTask(idx){
    this.taskTobeEdited.emit(this.task);
    this.deleteTask(idx);
  }

  // makes border none for empty task used in progress and completed task
  getBorderColor(){
    if (this.task.Priority === "") {
      return 'none';
    }
  }

  // function to color code the task acc to priority
  getpriorityTaskColor(){
    if (this.task.Priority === 'High') {
      return 'red';
    }
    else if (this.task.Priority === 'Low') {
      return 'green';
    }
    else if (this.task.Priority === 'Medium') {
      return 'yellow'
    }
    else{
      return 'none'
    }
  }
}
