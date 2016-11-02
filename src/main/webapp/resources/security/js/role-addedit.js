$(function() {
	
	var code = getQueryString('code');
	var router = '/role';
	
	var fields = [/*{
		title: '副标题',
		type: 'title'
	}, */{
		title: '角色名称',
		field: 'name',
		required: true,
		maxlength: 30
	}, {
		title: '角色等级',
		field: 'level',
		required: true,
		type: 'select',
		key: 'role_level'
		//multiple: true
	}, {
		title: '备注',
		field: 'remark',
		maxlength: 250
	}];
	
	buildDetail(router, fields, code);
	
});