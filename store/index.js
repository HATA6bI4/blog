import axios from 'axios'

export const state = () => ({
    postsLoaded: [],
    token: null
})

export const mutations = {
    setPosts (state, posts) {
        state.postsLoaded = posts
    },
    addPost (state, post) {
        console.log(post);
        state.postsLoaded.push(post)
    },
    editPost (state, postEdit) {
        const postIndex = state.postsLoaded.findIndex(post => post.id === postEdit.id)
        state.postsLoaded[postIndex] = postEdit
    },
    setToken (state, token) {
        console.log(token);
        state.token = token
    },
    destroyToken (state) {
        state.token = null
    }
}

export const actions = {
    nuxtServerInit ({commit}, context) {
        return axios.get('https://second-try-5c912.firebaseio.com/posts.json')
            .then(res => {
                console.log(res.data)
                const postsArray = []
                for (let key in res.data) {
                    postsArray.push( { ...res.data[key], id: key } )
                }

                commit('setPosts', postsArray)
            })
            .catch(e => console.log(e)) 
    },
    authUser ({commit}, authData) {
        const key = 'AIzaSyCIyNFxarg9f6WoBwbM6PhTfOV-EJUVSL8'
        return axios.post(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${key}`, {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
        })
            .then((res) => {
                commit('setToken', res.data.idToken)
            })
    },
    logoutUser ({commit}) {
        commit('destroyToken')
    },
    addPost ({commit}, post) {
        // console.log(post);
        return axios.post('https://second-try-5c912.firebaseio.com/posts.json', post)
            .then(res => {
                // console.log(res);
                commit('addPost', { ...post, id: res.data.name })
            })
            .catch(e => console.log(e))
    },
    editPost ({commit, state}, post) {
        return axios.put(`https://second-try-5c912.firebaseio.com/posts/${post.id}.json?auth=${state.token}`, post)
            .then(res => {
                commit('editPost', post)
            })
            .catch(e => console.log(e))
    },
    addComment ({commit}, comment) {
        return axios.post('https://second-try-5c912.firebaseio.com/comments.json', comment)
            .catch(e => console.log(e))
    }
}

export const getters = {
    getPostsLoaded (state) {
        return state.postsLoaded
    },
    checkAuthUser (state) {
        return state.token != null
    }
}
// `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`