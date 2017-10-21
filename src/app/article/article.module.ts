import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { HomePageComponent } from './home-page/home-page.component';
import { ArticleItemComponent } from './article-item/article-item.component';
import { ArticleService } from '../shared/services/article.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule
  ],
  declarations: [HomePageComponent, ArticleItemComponent],
  providers: [ArticleService]
})
export class ArticleModule { }
