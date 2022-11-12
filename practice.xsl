<xsl:stylesheet version = "1.0" 
xmlns:xsl = "http://www.w3.org/1999/XSL/Transform"> 

<xsl:template match = "/sport">

	<html>
		<body>
			<h2>Sports List</h2>
			
			<table border = "1">
				<tr bgcolor="lightgreen">
					<th>id</th>
					<th>Game Name</th>
					<th>Description</th>
				</tr>
				
				<xsl:for-each select = "game">
				
					<tr>
						<td><xsl:value-of select = "@id"/></td>
						<td><xsl:value-of select = "name"/></td>
						<td><xsl:value-of select = "description"/></td>
					</tr>
				
				</xsl:for-each>
				
			</table>
		</body>
	</html>
</xsl:template>
</xsl:stylesheet>