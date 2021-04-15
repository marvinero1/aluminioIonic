import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthProvider } from '../providers/auth/auth';

@Component({
  selector: 'app-importadora',
  templateUrl: './importadora.page.html',
  styleUrls: ['./importadora.page.scss'],
})
export class ImportadoraPage implements OnInit {


  constructor(private route: ActivatedRoute,public api:AuthProvider,) { }

  ngOnInit() {
  }
}
