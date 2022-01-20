import { Component } from '@angular/core';

@Component({
  selector: 'app-randomuserinfo-component',
  templateUrl: './randomuserinfo.component.html'
})
export class RandomUserInfoComponent {
  public personName = 'Random';

  public nameChanger() {
    this.personName = 'Test if works';
  }

  public getRandomUserInfo() {
    
  }
}
