<template>
    <section class="new-post">
        <div class="container">
            <form @submit.prevent="onSubmit">
                <AppInput v-model="post.title">Title</AppInput>
                <AppInput v-model="post.description">Description</AppInput>
                <AppInput v-model="post.img">Image link</AppInput>
                <AppTextArea v-model="post.content">Content</AppTextArea>

                <div class="controls">
                    <div class="btn btnDanger" @click="cancel">Cancel</div>
                    <AppButton>Save</AppButton>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        postEdit: {
            type: Object
        }
    },
    data () {
        return {
            post: this.postEdit ? { ...this.postEdit } : {
                title: '',
                description: '',
                img: '',
                content: ''
            }
        }
    },
    methods: {
        onSubmit () {
            this.$emit('submit', this.post)
        },
        cancel () {
            this.$router.push('/admin')
        }
    }
}
</script>

<style lang="scss" scoped>
.controls {
    text-align: center;
    margin: 20px 0;
}
</style>