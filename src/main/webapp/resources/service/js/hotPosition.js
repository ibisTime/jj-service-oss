$(function() {
	
	var code = getQueryString('code');
	var router = '/service/position';
	
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
					$('#jsForm').find('input[type=file]').parent().next().each(function(i, el) {
						data[el.id] = $(el).attr('src');
					});
					
					var url = $("#basePath").val()+ '/service/position/hot';
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