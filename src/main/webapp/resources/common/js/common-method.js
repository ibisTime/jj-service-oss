/**
 * 日期格式转化
 * @param date
 * @param format
 * @returns
 */
function dateFormat(date, format) {
	if(date == '' || typeof(date) == 'undefined'){
		return '-';
	}
	if(format == '' || format == null || format == undefined){
		format = "yyyy-MM-dd HH:mm:ss";
	}
	
    date = new Date(date);
    var o = {
        'M+' : date.getMonth() + 1, //month
        'd+' : date.getDate(), //day
        'H+' : date.getHours(), //hour
        'm+' : date.getMinutes(), //minute
        's+' : date.getSeconds(), //second
        'q+' : Math.floor((date.getMonth() + 3) / 3), //quarter
        'S' : date.getMilliseconds() //millisecond
    };
    if (/(y+)/.test(format)){
         format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in o){
        if (new RegExp('(' + k + ')').test(format)){
        	format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
        }
    }
    return format;
}

/**
 * 金额格式转化
 * @param money
 * @param format
 */
/**
 * 废弃
function moneyFormat(money,format){
	if(isNaN(money)){
		return '';
	}
	if(format == '' || format == null || format == undefined){
		format = 2;
	}
	return parseFloat(money/1000).toFixed(format);
} */

/**
 * 金额格式转化
 * @param money
 * @param format
 */
function moneyFormat(money,format){
	var flag = true;
	if(isNaN(money)){
		return '0.00';
	}
	if(money < 0){
		money = -1 * money;
		flag = false;
	}
	if(format == '' || format == null || format == undefined){
		format = 2;
	}
	//钱除以1000并保留两位小数
	//money = (money/1000).toFixed(format).toString();
	money = (money/1000).toString();
	money = money.replace(/(\.\d\d)\d+/ig,"$1");
	money = parseFloat(money).toFixed(format);
	//千分位转化
	var re=/\d{1,3}(?=(\d{3})+$)/g;
	money = money.replace(/^(\d+)((\.\d+)?)$/,function(s,s1,s2){return s1.replace(re,"$&,")+s2;});
	if(!flag){
		money = "-" + money;	
	}
	return money;
}

/**
 * 编辑金额格式转化
 * @param money
 * @param format
 */
function editMoneyFormat(money,format){
	if(isNaN(money)){
		return '';
	}
	if(format == '' || format == null || format == undefined){
		format = 2;
	}
	return parseFloat(money/1000).toFixed(format);
}

/**
 * 百分比格式转化
 * @param percent
 * @param format
 */
function percentFormat(percent, format){
	return percent;
	/*if(isNaN(percent)){
		return '';
	}
	if(format == '' || format == null || format == undefined){
		format = 5;
	}
	return parseFloat(percent).toFixed(format);
	*/
}


/**
 * 百分比格式转化
 * @param percent
 * @param format
 * @returns
 */
function percentFormatByLarge(percent, format){
	if(isNaN(percent)){
		return '';
	}
	if(format == '' || format == null || format == undefined){
		format = 3;
	}
	return parseFloat(percent*10000).toFixed(format);
}

/**
 * 验证数字
 * @param amount
 * @param name
 * @returns {Boolean}
 */
function checkNum(amount,name){
	var reg = new RegExp("^[0-9]+(.[0-9]+)?$");
	if(!reg.test(amount)) { 
		alert(name+"只能输入数字！"); 
		return false; 
	}
	return true;
}

/**
 * 申请编号去除特殊字符('-'与' ')
 * @param rbNo
 */
function rbNoFormat(rbNo){
	return rbNo.replace(/-| /g, "")
}

/**
 * 金额放大，乘于1000，格式化
 * @param money
 * @param format
 */
function moneyFormatByEnLarge(money, format){
	if(isNaN(money)){
		return '';
	}
	return parseFloat(money*1000).toFixed(format);
}
/**
 * 利率缩小100倍
 */
function RateFormatByHundredDivided(rate){
	if(isNaN(rate)){
		return '';
	}
	return parseFloat(rate/100.0).toFixed(5);
}
/**
 * 利率放大100倍
 */
function RateFormatByLargeHundred(rate){
	if(isNaN(rate)){
		return '';
	}
	return parseFloat(rate*100.0).toFixed(5);
}
/**
 * 判断参数是否为空
 * @param paramValue
 */
function isBlank(param){
	var flag = false;
	if(param == "" || param == null || param == undefined){
		flag = true;
	}
	return flag;
}

/**
 * 处理错误信息
 * @param msg
 */
function dealErrorMsg(msg){
	//alert(msg);
	if(msg == "登录链接已超时，请重新登录."){
		top.location.href = $("#basePath").val()+"/security/signin.htm"
	}
}

/**
 * 显示遮罩
 */
function maskPop(){
	var maskDiv = '<div class="mask-pop"></div>';
	$('body').append(maskDiv);
	$('.mask-pop').show();
}

