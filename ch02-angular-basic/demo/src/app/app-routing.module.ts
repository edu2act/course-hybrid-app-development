import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetdataService } from './services/getdata.service';
import { GoodslistComponent } from './components/goodslist/goodslist.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { HomeComponent } from './components/home/home.component';
import { NopageComponent } from './components/nopage/nopage.component';
import { GooddetailComponent } from './components/gooddetail/gooddetail.component';
const routes: Routes = [
    {path:'todolist/:id/:num',component:TodolistComponent},
    {path:'goodslist',component:GoodslistComponent,
      children:[
        {path:'gooddetail/:id',component:GooddetailComponent},
      ]
    },
    {path:'home',component:HomeComponent},
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'**',component:NopageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
