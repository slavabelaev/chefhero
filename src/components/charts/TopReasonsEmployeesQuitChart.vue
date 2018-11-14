<template>
  <figure class="figure">
    <figcaption class="figure__title">{{chartConfig.options.title.text}}</figcaption>
    <canvas :id="chartId" class="figure__chart"></canvas>
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
            data: [3, 12, 5, 5, 8, 14, 21, 21, 12],
            backgroundColor: [
              '#F2C9C9',
              '#E8A6A6',
              '#FA5C66',
              '#42AB7D',
              '#8FCCB0',
              '#D9EBE3',
              '#4F969E',
              '#176B73',
              '#0D4A4F'
            ],
            borderWidth: 0
          }],
          labels: [
            'overwhelmed',
            'not fun',
            'under qualified',
            'felt neglected',
            'under appreciated',
            'boss is a jerk',
            'changed mind on work type',
            'different work than expected',
            'not enough training',
          ]
        },
        options: {
          responsive: true,
          cutoutPercentage: 60,
          legend: {
            position: 'right',
            labels: {
              fontSize: 16,
              usePointStyle: true,
              padding: 24,
            }
          },
          title: {
            display: false,
            text: 'Top Reasons Employees Quit',
            fontSize: 20,
            lineHeight: 1.5,
            fontFamily: "'Belbo-Book', sans-serif",
            fontStyle: 'normal'
          },
          tooltips: {
            intersect: true
          },
          plugins: {
            labels: {
              render: 'percentage',
              fontSize: 14,
              fontColor: '#FFFFFF'
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

