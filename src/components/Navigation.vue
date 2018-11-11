<template>
    <md-steppers md-vertical>
        <md-step :id="'navigation-item--' + index"
                 :md-label="navigationItem.title" 
                 :md-description="navigationItem.description"
                 :to="navigationItem.alias"
                 v-for="(navigationItem, index) in navigation" 
                 :key="navigationItem.id"></md-step>
    </md-steppers>
</template>

<script>
export default {
    data() {
        return {
            navigation: [
                { "title": "Restaurant Budgeting:", "description": "Getting Your Numbers Right", "alias": "/chapter/1" },
                { "title": "Location, Space, & Personality:", "description": "Setting the Scene for a Winning Restaurant", "alias": "/chapter/2" },
                { "title": "Restaurant Branding:", "description": "Concept, Brand Identity, Naming, and Logos", "alias": "/chapter/3" },
                { "title": "5 Steps to Kickstart", "description": "Your New Restaurant Business", "alias": "/chapter/4" },
                { "title": "Build the Best Team:", "description": "Finding and Managing Your Restaurant’s A-Team", "alias": "/chapter/5" },
                { "title": "Taking Restaurant Customer Service to the Next Level:", "description": "Strategies and Results", "alias": "/chapter/6" },
                { "title": "Menu Hacking:", "description": "Cost Per Meal & Smart Design to Maximize Profits", "alias": "/chapter/7" },
                { "title": "14 Essential Restaurant Metrics Every Owner", "description": "Should Measure and Track", "alias": "/chapter/8" },
                { "title": "The 19 Tech Tools You Need to Run", "description": "a Successful Restaurant", "alias": "/chapter/9" },
                { "title": "Greener Tomorrow:", "description": "A Step-By-Step Guide to Running an Eco-Conscious Restaurant", "alias": "/chapter/10" },
                { "title": "A Starter Guide to Instagram", "description": "Marketing for Restaurateurs", "alias": "/chapter/11" },
                { "title": "Conclusion", "alias": "/conclusion" }
            ]
        }
    }
}
</script>

<style lang="scss">
.md-steppers.md-vertical .md-stepper-content.md-active {
    padding: 0;
}
</style>

