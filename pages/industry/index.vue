<template>
	<div class="industry">
		<PageTop title="行业定制" />
		<div class="" style="background-color: #28282899;color: #fff;">
			<div class="al-container flex flex-row">
				<div class="basis-1/2 text-center" style="color: red;">
					<nuxt-link to="/industry">定制流程</nuxt-link>
				</div>
				<div class="basis-1/2 text-center">
					<nuxt-link to="/industry/example">定制案例</nuxt-link>
				</div>
			</div>
			
		</div>
		<div class="al-container">
			<div class="md:flex md:flex-row">
				<div class="basis-3/4">
					<img src="@/assets/images/industry.jpg" alt="">
				</div>
				<div class="basis-1/4">
					<div style="background-color: #e60013;color: #fff;padding: 15px 30px;margin-top: 2rem;">
						联系电话
					</div>
					<ul class="ul-text">
						<li>
							<Nuxt-link to="#">4006-855-333</Nuxt-link>
						</li>
					</ul>
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
</script>

<style>
</style>