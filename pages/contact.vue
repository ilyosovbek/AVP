<script setup lang="ts">
useHead({
    title: 'Contact with AVP-rental',
    meta: [
        { name: 'description', content: 'Here you can contact with Avp Rental Team' }
    ],
    bodyAttrs: {
        class: 'test'
    },
    script: [{ innerHTML: 'console.log(\'Contact\')' }]
})
</script>
<template>
    <TheHeader></TheHeader>
    <TheContact></TheContact>
    <TheFooter></TheFooter>
</template>
