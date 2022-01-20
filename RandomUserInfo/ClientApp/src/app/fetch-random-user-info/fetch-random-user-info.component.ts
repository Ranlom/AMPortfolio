import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-fetch-random-user-info',
  templateUrl: './fetch-random-user-info.component.html'
})
export class FetchRandomUserInfoComponent {
  public randomUserInfo: RandomUserInfo;

  constructor(http: HttpClient) {
    http.get<RandomUserInfo>(environment.randomUserInfoApiUrl).subscribe(result => {
      this.randomUserInfo = result;
    }, error => console.error(error));
  }
}

interface RandomUserInfo {
  gender: string;
  name: [
    title: string,
    first: string,
    last: string
  ];
  location: [
    street: [
      number: number,
      name: string,
      city: string,
      state: string,
      country: string,
      postCode: string
    ]
  ];
  email: string;
  login: [
    uuid: string,
    username: string,
    password: string,
    md5: string,
    sha1: string,
    sha256: string,
    age: number
  ];
  phoneNumber: string;
  cellPhoneNumber: string;
  profilePicture: HTMLPictureElement;
}
