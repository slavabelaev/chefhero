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
          <md-button 
            @click="toggleDialog()" 
            onclick="clickOnButtonGetTheFullGuide(this)" 
            data-name="buttonInNavigation"
            v-if="isLargeScreen" class="md-raised md-default md-button__get-the-full-guide">
            <span>Get the full guide</span>
          </md-button>
          <md-button 
            @click="toggleDialog()" 
            onclick="clickOnButtonGetTheFullGuide(this)" 
            data-name="buttonInNavigation"
            class="md-icon-button" 
            v-if="!isLargeScreen">
            <md-icon>save_alt</md-icon>
          </md-button>
          <md-button v-if="supportPrint()" @click="printPage()" class="md-icon-button">
            <md-icon>print</md-icon>
          </md-button>
          <md-button to="/about" class="md-icon-button">
            <md-icon>help_outline</md-icon>
          </md-button>
        </div>
      </div>
    </md-app-toolbar>
    <!-- /Toolbar -->

    <!-- Drawer -->
    <md-app-drawer md-permanent="full" :md-active.sync="isActiveDrawer">
      <a target="_blank" href="https://www.chefhero.com/" class="app-logo">
        <img :src="require('./assets/logo.svg')" alt="ChefHero" class="app-logo__image">
      </a>
      <md-divider></md-divider>
      <md-steppers :md-active-step="$route.name" md-vertical id="app-navigation">
        <md-step :id="route.name"
                 :md-label="route.meta.title" 
                 :md-description="route.meta.metaTags[0].content"
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
      
      <div id="app-content-actions" v-if="$route.meta.needToShowInNavigation">
        <md-button class="md-raised md-default button__go-back" 
                    @click="goBack()" 
                    v-if="$route.name != 'starter'">Back</md-button>
        <md-button class="md-raised md-primary button__go-next" 
                   @click="goNext()" 
                   v-if="$route.name != 'about'">Next</md-button>
      </div>
      <!-- Dialog -->
      <md-dialog :md-active.sync="isActiveDialog" class="md-dialog__get-the-full-guide">
        <img :src="require('./assets/images/dialog__image.png')" alt="Ultimate Guide" class="md-dialog__image">
        <md-dialog-title class="title_theme_dark">Unlock your restaurant growth! Get access to the final chapter.</md-dialog-title>
        <form method="POST" action="https://chefhero.activehosted.com/proc.php">
          <input type="hidden" name="u" value="5C0FF6C051FB8">
          <input type="hidden" name="f" value="3">
          <input type="hidden" name="s">
          <input type="hidden" name="c" value="0">
          <input type="hidden" name="m" value="0">
          <input type="hidden" name="act" value="sub">
          <input type="hidden" name="v" value="2">

          <md-field>
              <label for="name">Your Name</label>
              <md-input name="name" id="name" required />
          </md-field>

          <md-field>
              <label for="email">Your Email</label>
              <md-input type="email" name="email" id="email" autocomplete="email" required />
          </md-field>

          <md-button class="md-accent md-raised md-button_size_middle" type="submit">Unlock chapter</md-button>
        </form>
        <div v-if="!isLargeScreen">
          <md-button class="md-icon-button md-raised md-dialog__close-button" @click="toggleDialog()">
            <md-icon>clear</md-icon>
          </md-button>
        </div>
      </md-dialog>
      <!-- /Dialog -->
    </md-app-content>
  </md-app>
</template>

<script>
export default {
  data() {
    return {
      isLargeScreen: true,
      isInitializedApp: false,
      isActiveDialog: false,
      isActiveDrawer: false,
      doneRoutes: {}
    } 
  },
  created() {
    this.isInitializedApp = true
    this._isLargeScreen();
    setTimeout(this.adaptDataTables, 1);
    window.addEventListener('resize', this._isLargeScreen);
  },
  watch: {
    $route () {
      this.isActiveDrawer = false;
      setTimeout(this.adaptDataTables, 1);
    }
  },
  methods: {
    getRouteIndex() {
      return this.$router.options.routes.findIndex(route => route.name == this.$route.name);
    },
    _isLargeScreen() {
      this.isLargeScreen = window.outerWidth > 992;
    },
    adaptDataTables(contentElementSelector) {
      const contentElement = contentElementSelector ? document.querySelector(contentElementSelector) : document;
      const tableElements = contentElement.querySelectorAll('table');
      tableElements.forEach(tableElement => {
          const headerElements = tableElement.querySelectorAll('thead > tr > *');
          const rowElements = tableElement.querySelectorAll('tbody > tr');
          rowElements.forEach(rowElement => {
              const cellElements = rowElement.querySelectorAll('td');
              cellElements.forEach((cellElement, index) => {
                const textContent = headerElements[index].textContent;
                if (textContent) cellElement.setAttribute('data-title', textContent)
              });
          });
      });
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
    },
    toggleDialog() {
      this.isActiveDialog = !this.isActiveDialog;
    }
  }
}
</script>


<style lang="scss">
@import "assets/scss/main.scss";
</style>
