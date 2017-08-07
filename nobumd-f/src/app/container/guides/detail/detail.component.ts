import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  // Doughnut
  public doughnutChartLabels: string[] = ['主力', '肉盾', '控場', '亂場', '輔助', '遠距'];
  public doughnutChartData: number[] = [8, 5, 3, 6, 7, 2];
  public doughnutChartType: string = 'doughnut';

  public doughnutChartOption: any = {
    legend: {
      labels: {
        fontColor: '#ffcd03',
        fontSize: 14,
        fontFamily: 'Noto Sans TC',
      }
    }
  };

  constructor() { }

  ngOnInit() {
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
