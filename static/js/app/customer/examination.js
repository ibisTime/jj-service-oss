 $(function() {


     var columns = [{
         field: '',
         title: '',
         checkbox: true
     }, {
         field: 'companyName',
         title: '申请企业',
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
         field: 'certificateCode',
         title: '资质',
         listCode: "612016",
         search: true,
         type: 'select',
         keyName: 'code',
         valueName: 'name'
     }, {
         field: 'status',
         title: '状态',
         search: true,
         type: 'select',
         formatter: Dict.getNameForList('cmpcerti_status'),
         key: 'cmpcerti_status',
         value: '0'
     }, {
         field: 'approveDatetime',
         title: '更新时间',
         formatter: function(v, r) {
             if (v) {
                 return dateTimeFormat(v);
             } else {
                 return dateTimeFormat(r.applyDatetime);
             }
         }
     }];
     buildList({
         columns: columns,
         pageCode: '612075',
         searchParams: {
             companyCode: OSS.company
         }
     });
     $('#checkBtn').click(function() {
         var selRecords = $('#tableList').bootstrapTable('getSelections');
         if (selRecords.length <= 0) {
             toastr.info("请选择记录");
             return;
         }
         if (selRecords.length != 0) {
             toastr.warning("不是待审核的状态");
             return;
         }
         window.location.href = "examination_check.html?code=" + selRecords[0].code;

     });
     $("#detaBtn").click(function() {
         var selRecords = $('#tableList').bootstrapTable('getSelections');
         if (selRecords.length <= 0) {
             toastr.info("请选择记录");
             return;
         }
         window.location.href = "examination_check.html?code=" + selRecords[0].code + "&detail=1";
     });
 });