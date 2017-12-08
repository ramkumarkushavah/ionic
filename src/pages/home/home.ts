import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service'
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  postList ;
  constructor(public navCtrl: NavController, public navParams: NavParams, private remoteService: RemoteServiceProvider) {
    remoteService.getPosts();
    
    remoteService.sendData.subscribe( data=>{
      this.postList = data;
      console.log(this.postList)
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }





}
