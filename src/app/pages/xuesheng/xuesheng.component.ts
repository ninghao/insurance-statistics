import { Component, OnInit } from '@angular/core';
import * as Papa from 'papaparse';

@Component({
  selector: 'app-yanglao',
  templateUrl: './xuesheng.component.html',
  styleUrls: ['./xuesheng.component.css'],
})
export class XueShengComponent implements OnInit {
  searchValue = '';
  sortName: string | null = null;
  sortValue: string | null = null;
  listOfFilterAddress = [];
  listOfSearchAddress: string[] = [];

  listOfData = [];
  listOfDisplayData = [...this.listOfData];

  reset() {
    this.searchValue = '';
    this.search();
  }

  sort(sortName: string, value: string) {
    this.sortName = sortName;
    this.sortValue = value;
    this.search();
  }

  filterAddressChange(value: string[]) {
    this.listOfSearchAddress = value;
    this.search();
  }

  search() {
    console.log('search');

    const filterFunc = item => {
      return (
        (this.listOfSearchAddress.length
          ? this.listOfSearchAddress.some(
              address => item.街道乡镇.indexOf(address) !== -1,
            )
          : true) && item.学校.indexOf(this.searchValue) !== -1
      );
    };

    const data = this.listOfData.filter(item => filterFunc(item));

    this.listOfDisplayData = data;

    // this.listOfDisplayData = data.sort((a, b) =>
    //   this.sortValue === 'ascend'
    //     ? a[this.sortName!] > b[this.sortName!]
    //       ? 1
    //       : -1
    //     : b[this.sortName!] > a[this.sortName!]
    //     ? 1
    //     : -1,
    // );
  }

  constructor() {}

  ngOnInit() {
    Papa.parse(
      'https://tax.ninghao.org/sites/default/files/data/students.csv',
      {
        download: true,
        header: true,
        skipEmptyLines: true,
        complete: (result, file) => {
          console.log(result);
          // 设置表格数据
          this.listOfData = result.data;

          // 街道选项列表
          const streets = result.data.map(item => item.街道乡镇);

          this.listOfFilterAddress = [...new Set(streets)].map(item => {
            return {
              text: item,
              value: item,
            };
          });
          this.listOfDisplayData = [...this.listOfData];
        },
      },
    );
  }
}
