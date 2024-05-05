const xhr = new XMLHttpRequest();

function generate(uname, token, request) {
  var params = uname + "%" + token + "%" + request;
  xhr.open("POST", "http://n1.recloud-hosting.me:1123/api", true);
  
  
  xhr.onload = () => {
    //What to do when the response is got (to get the response : xhr.responseText).
    //Here the response is logged into the console.
    //Note that the server can return only an string-integer with sometimes a letter. In thoses cases it represents an error code.

    switch (xhr.responseText) {
      case "400":
        //gived when : the server can't decode your request. In this case, you should download the lastest release of FewerAI-JS.
        console.log("Bad Request");
        break;
      case "403":
        //gived when : the provided username/password is not correct.
        console.log("Failed to login")
        break;
      case "403-B":
        //gived when : the provided account is suspended.
        console.log("Failed to login : account suspended")
        break;
      case "503":
        //gived when : an internal error occured during the generation, often when there are not-utf-8 characters in the request.
        console.log("Internal Exception")
        break;
      default:
        console.log(xhr.responseText)
        break;
    }
    return xhr.responseText


    
  };
  xhr.send(params);
}

//exemple : 
// var username = 'your username'
// var password = 'your password'
// var questiontoai = 'your question/request (utf-8)'
// var response = generate(username, password, questiontoai)
