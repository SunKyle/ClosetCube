module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1752286406584, function(require, module, exports) {


function mergeDescriptors(destination, source, overwrite = true) {
	if (!destination) {
		throw new TypeError('The `destination` argument is required.');
	}

	if (!source) {
		throw new TypeError('The `source` argument is required.');
	}

	for (const name of Object.getOwnPropertyNames(source)) {
		if (!overwrite && Object.hasOwn(destination, name)) {
			// Skip descriptor
			continue;
		}

		// Copy descriptor
		const descriptor = Object.getOwnPropertyDescriptor(source, name);
		Object.defineProperty(destination, name, descriptor);
	}

	return destination;
}

module.exports = mergeDescriptors;

}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1752286406584);
})()
//miniprogram-npm-outsideDeps=[]
//# sourceMappingURL=index.js.map