$(function() {
	var code = getQueryString('code');
	var isBranch = getQueryString('b');
	if (isBranch) {
		var cmp = getCompany(getUserId());
		if (cmp) {
			code = cmp.code;
		}
	}
	var view = getQueryString('v');
	var router = '/general/company';
	
	var fields = [{
		title: '类别',
		field: 'type',
		readonly: !!view,
		type: 'select',
		data: {'1': '公司', '2': '个体户'}
	}, {
		title: '全称',
		field: 'name',
		required: true,
		maxlength: 30,
		readonly: !!view
	}, {
		title: '工商营业执照号',
		field: 'gsyyzzh',
		required: true,
		readonly: !!view,
		maxlength: 30,
		type: 'img'
	}, {
		title: '企业图标',
		field: 'logo',
		required: true,
		readonly: !!view,
		maxlength: 30,
		type: 'img'
	}, {
		title: '联系人',
		field: 'contacts',
		readonly: !!view
	}, {
		title: '联系人电话',
		field: 'mobile',
		maxlength: 30,
		readonly: !!view
	}, {
		title: '联系人邮箱',
		field: 'email',
		maxlength: 30,
		readonly: !!view
	}, {
		title: '联系人qq',
		field: 'qq',
		maxlength: 30,
		readonly: !!view
	}, {
		title: '规模',
		field: 'scale',
		required: true,
		readonly: !!view,
		type: 'select',
		key: 'comp_scale'
	}, {
		placeholder: '详细地址（如街道、门牌号等）',
		field: 'address',
		required: true,
		maxlength: 100,
		hidden: !!view
	}, {
		title: '地址',
		field: 'province1',
		hidden: !view,
		readonly: true,
		formatter: function(v, r) {
			var res = $.unique([r.province, r.city, r.area]).reverse();
			return res.join(' ') + ' ' + (r.address || '');
		}
	}, {
		title: '广告语',
		field: 'slogan',
		required: true,
		readonly: !!view,
		maxlength: 30
	}, {
		title: '简介',
		field: 'description',
		required: true,
		type: 'textarea',
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
	
	if (isBranch) {
		options.buttons = [{
			'title': '修改',
			handler: function() {
				if ($('#jsForm').valid()) {
					var data = $('#jsForm').serializeObject();
					$('#jsForm').find('input[type=file]').parent().next().each(function(i, el) {
						data[el.id] = $(el).attr('src');
					});
					if ($('#jsForm').find('#province')[0]) {
						var province = $('#province').val();
						var city = $('#city').val();
						var area = $('#area').val();
						if (!city) {
							data['city'] = province;
							data['area'] = province;
						} else if (!area) {
							data['city'] = province;
							data['area'] = city;
						} 
					}
					var url = $("#basePath").val()+ router + "/" + (code ? 'edit' : 'add');
					ajaxPost(url, data).then(function(res) {
						if (res.success) {
							alert("操作成功");
						}
					});
				}
			}
		}];
	}
	
	buildDetail(router, fields, code, options);
});