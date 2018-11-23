<template>
  <figure class="figure">
    <figcaption class="figure__title">{{chartConfig.options.title.text}}</figcaption>
    <canvas :id="chartId" class="figure__chart"></canvas>
    <cite class="figure__source">Source: Energy Information Office 2003</cite>
  </figure>
</template>

<script>
import Chart from 'chart.js';
import 'chartjs-plugin-labels';

export default {
  data() {
    return {
      chartId: this.generateId(),
      chartConfig: {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [9.8, 3.7, 5.6, 16.6, 6.8, .5, .5, 24.4, 15.7, 16.4],
            backgroundColor: [
              '#F2C9C9',
              '#E8A6A6',
              '#FA5C66',
              '#42AB7D',
              '#8FCCB0',
              '#D9EBE3',
              '#176B73',
              '#4F969E',
              '#176B73',
              '#0D363B'
            ],
            borderWidth: 0
          }],
          labels: [
            'Lighting',
            'Other',
            'Ventilation',
            'Heating',
            'Cooling',
            'Computers',
            'Office Equipment',
            'Food Prep',
            'Sanitation',
            'Refrigiration'
          ]
        },
        options: {
          responsive: true,
          aspectRatio: (window.outerWidth <= 320) ? 1 : (window.outerWidth <= 960) ? 1.2 : 2,
          cutoutPercentage: 60,
          legend: (window.outerWidth <= 960) ? false : {
            position: 'right',
            labels: {
              fontFamily: "'Belbo-Book', sans-serif",
              fontSize: 16,
              usePointStyle: true,
              padding: 24
            }
          },
          title: {
            display: false,
            text: 'Restaurant Energy Use',
            fontSize: 20,
            lineHeight: 1.5,
            fontFamily: "'Belbo-Book', sans-serif",
            fontStyle: 'normal'
          },
          tooltips: {
            intersect: true,
            callbacks: {
              label: function(tooltipItem, data) {
                //get the concerned dataset
                var dataset = data.datasets[tooltipItem.datasetIndex];
                //calculate the total of this data set
                var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
                  return previousValue + currentValue;
                });
                //get the current items value
                var currentValue = dataset.data[tooltipItem.index];

                return currentValue + "%";
              }
            }
          },
          plugins: {
            labels: {
              render: 'percentage',
              precision: 2,
              fontColor: (data) => (data.index === 6 ? 'transparent' : '#FFFFFF'),
              fontStyle: 'bold',
              fontSize: 16
            }
          }
        }
      }
    }
  },
  mounted() {
    this.createChart(this.chartId, this.chartConfig);
  },
  methods: {
    createChart(chartId, chartData) {
      const ctx = document.getElementById(chartId);
      new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options,
      });
    },
    generateId() {
      return '_' + Math.random().toString(36).substr(2, 9);
    }
  }
}
</script>

