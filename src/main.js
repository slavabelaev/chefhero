import Vue from 'vue'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import AppAbout from './views/about.vue'
import AppLogo from './components/Logo.vue'
import AppNavigation from './components/Navigation.vue'

import BudgetPlanChart from './components/charts/BudgetPlanChart.vue'
Vue.component('budget-plan-chart', BudgetPlanChart)
import TypicalRestaurantExpensesChart from './components/charts/TypicalRestaurantExpensesChart.vue'
Vue.component('typical-restaurant-expenses-chart', TypicalRestaurantExpensesChart)
Vue.component('budget-plan-chart', BudgetPlanChart)
import AnnualEmployeeTurnoverRatesChart from './components/charts/AnnualEmployeeTurnoverRatesChart.vue'
Vue.component('annual-employee-turnover-rates-chart', AnnualEmployeeTurnoverRatesChart)
Vue.component('budget-plan-chart', BudgetPlanChart)
import AverageChefSalariesByPositionChart from './components/charts/AverageChefSalariesByPositionChart.vue'
Vue.component('average-chef-salaries-by-position-chart', AverageChefSalariesByPositionChart)
Vue.component('budget-plan-chart', BudgetPlanChart)
import TopReasonsEmployeesQuitChart from './components/charts/TopReasonsEmployeesQuitChart.vue'
Vue.component('top-reasons-employees-quit-chart', TopReasonsEmployeesQuitChart)

import App from './App.vue'
import router from './router'

Vue.component('app-logo', AppLogo)
Vue.component('app-about', AppAbout)
Vue.component('app-navigation', AppNavigation)


Vue.use(VueMaterial)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
