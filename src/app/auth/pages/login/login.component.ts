import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


// para la ventana modal de informacion en el login como en el register utilice sweetalert2.
import  Swal from "sweetalert2";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent {

  // Aqui utilice para login como para registro formularios rectivos de angular, la cual feclare en el auth.moodule el ReactiveFormsModule para que pueda funcionar sus atributos en el html

  miFormulario: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor( private fb: FormBuilder, private router: Router, private authService: AuthService) {}


  // metodo de login paara guardar usuario
  login() {
    const isRegister = this.authService.login(this.miFormulario.value);

    if (isRegister) {
      this.router.navigateByUrl('/dashboard');
    }else{
      Swal.fire('tu correo o contraseña no son correctos', isRegister ,'error')
    }
  }

  
}
