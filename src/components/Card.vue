<template>
    <div class="container-card">
        <h2 class="post-title">{{title}}</h2>
        <p class="post-body">{{body}}</p>
    </div>    
</template>
<script>
export default {
    props : {
        title : {
            type : String,
            required: true,
        },
        body : {
            type : String,
            required: true,
        }
    }
}
</script>
<style scoped>
    .container-card{
        margin: 10px;
        padding: 8px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        border-radius: 5px;
    }

    .post-title{
        text-align: left;
        color: orange;
    }

    .post-body{
        text-align: left;
        font-size: 1.1em;
        color: #4e4e4e;
    }

</style>



