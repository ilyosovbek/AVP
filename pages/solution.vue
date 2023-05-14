<script setup lang="ts">
useHead({
    title: 'Solutions of AVP-rental',
    meta: [
        { name: 'description', content: 'Solution page of Avp Rental.' }
    ],
    bodyAttrs: {
        class: 'test'
    },
    script: [{ innerHTML: 'console.log(\'Solution\')' }]
})
</script>
<template>
    <div>
        <TheHeader></TheHeader>
        <TheSolution></TheSolution>
        <TheFooter></TheFooter>
    </div>
</template>

