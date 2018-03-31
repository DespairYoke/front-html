window.onload =function() {




    }
    // ruleclick =function (data) {
    //
    //
    // }
    //
    //
    //
    //     $('#rule').click(function (data) {
    //         jQuery.post('localhost:8080/user/addPatient',function (data) {
    //
    //
    //         })
    //     })

function lookbingli(){
    jQuery.post('http://localhost:8080/patientinfo/selectallpatient',function (data) {
        var gukeitem = "";
        var  list = JSON.parse(data);
        console.log(list.content)
        var lists = list.content;
        for (var i=0;i<lists.length;i++){
            var item = lists[i];
            gukeitem +=`
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.sex}</td>
                        <td>${item.age}</td>
                        <td>${item.pathogeny}</td>
                        <td>${item.phone}</td>
                        <td>${item.date}</td>
                        <td>${item.result}</td>
                    </tr>`
        }
        $('#binglicontent').html(gukeitem);
    })
}
function selectalldrug(){
    jQuery.post('http://localhost:8080/drug/selectdrug',function (data) {
        var gukeitem = "";
        var  list = JSON.parse(data);
        console.log(list.content)
        var lists = list.content;
        for (var i=0;i<lists.length;i++){
            var item = lists[i];
            gukeitem +=`
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.price}</td>
                        <td>${item.factory}</td>
                    </tr>`
        }
        $('#drug').html(gukeitem);
    })
}

function selectalldoctor(){
    jQuery.post('http://localhost:8080/patientinfo/patientanddoctor',function (data) {
        var gukeitem = "";
        var  list = JSON.parse(data);
        console.log(list.content)
        var lists = list.content;
        for (var i=0;i<lists.length;i++){
            var item = lists[i];
            gukeitem +=`
                    <tr>
                        <td>${item.department}</td>
                        <td>${item.name}</td>
                        <td>${item.pathogeny}</td>
                        <td>${item.result}</td>
                        <td>${item.phone}</td>
                    </tr>`
        }
        $('#doctor').html(gukeitem);
    })
}

function addUser(){
    var data = getUser();
    $.ajax({
        type: "POST",
        url: "http://localhost:8080/user/addPatient",
        data: data,
        dataType: "json",
        contentType:"application/json",
        success: function(){
            $('#rule').html("添加成功！");
        },
        error: function () {
            alert("bbbb")
            $('#rule').html("添加成功！");
        }
    });
}
