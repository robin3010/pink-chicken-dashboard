<style lang="scss" src="./app-footer.scss" />

<template>
  <div class="app-footer">
    <div class="app-footer__container">
      <div class="app-footer__content">
        <div class="app-footer__brand">
          <img
            src="/src/assets/brand_logo_gray.svg"
            alt="Pink Chicken Logo gray"
          />
        </div>
        <!-- <div class="app-footer__privacy-link"> -->
        <a class="app-footer__privacy-link" href="#"
          >Политика конфиденциальности</a
        >
        <!-- </div> -->
      </div>
      <div class="app-footer__content">
        <a class="app-footer__email-link" href="mailto:pinkchicken@adaurum.ru"
          >pinkchicken@adaurum.ru</a
        >
        <div class="app-footer__lang-container">
          <div class="app-footer__global-icon"></div>
          <div class="app-footer__lang-group">
            <span class="app-footer__lang-code_accent">RU</span>
            <span class="app-footer__lang-code">EN</span>
            <span class="app-footer__lang-code">TUR</span>
          </div>
        </div>
        <div class="app-footer__feedback-group">
          <div class="app-footer__telegram-icon">
            <a class="app-footer__telegram-link" href="#telegram" />
          </div>
          <div class="app-footer__whatsapp-icon">
            <a class="app-footer__whatsapp-link" href="#whatsapp" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
