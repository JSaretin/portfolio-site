const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["favicon.png","me.jpeg"]),
	_: {
		mime: {".png":"image/png",".jpeg":"image/jpeg"},
		entry: {"file":"start-c5d45986.js","js":["start-c5d45986.js","chunks/vendor-ba5e527f.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js'))
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			}
		]
	}
});
