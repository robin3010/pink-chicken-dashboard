<style lang="scss" src="./pers-assistant__buttons.scss" />

<script setup>
import { inject } from 'vue'
import { BTN_CHAT_MSG } from './pers-assistant__buttons'

const { getFile } = inject('filesList')
const addMsg = inject('addMsgFunc')

const getFileHandler = (e, fileType) => {
  getFile(e, fileType)
  addMsg(BTN_CHAT_MSG[fileType])
}
</script>

<template>
  <div class="pers-assistant__buttons">
    <button
      @click="getFileHandler($event, 'reports')"
      type="button"
      class="pers-assistant__btn_primary"
    >
      Заказать отчет
    </button>
    <button
      @click="getFileHandler($event, 'plans')"
      type="button"
      class="pers-assistant__btn_accent"
    >
      Закать медиаплан
    </button>
  </div>
</template>
