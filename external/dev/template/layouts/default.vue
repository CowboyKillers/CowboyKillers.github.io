<template>
  <div class="siimple-grid">
      <!-- Nav Bar -->
      <div class="siimple-grid-row">
          <div class="ckNav siimple-navbar">
                <div class="siimple-grid-col siimple-grid-col--6 siimple-grid-col-md--4 siimple-grid-col-sm--2">
                    <div class="siimple-layout--left">
                        <a class="siimple-navbar-title">
                            <img src="../assets/logo.png" height="40" @click='pushHome'>
                        </a>
                    </div>
                </div>
                <div class="siimple-grid-col siimple-grid-col--6 siimple-grid-col-md--8 siimple-grid-col-sm--10">
                    <div class="siimple-layout--right">
                        <div id='about' class="siimple-tabs-tab" @click='pushAbout'>
                            About
                        </div>
                        <div id='work' class="siimple-tabs-tab" @click='pushWork'>
                            Work
                        </div>
                        <div class="siimple-tabs-tab">
                            <a class="cleanLink" href="https://medium.com/cowboy-killers" target="_blank">Blog</a>
                        </div>
                        <div id='contact' class="siimple-tabs-tab" @click='pushContact'>
                            Contact
                        </div>
                    </div>
                </div>
          </div>
      </div>

      <transition name="page" mode="out-in">
          <nuxt></nuxt>
      </transition>

       <!-- Footer -->
       <div class="ckFoot siimple-footer siimple-footer--fluid">
           <div class="footRow siimple-grid-row">
                <div class="footLinks siimple-link siimple-grid-col siimple-grid-col--3 siimple-grid-col-sm--6">
                    <span class="footLink" @click='pushHome'>Home</span> <br>
                    <span class="footLink" @click='pushAbout'>About</span> <br>
                    <span class="footLink" @click='pushWork'>Works</span> <br>
                    <span class="footLink" @click='pushContact'>Contact Us</span>
                </div>
                <div class="footLinks siimple-link siimple-grid-col siimple-grid-col--4 siimple-grid-col-sm--6">
                    <span class="footLink" style="color: #1DA1F2;">
                        <a class="cleanLink" href="https://twitter.com/Cowboy_Killers" target="_blank">Twitter</a>
                    </span> <br>
                    <span class="footLink" style="color: #27C56B;">
                        <a class="cleanLink" href="https://medium.com/cowboy-killers" target="_blank">Medium</a>
                    </span> <br>
                    <span class="footLink" style="color: #6585C7;">
                        <a class="cleanLink" href="https://discord.gg/Cve76e6" target="_blank">Discord</a>
                    </span> <br>
                    <span class="footLink" style="color: #5D267D;">
                        <a class="cleanLink" href="https://github.com/CowboyKillers" target="_blank">GitHub</a>
                    </span>
                    <!-- <icon class="social" name="twitter" style="color: #1DA1F2;"></icon>
                    <icon class="social" name="medium" style="color: #000;"></icon> <br><br>
                    <icon class="social" name="github-alt" style="color: #5D267D;"></icon>
                    <icon class="social" name="telegram" style="color: #39A9DE;"></icon> -->
                </div>
                <div class="footCred siimple-link siimple-grid-col siimple-grid-col--5 siimple-grid-col-sm--12">
                    Built by <span class="siimple-tag siimple-tag--pink">Cowboy Killers</span> <br>
                    Made with 💖 in ATL 🍑
                    <div class="subscribe">
                        <label class="siimple-label">CK Newsletter </label>
                        <!-- <input type="text" class="siimple-input" placeholder="Your email address"> -->
                        <div class="subscribeButton siimple-btn siimple-btn--green">
                            <a class="cleanLink" href="http://eepurl.com/dpV97b" target="_blank">Subscribe</a>
                        </div>
                    </div>
                </div>
          </div>
       </div>

  </div>
</template>

