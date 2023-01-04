<template>
	<section class="al-container mx-auto m-12">
		<div class="flex justify-between mb-6">
			<div>
				<h2 class="md:text-4xl md:mb-2" style="color: #12205B;font-weight: 600;">产品中心</h2>
				<p class="hidden md:block text-xs md:text-2xl" style="font-style: italic;color: #d6dbe4;">PRODUCT CENTER</p>
			</div>
			<div class="flex items-center">
				<div class="bar"></div>
				<p class="text-xs md:text-lg text-slate-400"><nuxt-link to="/product">查看更多></nuxt-link></p>
			</div>
		</div>
		<div class="grid grid-cols-3 gap-10">
			<div class="img-txt-box">
				<nuxt-link to="/product/3">
					<img src="http://cdn.xfrec.com/vaa/A9.jpg" alt="">
					<h3>imeta元探索 A9</h3>
				</nuxt-link>
			</div>
			<div class="img-txt-box">
				<nuxt-link to="/product/4">
					<img src="http://cdn.xfrec.com/vaa/A11.jpg" alt="">
					<h3>imeta元探索 A11</h3>
				</nuxt-link>
			</div>
			<div class="img-txt-box">
				<nuxt-link to="/product/5">
					<img src="http://cdn.xfrec.com/vaa/A12.jpg" alt="">
					<h3>imeta元探索 A12</h3>
				</nuxt-link>
			</div>
			<div class="img-txt-box">
				<nuxt-link to="/product/6">
					<img src="http://cdn.xfrec.com/vaa/A13.jpg" alt="">
					<h3>imeta元探索 A13</h3>
				</nuxt-link>
			</div>
			<div class="img-txt-box">
				<nuxt-link to="/product/7">
					<img src="http://cdn.xfrec.com/vaa/A15.jpg" alt="">
					<h3>imeta元探索 A15</h3>
				</nuxt-link>
			</div>
			<div class="img-txt-box">
				<nuxt-link to="/product/8">
					<img src="http://cdn.xfrec.com/vaa/A16.jpg" alt="">
					<h3>imeta元探索 A16</h3>
				</nuxt-link>
			</div>
		</div>
	</section>
</template>

<script>
</script>

<style lang="scss">
	.img-txt-box{
		color: #333;
		img{
			border-radius: 10px;
		}
		h3{
			margin-top: 5px;
			text-align: center;
		}
	}
</style>