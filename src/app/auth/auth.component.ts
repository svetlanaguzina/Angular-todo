import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { Observable  } from 'rxjs';
import { AuthResponseData } from './auth.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})

export class AuthComponent {
    isLoginMode = true;
    isLoading = false;
    error: string = "";
    

    constructor(private authService: AuthService) {
         
    }

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit(form: NgForm) {
        if (!form.valid) {
            return;
        }
        const email = form.value.email;
        const password = form.value.password;
        let authObs: Observable<AuthResponseData>;

        this.isLoading = true;
        

        if (this.isLoginMode) {
            this.authService.login(email, password).subscribe(
                resData => {
                    console.log(resData);
                    this.isLoading = false;
                },
                errorMessage => {
                    console.log(errorMessage);
                    this.error = errorMessage;
                    
                    this.isLoading = false;
                }
            )
        } else {
            this.authService.signup(email, password).subscribe(resData => {
                console.log(resData);
                this.isLoading = false;
            },
            errorMessage => {
                console.log(errorMessage);
                this.error = errorMessage;
                
                this.isLoading = false;
            }
            );
        }

       
       
        form.reset();

    }


}