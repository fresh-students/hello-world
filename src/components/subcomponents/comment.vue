<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要BB的内容" maxlength="120" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="postComment">发表内容</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,index) in comments" :key="item.user_name">
                <div class="cmt-title">
                    第{{index+1}}楼&nbsp;&nbsp;用户:{{item.user_name}}&nbsp;&nbsp;发表时间:{{item.add_time | dataFormat}}
                </div>
                <div class="cmt-body">
                    {{ item.content === 'undefined'?'此用户很烂':item.content}}
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click="getmore">加载更多</mt-button>
    </div>
</template>

<script>
import Toast from 'mint-ui'
export default {
        data(){
            return{
                pageIndex:1,//默认展示第一页数据
                comments:[],
                msg:''
            }
        },
        props:['id'],
        created(){
            this.getComments();
        },
        methods:{
            getComments(){
                this.axios.get('http://www.liulongbin.top:3005/api/getcomments/'+this.id+'?pageindex='+this.pageIndex).then( result =>{
                    this.comments = this.comments.concat(result.data.message)
                    console.log(this.comments)
                })
            },
            getmore(){
                this.pageIndex++;
                this.getComments();
            },
            postComment(){
                //检验是否为空
                if( this.msg.trim().length === 0){
                   return Toast("评论内容不能为空")
                }
                //发表评论
                this.axios.post('http://www.liulongbin.top:3005/api/postcomment/' + this.$route.params.id,{
                    content:this.msg.trim()
                }).then(function(result){
                    if(result.body.status === 0 ){
                        //拼接出评论对象
                        var cmt = {
                            user_name : "匿名用户",
                            add_time : Date.now(),
                            content : this.msg.trim()
                        };
                        this.comments.unshift(cmt);
                        this.msg ="";
                    }
                })
            }
        }
        }
</script>

<style lang="scss" scoped>
.cmt-container{
    h3{
        font-size: 18px
    }
    textarea{
        font-size: 14px;
        height:85px;
        margin: 0
    }
    .cmt-list{
        margin: 5px 0px;
        .cmt-item{
            font-size: 13px;
            .cmt-title{
                line-height: 35px;
                background-color: #ccc;
            }
            .cmt-body{
                line-height: 35px;
                text-indent: 2em
            }
        }
        
    }
    
}
</style>
