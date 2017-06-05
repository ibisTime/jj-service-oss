$(function() {

    var code = getQueryString('code');

    var fields = [{
        title: '是否热门',
        field: 'isHot',
        type: 'select',
        data: { '1': '是', '0': '否' },
        required: true,
    }];

    var options = {
        fields: fields,
        code: code,
        detailCode: '618052',
        dataType: "hotalOrder"
    };

    options.buttons = [{
        title: '保存',
        handler: function() {
            if ($('#jsForm').valid()) {
                var data = {};
                data['code'] = code;
                data['approver'] = sessionStorage.getItem('userName');
                data["isHot"] = $("#isHot").val();
                reqApi({
                    code: " ",
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