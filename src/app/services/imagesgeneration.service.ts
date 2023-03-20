import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import * as dotenv from 'dotenv';


@Injectable({
  providedIn: 'root'
})
export class ImagesgenerationService {
  apiUrl = 'https://api.openai.com/v1/images/generations';

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + process.env['NG_APP_KEY'],
    })
  }

  constructor(private http: HttpClient) { }

  generateImage(prompt: string): Observable<any> {
    const payload = {
      "model": "image-alpha-001",
      "prompt": prompt,
      "num_images": 1,
      "size": "256x256",
      "response_format": "url"
    };
    return this.http.post<any>(this.apiUrl, JSON.stringify(payload), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  handleError(error: any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
