<template>
	<div class="about">
		<PageTop title="关于我们" />
		<div class="al-container">
			<div class="text-sm text-slate-500">
				您所在的位置：首页 / 关于我们
			</div>
			<div class="md:flex md:flex-row mt-8">
				<article class="basis-3/4 leading-9">
					<h3 class="text-4xl mb-6 font-semibold">公司简介</h3>
					<p>火星智造（北京）高科技有限公司是一家致力于高端智能三防手持终端的研发、设计、制造和销售为一体的国家双高新科技企业。
					</p>
					<p>公司品牌:CONQUEST征服主营产品:5G智能三防双模对讲手持终端、5G四防工业防爆手持终端、5G三防热成像物联网手持终端、5G多模三防智能平板、5G三防智能天通卫星通讯手持终端等通信设备。CONQUEST征服引进国内外先进生产技术，汇集顶尖三防手持终端技术工程师，历经数年研发积累，已成功发展成为国内高端智能三防手持终端制造商，立志打造业界新标杆。产品服务于军用警用、公共安全、石油化工、煤炭矿产、航空运输、轨道交通、电力水利、建筑施工、林业渔业、应急救援等行业用户，为其提供所需的各类通信产品、定制化技术服务及智慧通讯整体解决方案。</p>
					<p>公司通过108项国家标准认证、20项国家专利技术、30类行业用户验证、ISO9001质量管理体系认证、ISO14001环境管理体系认证、ISO45001职业健康安全管理体系认证及化工和MA、KA防爆认证、无线电型号核准证、CTA认证、CCC认证、电信设备进网许可证、SGSIP68/IP69K认证、810G军标防护认证、著作权、专利认证、石油化工和矿用本安型双防爆认证、并获得矿用产品MA、KA安全标志证书等国家权威机构实力认证。 得到了包括中石油、中石化、中国铁路、中国南方电网、中国海油、中化石油、中国化工集团、蓝星星火、心连心、中国昊华、中国神华、中国水务、深圳机场等大型企业用户的高度认可。</p>
					<p>深耕行业数年，CONQUEST征服始终秉承以客户需求为核心，追求多元化经营模式；遵循“宁为品质多付出、不为售后多服务”的品质理念；“配置跃然升级，征服永不止步”的产品理念；贯彻“致力应急 专于通信 服务至上 互利共赢”的企业宗旨；“用征服，征服一切不服”的企业精神，致力于打造坚固耐用的三防智能通讯产品和中国“质”造、深圳“智”造的明星产品。</p>
					<p>展望未来，CONQUEST征服将不忘初心，戮力前行。继续遵循“造福全行业，助力强国梦”的品牌理念与梦想，紧握时代脉搏，跟随国家“一带一路”脚步，把握新机遇，全力开拓全球市场，将CONQUEST征服品牌推向全球。</p>
				</article>
				<div class="basis-1/4" style="padding: 1.5rem;">
					<div style="background-color: #e60013;color: #fff;padding: 15px 30px;">
						关于我们
					</div>
					<ul class="ul-text">
						<li>
							<Nuxt-link to="/product">产品中心</Nuxt-link>
						</li>
						<li>
							<Nuxt-link to="/industry">行业定制</Nuxt-link>
						</li>
						<li>
							<Nuxt-link to="/example">经典案例</Nuxt-link>
						</li>
						<li>
							<Nuxt-link to="/about">关于我们</Nuxt-link>
						</li>
					</ul>
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

<script setup>
	useHead({
		title:'关于我们 - 企业官网',
		meta:[
			{name:'description',content:'关于我们页面'}
		],
		bodyAttrs:{
			class:'aboutkkk'
		},
		script:[
			{children:'console.log(\'关于我们\')'}
		]
	})
</script>

<style lang="scss">
	.about{
		article p{
			text-indent: 2em;
			margin-bottom: 15px;
			color: #555;
		}
	}
	.ul-text{
		background-color: #e9e7e7;
		padding: 10px;
		li{
			padding: 10px 20px;
		}
	}
</style>
