const xhr = new XMLHttpRequest();

var username = 'your username'
var password = 'your password'
var questiontoai = 'your question/request (utf-8)'

var params = username + "%" + pasword + "%" + questiontoai;
xhr.open("POST", "http://n1.recloud-hosting.me:1123/api", true);


xhr.onload = () => {
  console.log(xhr.responseText)
};
xhr.send(params);