import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  // Doughnut
  public doughnutChartLabels: string[] = ['主力', '肉盾', '控場', '亂場', '輔助', '遠距'];
  public doughnutChartData: Number[] = [1, 1, 1, 1, 1, 1];
  public doughnutChartType: String = 'doughnut';

  public doughnutChartOption: any = {
    legend: {
      labels: {
        fontColor: '#ffcd03',
        fontSize: 14,
        fontFamily: 'Noto Sans TC',
      }
    }
  };

  // Pie
  public pieChartLabels: string[] = ['Data1', 'Data2', 'Data3', 'Data4', 'Data5', 'Data6'];
  public pieChartData: number[] = [3, 5, 7, 2, 4, 8];
  public pieChartType: String = 'pie';

  constructor() { }

  ngOnInit() {
  }

  changeChar(value: number, index: number) {
    const drr = this.doughnutChartData;
    if (value > 10) {
      value = 10;
    } else if (value < 1) {
      value = 1;
    }
    drr[index] = value;

    this.doughnutChartData = [drr[0], drr[1], drr[2], drr[3], drr[4], drr[5]];
  }
}
