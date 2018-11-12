<template>
  <figure class="chart-figure">
    <figcaption class="chart-figure__title">Why do customers stop frequenting a restaurant?</figcaption>
    <ul class="charts-figure__list">
      <li class="charts-figure__list-item">
        <figure class="chart-figure__item">
          <canvas :id="chartId"></canvas>
          <figcaption>73% cited rude staff as issue.</figcaption>
        </figure>
      </li>
      <li class="charts-figure__list-item">
        <figure class="chart-figure__item">
          <canvas :id="secondChartId"></canvas>
          <figcaption>55% cited issues that weren't resolved in timely manner.</figcaption>
        </figure>
      </li>
    </ul>
  </figure>
</template>

<script>
import Chart from 'chart.js';

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
          legend: {
            position: 'bottom',
            labels: false
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

<style lang="scss">
  .chart-figure__item,
  .chart-figure {
    text-align: center;
    padding: 0;
    margin: 0;
  }
  .charts-figure__list {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
  .charts-figure__list-item {
    flex: 1;
    min-width: 240px;
    margin-bottom: 12px;
  }
  .chart-figure__title {
    margin-bottom: 24px;
    font-size: 1.25rem;
  }
</style>


