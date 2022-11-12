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
         <table border = "1">
            <tr>
               <th>First Name </th>
               <th>Last Name </th>
               <th>Nick Name</th>
            </tr>
            <xsl:for-each select = "student">
               <tr>
                  <td><xsl:value-of select = "firstname"/></td>
               </tr>
            </xsl:for-each>
         </table>
      </body>
   </html>
   

   </xsl:template>
</xsl:stylesheet>
