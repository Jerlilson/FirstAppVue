<template>
    <div class="container">
        <div class="menu">
            <router-link to="/posts">Posts</router-link>
            <router-link to="/red">Página vermelha</router-link>
        </div>
        <div class="container-posts">
            <card v-for = "post in posts" :key="post.id" :title="post.title" :body="post.body" ></card>
        </div>
    </div>
</template>
<script>
    import Card from './Card';
    import api from '../services/api';

    export default {
        name: "posts",
        components : {
            Card
        },
        async mounted(){
            try {
                const resposta = await api.get();
                this.posts = resposta.data;
            } catch (error) {
                console.error(error);
            }
        },
        data(){
            return {
                posts : [],
            }
        }
    }
</script>
<style scoped> 
    h1{
        text-align: left;
        margin-left: 18px;
        color: #4e4e4e;
    }
    .container-posts {
        color: #4e4e4e;
    }
</style>



