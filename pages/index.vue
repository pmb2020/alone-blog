<template>
	<div>
		<Head>
			<Title>{{title}}</Title>
			<Meta name="description" :content="title" />
			<!-- <Style type="text/css" children="body { background-color: green; }" /> -->
		</Head>
		<AloneBanner class="h-44 md:h-auto" :data='bannerList' />
		<!-- 产品中心 -->
		<PageProduct />
		<div>
			<img src="http://www.conquest.cn/u_file/photo/20190604/b73f67c320.jpg" alt="">
		</div>
		<div class="al-container">
			<div class="md:flex md:flex-row">
				<div class="basis-1/2">
					<img style="width: 80%;" src="http://cdn.xfrec.com/vaa/A6.jpg" alt="">
				</div>
				<div class="basis-1/2">
					<div class="md:mt-16">
						<h3 class="mb-5" style="font-size: 1.5rem;">AORO遨游A6全能王户外三防手机</h3>
						<p class="mb-16" style="color: #888;font-size: 14px;">A6装备多用途实用工具和专业传感器，以帮助您进一步探索在户外。不管你需要什么，你都可以在电话里找到。有了这个手机，一切都会顺利地在你的冒险。</p>
						<button class=""><nuxt-link to="/product">查看更多</nuxt-link></button>
					</div>
				</div>
			</div>
			<div class="md:flex md:flex-row-reverse  mt-12">
				<div class="basis-1/2">
					<img style="width: 80%;" src="http://cdn.xfrec.com/vaa/A8.jpg" alt="">
				</div>
				<div class="basis-1/2">
					<div class="md:mt-16">
						<h3 class="mb-5" style="font-size: 1.5rem;">AORO遨游A8工业级智能防爆手机</h3>
						<p class="mb-16" style="color: #888;font-size: 14px;">应用程序工具箱，里面包含大量的应用程序，徒步旅行和登山满足你。噪音测试、指南针、手电筒、水平仪、挂画、心率、高度测量、放大镜、警铃、铅锤、量角器。</p>
						<button class=""><nuxt-link to="/product">查看更多</nuxt-link></button>
					</div>
				</div>
			</div>
		</div>
		<!-- 新闻中心 -->
		<div class="py-1 md:py-8" style="background-color: #fff;display:none">
			<section class="al-container">
				<div class="flex justify-between mb-6">
					<div>
						<h2 class="md:text-4xl md:mb-2" style="color: #333;font-weight: 600;">新闻中心</h2>
						<p class="hidden md:block text-xs md:text-2xl" style="font-style: italic;color: #d6dbe4;">NEWS CENTER</p>
					</div>
					<div class="flex items-center">
						<div class="bar"></div>
						<p class="text-xs md:text-lg text-slate-400">先锋音讯16年品质保证，值得您信赖的伙伴</p>
					</div>
				</div>
				<div class="md:flex">
					<div class="md:w-1/2 mb-8">
						<img class="rounded-lg w-full h-52 md:h-100" src="http://cdn.gold404.cn/nuxt/bao1.png">
					</div>
					<div class="p-1 md:w-1/2 md:ml-10">
						<ul class="news-list-ul">
							<li class="mb-5 md:mb-10" v-for="(newsItem,index) in newsList" :key="index">
								<h3>
									<Nuxt-link class="text-lg" to="/about">
										<span class="num" style="">{{index+1}}</span>
										{{newsItem.title}}
										<span class="hidden md:block" style="color: #999;float: right;font-weight: normal;font-size: 1rem;">{{newsItem.date}}</span>
									</Nuxt-link>
								</h3>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</div>
		<!-- 行业解决方案 -->
		<!-- <PageSolution /> -->
	</div>
</template>

<script setup>
	const title = ref('VAA先锋音讯企业官网')
	const bannerList = ref([
		{
			title: '这是一个title',
			image: 'http://www.conquest.cn/u_file/photo/20220414/d2b8a53a48.jpg'
		},
		{
			title: '这是一个title',
			image: 'http://www.conquest.cn/u_file/photo/20220309/a41eec827f.jpg'
		},
	])
	const newsList = ref([{
			title: '新品上市 |2022款迷你防爆智能手机全新发布',
			date: '2022-11-14'
		},
		{
			title: '新品来袭！智能防疫+物联网防爆对讲终端上市',
			date: '2022-11-12'
		},
		{
			title: '智能对讲手持终端三防多模对讲抗菌防爆手机',
			date: '2022-11-12'
		},
		{
			title: 'UWB室内高精度人员定位防爆手机',
			date: '2022-11-12'
		},
		{
			title: '5G矿用井下防爆手机在井下的具体应用',
			date: '2022-11-12'
		},
		{
			title: '目前5G防爆手机值得买哪一款？',
			date: '2022-11-12'
		},
	])
</script>

<style>
	.num{
		color: #fff;
		font-weight: normal;
		padding: 2px 12px;
		font-size: 1rem;
		margin-right: 5px;
		background-color: #a9a5a5;
		border-radius: 1px;
	}
	.news-list-ul li:nth-child(1) .num{
		background-color: #fb0d0d;
	}
	.news-list-ul li:nth-child(2) .num{
		background-color: #fb9c0d;
	}
	.news-list-ul li:nth-child(3) .num{
		background-color: #15acd9;
	}
</style>
