$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	},{
		field : 'ckey',
		title : '参数键',
		search: true
	},
	// {
 //    	field : 'type',
	// 	title : '规则类型',
	// 	formatter: Dict.getNameForList('config_type')
 //    },
	 {
	 	title:"参数名称",
	 	field:"cvalue"
	 },
    {
    	field : 'cvalue',
		title : '参数值'
    },{
		field : 'remark',
		title : '备注'
	}];
	buildList({
		router: 'param',
		columns: columns,
		pageCode: '807715',
		searchParams:{
			companyCode: OSS.company
		}
	});
});

