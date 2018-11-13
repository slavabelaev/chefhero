<template>
  <figure class="extreme-aversion-figure">
    <figcaption class="extreme-aversion-figure__title">Extreme Aversion</figcaption>
    <div class="md-layout md-gutter">
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
    margin: 0;
    padding: 0;
    text-align: center;
    .md-card {
      margin: 0;
    }
    .md-card-header {
      margin-top: -80px;
    }
    .md-title {
      margin-bottom: 40px;
    }
  }
  .extreme-aversion-figure__title {
    text-align: center;
    margin-bottom: 1rem;
  }
  .extreme-aversion-figure__media {
    min-height: 200px;
    background-size: 100px;
    background-position: center 20px;
    background-repeat: no-repeat;
    background-color: #FFEBEE;
    border-radius: 4px 4px 0 0;
    z-index: -1;
  }
</style>
