<template>
    <div class="newsinfo-container">
        <h3 class="title">{{newsinfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间:{{newsinfo.add_time | dataFormat}}</span>
            <span>点击：{{newsinfo.click}}次</span>
        </p>
        <hr>
    <div class="content" v-html="newsinfo.content"></div>
    <comment-box :id="this.id"></comment-box>
    </div>
</template>

<script>
//导入  评论子组件
import comment from '../components/subcomponents/comment.vue'
export default {
    data(){
        return{
            id:this.$route.params.id,
            newsinfo:{}
        }
    },
    created(){
        this.axios.get('http://www.liulongbin.top:3005/api/getnew/' + this.id,{
        }).then( result =>{
            this.newsinfo = result.data.message[0]
        })
    },
    components:{//注册子组件
        'comment-box':comment
    }
}
</script>

<style lang="scss" scoped>
.newsinfo-container{
    padding: 0px 4px;
    .title{
        font-size: 16px;
        text-align: center;
        margin: 15px 0;
        color:red
    }
    .subtitle{
        font-size: 13px;
        color:#226aff;
        display: flex;
        justify-content: space-between
    }
    .content{

    }
}
</style>
