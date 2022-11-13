var doc; // variable to reference the XML document
var outputHTML = ""; // stores text to output in outputDiv

// register event handler for button and load XML document
function start()
{
   document.getElementById( "matchesButton" ).addEventListener( 
      "click", processXPathExpression, false );
   loadXMLDocument( "practice.xml" );
} // end function start

// load XML document programmatically
function loadXMLDocument( url )
{
   var xmlHttpRequest = new XMLHttpRequest();
   xmlHttpRequest.open( "get", url, false );
   xmlHttpRequest.send( null );
   doc = xmlHttpRequest.responseXML;
} // end function loadXMLDocument

// display the XML document 
function displayHTML()
{
   document.getElementById( "outputDiv" ).innerHTML = outputHTML;
} // end function displayDoc

// obtain and apply XPath expression
function processXPathExpression()
{
   var xpathExpression = document.getElementById( "inputField" ).value;
   var result;
   outputHTML = "";

   if ( !doc.evaluate ) // Internet Explorer 
   {
      result = doc.selectNodes( xpathExpression );

      for ( var i = 0; i < result.length; i++ )
      {
         outputHTML += "<p>" + result.item( i ).text + "</p>";
      } // end for
   } // end if
   else // other browsers
   {
      result = doc.evaluate( xpathExpression, doc, null, 
         XPathResult.ORDERED_NODE_ITERATOR_TYPE, null );
      var current = result.iterateNext();

      while ( current ) 
      {
         outputHTML += "<p>" + current.textContent + "</p>";
         current = result.iterateNext();
      } // end while
   } // end else

   displayHTML();
} // end function processXPathExpression

window.addEventListener( "load", start, false );