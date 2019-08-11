import React, { Component } from 'react';

import Chart from 'chart.js';


export default class LineGraph extends Component {
  chartRef = React.createRef();
  
  componentDidMount() {
      const myChartRef = this.chartRef.current.getContext("2d");
      
      new Chart(myChartRef, {
          type: "line",
          data: {
              //Bring in data
              labels: ["Jan", "Feb", "March"],
              datasets: [
                  {
                      label: "Sales",
                      data: [86, 67, 91],
                  }
              ]
          },
          options: {
              //Customize chart options
          }
      });
  }
  render() {
      return (
          <div>
              <canvas
                  id="myChart"
                  ref={this.chartRef}
              />
          </div>
      )
  }
}

// export default function NewUserChart() {
//   const container = document.createElement('div');
//   const cnvs = document.createElement('canvas');
//   const ctx = cnvs.getContext('2d');
//   ctx.id = 'newUserChart';
//   ctx.width = 400;
//   ctx.height = 400;

//   container.appendChild(cnvs);

//   const chartOptions = {
//     type: 'bar',
//     data: {
//       labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//       datasets: [{
//         label: '# of Votes',
//         data: [12, 19, 3, 5, 2, 3],
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.2)',
//           'rgba(54, 162, 235, 0.2)',
//           'rgba(255, 206, 86, 0.2)',
//           'rgba(75, 192, 192, 0.2)',
//           'rgba(153, 102, 255, 0.2)',
//           'rgba(255, 159, 64, 0.2)'
//         ],
//         borderColor: [
//           'rgba(255, 99, 132, 1)',
//           'rgba(54, 162, 235, 1)',
//           'rgba(255, 206, 86, 1)',
//           'rgba(75, 192, 192, 1)',
//           'rgba(153, 102, 255, 1)',
//           'rgba(255, 159, 64, 1)'
//         ],
//         borderWidth: 1
//       }]
//     },
//     options: {
//       scales: {
//         yAxes: [{
//           ticks: {
//             beginAtZero: true
//           }
//         }]
//       }
//     }
//   };

//   var userChart = Chart(ctx, chartOptions);
//   container.appendChild(userChart);

//   return container;
// }