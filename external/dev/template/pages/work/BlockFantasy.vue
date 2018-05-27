<template>
    <section class="container">
        <div class="siimple-grid">
            <br><br><br>
            <div class="siimple-grid-row">
                <div class="titleText siimple-grid-col siimple-grid-col--7 siimple-grid-col-md--12 siimple-grid-col-sm--12">
                    <div class="myH1 siimple-h1">
                        <a class="title">BlockFantasy</a>
                    </div>
                    <div class="myH2 siimple-h2">Your commissioner lies, the blockchain doesn't</div>
                    <blockquote class="quote siimple-blockquote">
                        "BlockFantasy is a fantastic example of how to implement smart-contracts-as-a-service in a user friendly way"
                    </blockquote>
                    <div class="myH5 siimple-h5">Jeremy Atkins - <a class="title">Vumi</a></div>
                </div>
                <div class="siimple-grid-col siimple-grid-col--5 siimple-grid-col-md--12">
                    <img class="helperPic" src="../../assets/BlockFantasy-Perspective.png">
                </div>
            </div>

            <div class="siimple-content">

                <div class="textRow siimple-grid-row">
                    <div class="siimple-grid-col siimple-grid-col--6 siimple-grid-col-sm--12">
                        <div class="siimple-h6">
                            OVERVIEW
                        </div>
                        <p class="siimple-p">
                            And we believe that architecting innovation requires expansive insight and momentum.
                            <br><br>
                            That's why here at Cowboy Killers, we specialize in leveraging emerging technologies to empower users, create groundbreaking products, and capitalize on the attention economy.
                        </p>
                    </div>
                    <div class="staggerRight siimple-grid-col siimple-grid-col--6 siimple-grid-col-sm--12">
                        <div class="siimple-h6">
                            OBJECTIVE
                        </div>
                        <br>
                        <div class="siimple-breadcrumb">
                            <div class="siimple-breadcrumb-crumb">Ideation</div>
                            <div class="siimple-breadcrumb-crumb">R&D</div>
                            <div class="siimple-breadcrumb-crumb">Refine</div>
                            <div class="siimple-breadcrumb-crumb">Deploy</div>
                            <div class="siimple-breadcrumb-crumb">Enhance</div>
                        </div>
                        <br>
                        <p class="siimple-p">
                            Glad you asked. All three of us are undergraduate Computer Scientists at the Georgia Institute of Technology. Atlanta has the perfect mix of strong technological base and coke.
                        </p>
                    </div>
                </div>

                <!-- <div class="stackRow siimple-grid-row" style="margin-top:8em">
                    <div class="siimple-grid-col siimple-grid-col--12 siimple-grid-col-sm--12">
                        <div class="siimple-h6">
                            STACK
                        </div>
                    </div>
                </div>
                <br><br>
                <div class="stackRow siimple-grid-row">
                    <div class="siimple-grid-col siimple-grid-col--2 siimple-grid-col-md-6 siimple-grid-col-sm--6">
                        <div class="stackBox siimple-btn siimple-btn--grey">
                            <a href="https://nodejs.org/en/" target="_blank">
                                <img class="stackLogo" style="margin-top: .7em" src="../../assets/nodejs.svg">
                            </a>
                        </div>
                    </div>
                    <div class="siimple-grid-col siimple-grid-col--2 siimple-grid-col-md-6 siimple-grid-col-sm--6">
                        <div class="stackBox siimple-btn siimple-btn--grey">
                            <a href="https://www.mongodb.com/" target="_blank">
                                <img class="stackLogo" style="margin-top: .5em" src="../../assets/mongodb.svg">
                            </a>
                        </div>
                    </div>
                    <div class="siimple-grid-col siimple-grid-col--2 siimple-grid-col-md-6 siimple-grid-col-sm--6">
                        <div class="stackBox siimple-btn siimple-btn--grey">
                            <a href="https://vuejs.org/" target="_blank">
                                <img class="stackLogo" style="width: 50%; margin-top: 1em" src="../../assets/vuejs.svg">
                            </a>
                        </div>
                    </div>
                    <div class="siimple-grid-col siimple-grid-col--2 siimple-grid-col-md-6 siimple-grid-col-sm--6">
                        <div class="stackBox siimple-btn siimple-btn--grey">
                            <a href="http://flask.pocoo.org/" target="_blank">
                                <img class="stackLogo" style="width: 90%; margin-top: 0.2em" src="../../assets/flask.svg">
                            </a>
                        </div>
                    </div>
                    <div class="siimple-grid-col siimple-grid-col--2 siimple-grid-col-md-6 siimple-grid-col-sm--6">
                        <div class="stackBox siimple-btn siimple-btn--grey">
                            <a href="https://metamask.io/" target="_blank">
                                <img class="stackLogo" style="width: 50%; margin-top: 0.2em" src="../../assets/metamask.svg">
                            </a>
                        </div>
                    </div>
                    <div class="siimple-grid-col siimple-grid-col--2 siimple-grid-col-md-6 siimple-grid-col-sm--6">
                        <div class="stackBox siimple-btn siimple-btn--grey">
                            <a href="https://github.com/rbarton65/espnff" target="_blank">
                                <img class="stackLogo" style="margin-top: .7em" src="../../assets/espn.svg">
                            </a>
                        </div>
                    </div>
                </div> -->

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
    max-width: 80em
    align-items: center
    text-align: center
    // margin-left: 12em
    margin-left: auto
    margin-right: auto

