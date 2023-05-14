<script setup lang="ts">
useHead({
    title: 'AVP-rental main page',
    meta: [
        { name: 'description', content: 'Main page of Avp Rental' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    bodyAttrs: {
        class: 'test'
    },
    script: [{ innerHTML: 'console.log(\'Main page\')' }]
})
</script>
<template>
    <div>
        <TheHeader></TheHeader>
        <MainSec></MainSec>
        <AboutSec></AboutSec>
        <TheServices></TheServices>
        <TheProducts></TheProducts>
        <TheProject></TheProject>
        <TheFooter></TheFooter>
    </div>
</template>
<style>
@import "../assets/scss/main.scss";
</style>