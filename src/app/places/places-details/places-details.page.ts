import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router' ; 
import { PlacesService } from '../places.service';
import { Place } from '../place.model';
import {AlertController} from '@ionic/angular';
import { Button } from 'protractor';



@Component({
  selector: 'app-places-details',
  templateUrl: './places-details.page.html',
  styleUrls: ['./places-details.page.scss'],
})
export class PlacesDetailsPage implements OnInit {


place : Place

  constructor(private activatedRoute : ActivatedRoute , private placesService : PlacesService, private router : Router , private alertCtrl : AlertController) { 



  }

  ngOnInit() {
   
  this.activatedRoute.paramMap.subscribe(paramMap =>{
               //Validaciones 
   

            const recipeId = paramMap.get('placeId')
            this.place=this.placesService.getPlace(recipeId);
           




  })

  
  }

 async deletePlace() {
   const alertElement= await this.alertCtrl.create({

   header : 'Estas seguro de querer eliminar ? ',
   message: 'Cuidado',
   buttons: [
   {
        text: 'Cancelar',
        role:'cancelar'


   },

   {

     text: 'Eliminar',

     handler: ()=>{
          
      this.placesService.deletePlace(this.place.id);

      this.router.navigate(['/places']);


     }
   }



   ]
  
  }) ; 
  await alertElement.present();
   
  }


}
