$(function() {
	
	var code = getQueryString('code');
	var router = '/position';
	
	var fields = [{
		title: '服务名称',
		field: '',
		required: true,
		maxlength: 30
	}, {
		title: '所属企业',
		field: '',
		required: true,
		url: $('#basePath').val() + '/general/company/list',
		keyName: 'code',
		valueName: 'name',
		type: 'select',
		maxlength:30,
	}, {
		title: '价格区间',
		required: true,
		field:'',
		maxlength: 30,
	},{
		title: '所属服务',
		field: '',
		type: 'select',
		key: 'serve_type',
		required: true,
	},{
		title: '拥有棚影数量',
		field: '',
		maxlength: 30,
		required: true,
	},{
		title: '拥有摄影师数量',
		field: '',
		maxlength:30,
		required: true,
	},{
		title: '是否接受定制需求',
		field: '',
		type: 'select',
		data: {'1':'是','0':'否'},
		required: true,
	},{
		title: '擅长拍摄类目',
		field: '',
		maxlength: 30,
		required: true,
	},{
		title: '上传代表作品',
		field: '',
		type: 'img',
		required: true,
	}];
	
	buildDetail(router, fields, code);
	
});