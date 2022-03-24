import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from "../../Task";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  @Input() tasks : Task[];
  @Input() heading : string;

  @Output() taskTobeEdited = new EventEmitter<Task>();

  task: Task;
  constructor() { 
  }
  ngOnInit(): void {
  }

  removeTask(idx){
    this.tasks.splice(idx,1);
  }
  editTask(idx){
    this.task = this.tasks[idx];
    this.taskTobeEdited.emit(this.task);
    // console.log(this.taskTobeEdited);
  }

}
