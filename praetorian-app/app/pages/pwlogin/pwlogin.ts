import {Page, NavController} from 'ionic-angular';
import {Praetorian} from '../../providers/praetorian'
import { FORM_DIRECTIVES, FormBuilder,  ControlGroup, Validators, AbstractControl } from '@angular/common';

/*
  Generated class for the PwloginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/pwlogin/pwlogin.html',
  directives:[FORM_DIRECTIVES]
})
export class PwloginPage {
      authForm: ControlGroup;
    password: AbstractControl;
    prae:Praetorian;
  constructor(public nav: NavController, fb:FormBuilder, prae:Praetorian) {
        this.prae = prae;
        this.authForm = fb.group({
        'password': ['', Validators.compose([Validators.required, Validators.minLength(8)])]
        });
        this.password = this.authForm.controls['password'];
    }   
    onSubmit(password:any){
      console.log('password',password)
        if(this.authForm.valid){
          this.passwordAuthentication(password.password);
        }
    }
  
  
      passwordAuthentication(password: string){
        var challenge;
        console.log('service' ,this.prae.service)
        var passwordChallenge = this.prae.service.services.passwordChallengeService;
        passwordChallenge.create(password,(err, contract) => {
            console.log(err)
            console.log(contract)
            challenge = contract;
        
        
            passwordChallenge.authorize(challenge, password,(err, success) =>{
                console.log(err);
                console.log(success);
            })
        })
    }
}
