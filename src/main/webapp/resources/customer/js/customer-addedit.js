$(function() {
	
	var code = getQueryString('code');
	var router = '/customer';
	
	var fields = [{
		title: '手机号',
		field: 'mobile',
		readonly: true
	}, {
		field: 'updateDatetime',
		title: '注册时间',
		formatter: dateTimeFormat,
		readonly: true
	}, {
		field: 'status',
		title: '状态',
		type: 'select',
		key: 'user_status',
		readonly: true
	}];
	buildDetail(router, fields, code, {
		buttons: [{
			title: '返回',
			handler: function() {
				goBack();
			}
		}]
	});
	
});