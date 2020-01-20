function detectface1(){



    var subscriptionKey = $('#subkey').val();
    
    var apiVersion = "v1.0"; //$('#version').val();
    var serviceFunction = $('#face-function').val();
    var region =  "centralindia"; //$('#region').val();
    var apitype =  "face"; //$('#apitype').val();
    var reqParam = $('#reqparam').val();
    var bodyParam = $('#bodyparam').val();

    var bd = JSON.parse(bodyParam);

    var uriBase =
        "https://"+region+".api.cognitive.microsoft.com/"+apitype+"/"+apiVersion+"/detect?"+reqParam;
    
    $.ajax({
        url: uriBase,

        beforeSend: function(jqXHR) {
          jqXHR.setRequestHeader("Content-Type", "application/json");
          jqXHR.setRequestHeader("Ocp-Apim-Subscription-Key", subscriptionKey);
        },
        type: "POST",
        processData: false,
        data: bodyParam
      })

    .done(function(data) {
        // Show formatted JSON on webpage.
        processJson(data);
        
        var canvas = document.getElementById('outcan');
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
        var imageObj = new Image();
        imageObj.src = bd.url;
        imageObj.onload = function() {

            context.drawImage(imageObj, 0, 0,350,300);

            context.beginPath();
            for(i =0 ;i < data.length; i++){
              context.rect(data[i]['faceRectangle']['left']*(350/imageObj.width),
                          data[i]['faceRectangle']['top']*(300/imageObj.height),
                          data[i]['faceRectangle']['width']*(350/imageObj.width),
                          data[i]['faceRectangle']['height']*(300/imageObj.height));
            }
                        
            context.lineWidth = 2;
            context.stroke();
        }; 


    })

    .fail(function(jqXHR, textStatus, errorThrown) {
        // Display error message.
        var errorString = (errorThrown === "") ? "Error. " :
            errorThrown + " (" + jqXHR.status + "): ";
        errorString += (jqXHR.responseText === "") ? "" :
            jQuery.parseJSON(jqXHR.responseText).message;
        alert(errorString);
    });


}



function verifyface(){

    var subscriptionKey = $('#subkey').val();
    if('' == subscriptionKey){
        alert('Please Provide valid Subscription Keys.');
        return;
    }
    
    var apiVersion = "v1.0"; //$('#version').val();
    var serviceFunction = $('#face-function').val();
    var region =  "westcentralus"; //$('#region').val();
    var apitype =  "face"; //$('#apitype').val();
    var reqParam = $('#reqparam').val();
    var bodyParam = $('#bodyparam').val();
    
    var uriBase =
        "https://"+region+".api.cognitive.microsoft.com/"+apitype+"/"+apiVersion+"/verify";
    
    $.ajax({
        url: uriBase,
    
        beforeSend: function(jqXHR) {
          jqXHR.setRequestHeader("Content-Type", "application/json");
          jqXHR.setRequestHeader("Ocp-Apim-Subscription-Key", subscriptionKey);
        },
        type: "POST",
        processData: false,
        data: bodyParam
      })
    
    .done(function(data) {
        // Show formatted JSON on webpage.
        processJson(data);
        
    })
    
    .fail(function(jqXHR, textStatus, errorThrown) {
        // Display error message.
        var errorString = (errorThrown === "") ? "Error. " :
            errorThrown + " (" + jqXHR.status + "): ";
        errorString += (jqXHR.responseText === "") ? "" :
            jQuery.parseJSON(jqXHR.responseText).message;
        alert(errorString);
    });
    
    
    }

    
function findSimFace(){

    var subscriptionKey = $('#subkey').val();
    if('' == subscriptionKey){
        alert('Please Provide valid Subscription Keys.');
        return;
    }

    var apiVersion = "v1.0"; //$('#version').val();
    var serviceFunction = $('#face-function').val();
    var region =  "westcentralus"; //$('#region').val();
    var apitype =  "face"; //$('#apitype').val();
    var reqParam = $('#reqparam').val();
    var bodyParam = $('#bodyparam').val();
    
    var uriBase =
        "https://"+region+".api.cognitive.microsoft.com/"+apitype+"/"+apiVersion+"/findsimilars";
    
    $.ajax({
        url: uriBase,

        beforeSend: function(jqXHR) {
          jqXHR.setRequestHeader("Content-Type", "application/json");
          jqXHR.setRequestHeader("Ocp-Apim-Subscription-Key", subscriptionKey);
        },
        type: "POST",
        processData: false,
        data: bodyParam
      })

    .done(function(data) {
        // Show formatted JSON on webpage.
        processJson(data);
        
    })

    .fail(function(jqXHR, textStatus, errorThrown) {
        // Display error message.
        var errorString = (errorThrown === "") ? "Error. " :
            errorThrown + " (" + jqXHR.status + "): ";
        errorString += (jqXHR.responseText === "") ? "" :
            jQuery.parseJSON(jqXHR.responseText).message;
        alert(errorString);
    });


}

function identifyface(){

    var subscriptionKey = $('#subkey').val();
    if('' == subscriptionKey){
        alert('Please Provide valid Subscription Keys.');
        return;
    }

    var apiVersion = "v1.0"; //$('#version').val();
    var serviceFunction = $('#face-function').val();
    var region =  "westcentralus"; //$('#region').val();
    var apitype =  "face"; //$('#apitype').val();
    var reqParam = $('#reqparam').val();
    var bodyParam = $('#bodyparam').val();
    
    var uriBase =
        "https://"+region+".api.cognitive.microsoft.com/"+apitype+"/"+apiVersion+"/identify";
    
    $.ajax({
        url: uriBase,

        beforeSend: function(jqXHR) {
          jqXHR.setRequestHeader("Content-Type", "application/json");
          jqXHR.setRequestHeader("Ocp-Apim-Subscription-Key", subscriptionKey);
        },
        type: "POST",
        processData: false,
        data: bodyParam
      })

    .done(function(data) {
        // Show formatted JSON on webpage.
        processJson(data);
        
    })

    .fail(function(jqXHR, textStatus, errorThrown) {
        // Display error message.
        var errorString = (errorThrown === "") ? "Error. " :
            errorThrown + " (" + jqXHR.status + "): ";
        errorString += (jqXHR.responseText === "") ? "" :
            jQuery.parseJSON(jqXHR.responseText).message;
        alert(errorString);
    });


}

        
