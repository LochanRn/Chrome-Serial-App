(()=>{
    var onGetDevices = function(ports) {
        for (var i=0; i<ports.length; i++) {
          console.log(ports[i].path);
        }
      }
      chrome.serial.getDevices(onGetDevices);  
})