$(function() {
	
	var code = getQueryString('code');
	var router = '/service/resume';
	
	var fields = [{
		title: '违规提示',
		field: 'dealNote',
		required: true,
		maxlength: 255
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
					
					var url = $("#basePath").val()+ '/service/resume/illegal';
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