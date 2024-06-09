<style lang="scss" src="./app-header.scss" />

<script setup>
import { inject } from 'vue'
import FilesList__mobile from '../files-list/__mobile/files-list__mobile.vue'
import PersAssistant__header from '../pers-assistant/__header/pers-assistant__header.vue'
const isMobile = inject('isMobile')
</script>

<template>
  <div class="app-header">
    <div class="app-header__container">
      <div class="app-header__brand">
        <img src="/src/assets/brand_logo.svg" alt="Pink Chicken Logo" />
      </div>
      <div class="app-header__user-panel">
        <div class="app-header__user-info">
          <span class="app-header__user-name">Username@adaurum.ru</span>
          <span class="app-header__user-card"> 5% </span>
        </div>
        <div class="app-header__user-buttons">
          <button type="button" class="app-header__setting-btn"></button>
          <button type="button" class="app-header__login-btn"></button>
        </div>
      </div>
      <component :is="isMobile && FilesList__mobile" />
      <component :is="isMobile && PersAssistant__header" />
    </div>
  </div>
</template>
