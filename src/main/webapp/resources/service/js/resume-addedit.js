$(function() {
	
	var code = getQueryString('code');
	var router = '/resume';
	
	var fields = [{
		title: '姓名',
		field: 'publisher',
		required: true,
		maxlength: 30
	}, {
		title: '出生时间',
		field: 'birthday',
		required: true,
	}, {
		title: '性别',
		field: 'gender',
		type: 'select',
		required: true,
		data: {'1':'男','0':'女'},
	},{
		title: '手机号码',
		field: 'mobile',
		required: true,
	},{
		title: '邮箱地址',
		field: 'email',
		required: true,
	},{
		title: '工作年限',
		field: 'work_time',
		required: true,
	},{
		title: '证件',
		field: 'id_kind',
		search : true,
		formatter: Dict.getNameForList('id_kind'),
		type: 'select',
		key: 'id_kind'
	},{
		title: '证件号',
		field: 'id_no',
		maxlength: 32,
	},{
		title: '居住地',
		field: 'address',
		maxlength: 255,
	},{
		title: '是否有实习经验',
		field: 'isWork',
		type: 'select',
		data: {'1':'有','0':'没有'},
		required: true,
	},{
		title: '公司名称',
		field: 'pre_comp_name',
		required: true,
		maxlength: 64,
	},{
		title: '职位名称',
		filed: 'pre_pos_name',
		required: true,
		maxlength: 64,
	},{
		title: '工作时间',
		field: 'pre_work_time',
		required: true,
		maxlength: 255,
	},{
		title: '职位月薪',
		field: 'pre_msalary',
		required: true,
		maxlength: 255,
	},{
		title: '工作描述',
		field: 'pre_description',
		required: true,
	},{
		title: '学历/学位',
		field: 'education',
		type: 'select',
		key: 'edu_kind',
		required: true,
	},{
		title: '是否统招',
		field: 'is_tz',
		type: 'select',
		data: {'1':'是','0':'否'},
		required: true,
	},{
		title: '就读时间',
		field: 'study_time',
		required: true,
		maxlength: 255,
	},{
		title: '就读学校',
		field: 'school',
		required: true,
		maxlength: 255,
	},{
		title: '专业名称',
		field: 'profession',
		required: true,
		maxlength: 255,
	},{
		title: '工作性质',
		field: 'type',
		type: 'select',
		key: 'work_type',
		required: true,
	},{
		title: '期望从事职业',
		field: 'exp_position'
	},{
		title: '期望月薪',
		field: 'exp_msalary',
		required: true,
		maxlength: 255
	},{
		title: '工作状态',
		field: 'work_status',
		type: 'select',
		data: {'1':'已离职，可立即上岗','2':'未离职，需一段时间才可上岗'},
		required: true,
	},{
		title: '期望工作地点',
		required: true,
		type: 'citySelect'
	},{
		title: '是否公开简历',
		field: 'is_open',
		type: 'select',
		data: {'1':'是','0':'否'},
		required: true,
	}];
	
	buildDetail(router, fields, code);
	
});