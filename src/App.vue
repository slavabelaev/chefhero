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
      <app-navigation></app-navigation>
    </md-app-drawer>
    <!-- /Drawer -->

    <md-app-content>
        <md-speed-dial class="md-bottom-right" md-direction="bottom">
					<md-button class="md-raised md-accent" @click="goNext()" v-if="$route.path != '/conclusion'">Next</md-button>
				</md-speed-dial>
				<md-speed-dial class="md-bottom-left" md-direction="bottom">
					<md-button class="md-raised md-default" @click="goBack()" v-if="$route.path != '/'">Back</md-button>
				</md-speed-dial>
        
        <md-content id="app-content">
          <router-view></router-view>
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
      isActiveDrawer: false
    } 
  },
  methods: {
    getCurrentChapter() {
      return +this.$route.path.match(/(?!chapter\/)\d*$/)[0];
    },
    goNext() {
      let currentPage = this.getCurrentChapter(),
          nextPage = currentPage + 1;
      if (nextPage === 12) this.$router.push('/conclusion');
      if (nextPage < 12) this.$router.push('/chapter/' + nextPage);
    },
    goBack() {
      let currentPage = this.getCurrentChapter(),
          prevPage = currentPage - 1;
      if (prevPage === -1) this.$router.push('/chapter/11');
      if (prevPage === 0) this.$router.push('/');
      if (prevPage > 0) this.$router.push('/chapter/' + prevPage);
    }
  }
}
</script>


<style lang="scss">
@import "assets/scss/main.scss";
</style>
