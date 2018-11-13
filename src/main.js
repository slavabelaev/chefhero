import Vue from 'vue'
import VueMaterial from 'vue-material'
Vue.use(VueMaterial)
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import AppAbout from './views/About.vue'
Vue.component('app-about', AppAbout)
import AppLogo from './components/Logo.vue'
Vue.component('app-logo', AppLogo)

import BudgetPlanChart from './components/charts/BudgetPlanChart.vue'
Vue.component('budget-plan-chart', BudgetPlanChart)
import TypicalRestaurantExpensesChart from './components/charts/TypicalRestaurantExpensesChart.vue'
Vue.component('typical-restaurant-expenses-chart', TypicalRestaurantExpensesChart)
import AnnualEmployeeTurnoverRatesChart from './components/charts/AnnualEmployeeTurnoverRatesChart.vue'
Vue.component('annual-employee-turnover-rates-chart', AnnualEmployeeTurnoverRatesChart)
import AverageChefSalariesByPositionChart from './components/charts/AverageChefSalariesByPositionChart.vue'
Vue.component('average-chef-salaries-by-position-chart', AverageChefSalariesByPositionChart)
import TopReasonsEmployeesQuitChart from './components/charts/TopReasonsEmployeesQuitChart.vue'
Vue.component('top-reasons-employees-quit-chart', TopReasonsEmployeesQuitChart)
import ReasonsForStoppingVisitingRestaurantsChart from './components/charts/ReasonsForStoppingVisitingRestaurantsChart.vue'
Vue.component('reasons-for-stopping-visiting-restaurants-chart', ReasonsForStoppingVisitingRestaurantsChart)
import TotalRestaurantOperatingCostsChart from './components/charts/TotalRestaurantOperatingCostsChart.vue'
Vue.component('total-restaurant-operating-costs-chart', TotalRestaurantOperatingCostsChart)
import RestaurantPrimeCostChart from './components/charts/RestaurantPrimeCostChart.vue'
Vue.component('restaurant-prime-cost-chart', RestaurantPrimeCostChart)
import AverageRestaurantOperatingCostsChart from './components/charts/AverageRestaurantOperatingCostsChart.vue'
Vue.component('average-restaurant-operating-costs-chart', AverageRestaurantOperatingCostsChart)
import RestaurantEnergyUseChart from './components/charts/RestaurantEnergyUseChart.vue'
Vue.component('restaurant-energy-use-chart', RestaurantEnergyUseChart)
import RestaurantWasteProfileChart from './components/charts/RestaurantWasteProfileChart.vue'
Vue.component('restaurant-waste-profile-chart', RestaurantWasteProfileChart)

import ExtremeAversionFigure from './components/figures/ExtremeAversionFigure.vue'
Vue.component('extreme-aversion-figure', ExtremeAversionFigure)

import FeedbackForm from './components/FeedbackForm.vue'
Vue.component('feedback-form', FeedbackForm)

import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
