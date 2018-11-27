import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../services/base-service';
import { User } from './models/user';

@Injectable()
export class userManagementService extends BaseService{
    constructor(private http: HttpClient) {  super(); }

    login(user: User) {
        return this.http.post(`${this.baseUrl}/users/authenticate`, user);
    }
    
}