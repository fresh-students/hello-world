<template>
    <div>
        <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media" v-for="item in newlists" :key="item.id">
					<router-link :to="'/home/newsinfo/' + item.id"> 
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>
							<p class='mui-ellipsis'>
                                <span>{{item.add_time | dataFormat}}</span>
                                <span>点击：{{item.click}}次</span>
                            </p>
						</div>
					</router-link>
		</li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            newlists:[]
        }
    },
    created(){
            this.axios.get("http://www.liulongbin.top:3005/api/getnewslist").then( res => {
                this.newlists = res.data.message
            })
    },
    methods:{
       
    }
   
}
</script>
<style lang="scss" scoped>
.mui-table-view{
    li{
        h1{
            font-size: 14px
        }
        .mui-ellipsis{
            font-size: 12px;
            color:#226aff;
            display: flex;
            justify-content: space-between
        }
    }
}
</style>
