<template>
  <ValidationProvider
    ref="validator"
    slim
    :rule="validationRules"
    :vid="validationId"
    :mode="validationMode"
    :name="validationName || label || placeholder"
  >
    <template v-slot="{errors, flags, valid }">
      <b-form-group
        :label="labelText"
        :label-for="inputId"
        :invalid-feedback="errors[0]"
        :description="description"
        :state="flags.validated ? valid : null"
        :class="inputClass"
        :disabled="disabled"
      >
        <slot 
          name="input"
          v-bind="{inputId, validationRules, errors, flags, valid}"
        />
        <b-form-input
          :id="inputId"
          :name="attribute"
          :type="type"
          :placeholder="placeholder"
          :class="inputClass"
          @change="triggerChange"
          v-model="innerValue"
          :state="(showValidationStateIcon && flags.validated) ? (valid ? (hasValue ? true : null) : false) : null"
          :disabled="disabled"
          :data-cy="cy"
          trim
        ></b-form-input>
      </b-form-group>
    </template>
  </ValidationProvider>
</template>

<style lang="scss">

</style>

<script>
  import {ValidationProvider} from 'vee-validate';
export default {
  components: {
    ValidationProvider
  },
  props: {
    object: {type: String, required: true},
    attribute: { type: String, required: true },
    type: {type: String, default: 'text'},
    label: {type: [String, Boolean]},
    placeholder: {type: String},
    description: { type: String },
    value: {},
    validationId: {},
    validationName: {},
    validationRules: {},
    validationMode: {type:String, default: 'eager'},
    showValidationStateIcon: {type: Boolean, default: true},
    disabled: {type: Boolean, default: false},
    inputClass: {type: String},
    cy: {type: String}
  },
  computed: {
    inputId () {
      return `${this.object}_${this.attribute}`
    },
    innerValue: {
      get: function() {
        return this.value
      },
      set: function(value){
        return this.$emit("input", value);
      }
    },
    hasValue() {
      if (this.value == undefined) return false;
      if (Array.isArray(this.value) && this.value.length === 0) return false;
      return !!this.value.toString().trim();
    },
    labelText() {
      if (!this.label) return null;

      let result = this.label;
      if (result === true) result = this.attribute;
      if (this.isRequired) result = `* ${result}`;
      return result.toString();
    },
    isRequired() {
      if (this.validationRules) {
        if (typeof this.validationRules === "string") {
          return this.validationRules.match(/required/gi) !== null;
        } else if (typeof this.validationRules === "object") {
          return (
            this.validationRules["required"] ||
            this.validationRules["required_if"]
          );
        }
      }
      return false;
    },
  },
  methods: {
    triggerChange(val) {
      this.$emit("change", val);
    }
  }
}
</script>