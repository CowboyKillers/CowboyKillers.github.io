<template>
    <section class="container">
        <br><br><br>
        <div class="siimple-box siimple-box--pink" style="text-align:center;margin-left:auto;margin-right:auto">
            <div class="siimple-box-title">Contact us!</div>
        </div>

        <div class="siimple-form">

            <!-- <div class="siimple-form-field">
                <div class="siimple-form-field-label">Your email</div>
                <input type="text" class="siimple-input siimple-input--fluid" placeholder="you@company.com">
            </div>
            <br>
            <div class="siimple-form-field">
                <div class="siimple-form-field-label">Your comment</div>
                <textarea class="siimple-textarea siimple-textarea--fluid" rows="3" placeholder="Type your message here"></textarea>
            </div>
            <div class="siimple-form-field">
                <label class="siimple-label">Subscribe to the CK Newsletter?</label>
                <div class="siimple-switch">
                    <input type="checkbox" id="mySwitch" checked>
                    <label for="mySwitch"></label>
                    <div></div>
                </div>
            </div>
            <br>
            <div class="siimple-form-field">
                <div class="siimple-btn siimple-btn--green">Submit!</div>
            </div>
            <br><br>  -->

            <br>
            <div class="siimple-h3">Email us at:</div>
            <div class="siimple-box siimple-box--purple" style="text-align:center;">
                <div class="siimple-box-subtitle">
                    <a href="mailto:howdy@cowboykillers.io">howdy@cowboykillers.io</a>
                </div>
            </div>
            <br><br><br>

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
  max-width: 75em
  align-items: center
  text-align: center
  margin-left: auto
  margin-right: auto

.siimple-box
    margin-left: auto
    margin-right: auto
.siimple-box--pink
    background-color: #FECADA

.siimple-form
    max-width: 35em
    margin-left: auto
    margin-right: auto
    margin-top: 5em
@media screen and (max-width: 480px)
    .siimple-form
        margin-top: 3em
        -webkit-transform: scale(.8)
        -ms-transform: scale(.8)
        transform: scale(.8)
        transition: all 0.3s ease
    .siimple-box-subtitle
        font-size: 25px

a
    color: inherit
    text-decoration: none
a:hover
    color: #fdcada
    text-decoration: underline dotted


</style>
