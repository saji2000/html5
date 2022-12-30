<?php

echo "here";

function OpenCon(){
    $dbhost = "localhost";
    $dbuser = "root";
    $dbpass = "1234";
    $db = "practice";
    $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
    
    return $conn;
}
    
function CloseCon($conn){
    $conn -> close();
}

 $conn = OpenCon();

 $sql = "SELECT * FROM users;";

 $result = mysqli_query($conn, $sql);

//  $result = mysql_query($sql);
 while($row = mysqli_fetch_array($result)) {
     echo $row['name']; 
     echo $row['id'];
 }
 echo "Connected Successfully";
 CloseCon($conn);

?>