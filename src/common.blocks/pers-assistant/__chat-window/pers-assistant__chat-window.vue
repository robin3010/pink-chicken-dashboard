<style lang="scss" src="./pers-assistant__chat-window.scss" />

<script setup>
import { getAssistantMsg } from '../pers-assistant'

const { addMsg } = defineProps({
  addMsg: Function
})

const message = defineModel()

const newLineHandler = () => {
  message.value = message.value + '\n'
}

const sendMsgHandler = (e) => {
  e.preventDefault()
  addMsg(message.value)
  message.value = ''

  const newAssistMsg = new Promise((resolve) => {
    setTimeout(() => resolve(getAssistantMsg()), 1e3)
  })
  newAssistMsg.then((res) => addMsg(res, false))
}
</script>

<template>
  <div class="pers-assistant__chat-window">
    <form action="#" class="pers-assistant__chat-form">
      <textarea
        v-model="message"
        @keydown.enter.exact="sendMsgHandler($event)"
        @keydown.ctrl.enter.exact="newLineHandler"
        @keydown.shift.enter.prevent
        name="chat"
        placeholder="Введите сообщение для администратора"
      />
      <div class="pers-assistant__chat-actions">
        <div class="pers-assistant__chat-files">
          <div class="pers-assistant__add-file"></div>
          <div class="pers-assistant__add-image"></div>
        </div>
        <button
          @click="sendMsgHandler($event)"
          :disabled="message === ''"
          type="submit"
          class="pers-assistant__submit-btn"
        ></button>
      </div>
    </form>
  </div>
</template>
