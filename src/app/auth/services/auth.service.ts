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

    // aqui guardaremos datos de usuario y asignamos a el array usersTable valores extraidos del localstorage
    const users = this.getLocalStorage('users');
    if ( users ) {
      this.usersTable = users;
    } else {
      this.usersTable = [];
    }
  }

  // metodo para recibir informacion de usuarios del getLocalStorage
  getLocalStorage(key:string){
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  // metodo para enviar informacion de usuarios a getLocalStorage
  setLocalStorage(key: string, data: any) {
    const dataString = JSON.stringify(data);
    localStorage.setItem(key, dataString);
  }

  // metodo la cual comprobamos si exite un usuario en localstorage
  login(data:any) {
    const user = this.usersTable.find(u => u.email == data.email);
    return user && data.password == user.password;
    
  }

  // metodo la cual comprobamos datos del usuario  en localstorage para el registro
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
  
  // metodo para setear valores del usuario en el localstorage
  logout() {
    localStorage.clear();
  }


}
