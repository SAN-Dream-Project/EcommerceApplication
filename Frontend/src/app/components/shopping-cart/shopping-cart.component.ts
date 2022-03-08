import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/Product";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.less']
})
export class ShoppingCartComponent implements OnInit {
  public products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProductDetails();
  }

  public incrementQuantity(productID:string):void {
    this.products = this.products.map((product) => {
      if(product.sNo === productID) {
        return {
          ...product,
          quantity: product.quantity + 1
        }
      }
      return product;
    })
  }

  public decrementQuantity(productID:string):void {
    this.products = this.products.map((product) => {
      if(product.sNo === productID) {
        return {
          ...product,
          quantity: product.quantity - 1 > 0 ? product.quantity - 1 : 1
        }
      }
      return product;
    })
  }

  public  grandTotal():number {
    let grandTotal:number = 0;
    this.products.map((product) => {
      grandTotal += (product.price * product.quantity);
    });
    return grandTotal;
  }

  public getProductDetailsByProductID(productID:string):Product {
    console.table(this.productService.getProductDetailsByProductID(productID));
    return this.productService.getProductDetailsByProductID(productID);
  }

}
