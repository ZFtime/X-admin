(function () {

    layui.use(['layer'], function () {
        $ = layui.jquery;
        layer = layui.layer;
        //处理点击很多复选框的逻辑
        $('.checkboxParent').on('click', 'input', function () {
            var transData = $(this).val().slice(1, 2);
            //状态是$(this).prop('checked')
            if ($(this).prop('checked')) {
                var i = 1;
                $(this).siblings().each(function () {
                    if ($(this).prop('checked')) {
                        i++
                    }
                })
                if (i > 3) {
                    $(this).prop('checked', false)
                    layer.alert('最多只能选3个');
                    return;
                }
                $('#jg1003-1').append('<span style="margin-right:5px;" id="' + transData + '">' + $(this).val() + '</span>')

            } else {
                $('#jg1003-1').find('#' + transData + '').remove()
            }
        })
        //点击上市情况这边的逻辑

        $('.radioParent').on('click', 'input', function () {
            // console.log($(this).attr('data-type'))
            var dataType = $(this).attr('data-type')
            if (!dataType || dataType === '1') {
                $('#_easyui_textbox_input12').prop('disabled', true)
                $('#_easyui_textbox_input28').prop('disabled', true)
            } else if (dataType === '2') {
                $('#_easyui_textbox_input12').prop('disabled', true)
                $('#_easyui_textbox_input28').prop('disabled', false)
            } else {
                $('#_easyui_textbox_input12').prop('disabled', false)
                $('#_easyui_textbox_input28').prop('disabled', false)
            }

        })
        //点击保存的逻辑
        $('#status').click(function () {
            var input1 = $("#_easyui_textbox_input1").val();
            var input2 = $("#_easyui_textbox_input2").val();
            var input3 = $("#_easyui_textbox_input3").val();
            // 处理复选框
            var backStr = ''
            var input4=''
             $('#jg1003-1').find('span').each(function () {
                backStr += $(this).attr('id') + ','
                input4 =backStr
            })
            var input5 = $("#_easyui_textbox_input4").val();
            var input6 = $("#_easyui_textbox_input5").val();
            var input7 = $("#_easyui_textbox_input6").val();
            var input8 = $("#_easyui_textbox_input7").val();
            var input9 = $("#_easyui_textbox_input22").val();
            var input10 = $("#_easyui_textbox_input8").val();
            var input11 = $("#_easyui_textbox_input9").val();
            var input12 = $("#_easyui_textbox_input10").val();
            var input13 = $("#_easyui_textbox_input11").val();
            // 处理企业性质
            var input14=$("input[name='jg1013']:checked").attr('id');
            // 上市情况
            var input15=$("input[name='jg1014']:checked").attr("data-id");
            var input16=$("#_easyui_textbox_input18").val();
            var input17=$("#_easyui_textbox_input19").val();
            var input18=$("#_easyui_textbox_input20").val();
            var input19=$("#_easyui_textbox_input12").val();
            var input20=$("#_easyui_textbox_input28").val();
            var arr=[input1,input2,input3,input4,input5,input6,input7,input8,input9,input10,input11,input12,input13,input14,input15,input16,input17,input18,input19,input20]
            console.log(arr);
        })
    })


})()