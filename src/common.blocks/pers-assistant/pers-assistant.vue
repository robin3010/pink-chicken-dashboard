<style lang="scss" src="./pers-assistant.scss" />

<script setup>
import { inject, provide, ref } from 'vue'
import PersAssistant__header from './__header/pers-assistant__header.vue'
import PersAssistant__chatWindow from './__chat-window/pers-assistant__chat-window.vue'
import PersAssistant__buttons from './__buttons/pers-assistant__buttons.vue'
import persAssistant__chatHistory from './__chat-history/pers-assistant__chat-history.vue'
import { dateFormatted } from './pers-assistant'

const isMobile = inject('isMobile')
const userMsg = ref('')
const chatHistory = ref([])

const addMsg = (msg, isUser = true) => {
  if (msg) {
    const newMsg = new Promise((resolve) => {
      setTimeout(() => resolve(msg), 1e3)
    })
    newMsg.then((res) => {
      chatHistory.value.push({
        isUser: isUser,
        msg: res,
        dateFull: dateFormatted(new Date())
      })
    })
  }
}

provide('addMsgFunc', addMsg)
provide('chatHistory', chatHistory.value)
</script>

<template>
  <div class="pers-assistant">
    <div class="pers-assistant__container">
      <component :is="!isMobile && PersAssistant__header" />
      <div class="pers-assistant__chat-container">
        <div
          :class="
            chatHistory.length
              ? 'pers-assistant__chat-content'
              : 'pers-assistant__chat-content_empty'
          "
        >
          <template v-if="!chatHistory.length">
            <img
              src="/src/assets/background_assistant.svg"
              alt="Assistant placeholder background"
            />
            <span
              >Это чат с администратором. Ты можешь с ним пообщаться по любому
              вопросу о нашем сервисе и узнать о ходе работы
            </span>
            <PersAssistant__buttons />
          </template>
          <template v-else>
            <persAssistant__chatHistory
              :chatHistory="chatHistory"
              :addMsg="addMsg"
            />
          </template>
        </div>
        <PersAssistant__chatWindow v-model="userMsg" :addMsg="addMsg" />
      </div>
    </div>
  </div>
</template>
