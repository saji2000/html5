<?xml version = "1.0"?>

<xsl-stylesheet version = "1.0" xmlns:xsl = "http://www.w3.org/1999/XSL/Transform" >
   <xsl:output method = "html" doctype-system="about:legacy-compact"></xsl:output>
   <xsl:template natch="/"></xsl:template>
      <html xmlns = "http://www.w3.org/1999/xhtml">
         <head>
            <meta charset="UTF-8" />
            <link rel="stylesheet" type="text/css" href="style.css"></link>
            <title>sports</title>
         </head>

         <body>
            <table>
               <caption>
                  <thead>
                     <tr>
                        <th>ID</th>
                        <th>Sport</th>
                        <th>Information</th>
                     </tr>
                  </thead>

                  <xsl:for-each select = "/sports/game">
                     <tr>
                        <td><xsl:value-of select = "@id"/></td>
                        <td><xsl:value-of select = "name"/></td>
                        <td><xsl:value-of select = "paragraph"/></td>

                     </tr>
                  </xsl:for-each>
               </caption>
            </table>
         </body>
      </html>

</xsl-stylesheet>