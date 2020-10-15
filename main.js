const baseURL = "https://ci-swapi.herokuapp.com/api/"

function getData(cb) {
  var xhr = new XMLHttpRequest();

  xhr.open("GET", baseURL + type + "/");
  xhr.send();

  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      data = JSON.parse(this.responseText);
    }
  };
}

function writeToDocument(type) {
    getData(type, function(data) {
        document.getElementById("data").innerHTML = data;
    });
}
