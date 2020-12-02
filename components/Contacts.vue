<template>
    <section class="contact">
        <div class="container">
            <h2 class="title">Contact me</h2>

            <Message v-if="message" :message="message"/>
            <form @submit.prevent="onSubmit" class="contact-form">

                <AppInput v-model="user.name"> Name </AppInput>
                <AppInput v-model="user.email" type="text"> Email </AppInput>
                <AppTextArea v-model="user.text"> Text </AppTextArea>

                <div class="controls">
                    <AppButton class="btnWhite">Submit</AppButton>
                </div>

            </form>
        </div>
    </section>
</template>

<script>

export default {
    data () {
        return {
            message: null,
            user: {
                name: '',
                email: '',
                text: ''
            }
        }
    },
    methods: {
        onSubmit () {
            console.log(this.user);
            this.user.name = ''
            this.user.email = ''
            this.user.text = ''
            this.message = 'Submitted'
        }
    }
}
</script>

<style lang="scss">
.btn {
    color: #494ce8;
    background: white;
}
.contact {
    text-align: center;
    background-color: #494ce8;
    color: #fff;
    .title {
        color: #fff;
    }
    .contact-form {
        min-width: 600px;
        margin: 30px auto;
    }
    .controls {
        margin: 30px 0;
    }
}
</style>