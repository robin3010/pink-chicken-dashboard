<style lang="scss" src="./main.scss" />

<script setup>
import { provide, ref, watchEffect } from 'vue'
import FilesList from './common.blocks/files-list/files-list.vue'
import AppHeader from './common.blocks/app-header/app-header.vue'
import AppFooter from './common.blocks/app-footer/app-footer.vue'
import PersAssistant from './common.blocks/pers-assistant/pers-assistant.vue'
import { filesMobClasses } from './common.blocks/files-list/__mobile/files-list__mobile'

const isMobile = ref(window.innerWidth < 768)
provide('isMobile', isMobile)

watchEffect(() => {
  window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth < 768
  })
})

const filesList = ref({ plans: [], reports: [] })
const filesMobClassesRef = ref({
  btn_primary: { ...filesMobClasses },
  btn_accent: { ...filesMobClasses }
})

provide('filesMobClasses', filesMobClassesRef.value)

const getFile = (e, type) => {
  const fileType = filesList.value[type]

  const btnType = e.target.classList[0].split('__')[1]
  const mobClasses = filesMobClassesRef.value[btnType]
  const promise = new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          name: `Companyname ${fileType.length + 1}/23`,
          date: new Date().toLocaleDateString()
        }),
      1e3
    )
  })
  if (isMobile.value === true) {
    mobClasses.ready = false
    mobClasses.outline = true
    mobClasses.pending = true
  }

  promise.then((res) => {
    fileType.push(res)
    if (isMobile.value === true) {
      mobClasses.pending = false
      mobClasses.ready = true
    }
  })
}

provide('filesList', {
  ...filesList.value,
  getFile
})
</script>

<template>
  <header>
    <AppHeader />
  </header>
  <section class="main-container">
    <FilesList />
    <PersAssistant />
  </section>
  <footer>
    <AppFooter />
  </footer>
</template>
