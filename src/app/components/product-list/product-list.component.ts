import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  products: Product[] = [];
  currentCategoryId: number = 1;
  searchMode: boolean = false;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {      
      this.listProducts();
    })
  }

  listProducts() {

    this.searchMode = this.route.snapshot.paramMap.has('keyword');

    if (this.searchMode) {
      this.handleSearchProducts();
    } else {
      this.handleListProducts();
    }
    
  }

  handleListProducts() {

    // check if "id" parameter is available
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      //get id as string and convert it to a number
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;
    } else {
      // if not available set category to 1
      this.currentCategoryId = 1;
    }

    // get products for given category
    this.productService.getProductList(this.currentCategoryId).subscribe(
      data => {
        this.products = data;
      }
    )
  }

  handleSearchProducts() {
    const theKeyword: string = this.route.snapshot.paramMap.get('keyword')!;

    // search for products using keyword
    this.productService.searchProducts(theKeyword).subscribe(
      data => {
        this.products = data;
      }
    )
  }

}
