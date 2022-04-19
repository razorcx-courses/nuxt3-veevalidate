<template>
  <div class="columns is-mobile is-vcentered is-centered is-gapless">
    <div
      class="column is-10"
    >
      <h2 class="title is-2 has-text-centered my-6">VeeValidate Quickstart</h2>
      <VForm class="card p-6 has-background-light">
        <VField
          name="field"
          :rules="isRequired"
          class="input"
          placeholder="Enter text"
        />
        <VErrorMessage name="field" class="help is-danger" />
      </VForm>
    </div>
  </div>
</template>

<script setup>
const isRequired = (value) => {
  if (value && value.trim()) {
    return true;
  }
  return "This is required right now!";
};
</script>