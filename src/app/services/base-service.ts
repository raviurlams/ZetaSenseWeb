import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export class BaseService {
  baseUrl: string = 'http://localhost:4200/api';
  constructor() { }

  authToken() {
    const headers = new Headers({ 'Authorization': localStorage.getItem('token') });
    return new RequestOptions({ headers: headers });
  }

  handleError(error) {
    return Observable.throw(error.json().error || 'Server error');
  }

}
