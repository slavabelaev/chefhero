<template>
  <figure class="chart-figure">
    <figcaption class="chart-figure__title">{{chartConfig.options.title.text}}</figcaption>
    <canvas :id="chartId" class="chart-figure__canvas"></canvas>
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
        type: 'pie',
        data: {
          datasets: [{
            data: [29, 28, 43],
            backgroundColor: [
              '#ff3641',
              '#D9EBE3',
              '#076A73',
            ],
            borderWidth: 10
          }],
          labels: [
            'FOOD \nCOST',
            'LABOR \nCOST',
            'OTHER \nOPERATING \nCOSTS',
          ]
        },
        options: {
          responsive: true,
          legend: {
            position: 'bottom',
            labels: false
          },
          title: {
            display: false,
            text: 'Average Restaurant Operating Costs',
            fontSize: 20,
            lineHeight: 1.5,
            fontFamily: "'Belbo-Book', sans-serif",
            fontStyle: 'normal'
          },
          tooltips: {
            intersect: true
          },
          plugins: {
            labels: [
              {
                render: 'label',
                fontFamily: "'Belbo-Book', sans-serif",
                fontColor: '#FFFFFF',
                fontStyle: 'bold',
                fontSize: 16
              },
              {
                render: 'percentage',
                position: 'outside',
                fontFamily: "'Belbo-Book', sans-serif",
                fontSize: 32,
                fontStyle: 'bold',
                fontColor: '#212121'
              }
            ]
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

