(function(){
	
	window.Toast = function Toast(){
		
		this.that = this;
		
		// 提供可以设置的接口
		this.setting = {
				"outTime":"5500",			// 设置这个toast的显示时间，默认5.5秒
				"outDuration":"500",		// 设置消失时的动画时间，单位毫秒
				"clickClose":true,			// 点击信息框消失
			};
		
		
		// taost容器的静态样式，不会变的
		this._staticToastsStyle = {
				"position": "fixed",
				"top":"0",		// 四个参数设置toast的位置
				"bottom":"none",
				"left":"none",
				"right":"0",
				"zIndex": "99999999",
			};
		
		// 内部 toast的样式
		this.toastStyle = {
				"publicStyel":{
						"position": "relative",
						"display": "block",
						"width": "320px",
						"borderRadius": "6px",
						"fontSize": "18px",
						"margin": "10px",
						"color": "#FFFFFF",
						"boxSizing": "border-box",
						"padding": "20px",
						"overflow":"hidden",
						"boxShadow": "0 0 5px 1px rgba(0,0,0,0.5)",
						"zIndex": "99999999",
					},
				"default":{
						"backgroundColor":"#1A83C8",
					},
				"info":{
						"backgroundColor":"#2FB444",
					},
				"error":{
						"backgroundColor":"#F84D46",
					},
				"warning":{
					"backgroundColor":"#FFCC00",
				},
			};
		
		// 内部的四个方法
		this.show = function show(txt){
			this._createDOMToast(txt , "default");
		}
		this.info = function show(txt){
			this._createDOMToast(txt , "info");
		}
		this.error = function show(txt){
			this._createDOMToast(txt , "error");
		}
		this.warning = function show(txt){
			this._createDOMToast(txt , "warning");
		}
		
		// 初始化
		this._init();
		
	} // end Toast
	
	Toast.prototype._init = function () {
		this._createDOMToasts();
	}
	
	// 创建 外层
	Toast.prototype._createDOMToasts = function (){
		// body下的第一个元素
		var bodyFristChild = document.querySelector("body").firstChild;
		var toasts = document.createElement("toasts");
		// 设置 toasts 外框的样式
		this._setCsss(toasts, this._staticToastsStyle);
		
		document.querySelector("body").insertBefore(toasts,bodyFristChild);
	}
	
	
	// 创建内层
	Toast.prototype._createDOMToast = function (txt , sty){
		var toasts = document.querySelector("toasts");
		var toast = document.createElement("toast");
		// 内部 样式
		this._setCsss(toast, this.toastStyle.publicStyel);
		
		this._setSytle(toast , sty);
		// 节点插入
		var txtNode = document.createTextNode(txt);
		toast.appendChild(txtNode);
		toasts.appendChild(toast);
		// 倒计时关闭
		var closes = this._closeToastRAF;
		var that = this.that;
		setTimeout(function(close){
			closes(toasts, toast, that);
		},this.setting.outTime);
		// 点击消失
		if (this.setting.clickClose) {
			this._clickClose(toasts, toast, that);
		}
	}
	
	// 设置css样式
	Toast.prototype._setCsss = function(obj, csss){
		for (var key in csss) {
			obj.style[key] = csss[key];
		}
	}
	
	// 设置不同发个的样式
	Toast.prototype._setSytle = function (toast , sty){
		if (sty == "default") {
			toast.style.backgroundColor = this.toastStyle.default.backgroundColor;
		} else if (sty == "info") {
			toast.style.backgroundColor = this.toastStyle.info.backgroundColor;
		} else if (sty == "error") {
			toast.style.backgroundColor = this.toastStyle.error.backgroundColor;
		} else if (sty == "warning") {
			toast.style.backgroundColor = this.toastStyle.warning.backgroundColor;
		} 
	}
	
	// 关闭提示框的动画
	Toast.prototype._closeToastRAF = function (toasts , toast, that){
		toast.style.webkitTransitionDuration = that.setting.outDuration + "ms";
		toast.style.mozTransitionDuration = that.setting.outDuration + "ms";
		toast.style.TransitionDuration = that.setting.outDuration + "ms";
		toast.style.height = "0";
		toast.style.margin = "0 10px";
		toast.style.padding = "0 20px";
		toast.style.opacity = "0.3";
		setTimeout(function(){
			try{
				toasts.removeChild(toast);
			}catch(e){
				//"你已经点击让这个消失了"
			}
		},parseInt(that.setting.outDuration))
	}
	
	Toast.prototype._clickClose = function(toasts, toast, that){
		toast.addEventListener("click",function(){
			that._closeToastRAF(toasts, toast, that);
		});
	}
	
	
	/*
	 *  初始化 dom 的外框
	 * 	创建taost 的dom结构
	 *  定时器设置 toast 的消失
	 *  鼠标经过这个 toast 的时候 延迟消失
	 *  双击toast直接消失
	 *  
	 * 
	 * 
	 * 
	 * 
	 * 
	 * 
	 * */
	
	
	
	
	
	
	
	
	
})();
