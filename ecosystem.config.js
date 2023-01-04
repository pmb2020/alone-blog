module.exports = {
	apps: [{
		name: 'alone-blog',
		exec_mode: 'cluster',
		instances: 'max',
		script: './.output/server/index.mjs'
	}]
}
