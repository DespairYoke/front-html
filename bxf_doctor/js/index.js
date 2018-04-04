window.onload = function() {
  lookbingli();
};

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
                        <td>${item.phone}</td>
                        <td>${item.date}</td>
                        <td>${item.result}</td>
                    </tr>`;
    }
    $('#binglicontent').html(gukeitem);
  });
}
function selectalldrug() {
  jQuery.post('http://localhost:8080/drug/selectdrug', function(data) {
    var gukeitem = '';
    var list = JSON.parse(data);
    console.log(list.content);
    var lists = list.content;
    for (var i = 0; i < lists.length; i++) {
      var item = lists[i];
      gukeitem += `
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.price}</td>
                        <td>${item.factory}</td>
                    </tr>`;
    }
    $('#drug').html(gukeitem);
  });
}

function selectalldoctor() {
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
                        <td>${item.department}</td>
                        <td>${item.name}</td>
                        <td>${item.pathogeny}</td>
                        <td>${item.result}</td>
                        <td>${item.phone}</td>
                    </tr>`;
    }
    $('#doctor').html(gukeitem);
  });
}

function selectallperson() {
  var phone = window.localStorage.getItem('userphone');
  $.ajax({
    type: 'POST',
    url: 'http://localhost:8080/doctor/selectdoctor',
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

function addUser() {
  var name = $('#name').val();
  var sex = $('#sex').val();
  var age = $('#age').val();
  var patientphone = $('#phone').val();
  var factory = $('#factory').val();
  var drugname = $('#drugname').val();
  var num = $('#num').val();
  var pathogeny = $('#pathogeny').val();
  var price = $('#price').val();
  var result = $('#result').val();
  var doctorphone = window.localStorage.getItem('userphone');
  $.ajax({
    type: 'POST',
    url: 'http://localhost:8080/user/addPatient',
    data: {
      name: name,
      sex: sex,
      age: age,
      patientphone: patientphone,
      drugname: drugname,
      num: num,
      pathogeny: pathogeny,
      result: result,
      doctorphone: doctorphone,
      price: price,
      factory: factory
    },
    success: function(data) {
      console.log(data);
      alert('添加成功！');
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
