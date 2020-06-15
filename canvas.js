var canvas = document.getElementById("canvas"),
ctx = canvas.getContext('2d');
$('.region_name').change(function (){

  			  	 var sos  = $(".region_name").val()
				$.post("sos.php",
				{sos:sos},key);
			function key(data){
				 var arr = (data);
				 var bsc = arr.split('|'); //основной массив
				 
				 var sos2  = $(".region_name").val()
				$.post("sos.php",
				{sos2:sos2},key2);
			function key2(data){
				 var arr2 = (data);
				 var rnc = arr2.split('|'); //основной массив
				 
				 var sos3  = $(".region_name").val()
				$.post("sos.php",
				{sos3:sos3},key3);
			function key3(data){
				 var arr3 = (data);
				 var msc = arr3.split('|'); //основной массив
				 
				 var sos4  = $(".region_name").val()
				$.post("sos.php",
				{sos4:sos4},key4);
			function key4(data){
				 var arr4 = (data);
				 var sgsn = arr4.split('|'); //основной массив
				 
				 
	var sum_bsc = bsc.length/9;
	var sum_rnc = rnc.length/9;
	var sum_msc = msc.length/9;
	var sum_sgsn =sgsn.length/10;
console.log(sum_msc);

	var msc_offset;
	if (sum_msc < 5) msc_offset = 0;  
	if (sum_msc >=5) msc_offset = 150;   

    const lineLength = 320;
 	canvas.height;

    if (sum_bsc > sum_rnc || sum_bsc == sum_rnc) canvas.height = 200 * sum_bsc;
    if (sum_bsc < sum_rnc || sum_bsc == sum_rnc) canvas.height = 200 * sum_rnc;
    if (canvas.height < 2000) canvas.height = 2000;
	
    canvas.width = 1980;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    /*----------Размер отображаемой страницы--------------*/
 
let size = 10; //размер подмассива


let name_bsc = bsc.filter((v, i) => i % 9 == 0);
let vendor = bsc.filter((v, i) => i % 9 == 1);
let type = bsc.filter((v, i) => i % 9 == 2);
let address = bsc.filter((v, i) => i % 9 == 3);
let admin_status = bsc.filter((v, i) => i % 9 == 4);
let amt_of_bts = bsc.filter((v, i) => i % 9 == 5);
let amt_of_nodeb = bsc.filter((v, i) => i % 9 == 6);
let spc = bsc.filter((v, i) => i % 9 == 7);
let plan = bsc.filter((v, i) => i % 9 == 8);


    /*-----------BSC--------------*/

    var bscX = 350;
    var bscY = 1000 + msc_offset;
    var bscHeight = 240;
    var bscWidth = 90;


    for (i = 0; i < bsc.length/9; i++) {

        /// Цвет обводки
        ctx.lineWidth = 5;
        var bscStatus = admin_status[i]; 

        if (bscStatus === "В коммерческой эксплуатации" || bscStatus === "В тестовой эксплуатации" || bscStatus ===  "Тестовый узел") {
        	ctx.setLineDash([0]);  
            ctx.strokeStyle = '#0085ff';
            ctx.stroke();
        }
        if (bscStatus === "Демонтаж узла") {
        	ctx.setLineDash([0]);  
            ctx.strokeStyle = '#ff0000';
            ctx.stroke();
        }
		if (bscStatus === "Модернизация") {
        	ctx.setLineDash([0]);  
            ctx.strokeStyle = '#de12c3';
            ctx.stroke();
        }

        if (bscStatus === "Планируется") {
            ctx.setLineDash([10, 15]);           
            ctx.strokeStyle = '#fc3407';               
            ctx.stroke();
                  
        }
        

        ///Рисуем прямоугольник и заливаем его.

        ctx.strokeRect(bscX, bscY + i * 120, bscHeight, bscWidth);
        if (bscStatus === "В коммерческой эксплуатации" || bscStatus === "В тестовой эксплуатации" || bscStatus ===  "Тестовый узел"|| bscStatus ===  "Модернизация") {
            ctx.fillStyle = '#dcfdff';
            ctx.fillRect(bscX, bscY + i * 120, bscHeight, bscWidth);
        }
        if (bscStatus==="Демонтаж узла")  {
            ctx.fillStyle = '#ff7204';
            ctx.fillRect(bscX, bscY + i * 120, bscHeight, bscWidth);
        }
        if (bscStatus === "Планируется") {
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(bscX, bscY + i * 120, bscHeight, bscWidth);
        }
	
        ///Заполняем прямоугольник
        ctx.setLineDash([0]);  
        ctx.font = "15px Arial";
        ctx.fillStyle = '#000000';
        ctx.textAlign = 'left';
        ctx.fillText(name_bsc[i], bscX + 55 , bscY + 20 + i * 120);
        ctx.fillText(vendor[i], bscX + 55, bscY + 40 + i * 120);
        ctx.fillText(type[i], bscX + 55, bscY + 60 + i * 120);
        ctx.font = "10px Arial";
        ctx.fillText(address[i], bscX + 10, bscY + 80 + i * 120);
 		ctx.textAlign = 'start';
    }

    /*-----------BSC--------------*/
		

    /*-----------Lines from BSC--------------*/

    ctx.lineWidth = 3;
    ctx.font = "25px Arial";

    ///Abis
    ctx.beginPath();
    ctx.strokeStyle = '#1024ff';
    ctx.moveTo(bscX - lineLength / 8, bscY - 90);
    ctx.lineTo(bscX + lineLength * 1.5, bscY - 90);
    ctx.fillText("Abis-int", bscX + lineLength / 3, bscY - 92);
    ctx.stroke();

    /// A,Gb
    ctx.beginPath();
    ctx.strokeStyle = '#e8d800';
    ctx.moveTo(bscX - lineLength / 5, bscY - 180);
    ctx.lineTo(bscX + lineLength * 1.5, bscY - 180);
    ctx.stroke();
    ctx.fillText("A,Gb-int", bscX + lineLength / 3, bscY - 182);
    ctx.stroke();

    ctx.beginPath();


    ctx.font = "15px Arial";


    for (i = 0; i < bsc.length/9; i++) {

        /// Amount of BTS
        ctx.lineWidth = 1;
        ctx.moveTo(bscX + bscHeight+2, bscY + 20 + i * 120);
        ctx.lineTo(bscX + lineLength * 1.3, bscY + 20 + i * 120);
        ctx.fillText("Количество BTS - " + amt_of_bts[i], bscX + bscHeight+2, bscY + 18 + i * 120);
        ctx.strokeStyle = '#000000';
        ctx.stroke();

        /// Amount of NodeB
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.moveTo(bscX + bscHeight+2, bscY + 40 + i * 120);
        ctx.lineTo(bscX + lineLength* 1.3, bscY + 40 + i * 120);
        ctx.fillText("Количество NodeB - " + amt_of_nodeb[i], bscX + bscHeight+2, bscY + 38 + i * 120);
        ctx.strokeStyle = '#000000';
        ctx.stroke();

        /// SPC
		if(spc[i]!=""){
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.moveTo(bscX + bscHeight+2, bscY + 60 + i * 120);
        ctx.lineTo(bscX + lineLength* 1.3, bscY + 60 + i * 120);
        ctx.fillText("SPC - " + spc[i], bscX + bscHeight+2, bscY + 58 + i * 120);
        ctx.strokeStyle = '#000000';
        ctx.stroke();
		}
		else{

		}
        /// Plan
		if(plan[i]!="") {
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.moveTo(bscX + bscHeight+2, bscY + 80 + i * 120);
        ctx.lineTo(bscX + lineLength* 1.3, bscY + 80 + i * 120);
        ctx.fillText(plan[i], bscX + bscHeight+2, bscY + 78 + i * 120);
        ctx.strokeStyle = '#000000';
        ctx.stroke();
		}
		else{

		}

        /// Abis
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#1024ff';
        ctx.moveTo(bscX - 3, bscY + 30 + i * 120);
        ctx.lineTo(bscX - lineLength / 8, bscY + 30 + i * 120);
        ctx.moveTo(bscX - lineLength / 8, bscY + 30 + i * 120);
        ctx.lineTo(bscX - lineLength / 8, bscY - 90 + i * 120);
        ctx.stroke();

        /// A,Gb
        ctx.beginPath();
        ctx.strokeStyle = '#e8d800';
        ctx.moveTo(bscX - 3, bscY + 50 + i * 120);
        ctx.lineTo(bscX - lineLength / 5, bscY + 50 + i * 120);
        ctx.moveTo(bscX - lineLength / 5, bscY + 50 + i * 120);
        ctx.lineTo(bscX - lineLength / 5, bscY - 180 + i * 120);
        ctx.stroke();

        ctx.beginPath();
    }

    /*-----------Lines from BSC--------------*/
	
let name_rnc = rnc.filter((v, i) => i % 9 == 0);
let vendor_rnc = rnc.filter((v, i) => i % 9 == 1);
let type_rnc = rnc.filter((v, i) => i % 9 == 2);
let address_rnc = rnc.filter((v, i) => i % 9 == 3);
let admin_status_rnc = rnc.filter((v, i) => i % 9 == 4);
let amt_of_bts_rnc = rnc.filter((v, i) => i % 9 == 5);
let amt_of_nodeb_rnc = rnc.filter((v, i) => i % 9 == 6);
let spc_rnc = rnc.filter((v, i) => i % 9 == 7);
let plan_rnc = rnc.filter((v, i) => i % 9 == 8);

    /*-----------RNC--------------*/

    var rncX = 1250;
    var rncY = 1000 + msc_offset;
    var rncHeight = 240;
    var rncWidth = 90;

    for (i = 0; i < rnc.length/9; i++) {

        /// Цвет обводки
        ctx.lineWidth = 5;
        var rncStatus = admin_status_rnc[i]; /// Статус может быть in use/dismount/planned

        if (rncStatus === "В коммерческой эксплуатации" || rncStatus === "В тестовой эксплуатации" || rncStatus ===  "Тестовый узел"  ) {
        	ctx.setLineDash([0]);
            ctx.strokeStyle = '#06ef77';
            ctx.stroke();
        }
        if (rncStatus === "Демонтаж узла") {
        	ctx.setLineDash([0]);
            ctx.strokeStyle = '#ff0000';
            ctx.stroke();
        }

        if (rncStatus === "Модернизация") {
        	ctx.setLineDash([0]);  
            ctx.strokeStyle = '#de12c3';
            ctx.stroke();
        }

        if (rncStatus === "Планируется") {
        	ctx.setLineDash([10, 15]); 
            ctx.strokeStyle = '#ff0000';
            ctx.stroke();
        }

        ///Рисуем прямоугольник и заливаем его.
        ctx.strokeRect(rncX, rncY + i * 120, rncHeight, rncWidth);
        if (rncStatus === "В коммерческой эксплуатации" || rncStatus === "В тестовой эксплуатации" || rncStatus ===  "Тестовый узел"|| rncStatus ===  "Модернизация") {
            ctx.fillStyle = '#c3ffd8';
            ctx.fillRect(rncX, rncY + i * 120, rncHeight, rncWidth);
        }
        if (rncStatus === "Демонтаж узла") {
            ctx.fillStyle = '#ff7204';
            ctx.fillRect(rncX, rncY + i * 120, rncHeight, rncWidth);
        }
        if (rncStatus === "Планируется") {
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(rncX, rncY + i * 120, rncHeight, rncWidth);
        }
        ///Заполняем прямоугольник
        ctx.setLineDash([0]);  
        ctx.font = "15px Arial";
        ctx.fillStyle = '#000000';
        ctx.fillText(name_rnc[i], rncX + 55, rncY + 20 + i * 120);
        ctx.fillText(vendor_rnc[i], rncX + 55, rncY + 40 + i * 120);
        ctx.fillText(type_rnc[i], rncX + 55, rncY + 60 + i * 120);
        ctx.font = "10px Arial";
        ctx.fillText(address_rnc[i], rncX + 10, rncY + 80 + i * 120);
    }

    /*-----------Lines from RNC--------------*/
    ctx.lineWidth = 3;
    ctx.font = "25px Arial";

    ///Iub-int  
    ctx.beginPath();
    ctx.strokeStyle = '#3f7405';
    ctx.moveTo(rncX - lineLength / 8, rncY - 90);
    ctx.lineTo(rncX - lineLength, rncY - 90);
    ctx.fillText("Iub-int", rncX - 170, rncY - 92);
    ctx.stroke();

    /// Iu-int
    ctx.beginPath();
    ctx.strokeStyle = '#e8d800';
    ctx.moveTo(rncX - lineLength / 5, rncY - 160);
    ctx.lineTo(rncX - lineLength, rncY - 160);
    ctx.stroke();
    ctx.fillText("Iu-int", rncX - 170, rncY - 162);
    ctx.stroke();

    ctx.beginPath();
    ctx.font = "15px Arial";

    for (i = 0; i < rnc.length/9; i++) {

        /// Amount of BTS
        ctx.lineWidth = 1;
        ctx.moveTo(rncX + rncHeight+2, rncY + 20 + i * 120);
        ctx.lineTo(rncX + lineLength* 1.3, rncY + 20 + i * 120);
        ctx.fillText("Количество BTS - " + amt_of_bts_rnc[i], rncX + rncHeight+2, rncY + 18 + i * 120);
        ctx.strokeStyle = '#000000';
        ctx.stroke();

        /// Amount of NodeB
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.moveTo(rncX + rncHeight+2, rncY + 40 + i * 120);
        ctx.lineTo(rncX + lineLength* 1.3, rncY + 40 + i * 120);
        ctx.fillText("Количество NodeB - " + amt_of_nodeb_rnc[i], rncX + rncHeight+2, rncY + 38 + i * 120);
        ctx.strokeStyle = '#000000';
        ctx.stroke();

        /// SPC
		if(spc_rnc[i]!=""){
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.moveTo(rncX + rncHeight+2, rncY + 60 + i * 120);
        ctx.lineTo(rncX + lineLength* 1.3, rncY + 60 + i * 120);
        ctx.fillText("SPC - " + spc_rnc[i], rncX + rncHeight+2, rncY + 58 + i * 120);
        ctx.strokeStyle = '#000000';
        ctx.stroke();
		}
		else{

		}

        /// Plan
		if(plan_rnc[i]!=""){
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.moveTo(rncX + rncHeight+2, rncY + 80 + i * 120);
        ctx.lineTo(rncX + lineLength* 1.3, rncY + 80 + i * 120);
        ctx.fillText(plan_rnc[i], rncX + rncHeight+2, rncY + 78 + i * 120);
        ctx.strokeStyle = '#000000';
        ctx.stroke();
		}
		else{

		}

        /// Iub-int
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#3f7405';
        ctx.moveTo(rncX - 3, rncY + 30 + i * 120);
        ctx.lineTo(rncX - lineLength / 8, rncY + 30 + i * 120);
        ctx.moveTo(rncX - lineLength / 8, rncY + 30 + i * 120);
        ctx.lineTo(rncX - lineLength / 8, rncY - 90 + i * 120);
        ctx.stroke();

        /// Iu-int
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.strokeStyle = '#e8d800';
        ctx.moveTo(rncX - 3, rncY + 50 + i * 120);
        ctx.lineTo(rncX - lineLength / 5, rncY + 50 + i * 120);
        ctx.moveTo(rncX - lineLength / 5, rncY + 50 + i * 120);
        ctx.lineTo(rncX - lineLength / 5, rncY - 160 + i * 120);
        ctx.stroke();

        ctx.beginPath();
    }
    /*-----------Lines from RNC--------------*/
	
    /*-----------MSC--------------*/

let name_msc = msc.filter((v, i) => i % 9 == 0);
let vendor_msc = msc.filter((v, i) => i % 9 == 1);
let type_msc = msc.filter((v, i) => i % 9 == 2);
let address_msc = msc.filter((v, i) => i % 9 == 3);
let spc_msc = msc.filter((v, i) => i % 9 == 7);

    var mscX = 350;
    var mscY;

    if (sum_msc >= 5){
	mscY = 100; 
}  
    else if (sum_msc == 4) {
	mscY = 300;
} 
	else if (sum_msc == 3) {
	mscY = 400;
} 
    else { 
    mscY = 470;
}  
	
	var mscHeight = 240;
    var mscWidth = 90;

    for (i = 0; i < msc.length/9; i++) {


        ///Рисуем прямоугольник и заливаем его.
        ctx.strokeRect(mscX, mscY + i * 120, mscHeight, mscWidth);
        ctx.fillStyle = '#FBD7BB';
        ctx.fillRect(mscX, mscY + i * 120, mscHeight, mscWidth);

        ///Заполняем прямоугольник
        ctx.font = "13px Arial";
        ctx.fillStyle = '#000000';
        ctx.fillText(name_msc[i], mscX + 10, mscY + 20 + i * 120);
        ctx.fillText(vendor_msc[i], mscX + 10, mscY + 40 + i * 120); 
        ctx.fillText(spc_msc[i], mscX + 10, mscY + 60 + i * 120);
        ctx.font = "10px Arial";
        ctx.fillText(address_msc[i], mscX + 10, mscY + 80 + i * 120);
    }
    /*-----------MSC--------------*/

    /*-----------Lines from msc--------------*/
    for (i = 0; i < msc.length/9; i++) {
        ctx.strokeStyle = '#e8d800';
        ctx.lineWidth = 3;
        ctx.moveTo(mscX + mscHeight+2, mscY + 40 + i * 120);
        ctx.lineTo(mscX + lineLength * 1.52, mscY + 40 + i * 120);
        ctx.moveTo(mscX + lineLength * 1.52, mscY + 40 + i * 120);
        ctx.lineTo(mscX + lineLength * 1.52, mscY + 350 + i * 120);
        ctx.stroke();
    }
    /*-----------Lines from msc--------------*/



    /*-----------SGSN--------------*/

let name_sgsn = sgsn.filter((v, i) => i % 10 == 0);
let vendor_sgsn = sgsn.filter((v, i) => i % 10 == 1);
let type_sgsn = sgsn.filter((v, i) => i % 10 == 2);
let address_sgsn = sgsn.filter((v, i) => i % 10 == 3);
let spc_sgsn = sgsn.filter((v, i) => i % 10 == 7);
let sdh = sgsn.filter((v, i) => i % 10 == 9);
console.log(sdh);
    var sgsnX = 1250;
    var sgsnY; 
    

    if (sum_sgsn >= 5){
	sgsnY = 100; 
}  
    else if (sum_sgsn == 4) {
	sgsnY = 300;
} 
    else {
    	sgsnY = 500 + msc_offset;
}


    var sgsnHeight = 240;
    var sgsnWidth = 90;

    for (i = 0; i < sgsn.length/10; i++) {

        ///Рисуем прямоугольник и заливаем его.
        ctx.strokeRect(sgsnX, sgsnY + i * 120, sgsnHeight, sgsnWidth);
        ctx.fillStyle = '#fc82fc';
        ctx.fillRect(sgsnX, sgsnY + i * 120, sgsnHeight, sgsnWidth);

        ///Заполняем прямоугольник
        ctx.font = "13px Arial";
        ctx.fillStyle = '#000000';
        ctx.fillText(name_sgsn[i], sgsnX + 10, sgsnY + 20 + i * 120);
        ctx.fillText(vendor_sgsn[i], sgsnX + 10, sgsnY + 40 + i * 120);
        ctx.fillText(spc_sgsn[i], sgsnX + 10, sgsnY + 60 + i * 120);
        ctx.font = "10px Arial";
        ctx.fillText(address_sgsn[i], sgsnX + 10, sgsnY + 80 + i * 120);
       
    }
    /*-----------SGSN--------------*/

    /*-----------Lines from sgsn--------------*/
    for (i = 0; i < sgsn.length/10; i++) {
        ctx.strokeStyle = '#e8d800';
        ctx.lineWidth = 3;
        ctx.moveTo(sgsnX , sgsnY + 40 + i * 120);
        ctx.lineTo(sgsnX - lineLength * 1.09, sgsnY + 40 + i * 120);
        ctx.moveTo(sgsnX - lineLength * 1.09, sgsnY + 40 + i * 120);
        ctx.lineTo(sgsnX - lineLength * 1.09, sgsnY + 300 + i * 120);
        ctx.stroke();
    
	}
    /*-----------Lines from sgsn--------------*/


    /*-----------Cloud IPBH--------------*/
    var ipbh_startX = 740;
    var ipbh_startY = 910 + msc_offset;
    var zoom = 1.1;

    ctx.beginPath();
    ctx.moveTo(ipbh_startX, ipbh_startY);
    ctx.bezierCurveTo(ipbh_startX - 40 * zoom, ipbh_startY + 20 * zoom, ipbh_startX - 40 * zoom, ipbh_startY + 70 * zoom, ipbh_startX + 60 * zoom, ipbh_startY + 70 * zoom);
    ctx.bezierCurveTo(ipbh_startX + 80 * zoom, ipbh_startY + 100 * zoom, ipbh_startX + 150 * zoom, ipbh_startY + 100 * zoom, ipbh_startX + 170 * zoom, ipbh_startY + 70 * zoom);
    ctx.bezierCurveTo(ipbh_startX + 250 * zoom, ipbh_startY + 70 * zoom, ipbh_startX + 250 * zoom, ipbh_startY + 40 * zoom, ipbh_startX + 220 * zoom, ipbh_startY + 20 * zoom);
    ctx.bezierCurveTo(ipbh_startX + 260 * zoom, ipbh_startY - 40 * zoom, ipbh_startX + 200 * zoom, ipbh_startY - 50 * zoom, ipbh_startX + 170 * zoom, ipbh_startY - 30 * zoom);
    ctx.bezierCurveTo(ipbh_startX + 150 * zoom, ipbh_startY - 75 * zoom, ipbh_startX + 80 * zoom, ipbh_startY - 60 * zoom, ipbh_startX + 80 * zoom, ipbh_startY - 30 * zoom);
    ctx.bezierCurveTo(ipbh_startX + 30 * zoom, ipbh_startY - 75 * zoom, ipbh_startX - 20 * zoom, ipbh_startY - 60 * zoom, ipbh_startX, ipbh_startY);
    ctx.closePath();
    ctx.lineWidth = 5;
    ctx.fillStyle = '#BFEAF8';
    ctx.fill();
    ctx.strokeStyle = '#0148C6';
    ctx.stroke();
    ctx.font = "30px Arial";
    ctx.fillStyle = "black";
    if (sdh[0] == "true") {
        ctx.fillText("IPBH/SDH", ipbh_startX + 50, ipbh_startY + 40);
    } else {
        ctx.fillText("IPBH", ipbh_startX + 80, ipbh_startY + 40);
    }
    /*-----------Cloud IPBH--------------*/

    /*-----------Cloud IPBB--------------*/
    var ipbb_startX = 720;
    var ipbb_startY = 820+msc_offset;

    ctx.beginPath();
    ctx.moveTo(ipbb_startX, ipbb_startY);
    ctx.bezierCurveTo(ipbb_startX - 40, ipbb_startY + 20, ipbb_startX - 40, ipbb_startY + 70, ipbb_startX + 60, ipbb_startY + 70);
    ctx.bezierCurveTo(ipbb_startX + 80, ipbb_startY + 100, ipbb_startX + 150, ipbb_startY + 100, ipbb_startX + 170, ipbb_startY + 70);
    ctx.bezierCurveTo(ipbb_startX + 250, ipbb_startY + 70, ipbb_startX + 250, ipbb_startY + 40, ipbb_startX + 220, ipbb_startY + 20);
    ctx.bezierCurveTo(ipbb_startX + 260, ipbb_startY - 40, ipbb_startX + 200, ipbb_startY - 50, ipbb_startX + 170, ipbb_startY - 30);
    ctx.bezierCurveTo(ipbb_startX + 150, ipbb_startY - 75, ipbb_startX + 80, ipbb_startY - 60, ipbb_startX + 80, ipbb_startY - 30);
    ctx.bezierCurveTo(ipbb_startX + 30, ipbb_startY - 75, ipbb_startX - 20, ipbb_startY - 60, ipbb_startX, ipbb_startY);
    ctx.closePath();
    ctx.lineWidth = 5;
    ctx.fillStyle = '#FFFF99';
    ctx.fill();
    ctx.strokeStyle = '#fda500';
    ctx.stroke();
    ctx.font = "30px Arial";
    ctx.fillStyle = "black";
    if (sdh[0] == "true") {
        ctx.fillText("IPBB/SDH", ipbb_startX + 50, ipbb_startY + 30);
    } else {
        ctx.fillText("IPBB", ipbb_startX + 70, ipbb_startY + 30);
    }	
	
    /*-----------Cloud IPBB--------------*/
	}
	}
	}
	}
	});