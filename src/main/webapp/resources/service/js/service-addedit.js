$(function() {
	
	var code = getQueryString('code');
	var view = getQueryString('v');
	var router = '/service/service';
	
	var fields = [{
		title: '服务名称',
		field: 'name',
		required: true,
		readonly: true,
	}, {
		title: '所属企业',
		field: 'companyName',
		required: true,
		readonly: true,
		url: $('#basePath').val() + '/general/company/list',
		keyName: 'code',
		valueName: 'name',
		type: 'select',
	}, {
		title: '价格区间',
		required: true,
		formatter: function(value, record) { 
			  return record.quoteMin + '~' + record.quoteMax;
			},
		readonly: true,
	},{
		title: '所属服务',
		field: 'type',
		type: 'select',
		key: 'serve_type',
		required: true,
		readonly: true,
//	},{
//		title: '拥有棚影数量',
//		field: '',
//		maxlength: 30,
//		required: true,
//	},{
//		title: '拥有摄影师数量',
//		field: '',
//		maxlength:30,
//		required: true,
//	},{
//		title: '是否接受定制需求',
//		field: 'isOrder',
//		type: 'select',
//		data: {'1':'是','0':'否'},
//		required: true,
//	},{
//		title: '擅长拍摄类目',
//		field: '',
//		maxlength: 30,
//		required: true,
//	},{
//		title: '上传代表作品',
//		field: '',
//		type: 'img',
//		required: true,
	}];
	
	var options = {};
	if (view) {
		options.buttons = [{
			'title': '返回',
			handler: function() {
				goBack();
			}
		}];
	}
	
	buildDetail(router, fields, code, options);
	
});