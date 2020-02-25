<template>
  <b-container>
    <b-col>
      <h1>hello</h1>
      <form class="pb-4">
        <custom-text-input
          v-model="formValues.email"
          label= "email Input"
          type="email"
          attribute="email"
          placeholder="email"
          object="example"
          validation-id="email"
          :validation-rules="{ required: true, email: true }"
          validation-rule="required"
          cy="email-input"
        />
        <custom-text-input
            v-model="formValues.password"
            label="Password Field"
            placeholder="password"
            object="example"
            attribute="password"
            validation-id="password"
            validation-name="Password"
            validation-rules="required|min:3"
            type="password"
        />
        <CustomButton
          variant="primary"
          type="button"
          class="text-uppercase"
          data-cy="submit-button"
        >Save</CustomButton>
      </form>
    </b-col>
  </b-container>
</template>

<style scoped="scss">

</style>

<script>
import CustomTextInput from '../components/forms/CustomTextInput';
import CustomButton from '../components/forms/CustomButton';
export default {
  components: {
    CustomTextInput,
    CustomButton
  },
  data() {
    return {
      formValues: {
        email: null,
        password: null,
      }
    }
  },
}
</script>