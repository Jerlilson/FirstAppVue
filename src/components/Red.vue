<template>
    <div class="container">
        <div class="menu">
            <router-link to="/posts">Posts</router-link>
            <router-link to="/red">Página vermelha</router-link>
        </div>
        <div class="content">
            <h1 class="title-principal">Bem vindo à Página vermelha</h1>
            <p class="texto">A página vermelha é uma página muito legal, desde 2014 ela é mantida pela associação internacional
                de proteção às borboletas do afeganistão,junto à diversos órgãos com extrema influência política e econômica frente 
                às potências mundiais.
            </p>
        </div>
    </div>
</template>
<script>
    export default {
        
    }
</script>
<style scoped> 
    .content {
        background-color: #fd5151;
    }

    .title-principal{
        color: #4e4e4e;
        text-align: left;
        margin-left: 18px;
    }
    .texto {
        color: #ffffff;
    }
</style>



