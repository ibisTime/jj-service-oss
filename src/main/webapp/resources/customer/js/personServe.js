$(function() {
	
	var code = getQueryString('code');
	var router = '/customer/personServe';
	
	var fields = [{
		title: '基本信息',
		type: 'title',
	},{
		title: '真实姓名',
		field: 'name',
		required: true,
		maxlength: 30
	}, {
		title: '身份证照片',
		field: 'gsyyzzh',
		required: true,
		type: 'img',
	}, {
		title: '个体户图标',
		field: 'icon',
		required: true,
		type: 'img',
	},{
		title: '联系人',
		field: 'contacts',
		required: true,
		maxlength: 30,
	},{
		title: '联系人手机',
		field: 'mobile',
		required: true,
		maxlength: 30,
	},{
		title: '联系人邮箱',
		field: 'email',
		maxlength: 30,
	},{
		title: '联系人QQ号码',
		field: 'qq',
		maxlength: 30,
	},{
		title: '规模',
		field: 'scale',
		maxlength: 30,
	},{
		title: '地址',
		type: 'citySelect'
	},{
		title: '简介',
		field: 'description',
		type: 'textarea',
	}];
	buildDetail(router, fields, code);
	
});