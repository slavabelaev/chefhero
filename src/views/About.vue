<template>
<article id="about">
    <div class="md-layout">
        <div class="md-layout-item md-medium-size-100">
            <h1>About ChefHero</h1>
            <hr>
            <p>ChefHero is an online mobile and web application that allows businesses to order whole-sale restaurant supplies from a network of dedicated regional suppliers. We are on a mission to build the world’s most trusted wholesale food network.</p>
            <p>Hundreds of restaurants, coffee shops, bars, etc have joined our community, helping you save time and money.</p>
            <p>If you’d like to learn more about how ChefHero can help you save time and money, please get in touch!</p>
        </div>
        <div class="md-layout-item md-medium-size-100">
            <a :href="require('../assets/images/about_image_1.png')" target="_blank" data-fancybox="gallery">
                <img :src="require('../assets/images/about_image_1.png')" alt="ChefHero App">
            </a>
        </div>
    </div>
</article>
</template>
