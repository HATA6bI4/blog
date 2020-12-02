<template>
    <section v-if="comments" class="comments">
        <div class="container">

            <h2 class="title">Comments</h2>
            <p v-if="comments.length == 0">There is no comments</p>
            <div class="comment" v-for="comment in comments" :key="comment.name">
                <p class="name">{{ comment.name }}</p>
                <p class="text">{{ comment.text }}</p>
            </div>
            
        </div>
    </section>
</template>

<script>
export default {
    props: {
        comments: {
            type: Array,
            default: null
        }
    }
}
</script>

<style lang="scss">
.comment {
    padding: 20px;
    margin-bottom: 20px;
    background-color: #fff;
    .name {
        font-size: 24px;
        color: #494ce8;
    }
}
</style>