<script setup>
import { onMounted, ref, watchEffect } from 'vue'
import PersAssistant__buttons from '../__buttons/pers-assistant__buttons.vue'
import PersAssistant__chatMessage from '../__chat-message/pers-assistant__chat-message.vue'
import { chatStartDate } from '../pers-assistant'

const { chatHistory } = defineProps({
  chatHistory: Array,
  addMsg: Function
})

const chatRef = ref(null)

watchEffect(() => {
  if (chatRef.value !== null && chatHistory.length) {
    document.querySelector('.pers-assistant__buttons').scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'nearest'
    })
  }
})

onMounted(() => {
  chatRef.value.focus()
})
</script>

<template>
  <div ref="chatRef" class="pers-assistant__chat-history">
    <div class="chat-history__date">
      {{ chatStartDate(chatHistory) }}
    </div>
    <template v-for="(message, index) in chatHistory" :key="index">
      <PersAssistant__chatMessage :message="message" />
    </template>
  </div>
  <PersAssistant__buttons :addMsg="addMsg" :chatHistory="chatHistory" />
</template>
