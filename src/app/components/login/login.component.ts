import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from "../../../config/auth.config";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnChanges, OnDestroy {

  constructor(private oauthService: OAuthService) { }
  show = false
  cardArray = []
  openedBox = 1
  // component lifecycle hooks or method
  ngOnChanges() {
    console.log("i am in ng changes");
  }

  ngOnInit(): void {
    console.log("i am in ng init");
    this.initOAuth()
    // getAllNoteApi
    this.cardArray = [{
      title: 'test', description: 'new'
    }
      ,
    {
      title: 'test2', description: 'new'
    },
    {
      title: 'test3', description: 'new'
    }
    ]


    console.log(this.oauthService.getAccessToken());
    
  }
  login() {
    console.log(' login button is clicked');
  }
  openBox(box) {
    this.openedBox = box
  }

  initOAuth() {
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  loginOpenId() {
    console.log("login");
    // this.oauthService.setupAutomaticSilentRefresh()
    this.oauthService.initLoginFlow();
  }
  logout() {
    console.log("logout");
    
    this.oauthService.logOut()
  }



  ngOnDestroy() {
    console.log('i am in destroy');

  }

}
