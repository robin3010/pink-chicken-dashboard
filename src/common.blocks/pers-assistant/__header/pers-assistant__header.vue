<style lang="scss" src="./pers-assistant__header.scss" />

<script setup>
import { ref } from 'vue'

const openMenu = ref(false)
</script>

<template>
  <div class="pers-assistant__header">
    <span class="pers-assistant__header-title">Личный помощник</span>
    <button
      @click="openMenu = !openMenu"
      :class="openMenu && 'active'"
      class="pers-assistant__menu-button"
    >
      <div v-if="openMenu" class="pers-assistant__menu">
        <button class="pers-assistant__menu-option">
          Обратная связь о работе сервиса
        </button>
        <button class="pers-assistant__menu-option">Сменить помощника</button>
      </div>
    </button>
    <!-- <Teleport to=".pers-assistant__menu-button"> -->
    <!-- </Teleport> -->
    <div class="pers-assistant__assistant-info">
      <span class="pers-assistant__assistant-name">Jim Davidson</span>
      <span class="pers-assistant__assistant-email"
        >Jim Davidson@adaurum@ru</span
      >
    </div>
  </div>
</template>
