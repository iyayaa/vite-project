<template>
  <h1>{{ msg }}</h1>
  <p>{{ user.name }}</p>
  <p>{{ user.counter }}</p>

  <button type="button" @click="count++">count is: {{ count }}</button>
</template>

<script setup lang="ts">
// import { defineComponent } from 'vue'
import { ref } from 'vue'
import { useUserStore } from '@/store'
defineProps<{ msg: string }>()
const count = ref(0)
const user = useUserStore()
</script>

<style less scoped>
a {
  color: #c030bb;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
