<template>
  <b-button v-bind="forwardProps" v-on="forwardListeners">
    <slot name="loading" v-if="isLoading">
      <slot></slot>
      <slot name="loading-indicator">
        <b-spinner small/>
      </slot>
    </slot>
    <slot v-else></slot>
  </b-button>
</template>

<script>
export default {
  props: {
    disabled: { type: Boolean, default: false },
    loading: {
      type: [Boolean, String],
      default: "auto",
      validator: propVal => {
        return [true, false, "auto", "true", "false"].indexOf(propVal) >= 0;
      }
    },
    disabledWhenLoading: { type: Boolean, default: true }
  },
  data() {
    return { autoLoading: false };
  },
  computed: {
    isLoading() {
      return this.loading === "auto" ? this.autoLoading : this.loading.toString() === 'true';
    },
    isDisabled() {
      return this.disabled || (this.isLoading && this.disabledWhenLoading);
    },
    forwardProps() {
      return { ...this.$attrs, disabled: this.isDisabled };
    },
    forwardListeners() {
      return { ...this.$listeners, click: this.handleClick };
    }
  },
  methods: {
    async handleClick(event) {
      if (!this.$listeners.click) return;
      try {
        this.autoLoading = true;
        await this.$listeners.click(event);
      } finally {
        this.autoLoading = false;
      }
    }
  }
};
</script>
