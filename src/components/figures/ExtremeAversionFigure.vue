<template>
  <figure class="figure extreme-aversion-figure">
    <figcaption class="figure__title">Extreme Aversion</figcaption>
    <div class="md-layout">
      <div class="md-layout-item md-small-size-100">
        <md-card>
          <md-card-media 
            class="extreme-aversion-figure__media" 
            :style="{ backgroundImage: 'url(' + require('../../assets/images/low_burger.svg') + ')' }"></md-card-media>
          <md-card-header>
            <div class="md-title">$1</div>
            <div class="md-subhead">Risk: <br>Trying to save money. <br>May be too small.</div>
          </md-card-header>
        </md-card>
      </div>
      <div class="md-layout-item md-small-size-100">
        <md-card>
          <md-card-media 
            class="extreme-aversion-figure__media"
            :style="{ backgroundImage: 'url(' + require('../../assets/images/middle_burger.svg') + ')' }"></md-card-media>
          <md-card-header>
            <div class="md-title">$5</div>
            <div class="md-subhead">The <br>comfortable <br>middle</div>
          </md-card-header>
        </md-card>
      </div>
      <div class="md-layout-item md-small-size-100">
        <md-card>
          <md-card-media 
            class="extreme-aversion-figure__media"
            :style="{ backgroundImage: 'url(' + require('../../assets/images/high_burger.svg') + ')' }"></md-card-media>
          <md-card-header>
            <div class="md-title">$8</div>
            <div class="md-subhead">Risk: <br>Spending to much. <br>May be to large.</div>
          </md-card-header>
        </md-card>
      </div>
    </div>
  </figure>
</template>

<style lang="scss">
.extreme-aversion-figure {
  .md-card {
    margin-left: 0;
    margin-right: 0;
    text-align: center;
    background-color: #F0F0F5;
  }
  .md-card-header {
    background-color: #F0F0F5;
  }
  .md-subhead {
    opacity: 1;
    font-size: 1rem;
  }
  .md-title {
    margin-bottom: 1rem;
    font-weight: bold;
  }
}
.extreme-aversion-figure__media {
  min-height: 150px;
  background-size: 100px;
  background-position: center 20px;
  background-repeat: no-repeat;
  background-color: #E8A6A6;
  border-radius: 4px 4px 0 0;
  z-index: -1;
}
</style>
