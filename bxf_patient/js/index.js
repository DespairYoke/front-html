window.onload = function() {
  jQuery.post('http://localhost:8080/doctor/querybonenomal', function(data) {
    var gukeitem = '';
    var list = JSON.parse(data);
    console.log(list);
    for (em in list) {
      var item = list[em];
      gukeitem += `
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.phone}</td>
                    </tr>`;
    }
    $('#gukecontent').html(gukeitem);
  });
};

function getgukeputong() {
  jQuery.post('http://localhost:8080/doctor/querybonenomal', function(data) {
    var gukeitem = '';
    var list = JSON.parse(data);
    console.log(list);
    for (em in list) {
      var item = list[em];
      gukeitem += `
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.phone}</td>
                    </tr>`;
    }
    $('#gukecontent').html(gukeitem);
  });
}

function getgukezhuanjia() {
  jQuery.post('http://localhost:8080/doctor/queryboneprefessional', function(
    data
  ) {
    var gukeitem = '';
    var list = JSON.parse(data);
    console.log(list);
    for (em in list) {
      var item = list[em];
      gukeitem += `
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.phone}</td>
                    </tr>`;
    }
    $('#gukecontent').html(gukeitem);
  });
}

function getyakeputong() {
  jQuery.post('http://localhost:8080/doctor/querytoothnomal', function(data) {
    var gukeitem = '';
    var list = JSON.parse(data);
    console.log(list);
    for (em in list) {
      var item = list[em];
      gukeitem += `
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.phone}</td>
                    </tr>`;
    }
    $('#yakecontent').html(gukeitem);
  });
}

function getyakezhuanjia() {
  jQuery.post('http://localhost:8080/doctor/querytoothprefessional', function(
    data
  ) {
    var gukeitem = '';
    var list = JSON.parse(data);
    console.log(list);
    for (em in list) {
      var item = list[em];
      gukeitem += `
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.phone}</td>
                    </tr>`;
    }
    $('#yakecontent').html(gukeitem);
  });
}

function lookbingli() {
  jQuery.post('http://localhost:8080/patientinfo/selectallpatient', function(
    data
  ) {
    var gukeitem = '';
    var list = JSON.parse(data);
    console.log(list.content);
    var lists = list.content;
    for (var i = 0; i < lists.length; i++) {
      var item = lists[i];
      gukeitem += `
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.sex}</td>
                        <td>${item.age}</td>
                        <td>${item.pathogeny}</td>
                        <td>${item.date}</td>
                    </tr>`;
    }
    $('#binglicontent').html(gukeitem);
  });
}

function lookbingli() {
  jQuery.post('http://localhost:8080/patientinfo/selectallpatient', function(
    data
  ) {
    var gukeitem = '';
    var list = JSON.parse(data);
    console.log(list.content);
    var lists = list.content;
    for (var i = 0; i < lists.length; i++) {
      var item = lists[i];
      gukeitem += `
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.sex}</td>
                        <td>${item.age}</td>
                        <td>${item.pathogeny}</td>
                        <td>${item.date}</td>
                    </tr>`;
    }
    $('#binglicontent').html(gukeitem);
  });
}

function lookzhiliao() {
  jQuery.post('http://localhost:8080/patientinfo/patientanddoctor', function(
    data
  ) {
    var gukeitem = '';
    var list = JSON.parse(data);
    console.log(list.content);
    var lists = list.content;
    for (var i = 0; i < lists.length; i++) {
      var item = lists[i];
      gukeitem += `
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.pathogeny}</td>
                        <td>${item.result}</td>
                        <td>${item.phone}</td>
                    </tr>      `;
    }
    $('#zhiliaocontent').html(gukeitem);
  });
}

function personInfo() {
  var phone = window.localStorage.getItem('userphone');
  $.ajax({
    type: 'POST',
    url: 'http://localhost:8080/user/queryuserbyphone',
    data: {
      phone: phone
    },
    success: function(data) {
      console.log(JSON.parse(data));

      var data = JSON.parse(data).content;
      var personage = data.phone;
      var personname = data.name;
      var personsex = data.sex;

      if (personsex == 0) {
        personsex = '男';
      } else {
        personsex = '女';
      }
      $('.personname').html(personname);
      $('.personsex').html(personsex);
      $('.personphone').html(personage);

      // window.location.reload();
    },
    error: function() {
      alert('添加失败！');
    }
  });
}
function updatepassword() {
  $('.pws').show();
}
function cancel() {
  $('.pws').hide();
}
function okpassword() {
  var newpwd = $('#newpwd').val();
  var phone = window.localStorage.getItem('userphone');
  $.ajax({
    type: 'POST',
    url: 'http://localhost:8080/doctor/modifydoctor',
    data: {
      phone: phone,
      password: newpwd
    },
    success: function(data) {
      console.log(data);
      alert('更改成功！');
      // window.location.reload();
      $('.pws').hide();
    },
    error: function() {
      alert('更改失败！');
    }
  });
}
function quit() {
  console.log(111);
  window.location.href = '../../index.html';
}
