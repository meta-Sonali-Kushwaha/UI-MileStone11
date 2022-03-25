import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  title: string;
  desc: string;
  priority: string;
  task: Task;

  @Output() onAddTask = new EventEmitter<Task>();
  @Input() taskTobeEdited: Task;

  constructor() { 
  }
  ngOnInit(): void {
    // console.log(this.taskTobeEdited);
    this.title = this.taskTobeEdited.Title;
    this.desc = this.taskTobeEdited.Description;
    this.priority = this.taskTobeEdited.Priority
  }
  addTask(){
    if(this.title == undefined || this.desc == undefined || this.priority == undefined){
      return false;
    }

    this.task = {
      Title: this.title,
      Description: this.desc,
      Status: "New",
      CreationDate: new Date(),
      CompletionDate: new Date(null),
      Priority: this.priority
    }
    this.onAddTask.emit(this.task);
  }

  
}
