import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Article } from '../model/article';

const API_URL = 'http://localhost:3000/';

@Injectable()
export class ArticleService {

  article: Article = {};

  constructor(private http: HttpClient) { }

  getStories(): Observable<any> {
    return this.http.get(`${API_URL}posts`);
  }

  getUser(id: string): Observable<any> {
    return this.http.get(`${API_URL}users/${id}`);
  }
}
