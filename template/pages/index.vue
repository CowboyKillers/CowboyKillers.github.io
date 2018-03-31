<template>
  <section class="container">
    <div>

        <br><br><br>
        <div class="siimple-grid-row">
            <div class="siimple-grid-col siimple-grid-col--7">
                <div class="myH3 siimple-h3">
                    <a class="title">Cowboy Killers</a> is a media-driven, design and innovation studio based in Atlanta 🍑
                </div>
            </div>
            <div class="siimple-grid-col siimple-grid-col--5">
                <a href="https://dribbble.com/shots/2108429-JACKPOT" target="_blank">
                    <img class="helperPic" src="../assets/bandit.gif">
                </a>
            </div>
        </div>

        <div class="siimple-tip siimple-tip--red siimple-tip--heart">
            Check out some of the products we're building below:
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
                </div>
            </div>
        </div>

    </div>
  </section>
</template>

<script>
// import AppLogo from '~/components/AppLogo.vue'

export default {
  scrollToTop: true

}
</script>

<style lang="sass" scoped>
.container
  display: block
  width: 75em
  // align-items: center
  // text-align: center
  margin-left: auto
  margin-right: auto

a.title
    color: #EEB5CA
    cursor: pointer
    text-decoration: underline

.myH3
    text-align: left
    margin-top: 1em
    line-height: 2em

.helperPic
    position: relative
    height: 350px
    bottom: 3em
    left: 4em

.siimple-tip
    display: table-cell
    vertical-align: middle
    text-align: center
    font-weight: bold
    width: 34em
    height: 3em
    left: 4.5em
    bottom: 8em
    -webkit-transform: scale(1.2)
    -ms-transform: scale(1.2)
    transform: scale(1.2)
    transition: all 0.3s ease

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
    margin-top: -2em
.projectCard
    transition: all 0.3s ease-out
    cursor: pointer
    .siimple-h6
        color: #8E8D89
        line-height: 1.5em
        text-align: left
.projectCard:hover
    -webkit-transform: scale(1.05)
    -ms-transform: scale(1.05)
    transform: scale(1.05)
    transition: all 0.3s ease-in



</style>
