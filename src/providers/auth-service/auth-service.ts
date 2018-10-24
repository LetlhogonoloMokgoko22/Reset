import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import firebase from 'firebase'
/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {
  public fireAuth: any;
  public userData: any;
  constructor(public http: HttpClient) {
    this.fireAuth = firebase.auth();
  this.userData = firebase.database().ref('/userData')

}}
