import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../product";

@Component({
  selector: 'app-product-table-filters',
  templateUrl: './product-table-filters.component.html',
  styleUrl: './product-table-filters.component.scss'
})
export class ProductTableFiltersComponent {

  @Input() products: Product[] = [];
  @Output() filteredProducts = new EventEmitter<any>();
  @Output() clearFilters = new EventEmitter<any>();

  filterName = '';
  filteredFlag = false;

  filter(){
    this.products = this.products.filter(product => {
      return product.name === this.filterName;
    });
    console.log("here")
    console.log(this.products)
    this.filteredFlag = true;
    this.filteredProducts.emit(this.products);
  }

  clearFilter(){
    this.clearFilters.emit();
  }

}
