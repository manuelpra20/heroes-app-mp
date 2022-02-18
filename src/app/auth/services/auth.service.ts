import { Injectable } from '@angular/core';

import  Swal from "sweetalert2";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  private usersTable: any[];

  get auth(){
    return { ...this.usersTable }
  }

  constructor() {

    const users = this.getLocalStorage('users');
    if ( users ) {
      this.usersTable = users;
    } else {
      this.usersTable = [];
    }
  }

  getLocalStorage(key:string){
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  setLocalStorage(key: string, data: any) {
    const dataString = JSON.stringify(data);
    localStorage.setItem(key, dataString);
  }

  login(data:any) {
    const user = this.usersTable.find(u => u.email == data.email);
    return user && data.password == user.password;
    
  }

  register(data: any) {
    
    const user = this.usersTable.find(u => u.email == data.email);
    
    if ( !user  ) {
      this.usersTable.push(data);
       this.setLocalStorage('users',this.usersTable);

     return true;
    }else {
      Swal.fire('Este usuario ya existe','' ,'error')
      return false 
    }

  }
  
  logout() {
    localStorage.clear();
  }


}
