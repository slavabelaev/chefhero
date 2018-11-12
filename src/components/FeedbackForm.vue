<template>
  <div>
    <form novalidate class="md-layout" @submit.prevent="validateFeedbackForm">
      <div class="md-layout-item md-small-size-100">
        <md-card-header>
          <div class="md-title">We appreciate your feedback!</div>
        </md-card-header>

        <md-card-content>
          <!-- Row -->
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('fullName')">
                <label for="full-name">Name</label>
                <md-input name="full-name" id="fullName" autocomplete="given-name" v-model="form.fullName" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.fullName.required">The full name is required</span>
                <span class="md-error" v-else-if="!$v.form.fullName.minlength">Invalid full name</span>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <h3 class="feedback-form__subtitle">Rate your experience</h3>
              <p class="feedback-form__description">(1 — poor, 5 — excellent)</p>
            </div>
          </div>
          <!-- /Row -->
          
          <!-- Row -->
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('email')">
                <label for="email">Email</label>
                <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.email.required">The email is required</span>
                <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <label for="foodRate">Food:</label>
              <div>
                <md-radio v-model="form.foodRate" :value="1">1</md-radio>
                <md-radio v-model="form.foodRate" :value="2">2</md-radio>
                <md-radio v-model="form.foodRate" :value="3">3</md-radio>
                <md-radio v-model="form.foodRate" :value="4">4</md-radio>
                <md-radio v-model="form.foodRate" :value="5">5</md-radio>
              </div>
            </div>
          </div>
          <!-- /Row -->
        
          <!-- Row -->
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('phone')">
                <label for="phone">Phone</label>
                <md-input type="tel" name="phone" id="phone" v-model="form.phone" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.email.required">The phone is required</span>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <label for="ambienceRate">Ambience:</label>
              <div>
                <md-radio v-model="form.ambienceRate" :value="1">1</md-radio>
                <md-radio v-model="form.ambienceRate" :value="2">2</md-radio>
                <md-radio v-model="form.ambienceRate" :value="3">3</md-radio>
                <md-radio v-model="form.ambienceRate" :value="4">4</md-radio>
                <md-radio v-model="form.ambienceRate" :value="5">5</md-radio>
              </div>
            </div>
          </div>
          <!-- /Row -->
          
          <!-- Row -->
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('willYouBeBack')">
                <label for="willYouBeBack">Will you be back?</label>
                <md-select name="willYouBeBack" id="willYouBeBack" v-model="form.willYouBeBack" md-dense :disabled="sending">
                  <md-option></md-option>
                  <md-option value="Yes">Yes</md-option>
                  <md-option value="No">No</md-option>
                </md-select>
                <span class="md-error">The "will you be back" is required</span>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <label for="serviceRate">Service:</label>
              <div>
                <md-radio v-model="form.serviceRate" :value="1">1</md-radio>
                <md-radio v-model="form.serviceRate" :value="2">2</md-radio>
                <md-radio v-model="form.serviceRate" :value="3">3</md-radio>
                <md-radio v-model="form.serviceRate" :value="4">4</md-radio>
                <md-radio v-model="form.serviceRate" :value="5">5</md-radio>
              </div>
            </div>
          </div>
          <!-- /Row -->
          
          <!-- Row -->
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-datepicker name="timeOfMeal" id="timeOfMeal" v-model="form.timeOfMeal" md-dense :disabled="sending">
                <label>Time/Date of Meal</label>
              </md-datepicker>
            </div>

            <div class="md-layout-item md-small-size-100">
            </div>
          </div>
          <!-- /Row -->
          
          <!-- Row -->
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('additionalComment')">
                <label>Additional Comment</label>
                <md-textarea name="additionalComment" id="additionalComment" v-model="form.additionalComment" md-dense :disabled="sending"></md-textarea>
              </md-field>
            </div>
          </div>
          <!-- /Row -->
        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="sending" />

        <md-card-actions>
          <md-button type="submit" class="md-raised md-primary" :disabled="sending">Send Feedback</md-button>
        </md-card-actions>
      </div>

      <md-snackbar :md-active.sync="isSendFeedback">The feedback was send success!</md-snackbar>
    </form>
  </div>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import {
    required,
    email,
    minLength,
    maxLength
  } from 'vuelidate/lib/validators'

  export default {
    name: 'FormValidation',
    mixins: [validationMixin],
    data: () => ({
      form: {
        fullName: null,
        email: null,
        phone: null,
        timeOfMeal: null,
        willYouBeBack: null,
        additionalComment: null,
        foodRate: null,
        ambienceRate: null,
        serviceRate: null
      },
      isSendFeedback: false,
      sending: false,
      lastUser: null
    }),
    validations: {
      form: {
        fullName: {
          required,
          minLength: minLength(3)
        },
        email: {
          required,
          email
        },
        phone: {
          required
        },
        timeOfMeal: {
          required
        },
        willYouBeBack: {
          required
        },
        additionalComment: {
          minLength: minLength(3),
          maxLength: maxLength(255)
        },
        foodRate: {
            required
        },
        ambienceRate: {
          required
        },
        serviceRate: {
          required
        }
      }
    },
    methods: {
      getValidationClass (fieldName) {
        const field = this.$v.form[fieldName]

        if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },
      clearForm () {
        this.$v.$reset()
        this.form.fullName = null
        this.form.email = null
        this.form.phone = null
        this.form.timeOfMeal = null
        this.form.willYouBeBack = null
        this.form.additionalComment = null
        this.form.foodRate = null
        this.form.ambienceRate = null
        this.form.serviceRate = null
      },
      sendFeedback () {
        this.sending = true

        // Instead of this timeout, here you can call your API
        window.setTimeout(() => {
          this.lastUser = this.form.fullName
          this.isSendFeedback = true
          this.sending = false
          this.clearForm()
        }, 1500)
      },
      validateFeedbackForm () {
        this.$v.$touch()

        if (!this.$v.$invalid) {
          this.sendFeedback()
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.md-progress-bar {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
}
.feedback-form__subtitle {
  margin-bottom: 0;
}
.feedback-form__description {
  margin-top: 0;
}
</style>