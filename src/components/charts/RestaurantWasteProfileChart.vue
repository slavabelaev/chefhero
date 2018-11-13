<template>
  <figure class="chart-figure">
    <figcaption class="chart-figure__title">{{chartConfig.options.title.text}}</figcaption>
    <canvas :id="chartId" class="chart-figure__canvas"></canvas>
    <div class="md-layout">
      <div class="md-layout-item md-small-size-100">
        <small class="chart-figure__note">Note: This is a representation of Total Waste generated and does not depict what is diverted from landfill throught recycling and/or composting</small>
      </div>
      <div class="md-layout-item md-small-size-100">
        <cite class="chart-figure__source">Source: <a target="_blank" href="https://possector.com/">possector.com</a></cite>
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
      chartConfig: {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [9, 4, 10, 10, 67],
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
            'Recyclable Paper \nProducts & Packaging',
            'Commingled Recycling \nBottle and Cans',
            'Waste',
            'Cardboard',
            'Organics'
          ]
        },
        options: {
          responsive: true,
          cutoutPercentage: 60,
          legend: {
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
            text: 'Restaurant Waste Profile',
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
              precision: 2,
              fontColor: (data) => (data.index === 6 ? 'transparent' : '#FFFFFF'),
              fontStyle: 'bold',
              fontSize: 14
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

