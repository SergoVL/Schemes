<?php
header('Content-type: text/html; charset=windows-1251');
//print_r($_POST);

$BSC = $_POST['sos'];
$RNC = $_POST['sos2'];
$MSC = $_POST['sos3'];
$SGSN = $_POST['sos4'];
/** Открываем подключение */

require_once('C:/inetpub/auth/conn.php');

//Поиск позиции
$sql = "SELECT * FROM db_opr.dbo.sos WHERE Region='$BSC' AND TYPE='BSC' AND ADMIN_STATUS<>'Демонтирован'";
$sql2=iconv('UTF-8','CP1251',$sql);
$result = odbc_exec($conn, $sql2)or die("<p>".odbc_errormsg());
$data=[];
while ($row = odbc_fetch_array($result)) {
$data[] = $row['NODE'].'|'.$row['VENDOR'].'|'.$row['PRODUCTNAME'].'|'.$row['ADDRESS'].'|'.$row['ADMIN_STATUS'].'|'.$row['Amt_of_BTS'].'|'.$row['Amt_of_NodeB'].'|'.$row['SPC'].'|'.$row['blueprint'];
$bsc = implode ('|', $data);
}
echo $bsc;

//Поиск позиции
$sql = "SELECT * FROM db_opr.dbo.sos WHERE Region='$RNC' AND TYPE='RNC' AND ADMIN_STATUS<>'Демонтирован'";
$sql2=iconv('UTF-8','CP1251',$sql);
$result = odbc_exec($conn, $sql2)or die("<p>".odbc_errormsg());
$data=[];
while ($row = odbc_fetch_array($result)) {
$data[] = $row['NODE'].'|'.$row['VENDOR'].'|'.$row['PRODUCTNAME'].'|'.$row['ADDRESS'].'|'.$row['ADMIN_STATUS'].'|'.$row['Amt_of_BTS'].'|'.$row['Amt_of_NodeB'].'|'.$row['SPC'].'|'.$row['blueprint'];
$rnc = implode ('|', $data);
}
echo $rnc;


//Поиск позиции
$sql = "SELECT * FROM db_opr.dbo.sos WHERE Region='$MSC' AND TYPE='MSC' AND ADMIN_STATUS<>'Демонтирован'";
$sql2=iconv('UTF-8','CP1251',$sql);
$result = odbc_exec($conn, $sql2)or die("<p>".odbc_errormsg());
$data=[];
while ($row = odbc_fetch_array($result)) {
$data[] = $row['NODE'].'|'.$row['VENDOR'].'|'.$row['PRODUCTNAME'].'|'.$row['ADDRESS'].'|'.$row['ADMIN_STATUS'].'|'.$row['Amt_of_BTS'].'|'.$row['Amt_of_NodeB'].'|'.$row['SPC'].'|'.$row['blueprint'];
$msc = implode ('|', $data);
}
echo $msc;


//Поиск позиции
$sql = "SELECT * FROM db_opr.dbo.sos WHERE Region='$SGSN' AND TYPE='SGSN' AND ADMIN_STATUS<>'Демонтирован'";
$sql2=iconv('UTF-8','CP1251',$sql);
$result = odbc_exec($conn, $sql2)or die("<p>".odbc_errormsg());
$data=[];
while ($row = odbc_fetch_array($result)) {
$data[] = $row['NODE'].'|'.$row['VENDOR'].'|'.$row['PRODUCTNAME'].'|'.$row['ADDRESS'].'|'.$row['ADMIN_STATUS'].'|'.$row['Amt_of_BTS'].'|'.$row['Amt_of_NodeB'].'|'.$row['SPC'].'|'.$row['blueprint'].'|'.$row['SDH'];
$sgsn = implode ('|', $data);
}
echo $sgsn;



?>