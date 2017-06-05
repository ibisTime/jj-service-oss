$(function() {
	
	var code = getQueryString('code');
	var view = getQueryString('v');
	var router = '/customer/demandQuery';
	
	var fields = [/*{
		title: '副标题',
		type: 'title'
	}, */{
		title: '手机号码',
		field: 'mobile',
		required: true,
		readonly: !!view
	}, {
		title: '注册时间',
		field: 'publishDatetime',
		required: true,
		formatter: dateTimeFormat,
		readonly: !!view
	}, {
		field: 'status',
		title: '状态',
		type: 'select',
		key: 'user_status',
		readonly: !!view
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