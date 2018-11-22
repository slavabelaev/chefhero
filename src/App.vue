<template>
  <md-app md-mode="fixed" :class="{ 'initialized': isInitializedApp }">
    <!-- Toolbar -->
    <md-app-toolbar class="md-primary">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start show-on-small">
          <md-button class="md-icon-button" @click="isActiveDrawer = !isActiveDrawer">
            <md-icon>menu</md-icon>
          </md-button>
        </div>
        <span class="md-title">The Ultimate Guide to <strong>Running a Restaurant</strong></span>
        <div class="md-toolbar-section-end">
          <md-button download target="_blank" href="https://gallery.mailchimp.com/03cd0c9f95408ab054f81b5d8/files/55917a52-a951-4ca5-96f5-92bbc4a90376/ChefHero_UltimateGuide.pdf" v-if="isLargeScreen" class="md-raised md-default">
            <md-icon>save_alt</md-icon>
            <span>Download the guide</span>
          </md-button>
          <md-button download target="_blank" href="https://gallery.mailchimp.com/03cd0c9f95408ab054f81b5d8/files/55917a52-a951-4ca5-96f5-92bbc4a90376/ChefHero_UltimateGuide.pdf'" class="md-icon-button" v-if="!isLargeScreen">
            <md-icon>save_alt</md-icon>
          </md-button>
          <md-button v-if="supportPrint()" @click="printPage()" class="md-icon-button">
            <md-icon>print</md-icon>
          </md-button>
          <md-button @click="isActiveAboutDialog = true" class="md-icon-button">
            <md-icon>help_outline</md-icon>
          </md-button>
        </div>
      </div>
    </md-app-toolbar>
    <!-- /Toolbar -->

    <!-- Drawer -->
    <md-app-drawer md-permanent="full" :md-active.sync="isActiveDrawer">
      <router-link to="/" class="app-logo">
        <img :src="require('./assets/logo.svg')" alt="ChefHero" class="app-logo__image">
      </router-link>
      <md-divider></md-divider>
      <md-steppers :md-active-step="$route.name" md-vertical>
        <md-step :id="route.name"
                 :md-label="route.meta.title" 
                 :md-description="route.meta.description"
                 :to="route.path"
                 :md-done="doneRoutes[route.name]"
                 v-for="route in $router.options.routes"
                 v-if="route.meta.needToShowInNavigation"
                 :key="route.id"></md-step>
      </md-steppers>
      <md-divider></md-divider>
      <div align="center">
        <md-button target="_blank" href="https://www.chefhero.com/" class="md-primary">Go to Website</md-button>
      </div>
    </md-app-drawer>
    <!-- /Drawer --> 

    <md-app-content>
      <md-content id="app-content">
        <router-view></router-view>
      </md-content>
      
      <div id="app-content-actions" v-if="$route.meta.needToShowInNavigation || $route.name == 'introduction'">
        <md-button class="md-raised md-default" 
                    @click="goBack()" 
                    v-if="$route.name != 'introduction'">Back</md-button>
        <md-button class="md-raised md-primary" 
                   @click="goNext()" 
                   v-if="$route.name != 'conclusion'">Next</md-button>
      </div>

      <!-- About Dialog -->
      <md-dialog :md-active.sync="isActiveAboutDialog">
        <md-content id="app-about">
          <app-about></app-about>
        </md-content>
        <md-dialog-actions>
          <md-button target="_blank" href="https://www.chefhero.com/" class="md-primary md-raised">Get to know us</md-button>
          <md-button class="md-primary" @click="isActiveAboutDialog = false">Close</md-button>
        </md-dialog-actions>
      </md-dialog>
      <!-- /About Dialog -->
    </md-app-content>
  </md-app>
</template>

<script>
export default {
  data() {
    return {
      isLargeScreen: true,
      isInitializedApp: false,
      isActiveAboutDialog: false,
      isActiveDrawer: false,
      doneRoutes: {}
    } 
  },
  created() {
    this.isInitializedApp = true
    this._isLargeScreen();
    window.addEventListener('resize', this._isLargeScreen);
  },
  watch: {
    $route (to) {
      document.title = to.meta.title + ' ' + to.meta.description;
      document.querySelector('meta[name="description"]').content = to.meta.description;
      document.querySelector('meta[name="keywords"]').content = to.meta.keywords;
      this.pageScrollToTop();
      this.isActiveDrawer = false;
    }
  },
  methods: {
    pageScrollToTop() {
      document.querySelector('.md-app-scroller').scrollTop = 0;
    },
    getRouteIndex() {
      return this.$router.options.routes.findIndex(route => route.name == this.$route.name);
    },
    _isLargeScreen() {
      this.isLargeScreen = window.outerWidth > 992;
    },
    supportPrint() {
      return !!window.print;
    },
    printPage() {
      window.print();
    },
    goNext() {
      const routes = this.$router.options.routes;
      let routeIndex = this.getRouteIndex();
      if (routeIndex < routes.length) {
        const doneRoute = routes[routeIndex];
        this.doneRoutes[doneRoute.name] = true;
        routeIndex++;
        const navigateToRoute = routes[routeIndex];
        this.$router.push(navigateToRoute);
      }
    },
    goBack() {
      const routes = this.$router.options.routes;
      let routeIndex = this.getRouteIndex();
      if (routeIndex > 0) {
        routeIndex--;
        this.$router.push(routes[routeIndex]);
      }
    }
  }
}
</script>


<style lang="scss">
@import "assets/scss/main.scss";
</style>
