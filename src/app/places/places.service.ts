import { Injectable } from '@angular/core';
import {Place} from './place.model' ; 

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private places: Place[] = [
    {

     id:'1',
     title:'Torre Eiffel',
     imageURL:'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-540x360/06/74/aa/fc.jpg',
     comments:['Increible', 'Hermosa experiencia']


  },
  {

  id:'2',
    title:'Obelisco ',
    imageURL:'https://www.diariodecuyo.com.ar/export/sites/diariodecuyo/img/2018/09/11/ddc120918-037f08.jpg_1204845836.jpg',
    comments:['Increible', 'Hermosa experiencia']


 },
 {

  id:'3',
    title:'Nuevo sitio',
    imageURL:'https://www.diariodecuyo.com.ar/export/sites/diariodecuyo/img/2018/09/11/ddc120918-037f08.jpg_1204845836.jpg',
    comments:[]


 }
]


  constructor() { }


  getPlaces(){

  return [...this.places]

  }
  
  getPlace(placeId: string){
      
   return{
     ...this.places.find(place => {

      return place.id === placeId
    })
  }
  }


  addPlaces(title: string,imageURL: string){
    this.places.push({
      title,
      imageURL,
      comments : [],
      id : this.places.length + 1 + " "
      
    });

  }

  deletePlace(placeId: string) {
    this.places = this.places.filter(place => {

      return place.id !== placeId
    })
  
  }







}
