 $(function() {
     showPermissionControl();

     var router = '/customer/examination';

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
         url: $('#basePath').val() + '/general/qualification/list',
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
     buildList(router, columns);
 })