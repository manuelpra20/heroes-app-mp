import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
})
export class RegisterComponent {
  miFormulario: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['manuelpra20@gmail.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  });

  constructor( private fb: FormBuilder, private router: Router, private authService: AuthService) {}


  // metodo para buscar datos del usuario para el resgistro en el localstorage
  registro() {

    const isRegister = this.authService.register(this.miFormulario.value);
    if (isRegister) {
      this.router.navigateByUrl('/auth');
    }
  }
  
}
