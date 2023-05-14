<script setup lang="ts">
useHead({
    title: 'About AVP-rental group uc',
    meta: [
        { name: 'description', content: 'Here you can take information about us' }
    ],
    bodyAttrs: {
        class: 'test'
    },
    script: [{ innerHTML: 'console.log(\'About us\')' }]
})
</script>
<template>
    <div>
        <TheHeader></TheHeader>
        <the-page-about></the-page-about>
        <the-footer></the-footer>
    </div>
</template>