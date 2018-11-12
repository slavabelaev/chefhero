<template>
    <md-steppers :md-active-step="$route.name" md-vertical>
        <md-step :id="route.name"
                 :md-label="route.meta.title" 
                 :md-description="route.meta.description"
                 :to="route.path"
                 v-for="route in $router.options.routes"
                 v-if="route.name != 'introduction' && route.name != 'about'"
                 :key="route.id"></md-step>
    </md-steppers>
</template>

<style lang="scss">
.md-steppers.md-vertical .md-stepper-content.md-active {
    padding: 0;
}
</style>

