<style lang="scss" src="./files-list__mobile.scss" />

<script setup>
import { inject } from 'vue'

const { btn_accent, btn_primary } = inject('filesMobClasses')
</script>

<template>
  <div class="files-list__mobile">
    <button
      type="button"
      :class="btn_accent"
      class="files-list__mobile-btn_accent"
    >
      Медиапланы
    </button>
    <button
      type="button"
      :class="btn_primary"
      class="files-list__mobile-btn_primary"
    >
      Отчеты
    </button>
  </div>
</template>
