$(function() {
	
	var code = getQueryString('code');
	var view = getQueryString('v');
	var router = '/customer/examination';
	
	var fields = [{
		title: '基本信息',
		type: 'title',
	},{
		title: '真实姓名/企业名称',
		field: 'name',
		readonly:!!view,
		required: true,
	}, {
		title: '身份证照片/企业营业执照',
		field: 'gsyyzzh',
		required: true,
		readonly:!!view,
		type: 'img',
	}, {
		title: '个体户/企业图标',
		field: 'icon',
		required: true,
		readonly:!!view,
		type: 'img',
	},{
		title: '联系人',
		field: 'contacts',
		required: true,
		readonly:!!view,
		maxlength: 30,
	},{
		title: '联系人手机',
		field: 'mobile',
		readonly:!!view,
		required: true,
		maxlength: 30,
	},{
		title: '联系人邮箱',
		field: 'email',
		maxlength: 30,
		readonly:!!view,
	},{
		title: '联系人QQ号码',
		field: 'qq',
		maxlength: 30,
		readonly:!!view,
	},{
		title: '规模',
		field: 'scale',
		readonly:!!view,
		maxlength: 30,
	},{
		title: '地址',
		type: 'citySelect',
		readonly:!!view,
	},{
		title: '简介',
		field: 'description',
		type: 'textarea',
		readonly:!!view,
	},{
		title: '资质信息',
		type: 'title',
		readonly:!!view,
	},{
		title:'申请资质',
		field:'type',
		type: 'select',
		key: 'qua_kind',
		required: true,
		readonly:!!view,
	},{
		title: '资质名称',
		field: 'name',
		maxlength: 30,
		readonly:!!view,
		required: true,
	},{
		title: '资质简介',
		type: 'textarea',
		field: 'description',
		readonly:!!view,
		required: true,
	},{
		title: '广告语',
		field: 'slogan',
		readonly:!!view,
		maxlength: 255,
	},{
		title:'报价区间',
		formatter: function(value, record) { 
			  return record.quoteMin + '~' + record.quoteMax;
			},
		maxlength: 30,
		readonly:!!view,
	},{
		title: '审核意见',
		field: 'approveNote',
		maxlength: 255,
		readonly:!!view,
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