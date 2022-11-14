var asyncRequest;

function registerListeners() {
    document.getElementById( "all" ).addEventListener(
        "click", function() { getImages( "all.xml" ); }, false ); 
    document.getElementById( "simply" ).addEventListener(
        "click", function() { getImages( "simply.xml" ); }, false ); 
    document.getElementById( "howto" ).addEventListener(
        "click", function() { getImages( "howto.xml" ); }, false );
    document.getElementById("none").addEventListener("click", clearImages, false );
}

function getImages(url){
    try{
        asyncRequest = new XMLHttpRequest();
        asyncRequest.addEventListener( "readystatechange", processImages, false );
        asyncRequest.open("GET", url, true );
        asyncRequest.send(null);
    }
    catch(e){
        alert("error: " + e.message);
    }
}

function processImages(){
    if(asyncRequest.readyState == 4 && asyncRequest.status == 200 && asyncRequest.responseXML){
        clearImages();

        var covers = asyncRequest.responseXML.getElementByTagName("covers");
        var baseUrl = asyncRequest.responseXML.getElementsByTagName( 
            "baseurl" ).item( 0 ).firstChild.nodeValue;

        var output = document.getElementById( "covers" );
        
        // create an unordered list to display the images
        var imagesUL = document.createElement( "ul" );
        
        // place images in unordered list
        for ( var i = 0; i < covers.length; ++i )
        {
            var cover = covers.item( i ); // get a cover from covers array
        
            // get the image filename
            var image = cover.getElementsByTagName( "image" ).
                item( 0 ).firstChild.nodeValue;
        
            // create li and img element to display the image
            var imageLI = document.createElement( "li" );
            var imageTag = document.createElement( "img" );
            
            // set img element's src attribute
            imageTag.setAttribute( "src", baseUrl + escape( image ) ); 
            imageLI.appendChild( imageTag ); // place img in li
            imagesUL.appendChild( imageLI ); // place li in ul
        } // end for statement

        output.appendChild( imagesUL );
    }
}

function clearImages(){
    document.getElementById("covers").innerHTML = "";
}

window.addEventListener("load", registerListeners, false);