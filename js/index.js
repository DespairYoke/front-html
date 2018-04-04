window.onload =function() {
            jQuery.post('http://localhost:8080/doctor/querybonenomal',function (data) {
                var gukeitem = "";
                var  list = JSON.parse(data);
                console.log(list)
                for (em in list){
                    var item = list[em];
                    gukeitem +=`
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.phone}</td>
                    </tr>`                      
                }
                $('#gukecontent').html(gukeitem);
            })
}

function getgukeputong(){
    jQuery.post('http://localhost:8080/doctor/querybonenomal',function (data) {
                var gukeitem = "";
                var  list = JSON.parse(data);
                console.log(list)
                for (em in list){
                    var item = list[em];
                    gukeitem +=`
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.phone}</td>
                    </tr>`                      
                }
                $('#gukecontent').html(gukeitem);
            })
}

function getgukezhuanjia(){
    jQuery.post('http://localhost:8080/doctor/queryboneprefessional',function (data) {
                var gukeitem = "";
                var  list = JSON.parse(data);
                console.log(list)
                for (em in list){
                    var item = list[em];
                    gukeitem +=`
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.phone}</td>
                    </tr>`                      
                }
                $('#gukecontent').html(gukeitem);
            })
}
    
function getyakeputong(){
    jQuery.post('http://localhost:8080/doctor/querytoothnomal',function (data) {
                var gukeitem = "";
                var  list = JSON.parse(data);
                console.log(list)
                for (em in list){
                    var item = list[em];
                    gukeitem +=`
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.phone}</td>
                    </tr>`                      
                }
                $('#yakecontent').html(gukeitem);
            })
}

function getyakezhuanjia(){
    jQuery.post('http://localhost:8080/doctor/querytoothprefessional',function (data) {
                var gukeitem = "";
                var  list = JSON.parse(data);
                console.log(list)
                for (em in list){
                    var item = list[em];
                    gukeitem +=`
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.phone}</td>
                    </tr>`                      
                }
                $('#yakecontent').html(gukeitem);
            })
}

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
                        <td>${item.date}</td>
                    </tr>`                      
                }
                $('#binglicontent').html(gukeitem);
            })
}

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
                        <td>${item.date}</td>
                    </tr>`                      
                }
                $('#binglicontent').html(gukeitem);
            })
}

function lookzhiliao(){
    jQuery.post('http://localhost:8080/patientinfo/patientanddoctor',function (data) {
                var gukeitem = "";
                var  list = JSON.parse(data);
                console.log(list.content)
                var lists = list.content;
                for (var i=0;i<lists.length;i++){
                    var item = lists[i];
                    gukeitem +=`
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.pathogeny}</td>
                        <td>${item.result}</td>
                        <td>${item.phone}</td>
                    </tr>      `              
                }
                $('#zhiliaocontent').html(gukeitem);
            })
}