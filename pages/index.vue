<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Promo />
    <Intro title="Recently Added" />
    <PostsList :posts="$store.getters.getPostsLoaded"/>
    <Contacts />
  </div>
</template>

<script>
import Promo from '@/components/Promo.vue'
import Contacts from '@/components/Contacts.vue'

export default {
  components: {
    Promo,
    Contacts
  },
  computed: {
    postsLoaded () {
      console.log(this.$store.getters.getPostsLoaded)
      return this.$store.getters.getPostsLoaded
    }
  }
}
</script>

<style>
</style>