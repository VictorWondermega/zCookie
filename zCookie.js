
// version: 1

// ザガタ。六 /////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

function zCookie(za,a,n) {
	/* Zagata.Cookie Alert */

	this.za = (typeof(za)=='undefined')?false:za; // core
	var a = (typeof(a)=='undefined')?false:a; // attr
	this.n = (typeof(n)=='undefined')?'zCookie':n; // name

	this.axbx = function() {
		if(this.ax === false) {
			this.ax = this.za.m['cooax'];
			this.za.ee('coobx',new Array(this,'axbx')).lo('zBx',false,'coobx');
		} else { // bx
			this.bx = this.za.m['coobx'];
			this.bx.bw.className += ' coobx';
			
			var vrs = this.za.mm('vrs');
			if(vrs && vrs[0]['url'].indexOf('cookie')<0) {
				vrs = vrs[0];
				this.ax.url = ((typeof(vrs['lng'])!=='undefined')?'/'+vrs['lng']:'') + '/cookie/xml';
				this.ax.parent = this;
				this.ax.fn = this.vis;
				this.ax.upd();
			} else { }
		}	
		
	},

	this.vis = function(t,s,x) {
		if(s==200) {
			x = x.getElementsByTagName('i');
			var i = 0, ix = x.length, tmp = false, t = '<div class="txt" >';
			for(i;i<ix;i++) {
				if(tmp = x[i].getElementsByTagName('ca')) {
					if(tmp.length > 0 && tmp[0].childNodes[0].nodeValue == 'txt') {
						t += x[i].getElementsByTagName('de')[0].childNodes[0].nodeValue;
					} else {}
				} else {}
			}
			t += '</div>';

			// show lightbox
			var bx = this.parent.bx;
			// this.za.msg('dbg',this.n,this.coobx);
			bx.cnt(t).shw().pos();
			
			bx.bw.style.position='fixed'; bx.bs.style.display='none';
			bx.bw.style.top='auto'; bx.bw.style.bottom='1rem'; bx.bw.style.left='1rem';
		} else {}
	},

	///////////////////////////////
	// funcs
	this.get = function() {
		var match = document.cookie.match(RegExp('(?:^|;\\s*)coo_yes=([^;]*)'));
	return (match && match!=null)?match[1]:false;
	},
	this.set = function() {
        var date = new Date();
        date.setTime(date.getTime() + (30*86400000));
		document.cookie = 'coo_yes=1; expires='+date.toUTCString()+'; path=/';
		this.bx.cls();
	},
	///////////////////////////////
	// ini
	// this.za.msg('dbg',this.n,'i am '+this.n+'(zCookie)');
	this.ax = false;
	
	// check cookie
	var coo = this.get();
	if(coo!=1) {
		this.za.ee('cooax',new Array(this,'axbx')).lo('zAx',false,'cooax');
	} else { }
};

////////////////////////////////////////////////////////////////
if(typeof(zlo)=='object') {
	zlo.da('zCookie');
} else {
	console.log('zCookie');
}
