<template>
    <no-ssr>
        <CommentTable :thead="['Name', 'Text', 'Status', 'Change Status', 'Delete']">
            <tbody slot="tbody">
                <tr v-for="comment in comments" :key="comment.id">
                    <td><span>{{ comment.name }}</span></td>
                    <td><span>{{ comment.text }}</span></td>
                    <td>
                        <span v-if="comment.published" class="status true"> Published </span>
                        <span v-else class="status false"> Hiden </span>
                    </td>
                    <td><span @click="changeComment(comment)" class="link">Change Status</span></td>
                    <td><span @click="deleteComment(comment.id)" class="link">Delete</span></td>
                </tr>
            </tbody>
        </CommentTable>
    </no-ssr>
</template>

<script>

import CommentTable from "@/components/Admin/CommentTable.vue"
import axios from 'axios'

export default {
    components: {
        CommentTable
    },
    data () {
        return {
            comments: []
        }
    },
    mounted () {
        this.loadComments()
    },
    layout: 'admin',
    methods: {
        loadComments () {
            axios
                .get('https://second-try-5c912.firebaseio.com/comments.json')
                    .then((res) => {
                        let commentArray = []
                        Object.keys(res.data).forEach(key => {
                            const comment = res.data[key]
                            commentArray.push({...comment, id: key})
                        })
                        this.comments = commentArray
                    })
        },
        changeComment (comment) {
            comment.published = !comment.published
            axios
                .put(`https://second-try-5c912.firebaseio.com/comments/${comment.id}.json`, comment)
        },
        deleteComment (id) {
            axios
                .delete(`https://second-try-5c912.firebaseio.com/comments/${id}.json`)
                    .then((res) => {this.loadComments()})
        }
    }
    
}
</script>