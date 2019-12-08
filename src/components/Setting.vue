<template>
    <div class="namemessage">
        <mt-cell
  title="个人信息"
  is-link=true
  :right="[
    {
      content: 'Delete',
      style: { background: 'red', color: '#fff' },
      handler: () => this.$messagebox('delete')
    }
  ]"  @click.native="lookover"><img src="../assets/menu2.png"><img src="../assets/menu1.png"><mt-badge size="small" color="#888">9</mt-badge></mt-cell>
  <mt-cell
  title="内容更新"
  is-link=true
  :right="[
    {
      content: 'Delete',
      style: { background: 'red', color: '#fff' },
      handler: () => this.$messagebox('delete')
    }
  ]"><mt-badge size="small" color="red">1</mt-badge></mt-cell>
  <mt-cell
  title="最新消息"
  is-link=true
  :right="[
    {
      content: 'Delete',
      style: { background: 'red', color: '#fff' },
      handler: () => this.$messagebox('delete')
    }
  ]"><mt-badge size="small" color="red">5</mt-badge></mt-cell>
  <mt-cell
  title="自动更新"
  :right="[
    {
      content: 'Delete',
      style: { background: 'red', color: '#fff' },
      handler: () => this.$messagebox('delete')
    }
  ]"><mt-switch v-model="value"></mt-switch></mt-cell>
  <mt-cell-swipe
  title="订阅号"
  is-link=true
  :right="[
    {
      content: 'Delete',
      style: { background: 'red', color: '#fff' },
      handler: () => this.$messagebox('是否取消订阅')
    }
  ]"><mt-badge size="small" color="red">5</mt-badge></mt-cell-swipe>
  <mt-cell
  title="系统设置"
  
  to="/#/home"
  :right="[
    {
      content: 'Delete',
      style: { background: 'red', color: '#fff' },
      handler: () => this.$messagebox('delete')
    }
  ]"><mt-badge size="small" color="red">有新改动</mt-badge></mt-cell>
  <mt-button type="primary" size="large" @click.native="signout">退出登录</mt-button>
    </div>
</template>
<script>
import { Toast }  from 'mint-ui'
import { Indicator} from 'mint-ui'
import { Promise } from 'q';
import { setTimeout } from 'timers';
export default {
    data(){
        return{}
    },
    methods:{
        signout(){
            Toast({
                message:"暂时无法退出,请联系管理员",
                position:"middle",
                duration:1000
            })
        },
        lookover(){
            let that = this;
            let p = new Promise(function(resolve,reject){
              setTimeout(function(){
                console.log("加载开始")
                Indicator.open('加载中...');
                resolve()
              },500)
            })
            p.then(function(resolve){
              setTimeout(function(){
                Indicator.close()

              },500)
              console.log("加载中")
            }).then(function(){
              console.log('加载完成')
              setTimeout(function(){
                that.$router.push('/testDemo')
              },1000)
              
            })
            // Indicator.open("加载中...")
            // setTimeout(function(){
            //     Indicator.close()
            // },500)
            // this.$router.push('/testDemo')
        }
    }
}
</script>
<style scoped>
.mint-button {
    position: relative;
    top:40px
}
.namemessage img{
    height:40px;
    width:40px
}
</style>