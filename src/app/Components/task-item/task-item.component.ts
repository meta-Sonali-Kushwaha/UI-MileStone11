import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from "../../Task";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task : Task;
  @Input() index : Number; //used to delete or edit the task
  @Input() heading : String; //used to remove edit button from completed task

  @Output() taskTobeDeleted = new EventEmitter<Number>();
  @Output() taskTobeEdited = new EventEmitter<Task>();

  showEdit: Boolean;
  constructor() {
  }
  ngOnInit(): void {
    this.showEdit = true;
    if(this.heading === "Completed"){
      console.log("heading cmpltd");
      this.showEdit = false;
    }
  }

  deleteTask(idx){
    this.taskTobeDeleted.emit(idx);
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
