import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {
  public commonUrl = 'https://jsonplaceholder.typicode.com/'
  
  public userObjApi() {
    let env = this.commonUrl;
    const APIObject={
      USER_LIST : env + "users",
      USER_POSTS : env + "posts",
    }
    return APIObject;
  }
  private restApi = this.userObjApi();
  constructor(
    private http: HttpClient,
  ) { }
 

  getUser(): Observable<any> {
    return this.http.get<any>(this.restApi.USER_LIST, { observe: 'response' });
  }

  getBlogs(): Observable<any> {
    return this.http.get<any>(this.restApi.USER_POSTS, { observe: 'response' });
  }

//   public getUsers(): Observable<any> {
//     const url = 'https://jsonplaceholder.typicode.com/todos/';
//     return this.http.get<any>(url);
// }

}
