module.exports = {
	apps: [{
		name: 'bao',
		exec_mode: 'cluster',
		instances: 'max',
		script: './.output/server/index.mjs'
	}]
}
