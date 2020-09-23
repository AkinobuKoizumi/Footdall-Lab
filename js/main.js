// 'use strict';
// {
    
//     google.charts.load('current', {'packages':['corechart']});
//     google.charts.setOnLoadCallback(drawChart);
    
//     function drawChart() {
//     var data = google.visualization.arrayToDataTable([
//       ['得点', '失点'],
//       [ 31.33333333,      13.16666667],
//       [ 21.14285714,      17.42857143],
//       [ 16.71428571,      18.4285714],
//       [ 18.4285714,       13.42857143],
//       [ 25.6,             8.8],
//       [ 48.71428571,      10],
//       [17.57142857,	      29.28571429],
//       [15.83333333,	      18.66666667]
//     ]);
    
//     var options = {
//       title: '平均得点&平均失点',
//       pointSize: 30,
//       hAxis: {title: '得点', minValue: 0, maxValue: 30},
//       vAxis: {title: '失点', minValue: 0, maxValue: 30},
//       legend: 'none',
//       colors: ['#800020','#ff5800','#34205d','#171f55','001e64','#f31a3f','#7f2128','#418fde'],
//       series: {
//             0: { pointShape: 'normal' },
//             1: { pointShape: 'normal' },
//             2: { pointShape: 'normal' },
//             3: { pointShape: 'normal' },
//             4: { pointShape: 'normal' },
//             5: { pointShape: 'normal' }
//         }
    
//     };
    
//     var chart = new google.visualization.ScatterChart(document.getElementById('chart_div'));
    
//     chart.draw(data, options);
//     }
    
// }

google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable
      ([['得点', '失点',{role: 'annotation'} , '失点',{role: 'annotation'}, '失点', {role: 'annotation'}, '失点', {role: 'annotation'}, '失点', {role: 'annotation'}, '失点', {role: 'annotation'},'失点', {role: 'annotation'},'失点', {role: 'annotation'}],
        [31.33333333, 13.16666667, '早稲田',null, null, null, null, null, null, null, null,null, null, null, null, null, null],
        [21.14285714,null, null,17.42857143, '法政', null, null, null, null, null,null, null, null, null, null, null, null],
        [16.71428571, null, null, null, null, 18.4285714,'立教', null, null, null, null,null, null, null, null, null, null],
        [18.4285714, null, null, null, null, null, null, 13.42857143, '明治', null, null,null, null, null, null, null, null],
        [25.6, null, null, null, null, null, null, null, null, 8.8, '中央',null, null, null, null, null, null],
        [48.71428571, null, null, null, null, null, null, null, null, null, null, 10, '日本', null, null, null, null],
        [29.28571429, null, null, null, null, null, null,null, null, null, null, null, null, 17.57142857, '桜美林', null, null],
        [18.66666667, null, null, null, null, null, null, null, null,null, null, null, null, null, null, 15.83333333, '東京']
  ]);

  var options = {
    legend: 'none',
    title: '平均得点&平均失点',
    pointSize: 20,
    hAxis: {title: '得点', minValue: 0, maxValue: 50},
    vAxis: {title: '失点', minValue: 0, maxValue: 20},
    colors: ['#800020','#ff5800','#34205d','#171f55','001e64','#f31a3f','#7f2128','#418fde'],
    annotations: { stemColor: 'white',textStyle: { fontSize: 12 } },
    series: {
          0: { pointShape: 'normal' },
          1: { pointShape: 'normal' },
          2: { pointShape: 'normal' },
          3: { pointShape: 'normal' },
          4: { pointShape: 'normal' },
          5: { pointShape: 'normal' }
      }
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}