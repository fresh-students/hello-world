<template>
    <div>
        <mt-button type="danger" size="large" icon="back" @click="long">back</mt-button>
    </div>
</template>

<script>
import { MessageBox } from 'mint-ui'
export default {
    data(){

    },
    methods:{
        long(){
            // -----------标题与内容字符串
            // MessageBox('提示','操作成功')
            // -----------传入一个对象
            // MessageBox({
            //     title:'提示',
            //     message:'确定执行此操作？',
            //     showCancelButton:true
            // })
            // ------------返回promise对象
            // MessageBox.alert('确定吗','删除')
            MessageBox.alert('操作成功').then(function(){
                MessageBox.alert('正在返回','提示')
            })
        }
    }
}
</script>

<style>

</style>
