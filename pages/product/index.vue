<template>
	<div class="product mb-16">
		<PageTop title="产品中心" />
		<div class="al-container md:mt-9">
			<div>
				<ul class="category-ul">
					<li class="mb-2 mr-3" :class="{'active':categoryIndex==index}" v-for="(item,index) in categories" @click="categoryClick(index)" :key="index">
						{{item.name}}
					</li>
				</ul>
			</div>
			<div class="mt-3 md:mt-10">
				<div class="grid grid-cols-2 md:grid-cols-3 gap-10">
					<div v-for="(item,index) in productList" :key="index">
						<nuxt-link to="#">
							<img class="h-44 md:h-60 rounded-lg" :src="item.image" :title="item.title" :alt="item.title">
							<p class="mt-1">{{item.title}}</p>
						</nuxt-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	const categoryIndex = ref(0)
	const categories = ref([
		{id:1,name:'全部'},
		{id:2,name:'三防手机'},
		{id:3,name:'防爆手机'},
		{id:4,name:'防爆记录仪'},
		{id:4,name:'配件'},
	])
	const productList = ref([
		{id:1,title:'CONQUEST征服 防爆手机 三防智能手机 F2 迷你三防手机',image:'http://www.conquest.cn/u_file/photo/20221025/deeb3ce311.png'},
		{id:1,title:'CONQUEST征服F5 防爆手机 工业物联网智能对讲终端',image:'http://www.conquest.cn/u_file/photo/20220727/c4c2ba782a.png'},
		{id:1,title:'CONQUEST征服 防爆平板 S22 5G工业级模块化定制防爆对讲平板',image:'http://www.conquest.cn/u_file/photo/20221025/c2a5cd7e48.png'},
		{id:1,title:'CONQUEST征服S20 5G红外热成像三防智能手机 电力巡检终端',image:'http://www.conquest.cn/u_file/photo/20220329/9d77c9c366.png'},
		{id:1,title:'CONQUEST征服S29 5G三防手机',image:'http://www.conquest.cn/u_file/photo/20220421/a9950f9962.png'},
		{id:1,title:'CONQUEST征服S28 5G智能三防手机 双时隙数模三防对讲手机',image:'http://www.conquest.cn/u_file/photo/20220510/233812d5a5.png'},
		{id:1,title:'CONQUEST征服S21 5G轻薄三防手机 防爆手机',image:'http://www.conquest.cn/u_file/photo/20210902/418199e0fb.png'},
		{id:1,title:'CONQUEST 征服 防爆手机 5G三防手机 S20  5G 红外夜视三防手机',image:'http://www.conquest.cn/u_file/photo/20201224/18d73ed3b5.png'},
		{id:1,title:'征服CONQUEST S19三防手机 广电700M专网手机 WiFi6煤安防爆手',image:'http://www.conquest.cn/u_file/photo/20210706/9304f2d419.png'},
	])
	const categoryClick = (index)=>{
		categoryIndex.value = index
		productList.value.sort(()=>{
			return (0.5-Math.random());
		})
	}
</script>

<style lang="scss" scoped>
	.category-ul{
		display: flex;
		flex-wrap: wrap;
		li{
			cursor: pointer;
			padding:0.3rem 1rem;
			border-radius: 5px;
		}
		.active{
			background-color: $primary-color;
			color: #fff;
		}
	}
</style>