(function(){
	
	window.Toast = function Toast(){
		
		this.aaa = "aaaa";
		
		var setting = {
				"userSelect": false,		// 设置toast的内容是否可以选择，默认可以
				"publicStyel":{
						"position": "relative",
						"display": "block",
						"width": "300px",
						"borderRadius": "6px",
						"fontSize": "18px",
						"margin": "10px",
						"color": "#FFFFFF",
						"boxSizing": "border-box",
						"padding": "10px",
						"boxShadow": "0 0 5px 1px rgba(0,0,0,0.5)",
						"zIndex": "99999999",
					}
			};
		
		// taost容器的静态样式，不会变的
		var staticToastsStyle = {
				"position": "fixed",
				"top":"0",		// 四个参数设置toast的位置
				"bottom":"none",
				"left":"none",
				"right":"0",
				"zIndex": "99999999",
			};
		
		var toastStyle = {
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
					"backgroundColor":"#EDA52E",
				},
			};
		
		init();
		
		function init(){
			console.log("init");
			_createDOMToasts();
		}
		
		this.show = function show(txt){
			_createDOMToast(txt , "default");
		}
		this.info = function show(txt){
			_createDOMToast(txt , "info");
		}
		this.error = function show(txt){
			_createDOMToast(txt , "error");
		}
		this.warning = function show(txt){
			_createDOMToast(txt , "warning");
		}
		
		
		// 创建 外层
		function _createDOMToasts(){
			console.log("_createDOMToasts")
			
			// body下的第一个元素
			var bodyFristChild = document.querySelector("body").firstChild;
			
			var toasts = document.createElement("toasts");
			// 设置 toasts 外框的样式
			toasts.style.position = staticToastsStyle.position;
			toasts.style.top = staticToastsStyle.top;
			toasts.style.bottom = staticToastsStyle.bottom;
			toasts.style.left = staticToastsStyle.left;
			toasts.style.right = staticToastsStyle.right;
			toasts.style.zIndex = staticToastsStyle.zIndex;
			
			document.querySelector("body").insertBefore(toasts,bodyFristChild);
			
		}
		
		// 创建内层
		function _createDOMToast(txt , sty){
			console.log("_createDOMToast")
			var toasts = document.querySelector("toasts");
			
			var toast = document.createElement("toast");
			
			// 内部 样式
			toast.style.position = setting.publicStyel.position;
			toast.style.display = setting.publicStyel.display;
			toast.style.width = setting.publicStyel.width;
			toast.style.borderRadius = setting.publicStyel.borderRadius;
			toast.style.fontSize = setting.publicStyel.fontSize;
			toast.style.margin = setting.publicStyel.margin;
			toast.style.color = setting.publicStyel.color;
			toast.style.boxSizing = setting.publicStyel.boxSizing;
			toast.style.padding = setting.publicStyel.padding;
			toast.style.boxShadow = setting.publicStyel.boxShadow;
			toast.style.zIndex = setting.publicStyel.zIndex;
			
			setSytle(toast , sty);
			
			// 节点插入
			var txtNode = document.createTextNode(txt);
			toast.appendChild(txtNode);
			toasts.appendChild(toast);
			
			setTimeout(function(){
				toasts.removeChild(toast);
			},3500)
			
		}
		
		function setSytle(toast , sty){
			console.log(sty)
			if (sty == "default") {
				toast.style.backgroundColor = toastStyle.default.backgroundColor;
			} else if (sty == "info") {
				toast.style.backgroundColor = toastStyle.info.backgroundColor;
			} else if (sty == "error") {
				toast.style.backgroundColor = toastStyle.error.backgroundColor;
			} else if (sty == "warning") {
				toast.style.backgroundColor = toastStyle.warning.backgroundColor;
			} 
		}
		
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
