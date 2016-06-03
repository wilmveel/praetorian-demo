import {Page} from 'ionic-angular';
import {FbloginPage} from '../fblogin/fblogin';
import {PwloginPage} from '../pwlogin/pwlogin'
import {Praetorian} from '../../providers/praetorian'

@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  prae:Praetorian
  constructor(prae:Praetorian){
    this.prae = prae;
    console.log('the service is ',prae)
  }
  tab1Root: any = FbloginPage;
  tab2Root: any = PwloginPage;
  
}
