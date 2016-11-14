$(function() {
	
	var code = getQueryString('code');
	var router = '/general/company';
	
	var fields = [{
		title: '是否热门',
		field: 'isHot',
		type: 'select',
		data: {'1':'是','0':'否'},
		required: true,
	}];
	
	buildDetail(router, fields, code, {
		buttons: [{
			title: '保存',
			handler: function() {
				if ($('#jsForm').valid()) {
					var data = $('#jsForm').serializeObject();
					var url = $("#basePath").val()+ '/general/company/hot';
					ajaxPost(url, data).then(function(res) {
						if (res.success) {
							alert("操作成功");
							goBack();
						}
					});
				}
			}
		}, {
			title: '返回',
			handler: function() {
				goBack();
			}
		}]
	});
	
});