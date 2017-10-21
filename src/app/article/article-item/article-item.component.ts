import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../shared/model/article';
import { ArticleService } from '../../shared/services/article.service';

@Component({
  selector: 'at-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})
export class ArticleItemComponent implements OnInit {

  @Input()
  article: Article = {};
  user: any = {};
  defaultPictureURL = "https://soliloquywp.com/wp-content/uploads/2016/08/How-to-Set-a-Default-Featured-Image-in-WordPress.png";

  constructor(private service: ArticleService) { }

  ngOnInit() {
    this.service.getUser(this.article['userId']).subscribe( (response) => {
      this.user = response;
    })
  }

}
