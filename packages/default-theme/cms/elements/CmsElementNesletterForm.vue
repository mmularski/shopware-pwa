<template>
  <div>
    <form
      action=""
      class="cms-element-sign-to-newsletter"
      @submit.prevent="submit"
    >
      <SfHeading
        :title="
          !formSent ? 'Subscribe to Newsletter' : 'Subscribed to Newsletter!'
        "
        :subtitle="
          !formSent
            ? 'Be aware of upcoming sales and events. Receive gifts and special offers!'
            : ''
        "
      />
      <div
        v-if="!formSent"
        class="form-actions"
        :class="{ bg: newsletterForm }"
      >
        <SwButton
          v-if="!newsletterForm"
          class="send button toggle-input"
          @click="
            {
              {
                newsletterForm = !newsletterForm
              }
            }
          "
        >
          {{ $t("Subscribe") }}
        </SwButton>

        <transition name="sf-fade" mode="out-in">
          <SfInput
            v-if="newsletterForm"
            v-model="email"
            type="email"
            name="email"
            label="Email address"
            error-message="Please enter a valid email address"
            :valid="!$v.email.$error"
            class="email small input"
            @blur="$v.email.$touch()"
          />
        </transition>

        <div v-if="errorMessage">
          <SfAlert
            v-for="(message, key) in errorMessage"
            :key="key"
            :message="message"
            type="danger"
            class="error-alert"
          />
        </div>

        <span>
          <SwButton
            v-if="newsletterForm"
            class="send button sf-button--full-width"
          >
            {{ $t("Subscribe") }}
          </SwButton>
        </span>
      </div>
    </form>
  </div>
</template>

<script>
import { SfInput, SfHeading, SfAlert } from "@storefront-ui/vue"
import { validationMixin } from "vuelidate"
import { required, email } from "vuelidate/lib/validators"
import SwButton from "@shopware-pwa/default-theme/components/atoms/SwButton"
import { newsletterSubscribe } from "@shopware-pwa/shopware-6-client"
import { ref } from "@vue/composition-api"
import { getApplicationContext } from "@shopware-pwa/composables"
import { getMessagesFromErrorsArray } from "@shopware-pwa/helpers"

export default {
  name: "CmsElementNewsletterForm",
  components: {
    SfInput,
    SwButton,
    SfHeading,
    SfAlert,
  },
  mixins: [validationMixin],
  props: {
    content: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      newsletterForm: false,
    }
  },
  setup(props, { root }) {
    const { apiInstance } = getApplicationContext(root, "SwFooter")
    const errorMessage = ref("")
    const email = ref(null)
    const formSent = ref(false)
    const sendForm = async () => {
      try {
        await newsletterSubscribe(
          {
            email: email.value,
            option: "subscribe",
            storefrontUrl:
              window &&
              window.location &&
              `${window.location.protocol}//${window.location.hostname}`,
          },
          apiInstance
        )
        formSent.value = true
      } catch (e) {
        errorMessage.value = getMessagesFromErrorsArray(e.message)
      }
    }

    return {
      email,
      sendForm,
      errorMessage,
      formSent,
    }
  },
  methods: {
    async submit() {
      this.errorMessage = ""
      this.$v.$touch()
      if (this.$v.$invalid) {
        return
      }

      await this.sendForm()
    },
  },
  validations: {
    email: {
      required,
      email,
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.cms-element-sign-to-newsletter {
  --heading-title-color: var(--c-white);
  --heading-subtitle-color: var(--c-white);

  align-items: center;
  background-color: rgba($color: #000000, $alpha: 0.7);
  display: flex;
  flex-direction: column;
  min-height: 231px;
  justify-content: space-around;
  padding-bottom: var(--spacer-sm);
  padding-left: var(--spacer-sm);
  padding-right: var(--spacer-sm);
  padding-top: var(--spacer-sm);

  .error-alert {
    margin-bottom: var(--spacer-sm);
  }

  .email {
    --input-color: var(--c-black);
    --input-border-color: var(--c-black);

    margin-bottom: var(--spacer-sm);
  }

  .email ::v-deep input:-webkit-autofill,
  input:-internal-autofill-selected {
    box-shadow: 0 0 0 1000px var(--c-white) inset;
    background-color: transparent;
    text-indent: var(--spacer-sm);
  }

  .toggle-input {
    --button-width: 218px;
  }

  @include for-desktop {
    flex-direction: row;
  }

  .form-actions {
    padding: var(--spacer-sm);

    &.bg {
      background-color: rgba($color: #ffffff, $alpha: 0.8);
    }
  }
}
</style>
