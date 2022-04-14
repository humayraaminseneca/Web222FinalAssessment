function MobileMenue() {
    var x = document.getElementById("navBar");
    if (x.className === "menue") {
      x.className += " responsive";
    } else {
      x.className = "menue";
    }
  }



  function downloadCV(filename, textInput) {

    var element = document.createElement('a');
    element.href = filename;
    element.setAttribute('download', filename);
    element.setAttribute('download', filename);
    document.body.appendChild(element);
    element.click();
    //document.body.removeChild(element);
}

var todayDate = new Date().toISOString().slice(0, 10);
document.getElementById('currntDate').innerHTML=todayDate;

    