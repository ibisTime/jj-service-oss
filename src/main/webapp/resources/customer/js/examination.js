 $(function(){
	showPermissionControl();
	
	var router = '/customer/examination';
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'name',
		title : '申请机构',
		search: true,
		formatter: function(v, r) {
			return r.company.name;
		}
	}, {
		field: 'contacts',
		title: '联系人',
		formatter: function(v, r) {
			return r.company.contacts;
		}
	}, {
		field: 'mobile',
		title: '联系电话',
		formatter: function(v, r) {
				return r.company.mobile;
			}
	}, {
		field: 'certificateType',
		title: '资质',
		formatter : Dict.getNameForList('serve_type'),
		search: true,
		type: 'select',
		key: 'serve_type',
	}, {
		field : 'approveDatetime',
		title : '更新时间',
		formatter: dateTimeFormat
    }];
	buildList(router, columns);
	
	$('#examBtn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if(selRecords.length <= 0){
			alert("请选择记录");
			return;
		}
		if (selRecords[0].company.type == 1) {
			window.location.href = $("#basePath").val()+"/customer/examinationCom_detail.htm?certificateCode="+selRecords[0].certificateCode+"&companyCode="+encodeURI(encodeURI(selRecords[0].companyCode));
		} else if (selRecords[0].company.type == 2){
			window.location.href = $("#basePath").val()+"/customer/examinationPer_detail.htm?certificateCode="+selRecords[0].certificateCode+"&companyCode="+encodeURI(encodeURI(selRecords[0].companyCode));
		}
	});
})