import { Component } from '@angular/core';
import { RegisterService } from '../../services/auth/register.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterRequest } from '../../services/auth/registerRequest';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerError:string="";
  registerForm = this.formBuilder.group({
    email: ['',[Validators.required,Validators.email]],
    password: ['',Validators.required],
    name: ['',Validators.required],
    lastname: ['',Validators.required],
  });
  
  constructor(private formBuilder:FormBuilder, private router:Router, private registerService:RegisterService){}

  get email(){
    return this.registerForm.controls.email;
  }
 get password(){
  return this.registerForm.controls.password;
  }
  get name(){
    return this.registerForm.controls.name;
  }
  get lastname(){
    return this.registerForm.controls.lastname;
  }

  register(){
    if(this.registerForm.valid){
      this.registerService.register(this.registerForm.value as RegisterRequest).subscribe({
        next: (userData)=>{
          console.log(userData);
        },
        error: (errorData)=>{
          console.log(errorData);
          this.registerError=errorData.message;
        },
        complete: ()=>{
          console.info('Register Completo');
          this.router.navigateByUrl('/login');
          this.registerForm.reset();
        }
      });
    }
    else
    {
      this.registerForm.markAllAsTouched();
    }
  }
}
