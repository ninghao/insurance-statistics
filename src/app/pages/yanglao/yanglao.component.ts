import { Component, OnInit } from '@angular/core';
import * as Papa from 'papaparse';

@Component({
  selector: 'app-yanglao',
  templateUrl: './yanglao.component.html',
  styleUrls: ['./yanglao.component.css'],
})
export class YanglaoComponent implements OnInit {
  listOfData = [];

  constructor() {}

  ngOnInit() {
    Papa.parse('https://tax.ninghao.org/sites/default/files/data/yanglao.csv', {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (result, file) => {
        console.log(result);
        this.listOfData = result.data;
      },
    });
  }
}
