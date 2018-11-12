<template>
  <canvas :id="chartId"></canvas>
</template>

<script>
import Chart from 'chart.js';

export default {
  data() {
    return {
      chartId: this.generateId(),
      chartConfig: {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [30, 25, 3, 10, 32],
            backgroundColor: [
              '#FC5E69',
              '#FC737D',
              '#FC8C94',
              '#FCA3A8',
              '#076A73',
            ],
            borderWidth: 0
          }],
          labels: [
            'food and supplies',
            'payroll',
            'utilities',
            'rent or morgage',
            'profit'
          ]
        },
        options: {
          responsive: true,
          cutoutPercentage: 60,
          legend: {
            position: 'bottom',
            labels: {
              fontFamily: "'Belbo-Book', sans-serif",
              fontSize: 14,
              usePointStyle: true
            }
          },
          title: {
            display: true,
            text: 'The 68 Percent Formula Budget Plan',
            fontSize: 20,
            lineHeight: 1.5,
            fontFamily: "'Belbo-Book', sans-serif",
            fontStyle: 'normal'
          },
          tooltips: {
            intersect: true
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

