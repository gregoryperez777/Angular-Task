import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class LoginService {

constructor(private http: HttpClient) { }
	postLogin(email: string, password: string): Observable<any>{
		const json = JSON.stringify({
			email,
			password
		});

		const headers = new HttpHeaders().set('Content-Type','application/json');
		return this.http.post('http://localhost:8000/graphql/login', json, {headers: headers});
	}
}
