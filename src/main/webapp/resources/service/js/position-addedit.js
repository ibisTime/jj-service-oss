$(function() {
	
	var code = getQueryString('code');
	var router = '/position';
	
	var fields = [{
		title: '职位名称',
		field: 'name',
		required: true,
		maxlength: 30
	}, {
		title: '职位类别',
		field: 'kind',
		required: true,
		type: 'select',
		key: 'position_kind'
	}, {
		title: '工作地点',
		required: true,
		type: 'citySelect'
	},{
		title: '工作经验',
		field: 'experience',
		type: 'select',
		data: {'1':'1年内','2':'1-3年','3':'3-5年','4':'5年以上'}
	},{
		title: '学历要求',
		field: 'education',
		type: 'select',
		key: 'edu_kind',
	},{
		title: '工作性质',
		field: 'type',
		type: 'select',
		key : 'work_type'
	},{
		title: '招聘人数',
		field: 'job_num',
		maxlength: 11,
	},{
		title: '职位月薪',
		field: 'msalary',
		maxlength: 255,
	},{
		title: '职位描述',
		field: 'description',
		type: 'textarea',
	}];
	
	buildDetail(router, fields, code);
	
});