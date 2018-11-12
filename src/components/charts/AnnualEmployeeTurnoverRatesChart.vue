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
          labels: ['2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015'],
          datasets: [{
            label: 'Restaurant & Accomodations Sector',
            backgroundColor: '#076A73',
            borderWidth: 0,
            data: [80.7, 74.5, 61, 56.4, 58.9, 60.8, 62.6, 66.7, 72.1]
          }, {
            label: 'Total U.S. Private Sector',
            backgroundColor: '#42AB7D',
            borderWidth: 0,
            data: [49.1, 47.8, 44.1, 40.4, 40.7, 41.5, 42.3, 44.5, 45.9]
          }]

        },
        options: {
          responsive: true,
          legend: {
            position: 'bottom',
            labels: {
              fontFamily: "'Belbo-Book', sans-serif",
              fontSize: 16,
              fontColor: '#076A73',
              usePointStyle: true
            }
          },
          title: {
            display: true,
            text: 'Annual Employee Turnover Rates (%)',
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
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: false
              }
            }],
            xAxes: [{
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: false
              }
            }]
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

