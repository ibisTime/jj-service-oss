$(function() {
	
	var code = getQueryString('code');
	var view = getQueryString('v');
	var router = '/customer/demandQuery';
	
	var fields = [/*{
		title: '副标题',
		type: 'title'
	}, */{
		title: '手机号码',
		field: 'company.mobile',
		required: true,
		resdonly: !!view,
	}, {
		title: '注册时间',
		field: 'publishDatetime',
		required: true,
		formatter: dateTimeFormat,
		resdonly: !!view,
	}, {
		title: '状态',
		field: 'status',
		data: {'1':'正常','0':'违规'},
		type: 'select',
		resdonly: !!view,
		required: true,
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