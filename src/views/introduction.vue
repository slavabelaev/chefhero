<template>
<article id="introduction" class="text-center">
    <h1 class="text-accent">Introduction</h1>
    <hr class="border-accent">
    <p class="extra-lead">From the outside looking in, owning and running a restaurant seems like a fun time. How hard can it be, right? Wrong</p>
    <div class="lead">
        <p>Nearly 60 percent of new restaurants will fail within their first 3 years. 80 percent will close within their first 5<sup><a target="_blank" href="https://news.osu.edu/restaurant-failure-rate-much-lower-than-commonly-assumed-study-finds/">[1]</a></sup>.</p>
        <p>So, when it comes to the ones that make it past the first 5 years, what are they doing right and what steps can you take to ensure that you’re on the path to success?</p>
        <p>This ultimate guide will provide you with the tools and knowledge you need to succeed as a restaurateur, from  pre-launch to actually running your establishment.</p>
    </div>
    <md-button @click="goNext()" class="md-accent md-raised large-button">LET'S GET STARTED <md-icon>chevron_right</md-icon></md-button>
</article>
</template>

<script>
export default {
    methods: {
        goNext() {
            document.querySelector('.button__go-next').click()
        }
    }
}
</script>
