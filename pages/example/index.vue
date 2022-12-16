<template>
	<div class="news">
		<PageTop title="经典案例" />
		<div class="al-container" style="min-height: 1000px;">
			<div class="text-sm text-slate-500">
				您所在的位置：首页 / 经典案例
			</div>
			<div class="mt-6">
				<ul>
					<li class="md:flex mb-16" v-for="(newsItem,index) in newsList" :key="index">
						<div class="md:w-1/4 mb-3">
							<nuxt-link :to="'/news/'+newsItem.id">
								<img class="rounded-lg w-full h-52" :title="newsItem.title" :src="newsItem.image" >
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
			title: '广东一粮油公司使用KTW280防爆手机',
			image:'http://www.conquest.cn/u_file/photo/20220424/41574e9241.jpg',
			desc:'粮油公司的仓储管理工作作为一项极为重要的业务工作，相关管理人员应该重视。这既是一项经常性的工作,又是一项庞杂的系统工程,来不得半点马虎和懈息,稍有疏忽,可能会导致安全事故发生,带来不可挽',
			date: '2022-11-14 16:44'
		},
		{
			id:2,
			title: '邯郸一矿区配备煤安防爆手机！',
			image:'http://www.conquest.cn/u_file/photo/20220302/1b0bec7e97.jpg',
			desc:'邯郸某矿区安全部负责人通过官网联系到我们，需要一批煤安防爆手机，这位客户朋友对操作系统和像素有较高的期待，另外需要支持矿井网络，并且开通平台对讲。',
			date: '2022-11-12 13:12'
		},
		{
			id:3,
			title: '陕西某油田使用Expad-8工业防爆平板电脑',
			image:'http://www.conquest.cn/u_file/photo/20220217/826bb6ef1b.jpg',
			desc:'陕西某油田公司通过当地合作商，了解到旭信的Expad-8工业防爆平板电脑，需要与其信息处理系统配套使用，随后预定了一台样机需要到生产现场演示其使用效果。',
			date: '2022-11-12 13:12'
		},
		{
				id:1,
				title: 'Excam1601防爆相机助力海上船务巡检',
				image:'http://www.conquest.cn/u_file/photo/20220424/41574e9241.jpg',
				desc:'为适应疫情期间船舶化学品监管特别形势，强化船舶的安全性，近日，河北一化学品船务公司航运部因时因地制宜，针对部分受航区限制，导致船务开展困难的船舶，配备16台Excam1601防爆相机，助力海上…',
				date: '2022-11-14 16:44'
			},
		{
				id:1,
				title: 'X12防爆手机在一油田区使用',
				image:'http://www.conquest.cn/u_file/photo/20220424/41574e9241.jpg',
				desc:'“现在每台设备上都贴有专属二维码，用微信一扫，这台设备的所有信息一览无余，相当于给它建立了一个电子版‘健康档案’。”这是油田区使用X12防爆手机后比较直观的感受。',
				date: '2022-11-14 16:44'
			},
	])
</script>

<style lang="scss">
	.news{
		background-color: #fff;
	}
</style>