import {Injectable} from '@angular/core'
var EC = require('elliptic').ec;

var ec = new EC('secp256k1');

var key = ec.genKeyPair();

@Injectable()
export class Wallet{
    private static key;
    constructor(password: string){
        
    }
    
}