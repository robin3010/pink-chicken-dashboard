<script setup>
const { message } = defineProps({
  message: {
    isUser: Boolean,
    msg: String,
    dateFull: String
  }
})
const { isUser, msg, dateFull } = message
const userClass = 'user'
</script>

<style lang="scss" src="./pers-assistant__chat-message.scss" />

<template>
  <div :class="isUser && userClass" class="chat-message">
    <template v-if="!isUser">
      <div class="chat-message__avatar">
        <img src="/src/assets/avatar.png" alt="avatar" />
      </div>
    </template>
    <div :class="isUser && userClass" class="chat-message__content">
      <div :class="isUser && userClass" class="chat-message__text">
        {{ msg }}
      </div>
      <div class="chat-message__sended">
        <template v-if="!isUser">
          <div class="chat-message__sended-by">Jim</div>
        </template>
        <div class="chat-message__send-time">{{ dateFull.split(', ')[1] }}</div>
      </div>
    </div>
  </div>
</template>
