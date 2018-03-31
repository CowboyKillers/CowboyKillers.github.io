<template>
    <section class="container">
        <br><br><br>

        <div class="siimple-grid-row">
            <div class="siimple-grid-col siimple-grid-col--7">
                <div class="myH3 siimple-h3">
                    <a class="title">We</a> are a group of makers, dreamers, and pioneers focused on building products for the <a class="title">attention economy</a>.
                </div>
            </div>
            <div class="siimple-grid-col siimple-grid-col--5">
                <img class="helperPic" src="../assets/logo.png">
            </div>
        </div>

        <div class="teamRow siimple-grid-row">
            <div class="siimple-grid-col siimple-grid-col--4">
                <div class="siimple-tip siimple-tip--teal">
                    <a href="http://ash.bhimasani.com" target="_blank">
                      <img class="logo" src="../assets/ash.png">
                    </a>
                    <div class="siimple-h5">Ash Bhimasani</div>
                    <span class="positionTag siimple-tag siimple-tag--purple">CCO & COO</span>
                </div>
            </div>
            <div class="siimple-grid-col siimple-grid-col--4">
                <div class="siimple-tip siimple-tip--pink">
                    <img class="logo" src="../assets/zac.png">
                    <div class="siimple-h5">Zac Cheshire</div>
                    <span class="positionTag siimple-tag siimple-tag--purple">CEO</span>
                </div>
            </div>
            <div class="siimple-grid-col siimple-grid-col--4">
                <div class="siimple-tip siimple-tip--blue">
                    <img class="logo" src="../assets/jack.png">
                    <div class="siimple-h5">Jack Bonaguro</div>
                    <span class="positionTag siimple-tag siimple-tag--purple">CTO</span>
                </div>
            </div>
        </div>

        <div class="siimple-content">
            <div class="siimple-h6">
                THE COWBOY KILLERS MISSION
            </div>
            <div class="siimple-h2">
                Who we are, what we believe in, <br> and why we're building the <a class="title"> future</a>.
            </div>
            <br><br>
            <div class="siimple-grid-row">
                <div class="siimple-grid-col siimple-grid-col--6">
                    <p class="siimple-p">
                        <b>The future is in the eye of the beholder</b>
                        <br><br>
                        And we believe that architecting innovation requires expansive insight and momentum.
                        <br><br>
                        That's why here at Cowboy Killers, we specialize in leveraging emerging tecnologies to empower users, create groundbreaking products, and capitalize on the attention economy.
                        <br><br>
                        <b>So why blockchain?</b>
                        <br><br>
                        Hold your horses there partner. If you climb in the saddle, be ready for the ride
                        <br><br>
                        Blockchain is tool and has a clear purpose. We can't forget that; it's not a fad or something used as a marketing ploy. Blockchain, and decentralized computing at large, provide a very real world need of being able to <b style="color:#EEB5CA">trustlessly</b> transact. In a world powered by attention, nothing provides a more socially securable exchange method than a decentralized ledger.
                        <br><br>
                    </p>
                </div>
                <div class="siimple-grid-col siimple-grid-col--6">
                    <p class="siimple-p">
                        <b>But we're not a blockchain company.</b>
                        <br><br>
                        We believe that blockchain is the future but, unfortunately, the word cryptocurrency sounds like a Cold War reference.
                        <br><br>
                        We want a future for everyone, not one exclusive to Bitcoin miners, VCs, ICOs, and HODLers. The key to adoption requires embracing the world with open arms and building <b style="color:#EEB5CA">human experiences</b>.
                        <br><br>
                        <b>Who are we actually?</b>
                        <br><br>
                        Glad you asked. All three of us are undergraduate Computer Scientists at the Georgia Institute of Technology. Atlanta has the perfect mix of strong technological and artistic innovation; for us that meant we needed to keep up so Cowboy Killers was born. The vision going forward with this company is to grow organically, anything is possible.
                    </p>
                    <br>
                    <div class="siimple-h5" style="color:#b493f2;cursor:pointer" @click='pushContact'>
                        Let's build the future together
                        <icon name="arrow-right" scale="1" style="margin-left:1em;color:#b493f2;"></icon>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<script>

export default {
    scrollToTop: true,
    methods: {
      pushContact () {
          this.$router.push({path: '/contact'})
          console.log('pushed to contact page');
      }
    }
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
    text-align: left
    margin-top: 1em
    line-height: 2em
    cursor: pointer
.helperPic
    position: relative
    width: 200px
    bottom: 1em
    left: 5em

.teamRow
    margin-top: 10em
.logo
    margin-top: 2em
    height: 100px
.positionTag
    margin-top: 1em
    margin-bottom: 2em
    font-weight: bold

.siimple-content
    text-align: left
    margin-top: 7em
    .siimple-h6
        padding-left: 15px
        font-weight: bold
        color: #b493f2
    .siimple-h2
        padding-left: 10px
        line-height: 1.7em
    .siimple-p
        font-size: 16px
        line-height: 2em

</style>
