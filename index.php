<!doctype html>
<html>
<head>

    <title>Схемы организации связи</title>
    <meta charset='utf-8'/>
	<script src="js/canvas.js" defer></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	
	<link rel="stylesheet" type="text/css" href="css/page.css">
	
	<meta http-equiv="pragma" content="no-cache"/>

</head>
<body>
<canvas id='canvas'></canvas>

<select class="region_name" name="region" size="1">
         <?php
		  
               /** Открываем подключение */
			require_once('C:/inetpub/auth/conn.php');

				$sql = "SELECT DISTINCT Region FROM db_opr.dbo.sos";
				$sql2=iconv('UTF-8','CP1251',$sql);
			$result = odbc_exec($conn, $sql2)or die("<p>".odbc_errormsg());
			while ($row = odbc_fetch_array($result)) {
				$y = $row['Region'];
				$Region = iconv('CP1251','UTF-8',$y);
				?>
				<option value="none" hidden="false">Выберите локацию</option>
		<?php
			echo "<option value='$Region'>$Region</option>";
			}
          ?>
		  </select>
		  		  
</body>
</html>