import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDividerModule} from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BlogsComponent } from './component/blogs/blogs.component';
import { HomeComponent } from './component/home/home.component';
import { UsersComponent } from './component/users/users.component';
export const routes =  [
  { path: 'home', component: HomeComponent, icon: 'dashboard', label: 'Home' },
  { path: 'user', component: UsersComponent, icon: 'dashboard', label: 'User' },
  { path: 'blogs', component: BlogsComponent, icon: 'dashboard', label: 'Blogs' }
 ]; 
@NgModule({
  declarations: [
    AppComponent,
    BlogsComponent,
    HomeComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    CommonModule,
    MatGridListModule,
    FlexLayoutModule,
    MatDividerModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    RouterModule.forRoot(routes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
