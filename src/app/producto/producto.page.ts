import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthProvider } from '../providers/auth/auth';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {
  private activatedRoute: ActivatedRoute;
  public producto:any = []

  constructor(private http:HttpClient,public api:AuthProvider) { }

  ngOnInit() {
    this.producto = this.activatedRoute.snapshot.paramMap.get('id');
  }



}
