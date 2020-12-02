<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Intro title="Posts" />
    <PostsList :posts="postsLoaded"/>
  </div>
</template>

<script>
export default {
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