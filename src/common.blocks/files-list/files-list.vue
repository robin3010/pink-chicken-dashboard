<style lang="scss" src="./files-list.scss" />

<script setup>
import filesList__file from './__file/files-list__file.vue'
import { inject } from 'vue'

const isMobile = inject('isMobile')
const { plans, reports, getFile } = inject('filesList')

const showMoreHandler = (e, fileType) => {
  getFile(e, fileType)
}
</script>

<template>
  <div v-if="!isMobile" class="files-list">
    <div class="files-list__container">
      <span class="files-list__title">Файлы</span>
      <div
        v-if="!plans.length && !reports.length"
        class="files-list__content_empty"
      >
        <img
          src="/src/assets/background_files.svg"
          alt="Files placeholder background"
        />
        <span
          >Закажи у личного помощника медиаплан. Он появится в этом
          разделе</span
        >
      </div>
      <div v-else class="files-list__content">
        <div class="files-list__plans">
          <div class="files-list__plans-header">
            <span>Медиапланы</span>
          </div>
          <div class="files-list__plans-content">
            <template v-for="(plan, index) in plans" :key="index">
              <filesList__file :file="plan" type="plan" />
            </template>
            <button
              @click="showMoreHandler($event, 'plans')"
              class="files-list__show-more"
            >
              Показать еще
            </button>
          </div>
        </div>
        <div class="files-list__reports">
          <div class="files-list__reports-header">
            <span>Отчеты</span>
          </div>
          <div class="files-list__reports-content">
            <template v-for="(report, index) in reports" :key="index">
              <filesList__file :file="report" type="report" />
            </template>
            <button
              @click="showMoreHandler($event, 'reports')"
              class="files-list__show-more"
            >
              Показать еще
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
