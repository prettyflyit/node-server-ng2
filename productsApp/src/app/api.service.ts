import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ApiService {

  constructor(private http : Http) {
  }

  get(url: string) {
    return this.http.get(url)
      .toPromise()
      .then((response) => response.json())
      .catch(this.handleError);
  }

  delete(url: string) {
    return this.http.delete(url)
      .toPromise()
      .then((response) => response.json())
      .catch(this.handleError);
  }

  post(url: string, data: any) {
    return this.http.post(url, data)
      .toPromise()
      .then((response) => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
