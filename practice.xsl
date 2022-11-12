<?xml version = "1.0"?>
<!-- Fig. 15.19: sports.xsl  -->
<!-- A simple XSLT transformation  -->

<!-- reference XSL style sheet URI -->
<xsl:stylesheet version = "1.0" 
   xmlns:xsl = "http://www.w3.org/1999/XSL/Transform">

   <xsl:template match = "/class"> 
   <html>
      <body>
         <h2>Student List</h2>
         <table>
            <tr>First Name</tr>
            <tr>Last Name</tr>
            <tr>Nick Name</tr>
         </table>
      </body>
   </html>
   

   </xsl:template>
</xsl:stylesheet>
