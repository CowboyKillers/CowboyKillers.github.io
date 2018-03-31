<template>
    <section class="container">
        <br><br><br>

        <div class="siimple-grid-row">
            <div class="siimple-grid-col siimple-grid-col--12">
                <div class="myH3 siimple-h3">
                    Our Products <a class="title">&</a> Companies
                </div>
            </div>
        </div>

        <div class="projectRow">
            <div class="siimple-grid-row">
                <div class="projectCard siimple-grid-col siimple-grid-col--6">
                    <div class="siimple-box siimple-box--blue">
                        <div class="siimple-box-title" style="margin-top: 70px;">BlockFantasy</div>
                        <div class="siimple-box-title">
                            <img src="../assets/BF.svg" height="100" style="margin-top: 40px; margin-bottom: 40px">
                        </div>
                        <div class="siimple-box-detail" style="color: #000;">( coming soon )</div>
                    </div>
                    <div class="siimple-h6">Fantasy Sports staking built on <br> Ethereum smart contracts</div>
                    <div class="siimple-btn siimple-btn--pink siimple-btn--disabled">
                        Case Study <icon name="arrow-right" scale=".5" style="margin-left: 2px"></icon>
                    </div>
                </div>
                <div class="projectCard siimple-grid-col siimple-grid-col--6">
                    <br><br><br><br>
                    <div class="siimple-box siimple-box--purple">
                        <div class="siimple-box-title" style="margin-top: 70px; color: #B493F2;">BlockBattle</div>
                        <div class="siimple-box-title">
                            <img src="../assets/BB.svg" height="100" style="margin-top: 40px; margin-bottom: 40px">
                        </div>
                        <div class="siimple-box-detail" style="color: #B493F2;">( coming soon )</div>
                    </div>
                    <div class="siimple-h6">Battle Royale staking built on <br> Ethereum smart contracts</div>
                    <div class="siimple-btn siimple-btn--pink siimple-btn--disabled">
                        Case Study <icon name="arrow-right" scale=".5" style="margin-left: 2px"></icon>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<script>

export default {
    scrollToTop: true
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

a.title
  color: #EEB5CA
  cursor: pointer
.myH3
  text-align: center
  line-height: 2em
  cursor: pointer

.siimple-box
  align-items: center
  text-align: center
  margin-top: 5em

.siimple-box--blue
  background-color: #B0F2FC
.siimple-box--purple
  border: 6px solid #B493F2
  background-color: #fff
.projectRow
  width: 800px
  margin-left: auto
  margin-right: auto
.projectCard
  transition: all 0.3s ease-out
  cursor: pointer
  .siimple-h6
      color: #8E8D89
      line-height: 1.5em
      text-align: left
  .siimple-btn
      margin-top: 2em
  .siimple-btn--pink
      background-color: #EEB5CA
  // .siimple-tag
  //     margin-top: 2.5em
  //     -webkit-transform: scale(1.5)
  //     -ms-transform: scale(1.5)
  //     transform: scale(1.5)
  //     transition: all 0.3s ease-in
  // .siimple-tag--pink
  //     background-color: #EEB5CA
  //     font-weight: bold
  // .siimple-tag--pink:hover
  //     background-color: #FDCADA
.projectCard:hover
  -webkit-transform: scale(1.05)
  -ms-transform: scale(1.05)
  transform: scale(1.05)
  transition: all 0.3s ease-in


</style>
