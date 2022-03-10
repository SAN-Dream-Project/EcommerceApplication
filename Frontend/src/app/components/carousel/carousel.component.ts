import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.less']
})
export class CarouselComponent implements OnInit {
  public sliderImages:any[] = [{
      imgURL: '../../../assets/images/slider-thumbnail.jpg',
      status: true,
      title: 'Product Title1 ',
      description: 'Some representative placeholder content for the third slide.'
    }, {
      imgURL: '../../../assets/images/slider-thumbnail.jpg',
      status: false,
      title: 'Product Title2 ',
      description: 'Some representative placeholder content for the third slide.'
    }, {
      imgURL: '../../../assets/images/slider-thumbnail.jpg',
      status: false,
      title: 'Product Title3 ',
      description: 'Some representative placeholder content for the third slide.'
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
