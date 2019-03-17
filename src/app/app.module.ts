import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AddToDoComponent } from './components/add-to-do/add-to-do.component';
import { AboutComponent } from './components/pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TodosComponent,
    TodoItemComponent,
    HeaderComponent,
    AddToDoComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [], //列出此模块中注入的服务
  bootstrap: [AppComponent] //指明哪个组件为引导性组件
})
export class AppModule { }
