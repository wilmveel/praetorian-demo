
import praetorianServices = require('praetorian-services');
import {Injectable, Inject} from '@angular/core'
import Web3 = require('web3');
import TestRPC = require('ethereumjs-testrpc');


@Injectable()
export class Praetorian{
    service:any;
    web3:any;
    constructor(){
        this.web3 = new Web3();
        
        var testProvider = new this.web3.providers.HttpProvider('./web3');
        this.web3.setProvider(testProvider);
        

        var praetorian = praetorianServices(this.web3)
        
        this.web3.eth.getCoinbase((err, coinbase) => {
            console.log('err',err)
            this.web3.eth.defaultAccount = coinbase;
            console.log('coinbase ',coinbase)
        
        
            praetorian.init(null, (err, app) => {
                console.log(err);
                console.log('the app is',app);
                this.service = app;
            });
        });
    }
    
    passwordAuthentication(password: string){
        var challenge;
        var passwordChallenge = this.service.services.passwordChallengeService;
        passwordChallenge.create(password,(err, contract) => {
            challenge = contract;
        })
        
        passwordChallenge.authorize(challenge, password,(err, success) =>{
            console.log(success);
        })
    }
    
    
}