<template>
    <nuxt-link :to="getLink" class="post-preview">
        <img :src="post.img" :alt="post.title">
        <div class="post-content">
            <h3 class="title">{{ post.title }}</h3>
            <p>{{ post.description }}</p>
        </div>
    </nuxt-link>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true
        },
        admin: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        getLink () {
            return this.admin ? `/admin/${this.post.id}` : `/blog/${this.post.id}`
        }
    }
}
</script>

<style lang="scss">
.post-preview {
    width: 31%;
    padding: 16px;
    margin: 0;
    margin-bottom: 20px;
    text-align: center;
    background: #fff;
    box-shadow: 0 0 12px 0 rgba(0,0,0,.1);
    img {
        margin-bottom: 16px;
    }
    .post-content {
        p {
            color: #c1c1c1;
        }
    }
}
</style>