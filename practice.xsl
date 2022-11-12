<?xml version = "1.0"?>
<!-- Fig. 15.19: sports.xsl  -->
<!-- A simple XSLT transformation  -->

<!-- reference XSL style sheet URI -->
<xsl:stylesheet version = "1.0" 
   xmlns:xsl = "http://www.w3.org/1999/XSL/transform">

   <xsl:template match = "/class"> 
   <html>
      <body>
         <h2>Student List</h2>
         <table>
            <tr>
               <th>First Name </th>
               <th>Last Name </th>
               <th>Nick Name</th>
            </tr>
         </table>
      </body>
   </html>
   

   </xsl:template>
</xsl:stylesheet>
