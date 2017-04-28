import { Injectable } from '@angular/core';
import { Configuration } from '../configuration';
import { AuthorizationResponse } from '../model/AuthorizationResponse';

@Injectable()
export class ConfigService {

  constructor(private configuration: Configuration) {
    if (localStorage.getItem('authorization')) {
      let auth = JSON.parse(localStorage.getItem('authorization'));
      configuration.apiKey = 'bearer ' + (auth ? auth['token'] : '')
    }

  }

  setAuthorization(authorizationObject: AuthorizationResponse): void {
    localStorage.setItem('authorization', JSON.stringify(authorizationObject));
    this.configuration.apiKey = 'bearer ' + authorizationObject.token;
  }

  getAuthorization(): AuthorizationResponse {
    if (localStorage.getItem('authorization')) {
      return JSON.parse(localStorage.getItem('authorization'));
    } else {
      return;
    }
  }

  setBasePath(basePath: string): void {
    this.configuration.basePath = basePath;
  }

  setDefaultBasePath(): void {
    this.configuration.basePath = 'https://selfbits.apps.selfbits.io/api/v2/selfbits/apps/scp';
  }

  getBearerToken(): string {
    if (localStorage.getItem('authorization')) {
      let authorization = JSON.parse(localStorage.getItem('authorization'));
      return 'bearer ' + authorization.token;
    } else {
      return;
    }
  }

  getUserId(): string {
    if (localStorage.getItem('authorization')) {
      return JSON.parse(localStorage.getItem('authorization')).userId;
    } else {
      return;
    }
  }

  getOrganizationId(): string {
    if (localStorage.getItem('authorization')) {
      return JSON.parse(localStorage.getItem('authorization')).organizationId;
    } else {
      return;
    }
  }

   getExpires(): string {
    if (localStorage.getItem('authorization')) {
      return JSON.parse(localStorage.getItem('authorization')).expires;
    } else {
      return;
    }
  }

}
