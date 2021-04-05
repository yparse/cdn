function ckcpt() {
    var cpt = '';
    if(typeof parse.ck_skin != "undefined")
    {
        switch(parse.ck_skin)
        {
            case '1':
            cpt += "definition.swf,2,2,-260,-30,2,1|bufferspeed.swf,0,0,20,20,2,0|speed.swf,2,2,-380,-30,2,1|scaling.swf,0,0,0,0,2,0|";
            break;
            case '2':
            cpt += "definition.swf,2,2,-220,-30,2,1|bufferspeed.swf,0,0,20,20,2,0|speed.swf,2,2,-340,-30,2,1|scaling.swf,0,0,0,0,2,0|";
            break;
            case '3':
            cpt += "definition.swf,2,2,-265,-28,2,1|cpt_left.png,0,2,1,-31,0,1|speed.swf,2,2,-320,-27,2,1|cpt_right.png,2,2,-3,-31,0,1|scaling.swf,0,0,0,0,2,0|";
            break;
            case '4':
            cpt += "definition.swf,2,2,-240,-33,2,1|speed.swf,2,2,-330,-33,2,1|scaling.swf,0,0,0,0,2,0|" + ("buffertext.swf,1,2," + ("undefined" != typeof buffershift ? buffershift : -40) + ",-33,2,0|")
            break;
            default:
            cpt += "definition.swf,2,2,-260,-30,2,1|bufferspeed.swf,0,0,20,20,2,0|speed.swf,2,2,-380,-30,2,1|scaling.swf,0,0,0,0,2,0|";         
        }
    }else{
        cpt += "definition.swf,2,2,-260,-30,2,1|bufferspeed.swf,0,0,20,20,2,0|speed.swf,2,2,-380,-30,2,1|scaling.swf,0,0,0,0,2,0|";    
    }
    return cpt;
}
function ckstyle() {
	var on    = (typeof parse.ck_txet == "undefined" || parse.ck_txet=='')?'0':parse.ck_txet;
	var color = (typeof parse.ck_color == "undefined" || parse.ck_color=='')?'01485d':parse.ck_color;
	var font  = (typeof parse.ck_font == "undefined" || parse.ck_font=='')?'':parse.ck_font;
	var txet  = (typeof parse.ck_href == "undefined" || parse.ck_href=='')?parse.ck_font:"<a href='"+parse.ck_href+"' target='_blank'>"+parse.ck_font+"</a>";
	return {
        cpath: 'skin_'+ ((typeof parse.ck_skin == "undefined" || parse.ck_skin <= 1 || parse.ck_skin > 4) ?'1':parse.ck_skin)+'.swf',
        author:(typeof strdecode(parse.ck_hand) == "undefined" || strdecode(parse.ck_hand)=='')?'':strdecode(parse.ck_hand),
        logo:(typeof parse.ck_logo == "undefined" || parse.ck_logo=='')?'':parse.ck_logo,
		language: "",
		flashvars: "",
		setup: "0,1,1,1,1,2,0,1,"+on+",0,1,1,200,0,2,1,0,1,1,1,1,10,3,0,0,2,1500,0,0,0,0,1,1,1,1,1,1,250,0,90,0,0,0",
		pm_bg: "0x000000,100,230,180",
		mylogo: "logo.swf",
		pm_mylogo: "1,1,-465,-300",
		pm_logo: "2,0,-200,50",
		control_rel: "related.swf,ckplayer/related.xml,0",
		control_pv: "Preview.swf,105,100",
		pm_repc: "",
		pm_spac: "|",
		pm_fpac: "file->f",
		pm_advtime: "2,0,-110,10,0,300,0",
		pm_advstatus: "1,2,2,-200,-40",
		pm_advjp: "1,1,2,2,-100,-40",
		pm_padvc: "2,0,-10,-10",
		pm_advms: "2,2,-46,-67",
		pm_zip: "1,1,-20,-8,1,0,0",
		pm_advmarquee: "1,2,50,-70,50,20,0,0x000000,50,0,20,1,30,2000",
		pm_glowfilter: "1,0x"+color+", 100, 6, 3, 10, 1, 1, 0",
		advmarquee: escape(""+txet+""),
		mainfuntion: "",
		flashplayer: "",
		calljs: "ckplayer_status,ckadjump,playerstop,ckmarqueeadv",
		myweb: escape(""),
		cpt_lights: " ",
		cpt_share: " ",
		cpt_definition: "0x2a2a2a,0xff7800,100,10,0xFFFFFF,0xffffff,10,10,1,3,自动,12,MicrosoftYaHei|微软雅黑,0x2a2a2a,10,100,5,5,5,10,15,0x2a2a2a,0x2a2a2a,100,10,0xFFFFFF,0xff7800,10,10,1,3,12,MicrosoftYaHei|微软雅黑,28,0x000000,0,0,0,0",
		bufferprompt: "undefined" != typeof buffertext ? buffertext : "",
		cpt_list: ckcpt()
	}
}(function() {
	var q = {
		_K_: function(c) {
			return document.getElementById(c)
		},
		_T_: !1,
		_M_: !1,
		_G_: !1,
		_Y_: !1,
		_I_: null,
		_J_: 0,
		_O_: {},
		uaMatch: function(c, e, g, h, k, l, p, u, r) {
			e = e.exec(c);
			if (null != e) return {
				b: "IE",
				v: e[2] || "0"
			};
			e = g.exec(c);
			if (null != e) return {
				b: e[1] || "",
				v: e[2] || "0"
			};
			e = h.exec(c);
			if (null != e) return {
				b: e[1] || "",
				v: e[2] || "0"
			};
			e = k.exec(c);
			if (null != e) return {
				b: e[1] || "",
				v: e[2] || "0"
			};
			e = l.exec(c);
			if (null != e) return {
				b: e[2] || "",
				v: e[1] || "0"
			};
			e = p.exec(c);
			if (null != e) return {
				b: e[1] || "",
				v: e[2] || "0"
			};
			e = u.exec(c);
			if (null != e) return {
				b: e[1] || "",
				v: e[2] || "0"
			};
			e = r.exec(c);
			return null != e ? {
				b: e[1] || "",
				v: e[2] || "0"
			} : {
				b: "unknown",
				v: "0"
			}
		},
		browser: function() {
			var c = navigator.userAgent.toLowerCase();
			c = this.uaMatch(c, /(msie\s|trident.*rv:)([\w.]+)/, /(firefox)\/([\w.]+)/, /(opera).+version\/([\w.]+)/, /(chrome)\/([\w.]+)/, /version\/([\w.]+).*(safari)/, /(safari)\/([\w.]+)/, /(mozilla)\/([\w.]+)/, /(mobile)\/([\w.]+)/);
			c.b && (b = c.b, v = c.v);
			return {
				B: b,
				V: v
			}
		},
		Platform: function() {
			var c = "",
				e = navigator.userAgent;
			e = {
				iPhone: -1 < e.indexOf("iPhone") || -1 < e.indexOf("Mac"),
				iPad: -1 < e.indexOf("iPad"),
				ios: !! e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
				android: -1 < e.indexOf("Android") || -1 < e.indexOf("Linux"),
				webKit: -1 < e.indexOf("AppleWebKit"),
				trident: -1 < e.indexOf("Trident"),
				gecko: -1 < e.indexOf("Gecko") && -1 == e.indexOf("KHTML"),
				presto: -1 < e.indexOf("Presto"),
				mobile: !! e.match(/AppleWebKit.*Mobile.*/) || !! e.match(/AppleWebKit/),
				webApp: -1 == e.indexOf("Safari")
			};
			for (var g in e) if (e[g]) {
				c = g;
				break
			}
			return c
		},
		isHTML5: function() {
			return !!document.createElement("video").canPlayType
		},
		getType: function() {
			return this._T_
		},
		getVideo: function() {
			var c = "",
				e = this._E_.v;
			if (e && 1 < e.length) for (var g = 0; g < e.length; g++) {
				var h = e[g].split("->");
				1 <= h.length && "" != h[0] && (c += '<source src="' + h[0] + '"');
				2 <= h.length && "" != h[1] && (c += ' type="' + h[1] + '"');
				c += ">"
			}
			return c
		},
		getVars: function(c) {
			var e = this._A_;
			return "undefined" == typeof e ? null : c in e ? e[c] : null
		},
		getParams: function() {
			var c = "";
			this._A_ && (1 == parseInt(this.getVars("p")) && (c += ' autoplay="autoplay"'), 1 == parseInt(this.getVars("e")) && (c += ' loop="loop"'), 2 == parseInt(this.getVars("p")) && (c += ' preload="metadata"'), this.getVars("i") && (c += ' poster="' + this.getVars("i") + '"'));
			return c
		},
		getpath: function(c) {
			var e = c.substr(0, 1);
			if (-1 < "CDEFGHIJKLMNOPQRSTUVWXYZcdefghijklmnopqrstuvwxyz".indexOf(e) && (c.substr(0, 4) == e + "://" || c.substr(0, 4) == e + ":\\")) return c;
			var g = unescape(window.location.href).replace("file:///", ""),
				h = parseInt(document.location.port),
				k = document.location.protocol + "//" + document.location.hostname,
				l = "",
				p = "",
				u = 0;
			e = unescape(c).split("//");
			0 < e.length && (l = e[0] + "//");
			e = "http https ftp rtsp mms ftp rtmp file".split(" ");
			80 != h && h && (k += ":" + h);
			for (i = 0; i < e.length; i++) if (e[i] + "://" == l) {
				u = 1;
				break
			}
			if (0 == u) if ("/" == c.substr(0, 1)) p = k + c;
			else {
				g = g.substring(0, g.lastIndexOf("/") + 1).replace("\\", "/");
				e = c.replace("../", "./");
				k = e.split("./");
				c = k.length;
				e = e.replace("./", "");
				k = g.split("/");
				c = k.length - c;
				for (i = 0; i < c; i++) p += k[i] + "/";
				p += e
			} else p = c;
			return p
		},
		getXhr: function() {
			try {
				var c = new ActiveXObject("Msxml2.XMLHTTP")
			} catch (e) {
				try {
					c = new ActiveXObject("Microsoft.XMLHTTP")
				} catch (g) {
					c = !1
				}
			}
			c || "undefined" == typeof XMLHttpRequest || (c = new XMLHttpRequest);
			return c
		},
		getX: function() {
			var c = "ckstyle()";
			this.getVars("x") && 1 != parseInt(this.getVars("c")) && (c = this.getVars("x") + "()");
			try {
				"object" == typeof eval(c) && (this._X_ = eval(c))
			} catch (e) {
				try {
					"object" == typeof eval(ckstyle) && (this._X_ = ckstyle())
				} catch (g) {
					this._X_ = ckstyle()
				}
			}
		},
		getSn: function(c, e) {
			return 0 <= e ? this._X_[c].split(",")[e] : this._X_[c]
		},
		getUrl: function(c, e) {
			var g = ["get", "utf-8"];
			if (c && 2 == c.length) {
				var h = c[0];
				c = c[1].split("/");
				2 <= c.length && (g[0] = c[1]);
				3 <= c.length && (g[1] = c[2]);
				this.ajax(g[0], g[1], h, function(c) {
					var g = q;
					if (c && "error" != c) {
						var h = "",
							k = c;
						if (-1 < c.indexOf("}")) {
							c = c.split("}");
							for (k = 0; k < c.length - 1; k++) {
								h += c[k] + "}";
								var r = c[k].replace("{", "").split("->");
								2 == r.length && (g._A_[r[0]] = r[1])
							}
							k = c[c.length - 1]
						}
						g._E_.v = k.split(",");
						e ? g.showHtml5() : (g.changeParams(h), g.newAdr())
					}
				})
			}
		},
		getflashvars: function(c) {
			var e = "",
				g = 0;
			if (c) for (var h in c) 0 < g && (e += "&"), "f" == h && c[h] && !this.getSn("pm_repc", -1) && (c[h] = this.getpath(c[h]), -1 < c[h].indexOf("&") && (c[h] = encodeURIComponent(c[h]))), "y" == h && c[h] && (c[h] = this.getpath(c[h])), e += h + "=" + c[h], g++;
			return e
		},
		getparam: function(c) {
			var e = "",
				g = "",
				h = {
					allowScriptAccess: "always",
					allowFullScreen: !0,
					quality: "high",
					bgcolor: "#000"
				};
			if (c) for (var k in c) h[k] = c[k];
			for (var l in h) e += l + '="' + h[l] + '" ', g += '<param name="' + l + '" value="' + h[l] + '" />';
			e = e.replace("movie=", "src=");
			return {
				w: e,
				v: g
			}
		},
		getObjectById: function(c) {
			if (this._T_) return this;
			var e = null;
			(c = this._K_(c)) && "OBJECT" == c.nodeName && ("undefined" != typeof c.SetVariable ? e = c : (c = c.getElementsByTagName("embed")[0]) && (e = c));
			return e
		},
		ajax: function(c, e, g, h) {
			var k = this.getXhr(),
				l = [];
			l = "";
			"get" == c ? (l = -1 < g.indexOf("?") ? g + "&t=" + (new Date).getTime() : g + "?t=" + (new Date).getTime(), k.open("get", l)) : (l = g.split("?"), g = l[0], l = l[1], k.open("post", g, !0));
			k.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			k.setRequestHeader("charset", e);
			"post" == c ? k.send(l) : k.send(null);
			k.onreadystatechange = function() {
				if (4 == k.readyState) {
					var c = k.responseText;
					"" != c ? h(c) : h(null)
				}
			}
		},
		addListener: function(c, e) {
			var g = q._V_;
			if (g.addEventListener) try {
				g.addEventListener(c, e, !1)
			} catch (h) {
				this.getNot()
			} else if (g.attachEvent) try {
				g.attachEvent("on" + c, e)
			} catch (h) {
				this.getNot()
			} else g["on" + c] = e
		},
		removeListener: function(c, e) {
			var g = q._V_;
			if (g.removeEventListener) try {
				g.removeEventListener(c, e, !1)
			} catch (h) {
				this.getNot()
			} else if (g.detachEvent) try {
				g.detachEvent("on" + c, e)
			} catch (h) {
				this.getNot()
			} else g["on" + c] = null
		},
		Flash: function() {
			var c = !1,
				e = 0;
			if (document.all || -1 < this.browser().B.toLowerCase().indexOf("ie")) try {
				var g = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
				c = !0;
				var h = g.GetVariable("$version");
				e = parseInt(h.split(" ")[1].split(",")[0])
			} catch (k) {} else if (navigator.plugins && 0 < navigator.plugins.length && (g = navigator.plugins["Shockwave Flash"])) for (c = !0, g = g.description.split(" "), h = 0; h < g.length; ++h) isNaN(parseInt(g[h])) || (e = parseInt(g[h]));
			return {
				f: c,
				v: e
			}
		},
		embed: function(c, e, g, h, k, l, p, u, r) {
			var q = ["all"];
			l ? this.isHTML5() ? this.embedHTML5(e, g, h, k, u, p, q) : this.embedSWF(c, e, g, h, k, p, r) : this.Flash().f && 10 < parseInt(this.Flash().v) ? this.embedSWF(c, e, g, h, k, p, r) : this.isHTML5() ? this.embedHTML5(e, g, h, k, u, p, q) : this.embedSWF(c, e, g, h, k, p, r)
		},
		embedSWF: function(c, e, g, h, k, l, p) {
			g || (g = "ckplayer_a1");
			p || (p = {
				bgcolor: "#FFF",
				allowFullScreen: !0,
				allowScriptAccess: "always",
				wmode: "transparent"
			});
			this._A_ = l;
			this.getX();
			var u = !1,
				r = document,
				q = {
					w: "您的网页不符合w3c标准，无法显示播放器",
					f: '您没有安装flash插件，无法播放视频，<a href="http://www.macromedia.com/go/getflashplayer" target="_blank">请点击此处下载安装最新的flash插件</a>',
					v: '您的flash插件版本过低，无法播放视频，<a href="http://www.macromedia.com/go/getflashplayer" target="_blank">请点击此处下载安装最新的flash插件</a>'
				};
			r = "undefined" != typeof r.getElementById && "undefined" != typeof r.getElementsByTagName && "undefined" != typeof r.createElement;
			var z = 'id="' + g + '" name="' + g + '" ',
				y = "";
			p.movie = c;
			p.flashvars = this.getflashvars(l); - 1 == h && (d = !0, h = this._K_(e).style.width = "100%");
			y = y + '<object pluginspage="http://www.macromedia.com/go/getflashplayer" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0" ' + ('width="' + h + '" ') + ('height="' + k + '" ') + z;
			y += 'align="middle">';
			y += this.getparam(p).v;
			y += "<embed ";
			y += this.getparam(p).w;
			y = y + (' width="' + h + '" height="' + k + '" name="' + g + '" id="' + g + '" align="middle" ' + z) + 'type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" /></object>';
			r ? this.Flash().f ? 10 > this.Flash().v ? (c = q.v, u = !0) : (c = y, this._T_ = !1) : (c = q.f, u = !0) : (c = q.w, u = !0);
			c && (this._K_(e).innerHTML = c);
			u && (this._K_(e).style.color = "#0066cc", this._K_(e).style.lineHeight = this._K_(e).style.height, this._K_(e).style.textAlign = "center")
		},
		embedHTML5: function(c, e, g, h, k, l, p) {
			this._E_ = {
				c: c,
				p: e,
				w: g,
				h: h,
				v: k,
				s: p
			};
			this._A_ = l;
			this.getX();
			b = this.browser().B;
			v = this.browser().V;
			x = v.split(".");
			t = x[0];
			m = b + v;
			n = b + t;
			w = "";
			s = !1;
			f = this.Flash().f;
			a = !1;
			p || (p = ["iPad", "iPhone", "ios"]);
			for (c = 0; c < p.length; c++) {
				w = p[c];
				if ("all" == w.toLowerCase()) {
					s = !0;
					break
				}
				if ("all+false" == w.toLowerCase() && !f) {
					s = !0;
					break
				} - 1 < w.indexOf("+") ? (w = w.split("+")[0], a = !0) : a = !1;
				if (this.Platform() == w || m == w || n == w || b == w) if (a) {
					if (!f) {
						s = !0;
						break
					}
				} else {
					s = !0;
					break
				}
			}
			if (s) {
				if (k && (k = k[0].split("->")) && 2 == k.length && -1 < k[1].indexOf("ajax")) {
					this.getUrl(k, !0);
					return
				}
				this.showHtml5()
			}
		},
		status: function() {
			this._H_ = parseInt(this.getSn("setup", 20));
			var c = "ckplayer_status";
			"" != this.getSn("calljs", 0) && (c = this.getSn("calljs", 0));
			try {
				if ("function" == typeof eval(c)) return this._L_ = eval(c), this._M_ = !0
			} catch (e) {
				try {
					if ("function" == typeof eval(ckplayer_status)) return this._L_ = ckplayer_status, this._M_ = !0
				} catch (g) {}
			}
			return !1
		},
		showHtml5: function() {
			var c = q,
				e = c._E_.p,
				g = c._E_.c,
				h = this._E_.v,
				k = c._E_.w,
				l = c._E_.h,
				p = !1,
				u = "";
			1 == h.length && (u = ' src="' + h[0].split("->")[0] + '"'); - 1 == k && (p = !0, k = c._K_(g).style.width = "100%"); - 1 < k.toString().indexOf("%") && (k = "100%"); - 1 < l.toString().indexOf("%") && (l = "100%");
			h = "<video controls" + u + ' id="' + e + '" width="' + k + '" height="' + l + '"' + c.getParams() + ">" + c.getVideo() + "</video>";
			c._K_(g).innerHTML = h;
			c._K_(g).style.backgroundColor = "#000";
			c._V_ = this._K_(e);
			p || (c._K_(g).style.width = -1 < this._E_.w.toString().indexOf("%") ? c._K_(g).offsetWidth * parseInt(this._E_.w) * .01 + "px" : c._V_.width + "px", c._K_(g).style.height = -1 < this._E_.h.toString().indexOf("%") ? c._K_(g).offsetHeight * parseInt(this._E_.h) * .01 + "px" : c._V_.height + "px");
			c._P_ = !1;
			c._T_ = !0;
			if ("" != c.getVars("loaded")) {
				e = c.getVars("loaded") + "()";
				try {
					"function" == typeof eval(e) && eval(e)
				} catch (r) {
					try {
						"function" == typeof eval(loadedHandler) && loadedHandler()
					} catch (A) {}
				}
			}
			c.status();
			c.addListener("play", c.playHandler);
			c.addListener("pause", c.playHandler);
			c.addListener("error", c.errorHandler);
			c.addListener("emptied", c.errorHandler);
			c.addListener("loadedmetadata", c.loadedMetadataHandler);
			c.addListener("ended", c.endedHandler);
			c.addListener("volumechange", c.volumeChangeHandler)
		},
		videoPlay: function() {
			this._T_ && this._V_.play()
		},
		videoPause: function() {
			this._T_ && this._V_.pause()
		},
		playOrPause: function() {
			this._T_ && (this._V_.paused ? this._V_.play() : this._V_.pause())
		},
		fastNext: function() {
			this._T_ && (this._V_.currentTime += 10)
		},
		fastBack: function() {
			this._T_ && (this._V_.currentTime -= 10)
		},
		changeVolume: function(c) {
			this._T_ && (this._V_.volume = .01 * c)
		},
		videoSeek: function(c) {
			this._T_ && (this._V_.currentTime = c)
		},
		newAddress: function(c) {
			var e;
			c && (e = this.isHtml5New(c)) && this._T_ && (this.changeParams(c), (c = e[0].split("->")) && 2 == c.length && -1 < c[1].indexOf("ajax") ? this.getUrl(c, !1) : (this._E_.v = e, this.newAdr()))
		},
		quitFullScreen: function() {
			document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen()
		},
		changeStatus: function(c) {
			this._H_ = c
		},
		newAdr: function() {
			var c = this._E_.v;
			this._V_.pause();
			1 == c.length ? this._V_.src = c[0].split("->")[0] : this._V_.innerHTML = this.getVideo();
			this._V_.load()
		},
		isHtml5New: function(c) {
			if (-1 == c.indexOf("html5")) return !1;
			c = c.replace(/{/g, "").split("}");
			for (var e = "", g = 0; g < c.length; g++) if (-1 < c[g].indexOf("html5")) {
				e = c[g].replace("html5->", "").split(",");
				break
			}
			return e
		},
		changeParams: function(c) {
			if (c) {
				c = c.replace(/{/g, "").split("}");
				for (var e = 0; e < c.length; e++) {
					var g = c[e].split("->");
					if (2 == g.length) switch (g[0]) {
					case "p":
						1 == parseInt(g[1]) ? this._V_.autoplay = !0 : 2 == parseInt(g[1]) ? this._V_.preload = "metadata" : (this._V_.autoplay = !1, null != this._I_ && (clearInterval(this._I_), this._I_ = null));
						break;
					case "e":
						1 == parseInt(g[1]) ? this._V_.loop = !0 : this._V_.loop = !1;
						break;
					case "i":
						this._V_.poster = g[1]
					}
				}
			}
		},
		frontAdPause: function(c) {
			this.getNot()
		},
		frontAdUnload: function() {
			this.getNot()
		},
		changeFace: function(c) {
			this.getNot()
		},
		plugin: function(c, e, g, h, k, l, p) {
			this.getNot()
		},
		videoClear: function() {
			this.getNot()
		},
		videoBrightness: function(c) {
			this.getNot()
		},
		videoContrast: function(c) {
			this.getNot()
		},
		videoSaturation: function(c) {
			this.getNot()
		},
		videoSetHue: function(c) {
			this.getNot()
		},
		videoWAndH: function(c, e) {
			this.getNot()
		},
		videoWHXY: function(c, e, g, h) {
			this.getNot()
		},
		changeFlashvars: function(c) {
			this.getNot()
		},
		changeMyObject: function(c, e) {
			this.getNot()
		},
		getMyObject: function(c, e) {
			this.getNot()
		},
		changeeFace: function() {
			this.getNot()
		},
		changeStyle: function(c, e) {
			this.getNot()
		},
		promptLoad: function() {
			this.getNot()
		},
		promptUnload: function() {
			this.getNot()
		},
		marqueeLoad: function(c, e) {
			this.getNot()
		},
		marqueeClose: function(c) {
			this.getNot()
		},
		getNot: function() {
			return "The ckplayer's API for HTML5 does not exist"
		},
		volumeChangeHandler: function() {
			var c = q;
			c._V_.muted ? (c.returnStatus("volumechange:0", 1), c._O_.volume = 0, c._O_.mute = !0) : (c._O_.mute = !1, c._O_.volume = 100 * c._V_.volume, c.returnStatus("volumechange:" + 100 * c._V_.volume, 1))
		},
		endedHandler: function() {
			var c = q,
				e = parseInt(c.getVars("e"));
			c.returnStatus("ended", 1);
			c._I_ && (clearInterval(c._I_), c._I_ = null);
			if (0 == e || 4 == e || 6 == e) {
				6 == e && this.quitFullScreen();
				e = "playerstop()";
				"" != c.getSn("calljs", 2) && (e = c.getSn("calljs", 2) + "()");
				try {
					"function" == typeof eval(e) && eval(e)
				} catch (g) {
					try {
						"function" == typeof eval(playerstop) && playerstop()
					} catch (h) {}
				}
			}
		},
		loadedMetadataHandler: function() {
			var c = q;
			c.returnStatus("loadedmetadata", 1);
			c._O_.totaltime = c._V_.duration;
			c._O_.width = c._V_.width;
			c._O_.height = c._V_.height;
			c._O_.awidth = c._V_.videoWidth;
			c._O_.aheight = c._V_.videoHeight;
			c._V_.defaultMuted ? (c.returnStatus("volumechange:0", 1), c._O_.mute = !0, c._O_.volume = 0) : (c._O_.mute = !1, c._O_.volume = 100 * c._V_.volume, c.returnStatus("volumechange:" + 100 * c._V_.volume, 1))
		},
		errorHandler: function() {
			q.returnStatus("error", 1)
		},
		playHandler: function() {
			var c = q;
			if (c._V_.paused) c.returnStatus("pause", 1), c.addO("play", !1), null != c._I_ && (clearInterval(c._I_), c._I_ = null);
			else {
				c.returnStatus("play", 1);
				c.addO("play", !0);
				c._P_ || (c.returnStatus("play", 1), c._P_ = !0);
				c._I_ = setInterval(c.playTime, parseInt(c.getSn("setup", 37)));
				if (!c._G_) {
					c._G_ = !0;
					for (var e in c._A_) if ("g" == e && c._A_[e]) {
						var g = parseInt(c._A_[e]);
						c.videoSeek(g)
					}
				}
				if (!c._Y_) for (e in c._Y_ = !0, c._A_)"j" == e && c._A_[e] && (g = parseInt(c._A_[e]), c._J_ = 0 < g ? g : parseInt(c._O_.totaltime) + g)
			}
		},
		returnStatus: function(c, e) {
			3 == this._H_ && (c = this._E_.p + "->" + c);
			this._M_ && e <= this._H_ && this._L_(c)
		},
		addO: function(c, e) {
			this._O_[c] = e
		},
		getStatus: function() {
			return this._O_
		},
		playTime: function() {
			var c = q,
				e = c._V_.currentTime;
			c._O_.time = e;
			0 < c._J_ && e > c._J_ && (c._J_ = 0, c.videoSeek(c._O_.totaltime));
			c.returnStatus("time:" + e, 1)
		}
	};
	window.CKobject = q
})();