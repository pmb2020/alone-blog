<template>
	<div>
		<PageTop title="产品详情" />
		<div class="al-container" style="min-height: 1000px;">
			<div class="text-slate-500">
				您所在的位置：首页 / 产品中心
			</div>
			<div style="margin-top: 2rem;">
				<h3 style="text-align: center;font-size: 2rem;margin-bottom: 2rem;color: #333;">{{data.title}}</h3>
				<div class="content" v-html="data.content">
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	const route = useRoute()
	// const data1 = ref({'ssss':'sss'})
	// await useFetch('http://127.0.0.1:85/api/product/'+route.params.id).then(res=>{
	// 	if(res.data._rawValue.code===0){
	// 		data1.value = res.data._rawValue.data.data
	// 	}
	// })
	const res = await useFetch('http://39.105.2.43:90/api/product/'+route.params.id);
	const data = ref(res.data._rawValue.data);
</script>

<style>
	.content{
		color: #666;
		img{
			display: inline-block;
		}
	}
</style>