<template>
    <section class="new-comment">
        <div class="container">

            <h2 class="title">Write a Comment</h2>


            <Message v-if="message" :message="message"/>
            <form @submit.prevent="onSubmit" class="contact-form">

                <AppInput v-model="comment.name"> Name </AppInput>
                <AppTextArea v-model="comment.text"> Text </AppTextArea>

                <div class="controls">
                    <AppButton>Submit</AppButton>
                </div>

            </form>
        </div>
    </section>
</template>

<script>

import axios from 'axios'

export default {
    props: {
        postId: {
            type: String,
            required: true
        }
    },
    data () {
        return {
            message: null,
            comment: {
                name: '',
                text: ''
            }
        }
    },
    methods: {
        onSubmit () {
            this.$store.dispatch('addComment', {
                postId: this.postId,
                published: false,
                ...this.comment
            })
                .then(() => {
                    this.message = 'Submitted'
                    this.comment.name = ''
                    this.comment.text = ''
                })
                .catch(e => {console.log(e)})
        }
    }
}
</script>

<style lang="scss">
.btn {
    color: #494ce8;
}
.new-comment {
    text-align: center;
    .contact-form {
        min-width: 600px;
        margin: 30px auto;
        label {
            text-align: left;
        }
    }
    .controls {
        margin: 30px 0;
    }
}
</style>