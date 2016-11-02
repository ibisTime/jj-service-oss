$(function() {
	
	var code = getQueryString('code');
	var router = '/customer/companyExam';
	
	var fields = [{
		title: '基本信息',
		type: 'title',
	},{
		title: '企业名称',
		field: 'name',
		required: true,
		maxlength: 30
	}, {
		title: '企业营业执照',
		field: 'gsyyzzh',
		required: true,
		type: 'img',
	}, {
		title: '企业图标',
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