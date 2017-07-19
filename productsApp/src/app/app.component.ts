import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  products: any[] = [];
  formGroup: FormGroup = new FormGroup({
      name: new FormControl(''),
      category: new FormControl('')
    }
  )

  constructor(private apiService: ApiService){}

  ngOnInit() {
    this.apiService.get('http://localhost:8085/product/').then((response) => {
      this.products = response;
    })
  }

  deleteProduct(id: string) {
    this.apiService.delete('http://localhost:8085/product/' + id).then((response) => {
      this.products = response;
    })
  }

  addProduct() {
    let data = this.formGroup.getRawValue();
    this.apiService.post('http://localhost:8085/product/create', data).then((response) => {
      this.products = response;
    })
  }


}
