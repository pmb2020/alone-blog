<template>
	<section class="al-container mx-auto mt-12">
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
					<img src="http://39.105.2.43:90/images/2022/12-23/NxmGcTdbWeIXaJ9LHy1r6hu59NEh4dfbtocYrQvw.jpg" alt="">
					<h3>先Phone X9</h3>
				</nuxt-link>
			</div>
			<div class="img-txt-box">
				<nuxt-link to="/product/4">
					<img src="http://39.105.2.43:90/images/2022/12-23/N8nnqvgrdekFj3I70RBlRM7i9Nw0pagbzFGj0LTu.jpg" alt="">
					<h3>先Phone 11</h3>
				</nuxt-link>
			</div>
			<div class="img-txt-box">
				<nuxt-link to="/product/5">
					<img src="http://39.105.2.43:90/images/2022/12-23/0lhv8O3UyH8C74XR9oBRXUN13oqnO4AHioz34Hag.jpg" alt="">
					<h3>先Phone 12</h3>
				</nuxt-link>
			</div>
			<div class="img-txt-box">
				<nuxt-link to="/product/6">
					<img src="http://39.105.2.43:90/images/2022/12-23/qFEUrGnE5pog5ILTSmnSRSyo7C9IHgpbfjPXnkLw.jpg" alt="">
					<h3>先Phone 13</h3>
				</nuxt-link>
			</div>
			<div class="img-txt-box">
				<nuxt-link to="/product/7">
					<img src="http://39.105.2.43:90/images/2022/12-23/3Vibgd0bKUe50JPEy6e6UIeNNq1zNbvDTIuVYuKp.jpg" alt="">
					<h3>先Phone 15</h3>
				</nuxt-link>
			</div>
			<div class="img-txt-box">
				<nuxt-link to="/product/8">
					<img src="http://39.105.2.43:90/images/2022/12-23/TBnbg9iLnG3vfgd5cu9BuFKtEBHD0CNj9SR4Ea67.jpg" alt="">
					<h3>先Phone 16</h3>
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