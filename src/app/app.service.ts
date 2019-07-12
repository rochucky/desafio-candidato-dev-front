import { Component, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";


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
  	// return response;
  }

  handle(error){
  	
		if (error instanceof HttpErrorResponse) {
		  if (error.error instanceof ErrorEvent) {
		    console.error("Error Event");
		  } 
		  else {
		    console.log(`error status : ${error.status} ${error.statusText}`);
		    switch (error.status){
		    	case 404:
		    		return { error: 404, message: 'Houve um problema na requisição, por favor tente novamente mais tarde' }
		    }
	    } 
		} 
		else {
		  console.error("Este erro não ocorreu na requisição HTTP");
  	}
  }

}
