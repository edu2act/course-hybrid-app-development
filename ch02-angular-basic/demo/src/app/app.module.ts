import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { VoterComponent } from './components/voter/voter.component';
import { AComponent } from './components/a/a.component';
import { SearchComponent } from './components/search/search.component';
import { ListComponent } from './components/list/list.component';
import { GetdataService } from './services/getdata.service';
import { GoodslistComponent } from './components/goodslist/goodslist.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { HomeComponent } from './components/home/home.component';
import { NopageComponent } from './components/nopage/nopage.component';
import { GooddetailComponent } from './components/gooddetail/gooddetail.component';
import { AppRoutingModule } from './app-routing.module';
import { ColorDirective } from './directives/color.directive';
import { NumPipe } from './pipes/num.pipe';
@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    GoodslistComponent,
    VoterComponent,
    AComponent,
    SearchComponent,
    ListComponent,
    HomeComponent,
    NopageComponent,
    GooddetailComponent,
    ColorDirective,
    NumPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule
  ],
  providers: [GetdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
