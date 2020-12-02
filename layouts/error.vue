<template>
    <section class="not-found">
        <div class="container">

            <div class="not-found_wrapper">
                <p class="title">Page Not Found</p>
                <nuxt-link to="/">Back to home page</nuxt-link>
            </div>

        </div>
    </section>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
.not-found_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 80vh;
}
</style>