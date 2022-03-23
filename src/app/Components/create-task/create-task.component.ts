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
  // @Input() showMe: boolean;

  constructor() { 
  }
  ngOnInit(): void {
  }
  addTask(){
    this.task = {
      Title: this.title,
      Description: this.desc,
      Status: "New",
      CreationDate: new Date(),
      CompletionDate: new Date(null),
      Priority: this.priority
    }
    
    this.onAddTask.emit(this.task);
    // this.showMe = false;
    // console.log(this.showMe);  
  }

}
