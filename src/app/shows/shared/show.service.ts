import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable()
export class ShowService {
  getShows() {
   let subject = new Subject()
   setTimeout(() => {subject.next(SHOWS); subject.complete();}, 2000)
      return subject
  }
  
  getShow(id:number) {
     return SHOWS.find(show => show.id === id)
  }
}

const SHOWS = [ 
    {
        id: 1,
        title: 'Power',
        dateReleased: '12/12/2020',
        imageUrl: '/assets/images/power.jpg'
     },
     {
        id: 2,
        title: 'Carfield',
        dateReleased: '02/12/2019',
        imageUrl: '/assets/images/carfield.jpg'
     },
     {
        id: 3,
        title: 'Insecure',
        dateReleased: '10/10/2019',
        imageUrl: '/assets/images/insecure.jpg'
     },
     {
        id: 4,
        title: 'Plan B',
        dateReleased: '1/1/2020',
        imageUrl: '/assets/images/palnb.jpg'
     },
     {
        id: 5,
        title: 'Siren',
        dateReleased: '2/12/2020',
        imageUrl: '/assets/images/siren.jpg'
     },
     {
        id: 6,
        title: 'Selina',
        dateReleased: '12/12/2019',
        imageUrl: '/assets/images/selina.jpg'
     },
     {
        id: 7,
        title: 'Billions',
        dateReleased: '1/1/2020',
        imageUrl: '/assets/images/billions.jpg'
     },

     {
        id: 8,
        title: 'Handmaid',
        dateReleased: '12/1/2019',
        imageUrl: '/assets/images/handmaid.jpg'
     },

     {
        id: 9,
        title: 'Queen',
        dateReleased: '2/12/2021',
        imageUrl: '/assets/images/queen.jpg'
     },

     {
        id: 10,
        title: 'River',
        dateReleased: '2/2/2022',
        imageUrl: '/assets/images/river.jpg'
     },

     {
        id: 11,
        title: 'Supamodo',
        dateReleased: '11/11/2022',
        imageUrl: '/assets/images/supamodo.jpg'
     },

     {
        id: 12,
        title: 'Victorious',
        dateReleased: '12/12/2020',
        imageUrl: '/assets/images/victorious.jpg'
     },

     {
        id: 13,
        title: 'Monica',
        dateReleased: '12/12/2020',
        imageUrl: '/assets/images/monica.jpg'
     }
    ]