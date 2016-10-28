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
	var router = '/general/home';
	
	var fields = [{
		title: '位置',
		field: 'userId',
		required: true,
		type: 'select',
		url: $('#basePath').val() + '/user/list',
		keyName: 'userId',
		valueName: 'loginName',
		readonly: !!view,
		hidden: isBranch
	}, {
		title: '图1',
		field: 'abbrName',
		required: true,
		readonly: !!view,
		type: 'img'
	}, {
		title: '图2',
		field: 'abbrName',
		required: true,
		readonly: !!view,
		type: 'img'
	}, {
		title: '图3',
		field: 'abbrName',
		required: true,
		readonly: !!view,
		type: 'img'
	}, {
		title: '备注',
		field: 'remark',
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