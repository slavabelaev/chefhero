<template>
  <figure class="chart-figure">
    <figcaption class="chart-figure__title">Restaurant "Prime" Cost</figcaption>
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
            data: [50, 50],
            backgroundColor: [
              '#D9EBE3',
              '#076A73',
            ],
            borderWidth: 0
          }],
          labels: [
            'LABOUR \nCOSTS',
            'COST OF \nGOODS SOLD',
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
            text: 'Total Restaurant Operating Cost',
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
              render: 'label',
              fontFamily: "'Belbo-Book', sans-serif",
              fontColor: '#FFFFFF',
              fontStyle: 'bold',
              fontSize: 20
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

