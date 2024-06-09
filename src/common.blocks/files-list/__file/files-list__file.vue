<style lang="scss" src="./files-list__file.scss" />

<script setup>
import { reactive } from 'vue'

const { file, type } = defineProps({
  file: {
    name: String,
    date: String
  },
  type: String
})

const classes = reactive({
  ready: false,
  pending: false
})

const setReady = () => {
  classes.pending = true
  classes.ready = false
  const random = Math.floor((Math.random() * (7 - 1) + 1) * 1e3)
  const promise = new Promise((resolve) => {
    setTimeout(() => resolve('ok'), random)
  })
  promise.then(() => {
    classes.pending = false
    classes.ready = true
  })
}
</script>

<template>
  <div class="files-list__file">
    <div class="files-list__file-container">
      <div class="files-list__file-type" />
      <span>{{ file.name }}</span>
      <button
        type="button"
        :class="classes"
        @click="setReady"
        class="files-list__file-btn"
      />
    </div>
    <div
      v-if="classes.pending || classes.ready"
      class="files-list__file-status"
    >
      <div :class="classes" class="files-list__status-icon"></div>
      <template v-if="type === 'plan'">
        <span v-if="classes.ready">Медиаплан от {{ file.date }} готов</span>
        <span v-else>Медиаплан в процессе составления</span>
      </template>
      <template v-else-if="type === 'report'">
        <span v-if="classes.ready">Отчет от {{ file.date }} готов</span>
        <span v-else>Отчет формируется</span>
      </template>
    </div>
  </div>
</template>
