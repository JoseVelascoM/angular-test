import { Component, OnInit } from '@angular/core';
import { Article } from '../../shared/model/article'
import { ArticleService } from '../../shared/services/article.service';

@Component({
  selector: 'at-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  articles: Array<Article>;

  constructor(private service: ArticleService) { }

  ngOnInit() {
    this.service.getStories().subscribe( (response) => {
      console.log(response);
      this.articles = response;
    })
  }

}
