function callback(t){var e=document.querySelector(".topRight_sp1");e.innerHTML=t[0].userID}document.addEventListener("DOMContentLoaded",function(){var t=640,e=document.documentElement,n=e.offsetWidth,i=n/t;e.style.fontSize=100*i+"px"});var desktop={init:function(){this.but=document.querySelector(".login"),this.topRight_sp1=document.querySelector(".topRight_sp1"),this.btnAdd(),this.opinion(),this.flse},opinion:function(){var t=localStorage.getItem("userID");null!=t&&(this.ajax("http://datainfo.duapp.com/shopdata/getuser.php?userID="+t),this.but.innerHTML="退出",this.flse=!0)},btnAdd:function(){var t=this;this.but.addEventListener("touchstart",function(){t.flse?(this.innerHTML="登录",localStorage.removeItem("userID"),flse=!1,location.href="login.html"):(t.topRight_sp1.innerHTML="未知",location.href="login.html"),this.style.background="#940807"},!0),this.but.addEventListener("touchend",function(){this.style.background="-webkit-linear-gradient(top,#ce1614 0px,#940807 30px)"},!0)},ajax:function(t){var e=document.querySelector("#script");e&&(e.id="");var n=document.createElement("script");n.id="script",n.src=t,document.body.appendChild(n)}};desktop.init();