.siimple-grid
    margin-left: -1em

.titleText
    text-align: left
a.title
    color: #3CD9D3
    cursor: pointer
    transition: all 0.4s ease-out
a:hover
    color: #B2F2FB
    transition: all 0.1s ease-in
.myH1
    text-align: left
    margin-top: .5em
    padding-left: .5em
    // line-height: 2em
    cursor: pointer
.myH2
    text-align: left
    line-height: 1.5em
    padding-left: .6em
    font-weight: normal
    margin-top: 1.5em
.myH5
    padding-left: 1.3em
.helperPic
    position: relative
    // width: 200px
    max-width: 100%
    margin-left: 3em
    border-radius: 1em
    // bottom: 1em
    // left: 5em
    // margin-left: 10em
@media screen and (max-width: 768px)
    .helperPic
        visibility: hidden
        margin-top: 0em
        margin-bottom: 0em
        width: 0%
@media screen and (max-width: 480px)
    .helperPic
        visibility: hidden
        margin-bottom: 0em
        margin-top: 0em
        width: 0%

.quote
    text-align: left
    font-size: 18px
    margin-top: 2em
    // margin-left: 2em
    line-height: 2em

.siimple-content
    text-align: left
    margin-top: 4em
    margin-left: 2em
    .textRow
        // width: 110%
    .siimple-h6
        // padding-left: .5em
        font-weight: bold
        // color: #b493f2
        color: #000
    .siimple-p
        font-size: 16px
        line-height: 2em
    .staggerRight
        padding-left: 5em
    .stackBox
        display: table-cell
        vertical-align: middle
        align-items: center
        text-align: center
        // height: 100px
        // width: 175px
        height: 126px
        padding: 0em 2em
    .stackLogo
        width: 100%
    @media screen and (max-width: 1062px)
        .siimple-breadcrumb-crumb
            font-size: 10px
        .staggerRight
            padding-left: 4em
    @media screen and (max-width: 768px)
        .siimple-breadcrumb-crumb
            font-size: 7px
        .staggerRight
            padding-left: 2em
        // .stackRow
        //     visibility: hidden
    @media screen and (max-width: 480px)
        .siimple-breadcrumb-crumb
            font-size: 7px
        .staggerRight
            margin-top: 3em
            padding-left: 0em




</style>