/**
 * 隐藏遮罩
 */
function unMaskPop(){
	var maskDiv = '<div class="mask-pop"></div>';
	$('body').append(maskDiv);
	$('.mask-pop').hide();
}

/**
 * 通过正则表达式获取URL传递参数
 * @param name
 * @returns
 */
function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}

/**
 * 通过正则表达式获取按钮菜单URL传递参数
 * @param url
 * @param name
 * @returns
 */
function getMenuUrl(url,name) {
	if(isBlank(url)){
		return null;
	}
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = url.substr(url.lastIndexOf("/")+1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}

/**
 * jquery URL传递 暂时没有
 * @param key
 * @returns
 */
function getUrlParam(key) {
	var json = {}, data;
	$.each(location.search.substr(1).split("&"), function(i, n) {
		data = n.split("=");
		json[data[0]] = data[1];
	});
	return key != undefined ? json[key] : json;
}

/**
 * 按钮权限控制
 */
function showPermissionControl(){
	// 获取menuCode
	var url = $("#basePath").val() + "/menu/list";
	var webUrl = window.location.pathname;
	var menuUrl = webUrl.substring($("#basePath").val().length);
	var data = {"menuUrl":menuUrl};
	doGetAjaxIsAsync(url, data, false, doGetMenuCode);
	
	// 设置按钮呈现方式
	var pUrl = $("#basePath").val() + "/user/permission/list";
	var pData = {"parentCode":$("#permissionCode").val(),"type":"2"};
	doGetAjaxIsAsync(pUrl, pData, false, doSuccessBackPermission);
}

// 获取菜单编号回执方法
function doGetMenuCode(res){
	if(res.success == true && !isBlank(res.data)){
		$("#permissionCode").val(res.data[0].menuCode);
	}else{
		alert("获取菜单编号失败,权限不受控制!");
	}
}

// 控制按钮呈现方式回执方法
function doSuccessBackPermission(res){
	var data = res.data;
	if(typeof(data) != "undefined"){//判断undifined
		for(var i = 0;i < data.length;i++){
			var menuUrl = data[i].menuUrl;
			menuUrl = menuUrl.substr(menuUrl.lastIndexOf("/")+1)
			$("#"+menuUrl+"Btn").show();
		}
	}
}
function myShowModalDialog(url, width, height, fn) {
    if (navigator.userAgent.indexOf("Chrome") > 0) {
        window.returnCallBackValue354865588 = fn;
        var paramsChrome = 'height=' + height + ', width=' + width + ', top=' + (((window.screen.height - height) / 2) - 50) +
            ',left=' + ((window.screen.width - width) / 2) + ',toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no';
        window.open(url, "newwindow", paramsChrome);
    }
    else {
        var params = 'dialogWidth:' + width + 'px;dialogHeight:' + height + 'px;status:no;dialogLeft:'
                    + ((window.screen.width - width) / 2) + 'px;dialogTop:' + (((window.screen.height - height) / 2) - 50) + 'px;';
        var tempReturnValue = window.showModalDialog(url, "", params);
        fn.call(window, tempReturnValue);
    }
}
function myReturnValue(value) {
    if (navigator.userAgent.indexOf("Chrome") > 0) {
        window.opener.returnCallBackValue354865588.call(window.opener, value);
    }
    else {
        window.returnValue = value;
    }
}

function getUserId() {
	return $('#topUserId', window.parent.frames[0].document).val();
}

function getCompanyId() {
	var companyCode ='0';
	doGetAjaxIsAsync($("#basePath").val()+"/plat/company/list", {userid:getUserId()}, false, function(res) {
		if (res.data.length > 0) {
			companyCode = res.data[0].code;
		}
	});
	return companyCode;
}

//下拉框
setTimeout(function() {
	$('select').chosen && $('select').not('.norender').chosen({search_contains: true});
}, 100);
var oriVal = $.fn.val;
$.fn.val = function(value) {
	var res = oriVal.apply($(this), arguments);
	if ($(this).is('select')) {
		$(this).trigger('chosen:updated');
	}
	return res;
}

//面包屑
setTimeout(function() {
	var topTitle = $('.nav .selected h2', window.parent.frames[0].document).text();
	var leftFirstTitle = $('.left-menu .active', window.parent.frames[1].document).parent().parent().find('.title').text();
	var leftSecondTitle = $('.left-menu .active', window.parent.frames[1].document).text();
	var html = '<li>'+topTitle+'</li><li>'+leftFirstTitle+'</li><li>'+leftSecondTitle+'</li>';
	var BtnTitle = localStorage.getItem('syj-btn');
	localStorage.setItem('syj-btn', '');
	if (BtnTitle) {
		html += '<li>'+BtnTitle+'</li>';
	}
	$('.place ul').html(html);
}, 1);

$(document).on('click', '.toolbar li[id*=Btn]', function(e) {
	var text = $(this).text();
	localStorage.setItem('syj-btn', text);
});