import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class InfoserviceService {
  private InfoData:any;

  public pushData = new EventEmitter<{}>();

  constructor() {
    this.InfoData =  [
      {
        header: 'Resort Address',
        address1: 'Elk Street',
        address2: 'Hanging Gardens',
        tel: '1285 968 685',
        photos: [
          '../../assets/images/Miami.jpg',
          '../../assets/images/miami2.jpg'
        ],
        weather: {
          air: '14',
          water: '20'
        },
        stats: {
          followers: 2850,
          following: 675
        },
        country: 'USA'
      },
      {
        header: 'Resort Address',
        address1: 'Ocean Drive',
        address2: 'Hyad Park',
        tel: '1285 968 685',
        photos: [
          '../../assets/images/Malang.jpg',
          '../../assets/images/Malang2.jpg'
        ],
        weather: {
          air: '21',
          water: '25'
        },
        stats: {
          followers: 1650,
          following: 775
        },
        country: 'Indonesia'
      },
      {
        header: 'Resort Address',
        address1: 'Kensington Station',
        address2: 'Baker Street',
        tel: '1285 968 685',
        photos: [
          '../../assets/images/san_francisco.jpg',
          '../../assets/images/san_francisco2.jpg'
        ],
        weather: {
          air: '30',
          water: '25'
        },
        stats: {
          followers: 5850,
          following: 2675
        },
        country: 'USA'
      },
      {
        header: 'Resort Address',
        address1: '46th Street',
        address2: 'Main Street',
        tel: '1285 968 685',
        photos: [
          '../../assets/images/LA.jpg',
          '../../assets/images/LA2.jpg'
        ],
        weather: {
          air: '30',
          water: '25'
        },
        stats: {
          followers: 3850,
          following: 575
        },
        country: 'USA'
      },
      {
        header: 'Resort Address',
        address1: 'Axel Road',
        address2: 'Beach Road',
        tel: '1285 968 685',
        photos: [
          '../../assets/images/bali.jpg',
          '../../assets/images/bali2.jpg'
        ],
        weather: {
          air: '30',
          water: '25'
        },
        stats: {
          followers: 7850,
          following: 3675
        },
        country: 'Indonesia'
      },
      {
        header: 'Resort Address',
        address1: 'Queens Street',
        address2: 'King Street',
        tel: '1285 968 685',
        photos: [
          '../../assets/images/Java.jpg',
          '../../assets/images/Java2.jpg'
        ],
        weather: {
          air: '30',
          water: '25'
        },
        stats: {
          followers: 2850,
          following: 1675
        },
        country: 'Indonesia'
      },
      {
        header: 'Resort Address',
        address1: 'Rue Mont Mart',
        address2: 'Rue Exotic',
        tel: '1285 968 685',
        photos: [
          '../../assets/images/Paris.jpg',
          '../../assets/images/Paris2.jpg'
        ],
        weather: {
          air: '30',
          water: '25'
        },
        stats: {
          followers: 10850,
          following: 6675
        },
        country: 'France'
      },
      {
        header: 'Resort Address',
        address1: 'Rue Verde',
        address2: 'Rue Blance',
        tel: '1285 968 685',
        photos: [
          '../../assets/images/marseilles.jpg',
          '../../assets/images/marseille2.jpg'
        ],
        weather: {
          air: '30',
          water: '25'
        },
        stats: {
          followers: 9850,
          following: 7675
        },
        country: 'France'
      },
      {
        header: 'Resort Address',
        address1: 'Rue de Chateau',
        address2: 'Rue de Lyon',
        tel: '1285 968 685',
        photos: [
          '../../assets/images/lyon.jpg',
          '../../assets/images/lyon2.jpg'
        ],
        weather: {
          air: '30',
          water: '25'
        },
        stats: {
          followers: 7850,
          following: 4675
        },
        country: 'France'
      },
      {
        header: 'Resort Address',
        address1: 'Kensington Station',
        address2: 'Baker Street',
        tel: '1285 968 685',
        photos: [
          '../../assets/images/london.jpg',
          '../../assets/images/london2.jpg'
        ],
        weather: {
          air: '30',
          water: '25'
        },
        stats: {
          followers: 12850,
          following: 9675
        },
        country: 'England'
      },
      {
        header: 'Resort Address',
        address1: 'Manchester Station',
        address2: 'Baker Street',
        tel: '1285 968 685',
        photos: [
          '../../assets/images/manchester.jpg',
          '../../assets/images/manchester2.jpg'
        ],
        weather: {
          air: '30',
          water: '25'
        },
        stats: {
          followers: 4850,
          following: 2675
        },
        country: 'England'
      },
      {
        header: 'Resort Address',
        address1: 'Kings Street',
        address2: 'Queens Street',
        tel: '1285 968 685',
        photos: [
          '../../assets/images/liverpool.jpg',
          '../../assets/images/liverpool2.jpg'
        ],
        weather: {
          air: '30',
          water: '25'
        },
        stats: {
          followers: 5850,
          following: 2675
        },
        country: 'England'
      },
    ];
  }

  public getData() {
    return this.InfoData;
  }

  public sendData(value: {})
  {
      this.pushData.emit(value);
  }
}
