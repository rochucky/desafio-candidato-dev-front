import { Component, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable()
export class HttpService {

	public url: string;

	constructor(private http: HttpClient){
	}

	setUrl(_url){
		this.url = _url;
	}
	getUrl(){
		console.log(this.url);
	}

  get(){
  	console.log("Launching to: " + this.url);
  	return this.http.get<any[]>(this.url);
  }

}
