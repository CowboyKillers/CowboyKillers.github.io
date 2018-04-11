<template>
    <section v-if='!caseOn' class="container">
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
                <div class="projectCard siimple-grid-col siimple-grid-col--6 siimple-grid-col-md--12">
                    <div class="siimple-box siimple-box--blue">
                        <div class="siimple-box-title" style="margin-top: 70px;">BlockFantasy</div>
                        <div class="siimple-box-title">
                            <img src="../assets/BF.svg" height="100" style="margin-top: 40px; margin-bottom: 40px">
                        </div>
                        <div class="siimple-box-detail" style="color: #000;">( alpha build )</div>
                    </div>
                    <div class="siimple-h6">Fantasy Sports staking built on <br> Ethereum smart contracts</div>
                    <div class="siimple-btn siimple-btn--pink" @click='pushBF'>
                        Case Study <icon name="arrow-right" scale=".5" style="margin-left: 2px"></icon>
                    </div>
                </div>
                <div class="projectCard siimple-grid-col siimple-grid-col--6 siimple-grid-col-md--12">
                    <!-- <br><br><br><br> -->
                    <div class="stagger siimple-box siimple-box--purple">
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
    <section v-else><nuxt-child/></section>
</template>

<script>

export default {
    scrollToTop: true,
    data () {
        return {
          caseOn: false
        }
    },
    mounted () {
        // fetch the data when the view is created and the data is
        // already being observed
        this.checkRoute()
    },
    watch: {
        // call again the method if the route changes
        '$route': 'checkRoute'
    },
    methods: {
      pushBF () {
          this.$router.push({path: '/work/BlockFantasy'})
          console.log('pushed to BlockFantasy page');
      },
      checkRoute () {
          if (this.$route.path == '/work/BlockFantasy' || this.$route.path == '/work/BlockFantasy/') {
              this.caseOn = true
          } else if (this.$route.path == '/work/BlockBattle' || this.$route.path == '/work/BlockBattle/') {
              this.caseOn = true
          } else {
              this.caseOn = false
          }
      }
    }
}
</script>

<style lang="sass" scoped>
.container
  display: block
  max-width: 75em
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
.stagger
  margin-top: 10em
@media screen and (max-width: 768px)
  .stagger
      margin-top: 7em
.projectRow
  // width: 800px
  max-width: 63em
  margin-left: auto
  margin-right: auto
  margin-top: 3em
.projectCard
  transition: all 0.3s ease-out
  cursor: pointer
  // padding: 1em
  // margin-left: auto
  // margin-right: auto
  .siimple-box
      margin-left: auto
      margin-right: auto
  .siimple-h6
      color: #8E8D89
      line-height: 1.5em
      text-align: left
      margin-left: 1em
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
