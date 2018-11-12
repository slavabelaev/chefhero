<template>
  <md-app md-waterfall md-mode="fixed">
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
          <md-button download href="assets/The_Ultimate_Guide_to_Running_a_Restaurant.pdf" class="hide-on-small">
            <md-icon>save_alt</md-icon>
            <span>Download the guide</span>
          </md-button>
          <md-button download href="assets/The_Ultimate_Guide_to_Running_a_Restaurant.pdf" class="md-icon-button show-on-small">
            <md-icon>save_alt</md-icon>
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
      <app-logo></app-logo>
      <md-steppers :md-active-step="$route.name" md-vertical>
        <md-step :id="route.name"
                 :md-label="route.meta.title" 
                 :md-description="route.meta.description"
                 :to="route.path"
                 :md-done.sync="doneRoutes[route.name]"
                 v-for="route in $router.options.routes"
                 v-if="route.name != 'introduction' && route.name != 'about'"
                 :key="route.id"></md-step>
      </md-steppers>
    </md-app-drawer>
    <!-- /Drawer -->

    <md-app-content>
        <md-speed-dial class="md-bottom-right" md-direction="bottom">
					<md-button class="md-raised md-accent" @click="goNext()" v-if="$route.name != 'conclusion'">Next</md-button>
				</md-speed-dial>
				<md-speed-dial class="md-bottom-left" md-direction="bottom">
					<md-button class="md-raised md-default" @click="goBack()" v-if="$route.name != 'introduction'">Back</md-button>
				</md-speed-dial>

        <md-content id="app-content">
          <transition>
            <router-view></router-view>
          </transition>
        </md-content>

        <!-- About Dialog -->
        <md-dialog :md-active.sync="isActiveAboutDialog">
          <md-content id="app-about">
            <app-about></app-about>
          </md-content>
          <md-dialog-actions>
            <md-button target="_blank" href="https://www.chefhero.com/" class="md-primary">Get to know us</md-button>
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
      isActiveAboutDialog: false,
      isActiveDrawer: false,
      doneRoutes: {}
    } 
  },
  watch: {
    $route (to) {
      document.title = to.meta.title;
      document.querySelector('meta[name="description"]').content = to.meta.description;
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
