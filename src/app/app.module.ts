import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { TaskContainerComponent } from './Components/task-container/task-container.component';
import { TaskItemComponent } from './Components/task-item/task-item.component';
import { TaskListComponent } from './Components/task-list/task-list.component';
import { CreateTaskComponent } from './Components/create-task/create-task.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TaskContainerComponent,
    TaskItemComponent,
    TaskListComponent,
    CreateTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
