import { Component, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { Task } from "../../Task";

@Component({
  selector: 'app-task-container',
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.css']
})
export class TaskContainerComponent implements OnInit {
  // @Input() taskData : Task;
  @Input() tasks: Task[];

  // tasks: Task[];
  constructor() {
    // this.tasks.push(this.taskData);
    // this.tasks = [
    //   {
    //     Title: "Drink Water",
    //     Description: "2 glass of water",
    //     Status: "New",
    //     CreationDate: new Date("2022-02-20"),
    //     CompletionDate: new Date("2022-02-21"),
    //     Priority: "High"
    //   },
    //   {
    //     Title: "Eat food",
    //     Description: "Green vegetables",
    //     Status: "New",
    //     CreationDate: new Date("2022-02-20"),
    //     CompletionDate: new Date("2022-02-21"),
    //     Priority: "Low"
    //   }
    // ]
  }
  ngOnInit(): void {
  }
  // submit(){
  //   console.log(this.taskData);
  // }
  // this.addTask(
  //   console.log(this.taskData);
  //   this.tasks.push(this.taskData);
  // );
  // this.addTask(){
  //   console.log(this.taskData);
  //   this.tasks.push(this.taskData);
  // }
  // ngOnChanges(changes: SimpleChanges){
  //   for(let property in changes){
  //     if(property === 'taskData'){
  //       this.tasks.push(this.taskData);
  //     }
  //   }
  // }
}
