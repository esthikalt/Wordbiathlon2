import { SelectorMatcher } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { json } from 'express';

@Injectable({
  providedIn: 'root'
})
export class WikiService {
  constructor(private http:HttpClient) { }


  getRandomTitle(){
    return this.http.get('https://en.wikipedia.org/w/api.php', {
      params: {
        action:'query',
        format:'json',
        list:'random',
        rnlimit:'5',
        rnnamespace:'0',
        origin:'*'
      }});
  }

  getContentFromPage(articleTitle:string){
    return this.http.get('https://en.wikipedia.org/w/api.php', {
      params: {
        action:'query',
        prop:'extracts',
        exsentences:'1',
        exlimit:'1',
        titles: articleTitle,
        explaintext:'1',
        formatversion:'2',
        utf8:'*',
        format:'json',
        origin:'*'
      }});
    }
}
