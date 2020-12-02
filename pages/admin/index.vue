<template>
    <PostsList :admin=true :posts="postsLoaded"/>
</template>

<script>
import Promo from '@/components/Promo.vue'
import Contacts from '@/components/Contacts.vue'

export default {
    layout: 'admin',
    computed: {
        postsLoaded () {
        return this.$store.getters.getPostsLoaded
        }
    }
}
</script>

<style>
</style>