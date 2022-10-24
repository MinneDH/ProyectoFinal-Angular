import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  formulario!:FormGroup

  constructor(private servicioRegistro:AuthService, private snackBar:MatSnackBar, private router:Router) { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      email: new FormControl<string|null>('',{
        validators:[Validators.required,Validators.email],
        nonNullable:true
      }),
      password: new FormControl<string|null>('',{
        validators:[Validators.required,Validators.minLength(4)],
        nonNullable:true
      })
    })
  }

  register(){
    this.servicioRegistro.register(this.formulario.value).subscribe(res =>{
      this.snackBar.open('Usuario registrado exitosamente','',{
        duration:3000
      });
      this.router.navigate(['/login'])
    })
  }


  getControlFormulario = (valor:string) => this.formulario.get(valor);
  get email(){
    return this.getControlFormulario('email');
  }

  get password(){
    return this.getControlFormulario('password');
  }
}
