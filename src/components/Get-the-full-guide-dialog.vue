<template>
<!-- Dialog -->
<md-dialog :md-active.sync="isActiveDialog" class="md-dialog__get-the-full-guide">
    <header class="md-dialog__header">
        <img :src="require('../assets/images/chefhero_ultimate_guide.png')" alt="ChefHero Ultimate Guide" class="md-dialog__image">
        <h2 class="md-dialog__title">Unlock your restaurant growth! Get access to the final chapter.</h2>
    </header>
    <div class="md-dialog__body">
        <form
            onsubmit="onSubmitUnlockChapterForm(this)" 
            :data-route="$route.name"
            method="POST" 
            action="https://chefhero.activehosted.com/proc.php">
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

            <md-button 
            class="md-accent md-raised md-button_size_middle" 
            type="submit">Unlock chapter</md-button>
        </form>
        <div v-if="!isLargeScreen">
            <md-button class="md-icon-button md-raised md-dialog__close-button" @click="toggleDialog()">
                <md-icon>clear</md-icon>
            </md-button>
        </div>
    </div>
</md-dialog>
<!-- /Dialog -->
</template>

<script>
export default {
    data: () => {
        return {
            isActiveDialog: false,
            isLargeScreen: true
        }
    },
    created() {
        window.toggleDialog = this.toggleDialog;
        this._isLargeScreen();
    },
    methods: {
        toggleDialog() {
            this.isActiveDialog = !this.isActiveDialog;
        },
        _isLargeScreen() {
            this.isLargeScreen = window.outerWidth > 992;
        }
    }
}
</script>
