// import { Component, Input, OnInit } from '@angular/core';
// import { NgxChartsModule } from '@swimlane/ngx-charts';
// import { ProductComponent } from '../product.component';
// import { AddEditProductComponent } from '../add-edit-product/add-edit-product.component';
// import { Product } from '../product';
// interface ChartData {
//   name: string;
//   series: Array<{ value: number; label: string }>;
// }
// @Component({
//   selector: 'app-chart',
//   standalone: true,
//   imports: [NgxChartsModule,ProductComponent,AddEditProductComponent],
//   templateUrl: './chart.component.html',
//   styleUrl: './chart.component.css'
// })

// export class ChartComponent implements OnInit {
//   @Input() public data!: Product[];
//  productSales!: any[]
//   productSalesMulti!: any[]

//   view: any= [700, 370];

//   // options
//   legendTitle: string = 'Products';
//   legendTitleMulti: string = 'Months';
//   legendPosition: string = 'below'; // ['right', 'below']
//   legend: boolean = true;

//   xAxis: boolean = true;
//   yAxis: boolean = true;

//   yAxisLabel: string = 'Sales';
//   xAxisLabel: string = 'Products';
//   showXAxisLabel: boolean = true;
//   showYAxisLabel: boolean = true;

//   maxXAxisTickLength: number = 30;
//   maxYAxisTickLength: number = 30;
//   trimXAxisTicks: boolean = false;
//   trimYAxisTicks: boolean = false;
//   rotateXAxisTicks: boolean = false;

//   xAxisTicks: any[] = ['Genre 1', 'Genre 2', 'Genre 3', 'Genre 4', 'Genre 5', 'Genre 6', 'Genre 7']
//   yAxisTicks: any[] = [100, 1000, 2000, 5000, 7000, 10000]

//   animations: boolean = true; // animations on load

//   showGridLines: boolean = true; // grid lines

//   showDataLabel: boolean = true; // numbers on bars

//   gradient: boolean = false;
//   colorScheme = {
//     domain: ['#704FC4', '#4B852C', '#B67A3D', '#5B6FC8', '#25706F']
//   };
//   schemeType:any = 'linear'; // 'ordinal' or 'linear'

//   activeEntries: any[] = ['book']
//   barPadding: number = 5
//   tooltipDisabled: boolean = false;

//   yScaleMax: number = 9000;

//   roundEdges: boolean = false;

//   constructor() { Object.assign( this.data ); }

//   ngOnInit(): void {
//   }

//   onSelect(event: any) {
//     console.log(event);
//   }

//   onActivate(data: any): void {
//     console.log('Activate', JSON.parse(JSON.stringify(data)));
//   }

//   onDeactivate(data: any): void {
//     console.log('Deactivate', JSON.parse(JSON.stringify(data)));
//   }

//   formatString(input: string): string {
//     return input.toUpperCase()
//   }

//   formatNumber(input: number): number {
//     return input
//   }
// }


  

