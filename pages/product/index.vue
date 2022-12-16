<template>
	<div class="product mb-16">
		<PageTop title="产品中心" />
		<div class="al-container">
			<div class="text-sm text-slate-500">
				您所在的位置：首页 / 产品中心
			</div>
			<div class="md:mt-5">
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
		{id:1,title:'AORO遨游 A6',image:'http://cdn.xfrec.com/vaa/A6.jpg'},
		{id:1,title:'AORO遨游 A8',image:'http://cdn.xfrec.com/vaa/A8.jpg'},
		{id:1,title:'AORO遨游 A9',image:'http://cdn.xfrec.com/vaa/A9.jpg'},
		{id:1,title:'AORO遨游 A11',image:'http://cdn.xfrec.com/vaa/A11.jpg'},
		{id:1,title:'AORO遨游 A12',image:'http://cdn.xfrec.com/vaa/A12.jpg'},
		{id:1,title:'AORO遨游 A13',image:'http://cdn.xfrec.com/vaa/A13.jpg'},
		{id:1,title:'AORO遨游 A15',image:'http://cdn.xfrec.com/vaa/A15.jpg'},
		{id:1,title:'AORO遨游 A16',image:'http://cdn.xfrec.com/vaa/A16.jpg'},
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