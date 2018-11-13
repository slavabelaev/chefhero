<template>
  <figure class="chart-figure">
    <figcaption class="chart-figure__title">Why do customers stop frequenting a restaurant?</figcaption>
    <div class="md-layout">
      <div class="md-layout-item md-small-size-100">
        <figure class="chart-figure">
          <canvas :id="chartId"></canvas>
          <figcaption class="chart-figure__title">73% cited rude staff as issue.</figcaption>
        </figure>
      </div>
      <div class="md-layout-item md-small-size-100">
        <figure class="chart-figure">
          <canvas :id="secondChartId"></canvas>
          <figcaption class="chart-figure__title">55% cited issues that weren't resolved in timely manner.</figcaption>
        </figure>
      </div>
    </div>
  </figure>
</template>

<script>
import Chart from 'chart.js';
import 'chartjs-plugin-labels';

export default {
  data() {
    return {
      chartId: this.generateId(),
      secondChartId: this.generateId(),
      chartConfig: {
        type: 'pie',
        data: {
          datasets: [{
            data: [73, 27],
            backgroundColor: [
              '#076A73',
              '#D9EBE3'
            ],
            borderWidth: 0
          }]
        },
        options: {
          responsive: true,
          legend: {
            position: 'bottom',
            labels: false
          },
          tooltips: {
            intersect: true
          },
          plugins: {
            labels: {
              render: 'percentage',
              fontFamily: "'Belbo-Book', sans-serif",
              fontColor: '#FFFFFF',
              fontStyle: 'bold',
              fontSize: 24
            }
          }
        }
      }
    }
  },
  mounted() {
    this.createChart(this.chartId, this.chartConfig);
    let secondChartConfig = this.chartConfig;
    secondChartConfig.data.datasets[0].data = [55, 45];
    this.createChart(this.secondChartId, secondChartConfig);
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


