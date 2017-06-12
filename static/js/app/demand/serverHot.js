$(function() {

    var code = getQueryString('code');


    var fields = [{
        title: 'UI位置',
        field: 'location',
        type: 'select',
        data: { '0': '普通', '1': '热门' },
        required: true,
        maxlength: 255
    }, {
        title: 'UI次序',
        field: 'orderNo',
        number: true
    }];
    var options = {
        fields: fields,
        code: code,
        detailCode: '612141'
    };
    options.buttons = [{
        title: '保存',
        handler: function() {
            if ($('#jsForm').valid()) {
                var data = {};
                data['code'] = code;
                data['dealer'] = sessionStorage.getItem('userName');
                data["orderNo"] = $("#orderNo").val();
                data["location"] = $("#location").val();
                reqApi({
                    code: "612132",
                    json: data
                }).done(function() {
                    sucDetail();
                });
            }
        }
    }, {
        title: '返回',
        handler: function() {
            goBack();
        }
    }];

    buildDetail(options);

});