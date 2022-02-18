import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

import  Swal from "sweetalert2";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent {
  miFormulario: FormGroup = this.fb.group({
    email: ['manuelpra20@gmail.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private fb: FormBuilder, private router: Router, private authService: AuthService
  ) {}


  login() {
    console.log(this.miFormulario.value);

    const isRegister = this.authService.login(this.miFormulario.value);

    if (isRegister) {
      this.router.navigateByUrl('/dashboard');
    }else{
      Swal.fire('tu correo o contraseña no son correctos', isRegister ,'error')
    }
  }

  
}
