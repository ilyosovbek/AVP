<script setup lang="ts">
useHead({
    title: 'AVP-rental projects',
    meta: [
        { name: 'description', content: 'Projects page of Avp Rental' }
    ],
    bodyAttrs: {
        class: 'test'
    },
    script: [{ innerHTML: 'console.log(\'Projects\')' }]
})
</script>
<template>
    <div>
        <TheHeader></TheHeader>
        <PageProject></PageProject>
        <the-footer></the-footer>
    </div>
</template>