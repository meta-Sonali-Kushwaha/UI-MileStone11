import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from "../../Task";

@Component({
  selector: 'app-task-container',
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.css']
})
export class TaskContainerComponent implements OnInit {
  @Output() EditTask = new EventEmitter<Task>();
  @Input() tasks: Task[];

  inProgress: Task[];
  completedTask: Task[];

  // tasks: Task[];
  constructor() {
    // this.inProgress = this.tasks;
    // this.inProgress.push();
    this.inProgress = [
      {
        Title: "ttitle",
        Description: "",
        Status: "New",
        CreationDate: new Date(null),
        CompletionDate: new Date(null),
        Priority: "High"
      }
    ];
    this.completedTask = [
      {
        Title: "",
        Description: "",
        Status: "New",
        CreationDate: new Date(null),
        CompletionDate: new Date(null),
        Priority: ""
      }
    ]
  }
  ngOnInit(): void {
  }

  taskTobeEdited(event){
    // console.log(event);
    this.EditTask.emit(event);
  }
  
  // function used in drag and drop
  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
