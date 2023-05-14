<script setup lang="ts">
useHead({
        title: 'Techniques of AVP-rental group',
        meta: [
                { name: 'description', content: 'Techniques page of Avp Rental' }
        ],
        bodyAttrs: {
                class: 'test'
        },
        script: [{ innerHTML: 'console.log(\'Techniques\')' }]
})
</script>
<template>
        <TheHeader></TheHeader>
        <the-tech></the-tech>
        <the-setup></the-setup>
        <the-hammer></the-hammer>
        <the-shpunt></the-shpunt>
        <TheTechServise></TheTechServise>
        <the-footer></the-footer>
</template>

