import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/Product";
import {ProductService} from "../../services/product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.less']
})
export class ProductDetailsComponent implements OnInit {
  public productID:string = '';
  public product:Product = {} as Product;
  constructor(private route:ActivatedRoute, private productService:ProductService) { }

  ngOnInit(): void {
    this.productID = this.route.snapshot.paramMap.get('productID') as string;
    this.product = this.productService.getProductDetailsByProductID(this.productID);
  }

}
