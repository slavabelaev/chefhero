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
        type: 'bar',
        data: {
          labels: ['Full-time chefs', 'Executive chefs', 'Sous chefs', 'Personal Chefs'],
          datasets: [{
            backgroundColor: '#076A73',
            borderWidth: 0,
            data: [33280, 57000, 40000, 35000]
          }, {
            backgroundColor: '#4F969E',
            borderWidth: 0,
            data: [52000, 80000, 53000, 45000]
          }]

        },
        options: {
          responsive: true,
          legend: {
            position: 'bottom',
            labels: false
          },
          title: {
            display: true,
            text: 'Average Chef Salaries by position (in Can$)',
            fontSize: 20,
            lineHeight: 1.5,
            fontFamily: "'Belbo-Book', sans-serif",
            fontStyle: 'normal'
          },
          tooltips: {
            intersect: true
          },
          scales: {
            yAxes: [{
              stacked: true,
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: false
              }
            }],
						xAxes: [{
              stacked: true,
              gridLines: {
                display: false
              }
						}],
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

