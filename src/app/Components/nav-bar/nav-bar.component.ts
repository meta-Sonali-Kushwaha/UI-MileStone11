import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Output() onCreateTask = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  createTask(){
    this.onCreateTask.emit(true);
  }

}
