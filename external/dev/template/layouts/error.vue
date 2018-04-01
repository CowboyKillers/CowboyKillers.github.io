<template>
  <div class="container">
      <br><br><br>
      <div class="siimple-box siimple-box--pink">
          <br><br>
          <div class="siimple-box-title">404</div>
          <br>
          <div class="siimple-box-subtitle">Looks like you're in the wrong part of town buddy</div>
      </div>
      <br>
      <a href="https://dribbble.com/shots/2116242-Bad-luck" target="_blank">
          <img class="helperPic" src="../assets/bandit404.gif">
      </a>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'default'
}
</script>

<style lang="sass" scoped>
.container
  display: block
  width: 75em
  align-items: center
  text-align: center
  margin-left: auto
  margin-right: auto

.siimple-box-title
    -webkit-transform: scale(1.5)
    -ms-transform: scale(1.5)
    transform: scale(1.5)
    transition: all 0.3s ease-in
.siimple-box-subtitle
    -webkit-transform: scale(.7)
    -ms-transform: scale(.7)
    transform: scale(.7)
    transition: all 0.3s ease-in
.helperPic
    position: relative
    height: 350px


</style>
