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
	var router = '/general/news';
	
	var fields = [{
		title: '标题',
		field: 'title',
		required: true,
		maxlength: 30,
		readonly: !!view
	}, {
		title: '类型',
		field: 'type',
		required: true,
		type: 'select',
		url: $('#basePath').val() + '/user/list',
		keyName: 'userId',
		valueName: 'loginName',
		readonly: !!view,
		hidden: isBranch
	}, {
		title: '公司简介',
		field: 'description',
		required: true,
		type: 'textarea',
		readonly: !!view
	},{
		title: '备注',
		field: 'remark',
		required: true,
		maxlength: 30
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