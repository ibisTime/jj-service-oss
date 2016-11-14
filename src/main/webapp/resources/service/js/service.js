$(function(){
	showPermissionControl();
	
	var router = '/service/service';
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'name',
		title : '服务名称',
	}, {
		field: 'qualityCode',
		title: '所属资质',
		url: $('#basePath').val() + '/general/qualification/list',
		search: true,
		type: 'select',
		keyName: 'code',
		valueName: 'name'
	},{
		field: 'companyName',
		title: '所属企业',
		search: true,
		formatter: function(v, r) {
			return r.company.name;
		}
	},{
		field: 'pubisher',
		title: '联系人',
		formatter: function(v, r) {
			return r.company.contacts;
		}
	},{
		title: '联系电话',
		field: 'mobile',
		formatter: function(v, r) {
			return r.company.mobile;
		}
	},{
		title: '价格区间',
		formatter: function(value, record) { 
			  return moneyFormat(record.quoteMin) + ' ~ ' + moneyFormat(record.quoteMax);
			}
	},{
		field: 'status',
		title: '状态',
		type: 'select',
		data: {'0': '违规', '1': '正常'}
	}, {
		field: 'dealNote',
		title: '违规提示'
	}, {
		field: 'isHot',
		title: '热门',
		type: 'select',
		search: true,
		data: {'0': '否', '1': '是'}
	}, {
		field : 'publishDatetime',
		title : '更新时间',
		formatter: dateTimeFormat
    }];
	buildList(router, columns);
	
	$('#illegalBtn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if(selRecords.length <= 0){
			alert("请选择记录");
			return;
		}
		window.location.href = $("#basePath").val()+"/service/illegalService.htm?code="+selRecords[0].code+"&name="+encodeURI(encodeURI(selRecords[0].name));
	});
	
	$('#hotBtn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if(selRecords.length <= 0){
			alert("请选择记录");
			return;
		}
		window.location.href = $("#basePath").val()+"/service/hotService.htm?code="+selRecords[0].code+"&name="+encodeURI(encodeURI(selRecords[0].name));
	});
});