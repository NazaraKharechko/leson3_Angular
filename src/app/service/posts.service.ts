import {Injectable, Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ModolPost} from '../modolPost/modolPost';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPost(id): Observable<ModolPost[]> {
    return   this.http.get<ModolPost[]>(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
  }
}
