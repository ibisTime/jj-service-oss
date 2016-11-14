$(function() {
	
	var code = getQueryString('code');
	var view = getQueryString('v');
	var router = '/customer/examination';
	
	var fields = [{
		title: '申请企业',
		field: 'company-name',
		readonly: true,
		type: 'm2o',
		url: $('#basePath').val() + '/general/company_addedit.htm',
		codeField: 'companyCode'
	}, {
		title: '资质',
		field: 'certificate-name',
		readonly: true,
		type: 'm2o',
		url: $('#basePath').val() + '/general/qualification_addedit.htm',
		codeField: 'certificateCode'
	}, {
		title: '报价区间',
		field: 'remark',
		readonly: true,
		formatter: function(v, r) {
			return r.company.remark;
		}
	}, {
		title: '审核意见',
		field: 'approveNote',
		maxlength: 255,
		required: true,
		readonly:!!view,
	}];
	
	buildDetail(router, fields, code, {
		buttons: [{
			title: '通过',
			handler: function() {
				if ($('#jsForm').valid()) {
					var data = $('#jsForm').serializeObject();
					data.approveResult = 1;
					var url = $("#basePath").val()+ router + "/check";
					ajaxPost(url, data).then(function(res) {
						if (res.success) {
							alert("操作成功");
							goBack();
						}
					});
				}
			}
		}, {
			title: '不通过',
			handler: function() {
				if ($('#jsForm').valid()) {
					var data = $('#jsForm').serializeObject();
					data.approveResult = 0;
					var url = $("#basePath").val()+ router + "/check";
					ajaxPost(url, data).then(function(res) {
						if (res.success) {
							alert("操作成功");
							goBack();
						}
					});
				}
			}
		}, {
			'title': '返回',
			handler: function() {
				goBack();
			}
		}]
	});
	
	
});