<script setup lang="ts">
useHead({
        title: 'AVp-rental services',
        meta: [
                { name: 'description', content: 'My amazing site.' }
        ],
        bodyAttrs: {
                class: 'test'
        },
        script: [{ innerHTML: 'console.log(\'Given service offers by Avp Rental\')' }]
})
</script>
<template>
        <TheHeader></TheHeader>
        <ServicesRental></ServicesRental>
        <TheEngineer></TheEngineer>
        <TheRental></TheRental>
        <the-footer></the-footer>
</template>