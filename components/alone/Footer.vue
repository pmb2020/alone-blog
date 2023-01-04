<template>
	<footer class="footer">
		<div class="al-container grid grid-cols-4 gap-4">
			<div class="footer-box">
				<h5 class="title">产品中心</h5>
				<nuxt-link to="/product">三防手机</nuxt-link>
				<nuxt-link to="/product">防爆手机</nuxt-link>
				<nuxt-link to="/product">防爆记录仪</nuxt-link>
				<nuxt-link to="/product">配件</nuxt-link>
			</div>
			<div class="footer-box">
				<h5 class="title">行业定制</h5>
				<nuxt-link to="/industry">定制流程</nuxt-link>
				<nuxt-link to="/industry/example">定制案例</nuxt-link>
			</div>
			<div class="footer-box">
				<h5 class="title">经典案例</h5>
				<nuxt-link to="/example">经典案例</nuxt-link>
			</div>
			<div class="footer-box">
				<h5 class="title">关于我们</h5>
				<nuxt-link to="#">电话：4006-855-333</nuxt-link>
				<nuxt-link to="/about">关于我们</nuxt-link>
			</div>
		</div>
		<div class="banquan" style="">
			<p>
				<nuxt-link class="" target="_blank" to="http://beian.miit.gov.cn" ref="nofollow">京ICP备2022025170号-1 </nuxt-link>
				<img style="display: inline-block;margin-left: 4px;" src="~/assets/images/gongan.jpeg" alt="">
				<nuxt-link class="" target="_blank" to="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=1" ref="nofollow">京公网安备 11010802021733号</nuxt-link>
			</p>
			<p>硅谷智造（北京）高科技有限公司 © 版权所有  公司地址：北京市海淀区中关村东路18号1号楼5层B-602</p>
		</div>
	</footer>
</template>

<script setup>
	
</script>

<style lang="scss">
	.footer{
		background-color: #333;
		color: #fff;
		padding: 2rem;
		font-size: 14px;
	}
	.footer-box{
		display:flex;
		flex-direction: column;
		color: #fff;
		.title{
			font-size: 1.4rem;
			margin-bottom: 15px;
		}
		a{
			margin-bottom: 8px;
			color: #8d8d8d;
		}
	}
	.banquan{
		margin-top: 1rem;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		color: #b3b3b3;
	}
</style>