<script>
export default {
    scrollToTop: true,
    data () {
        return {
          path: '/'
        }
    },
    mounted () {
        // fetch the data when the view is created and the data is
        // already being observed
        this.setPath()
    },
    watch: {
        // call again the method if the route changes
        '$route': 'setPath'
    },
    methods: {
      pushHome () {
          this.$router.push({path: '/'})
          console.log('pushed to index');
      },
      pushAbout () {
          this.$router.push({path: '/about'})
          console.log('pushed to about page');
      },
      pushWork () {
          this.$router.push({path: '/work'})
          console.log('pushed to work page');
      },
      pushContact () {
          this.$router.push({path: '/contact'})
          console.log('pushed to contact page');
      },
      setPath () {
          this.path = this.$route.path
          if (this.path == '/') {
              document.getElementById('about').className = 'siimple-tabs-tab';
              document.getElementById('work').className = 'siimple-tabs-tab';
              document.getElementById('contact').className = 'siimple-tabs-tab';
          }
          if (this.path == '/about') {
              document.getElementById('about').className = 'siimple-tabs-tab siimple-tabs-tab--selected';
              document.getElementById('work').className = 'siimple-tabs-tab';
              document.getElementById('contact').className = 'siimple-tabs-tab';
          }
          if (this.path == '/work') {
              document.getElementById('about').className = 'siimple-tabs-tab';
              document.getElementById('work').className = 'siimple-tabs-tab siimple-tabs-tab--selected';
              document.getElementById('contact').className = 'siimple-tabs-tab';
          }
          if (this.path == '/contact') {
              document.getElementById('about').className = 'siimple-tabs-tab';
              document.getElementById('work').className = 'siimple-tabs-tab';
              document.getElementById('contact').className = 'siimple-tabs-tab siimple-tabs-tab--selected';
          }
          console.log(this.path);
      }
    }
}
</script>

<style lang="sass">
html
  -ms-text-size-adjust: 100%
  -webkit-text-size-adjust: 100%
  -moz-osx-font-smoothing: grayscale
  -webkit-font-smoothing: antialiased


.page-enter-active, .page-leave-active
    transition: opacity .5s
.page-enter, .page-leave-to
    opacity: 0



*, *:before, *:after
    box-sizing: border-box
    margin: 0

.ckNav
    // width: 1000px
    max-width: 75em
    margin-top: 2em
    text-align: center
    align-items: center
    margin-left: auto
    margin-right: auto

.ckFoot
    margin-top: 10em
    border-top: 2px solid #F3F1EE
    margin-left: auto
    margin-right: auto

    .footRow
        display: block
        max-width: 80em
        margin-left: auto
        margin-right: auto

    .footCred
        text-decoration: none
        line-height: 2em
        text-align: right
        display: inline
        cursor: default
    @media screen and (max-width: 480px)
        .footCred
            text-align: center
            margin-top: 4em

    .footLinks
        text-decoration: none
        line-height: 2em
    @media screen and (max-width: 480px)
        .footLinks
            text-align: center
    .footLink:hover
        text-decoration: underline

    .footSocial
        line-height: 2em
        .fa-icon
            width: auto
            height: 2em
            max-width: 100%
            max-height: 100%
            padding-right: 3.5em
            cursor: pointer
            transition: all 0.3s ease-out
        .fa-icon:hover
            -webkit-transform: scale(0.9)
            -ms-transform: scale(0.9)
            transform: scale(0.9)
            transition: all 0.3s ease-in

    .siimple-tag--pink
        background-color: #FECADA

    .subscribe
        margin-top: 2em
    @media screen and (max-width: 480px)
        .subscribe
            margin-top: 2em

    .subscribeButton
        // margin-left: 1em
        -webkit-transform: scale(0.9)
        -ms-transform: scale(0.9)
        transform: scale(0.9)
        transition: all 0.3s ease-in

a.cleanLink
    text-decoration: none
    color: inherit

</style>
