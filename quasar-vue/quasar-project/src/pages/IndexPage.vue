<template>
  <q-page class="flex flex-center">
    <div>
      <HomeOptions />
    </div>
  </q-page>
</template>

<script setup>
import HomeOptions from 'components/HomeOptions.vue'

defineOptions({
  name: 'IndexPage'
});
</script>

<style scoped>
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
}
</style>
