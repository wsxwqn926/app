var scro={init:function(){this.windTop=maxScroll=!1,this.cont=document.querySelector(".conter"),this.yiime(),Events.trigger("scrot")},JsonP:function(){var e=this;this.scroAjax(function(n){n=JSON.parse(n);for(var t in n){var i=n[t],r=document.createElement("div"),s=parseInt(300*Math.random());r.className="item",r.innerHTML='<img src="'+i.images+'"/> <br>price:'+s,e.cont.insertBefore(r,e.cont.firstElementChild),is.refresh()}})},database:function(){var e=this;this.scroAjax(function(n){n=JSON.parse(n);for(var t in n){var i=n[t],r=document.createElement("div"),s=parseInt(300*Math.random());r.className="item",r.innerHTML='<img src="'+i.images+'"/> <br>price:'+s,e.cont.appendChild(r),is.refresh()}})},scroAjax:function(e){var n=new XMLHttpRequest;n.onreadystatechange=function(){200==n.status&&4==n.readyState&&e(n.responseText)},n.open("get","js/index.json",!0),n.send()},yiime:function(){var e=this;setTimeout(function(){is=new IScroll(".wrapper",{probeType:3}),is.on("scrollEnd",function(){e.windTop&&(e.windTop=!1,e.JsonP()),maxScroll&&(maxScroll=!1,e.database())}),is.on("scroll",function(){this.y>50&&(e.windTop=!0),this.y<this.maxScrollY-50&&(maxScroll=!0)})},0)}};