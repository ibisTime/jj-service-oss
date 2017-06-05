$(function() {

    var code = getQueryString('code');


    var fields = [{
        title: '违规提示',
        field: 'dealNote',
        required: true,
        maxlength: 255
    }];

    var options = {
        fields: fields,
        code: code,
        //  detailCode: ' ',

    };

    options.buttons = [{
        title: '通过',
        handler: function() {
            if ($('#jsForm').valid()) {
                var data = {};
                data['code'] = code;
                data['approver'] = sessionStorage.getItem('userName');
                data["dealNote"] = $("#dealNote").val();
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