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
			<div>
				<nuxt-link to="/product/3">
					<img src="http://cdn.xfrec.com/vaa/A9.jpg" alt="">
				</nuxt-link>
			</div>
			<div>
				<nuxt-link to="/product/4">
					<img src="http://cdn.xfrec.com/vaa/A11.jpg" alt="">
				</nuxt-link>
			</div>
			<div>
				<nuxt-link to="/product/5">
					<img src="http://cdn.xfrec.com/vaa/A12.jpg" alt="">
				</nuxt-link>
			</div>
			<div>
				<nuxt-link to="/product/6">
					<img src="http://cdn.xfrec.com/vaa/A13.jpg" alt="">
				</nuxt-link>
			</div>
			<div>
				<nuxt-link to="/product/7">
					<img src="http://cdn.xfrec.com/vaa/A15.jpg" alt="">
				</nuxt-link>
			</div>
			<div>
				<nuxt-link to="/product/8">
					<img src="http://cdn.xfrec.com/vaa/A16.jpg" alt="">
				</nuxt-link>
			</div>
		</div>
	</section>
</template>

<script>
</script>

<style>
</style>