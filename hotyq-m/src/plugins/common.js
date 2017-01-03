var change = {
	design_width: 750,
	IsPC: function() {
		var userAgentInfo = navigator.userAgent;
		var Agents = ["Android", "iPhone",
			"SymbianOS", "Windows Phone",
			"iPad",
			"iPod"
		];
		var flag = true;
		for (var v = 0; v < Agents.length; v++) {
			if (userAgentInfo.indexOf(Agents[v]) > 0) {
				flag = false;
				break;
			}
		}
		return flag;
	},
	body: document.getElementsByTagName('html')[0],
	action: function() {
		if (this.IsPC()) {
			this.view_width = document.documentElement.clientWidth > this.design_width ? this.design_width : document.documentElement.clientWidth;
			this.body.className = 'pc';
		} else {
			this.view_width = document.documentElement.clientWidth < 320 ? 320 : document.documentElement.clientWidth;
		}
		this.body.style.opacity = 1;
		this.body.style.fontSize = this.view_width * 100 / this.design_width + 'px';
	}
}
change.action();
window.addEventListener('resize', function() {
	change.action();
})