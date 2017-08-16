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

  // Pie
  public pieChartLabels: string[] = ['Data1', 'Data2', 'Data3', 'Data4', 'Data5', 'Data6'];
  public pieChartData: number[] = [3, 5, 7, 2, 4, 8];
  public pieChartType: string = 'pie';

  public tipsArr = {
    'a01-1': `<div class='tip'>
  <strong class='tip-name'>天下之勢</strong>
  <span class='tip-content'>傷害減少10%，並將減少的傷害轉為補充自身雙倍的法力。</span>
  </div>`,
    'a01-2': `<div class='tip'>
  <strong class='tip-name'>東照權現</strong>
  <span class='tip-content'>恢復周圍友軍<em class='tip-step'>(75/120/165/210)</em>的生命值 ，並使他們增加35% 攻速，持續4秒。</span>
  </em>`,
    'a01-3': `<div class='tip'>
  <strong class='tip-name'>天羅地網</strong>
  <span class='tip-content'>使目標敵軍被陷阱糾纏，使其受困而無法移動<em class='tip-step'>(0.9/1.2/1.5/1.8)</em>秒並且在18方位創造出網子進行攻擊，每發網子造成<em class='tip-step'>(11/18/25/32)</em>傷害。</span>
  </div>`,
    'a01-4': `<div class='tip'>
  <strong class='tip-name'>雷霆刃</strong>
  <span class='tip-content'>召喚雷霆的威力，對周圍的敵人造成<em class='tip-step'>(75/150/225/300)</em>魔法傷害，並且在接下來5秒，攻擊時有50% 的機會，對擊中目標周圍310內的所有敵軍，額外造成<em class='tip-step'>(80/110/140/170)</em>點對魔免減半的真實傷害。</span>
  </div>`,
    'a01-5': `<div class='tip'>
  <strong class='tip-name'>三河魂</strong>
  <span class='tip-content'>施放自身的王者之氣，能增加周圍1500友軍<em class='tip-step'>(15/25/35)</em>的防禦，減少<em class='tip-step'>(15/20/25)</em>% 物理傷害與加快生命回復速率<em class='tip-step'>(5/6/7)</em>% ，持續7秒。</span>
  </div>`,
    'st_b01': `<div class='tip'>
  <strong class='tip-name'>褶裙</strong>
  <span class='tip-content'>移動速度+45。<em class='tip-unic'>唯一持有，移動速度不得累計。</span>
  </div>`,
    'st_b05': `<div class='tip'>
  <strong class='tip-name'>疾風衣</strong>
  <span class='tip-content'>攻速+25%。</span>
  </div>`,
    'st_a05': `<div class='tip'>
  <strong class='tip-name'>長槍</strong>
  <span class='tip-content'>攻擊傷害+14。</span>
  </div>`,
    'st_c03': `<div class='tip'>
  <strong class='tip-name'>軍糧丸</strong>
  <span class='tip-content'>回復420生命值和210法力。可使用2次。<br>與當世具足共用冷卻時間。</span>
  </div>`,
    'ct_d01': `<div class='tip'>
  <strong class='tip-name'>暗部長靴</strong>
  <span class='tip-content'>移動速度+90，攻擊傷害+30，攻速+30% 。<br>【使用】在5秒內獲得魔法免疫。
  <em class='tip-unic'>移動速度不得累計。</em></span>
  </div>`
  };


  constructor() { }

  ngOnInit() {
  }

  public tipTemplate(id) {
    return this.tipsArr[id];
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
