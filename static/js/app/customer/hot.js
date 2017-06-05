 $(function() {


     var columns = [{
         field: '',
         title: '',
         checkbox: true
     }, {
         field: 'name',
         title: '名称'
     }, {
         field: 'kind',
         title: '类别',
         type: 'select',
         key: 'position_kind',
         formatter: Dict.getNameForList('position_kind'),
         search: true
     }, {
         field: 'type',
         title: '工作性质',
         type: 'select',
         key: 'work_type',
         formatter: Dict.getNameForList('work_type'),
         search: true
     }, {
         field: 'orderNo',
         title: '次序'
     }, {
         field: 'publishDatetime',
         title: '更新时间',
         formatter: dateTimeFormat
     }];
     buildList({
         columns: columns,
         pageCode: ' ',
         deleteCode: ' ',
         searchParams: {
             isHot: 1,
             orderDir: 'asc',
             orderColumn: 'order_no',
             companyCode: OSS.company
         }
     });
     $('#upBtn').click(function() {
         var selRecords = $('#tableList').bootstrapTable('getSelections');
         if (selRecords.length <= 0) {
             toastr.info("请选择记录");
             return;
         }
         confirm("确认上移该位置？").then(function() {
             reqApi({
                 code: '',
                 json: { "code": selRecords[0].code }
             }).then(function() {
                 toastr.info("操作成功");
                 $('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
             });
         });

     });
     $('#downBtn').click(function() {
         var selRecords = $('#tableList').bootstrapTable('getSelections');
         if (selRecords.length <= 0) {
             toastr.info("请选择记录");
             return;
         }
         confirm("确认下移该位置？").then(function() {
             reqApi({
                 code: '',
                 json: { "code": selRecords[0].code }
             }).then(function() {
                 toastr.info("操作成功");
                 $('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
             });
         });

     });
     $('#hotBtn').click(function() {
         var selRecords = $('#tableList').bootstrapTable('getSelections');
         if (selRecords.length <= 0) {
             alert("请选择记录");
             return;
         }
         //  if (!confirm("确认是否移出该记录？")) {
         //      return false;
         //  }
         confirm("确认是否移出该记录？").then(function() {
             reqApi({
                 code: '',
                 json: { "code": selRecords[0].code, 'isHot': 0 }
             }).then(function() {
                 toastr.info("操作成功");
                 $('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
             });
         });
     });
 })