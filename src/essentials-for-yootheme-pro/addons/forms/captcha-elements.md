<script setup>
import { ref } from 'vue'
import {data} from './_shared/fields.data.js'

const fields = data.map(field => ({
  ...field,
  details: field.description || '',
})).filter(field => field.group === 'captcha')
</script>

# Captcha Elements

Captcha elements are used to determine whether the form submitter is human or a bot by presenting a challenge-response test.

![Captcha Elements](./assets/captcha-elements.webp)

<!--@include: ./_parts/element-fcaptcha-->
<!--@include: ./_parts/element-hcaptcha-->
<!--@include: ./_parts/element-recaptcha-->
