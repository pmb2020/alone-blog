<template>
	<div class="news">
		<PageTop title="新闻中心" />
		<div class="al-container mx-auto mt-10" style="min-height: 1000px;">
			<div class="text-slate-500">
				您所在的位置：首页 / 新闻中心
			</div>
			<div class="mt-10">
				<ul>
					<li class="md:flex mb-16" v-for="(newsItem,index) in newsList" :key="index">
						<div class="md:w-1/4 mb-3">
							<nuxt-link :to="'/news/'+newsItem.id">
								<img class="rounded-lg w-full h-56" :title="newsItem.title" :src="newsItem.image" >
							</nuxt-link>
						</div>
						<div class="md:w-3/4 md:ml-10 overflow-hidden">
							<h3 class="new-title">
								<nuxt-link :to="'/news/'+newsItem.id">{{newsItem.title}}</nuxt-link>
							</h3>
							<!-- <p class="text-slate-400">日期：{{newsItem.date}}</p> -->
							<p class="text-slate-400">{{newsItem.desc}}</p>
						</div>
					</li>
				</ul>
			</div>
			<AlonePagination />
		</div>
	</div>
</template>

<script setup>
	import {ref} from 'vue'
	const newsList = ref([{
			id:1,
			title: '新品上线！征服S29首款5G模块化定制对讲防爆手持智能终端，支持北斗天通卫星电话、红外热成像、DMR数模对讲！',
			image:'http://www.conquest.cn/u_file/photo/20220424/41574e9241.jpg',
			desc:'征服S29防爆手持智能对讲终端是一款高性能带RFID超高频防爆手持终端，安卓11.0操作系统，MT6873V/Z八核处理器',
			date: '2022-11-14 16:44'
		},
		{
			id:2,
			title: '水井下防爆平板电脑的工业应用，征服S22模块化定制防爆对讲高精度平板！',
			image:'http://www.conquest.cn/u_file/photo/20220302/1b0bec7e97.jpg',
			desc:'防爆平板也统称为防爆平板电脑，采用本安型电路设计，适用于石油、化工、制药、天然气管道、油库、加油站、炼油厂、天然气液化站、钻井平台、罐区等具有可燃性、爆炸性气体危险场所的1区和2区',
			date: '2022-11-12 13:12'
		},
		{
			id:3,
			title: 'CONQUEST征服防爆手机品牌',
			image:'http://www.conquest.cn/u_file/photo/20220217/826bb6ef1b.jpg',
			desc:'conquest是深圳市康凯思特通讯设备有限公司旗下品牌。CONQUEST，中文名征服，成立于2013年，总部位于创业之都南海之滨——深圳，是一家致力于高端智能三防手持终端的研发、设计、制造和销售为一体的国家双高新科技企业',
			date: '2022-11-12 13:12'
		},
		{
				id:1,
				title: '新品上线！征服S29首款5G模块化定制对讲防爆手持智能终端，支持北斗天通卫星电话、红外热成像、DMR数模对讲！',
				image:'http://www.conquest.cn/u_file/photo/20220424/41574e9241.jpg',
				desc:'征服S29防爆手持智能对讲终端是一款高性能带RFID超高频防爆手持终端，安卓11.0操作系统，MT6873V/Z八核处理器',
				date: '2022-11-14 16:44'
			},
		{
				id:1,
				title: '新品上线！征服S29首款5G模块化定制对讲防爆手持智能终端，支持北斗天通卫星电话、红外热成像、DMR数模对讲！',
				image:'http://www.conquest.cn/u_file/photo/20220424/41574e9241.jpg',
				desc:'征服S29防爆手持智能对讲终端是一款高性能带RFID超高频防爆手持终端，安卓11.0操作系统，MT6873V/Z八核处理器',
				date: '2022-11-14 16:44'
			},
	])
</script>

<style lang="scss">
	.news{
		background-color: #fff;
	}
</style>