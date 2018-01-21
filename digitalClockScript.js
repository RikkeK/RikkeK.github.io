
function run() {
	

	//alert(c1 + ":" + c2 + ":" + c3 + ":" + c4);

	setInterval(updateTime, 1000);


	

	
}

function setCiffer(ciffer, value) {
	switch (value) {
		case 0:
		document.getElementById(ciffer + 'HoriTopLeft').style.display = 'block' ;
		document.getElementById(ciffer + 'HoriTopRight').style.display = 'block' ;
		document.getElementById(ciffer + 'HoriButLeft').style.display = 'block' ;
		document.getElementById(ciffer + 'HoriButRight').style.display = 'block' ;
		document.getElementById(ciffer + 'VertiTop').style.display = 'block' ;
		document.getElementById(ciffer + 'VertiMid').style.display = 'none' ;
		document.getElementById(ciffer + 'VertiBut').style.display = 'block' ;
		break;
		case 1:
		document.getElementById(ciffer + 'HoriTopLeft').style.display = 'none' ;
		document.getElementById(ciffer + 'HoriTopRight').style.display = 'block' ;
		document.getElementById(ciffer + 'HoriButLeft').style.display = 'none' ;
		document.getElementById(ciffer + 'HoriButRight').style.display = 'block' ;
		document.getElementById(ciffer + 'VertiTop').style.display = 'none' ;
		document.getElementById(ciffer + 'VertiMid').style.display = 'none' ;
		document.getElementById(ciffer + 'VertiBut').style.display = 'none' ;
		break;
		case 2:
		document.getElementById(ciffer + 'HoriTopLeft').style.display = 'none' ;
		document.getElementById(ciffer + 'HoriTopRight').style.display = 'block' ;
		document.getElementById(ciffer + 'HoriButLeft').style.display = 'block' ;
		document.getElementById(ciffer + 'HoriButRight').style.display = 'none' ;
		document.getElementById(ciffer + 'VertiTop').style.display = 'block' ;
		document.getElementById(ciffer + 'VertiMid').style.display = 'block' ;
		document.getElementById(ciffer + 'VertiBut').style.display = 'block' ;
		break;
		case 3:
		document.getElementById(ciffer + 'HoriTopLeft').style.display = 'none' ;
		document.getElementById(ciffer + 'HoriTopRight').style.display = 'block' ;
		document.getElementById(ciffer + 'HoriButLeft').style.display = 'none' ;
		document.getElementById(ciffer + 'HoriButRight').style.display = 'block' ;
		document.getElementById(ciffer + 'VertiTop').style.display = 'block' ;
		document.getElementById(ciffer + 'VertiMid').style.display = 'block' ;
		document.getElementById(ciffer + 'VertiBut').style.display = 'block' ;
		break;
		case 4:
		document.getElementById(ciffer + 'HoriTopLeft').style.display = 'block' ;
		document.getElementById(ciffer + 'HoriTopRight').style.display = 'block' ;
		document.getElementById(ciffer + 'HoriButLeft').style.display = 'none' ;
		document.getElementById(ciffer + 'HoriButRight').style.display = 'block' ;
		document.getElementById(ciffer + 'VertiTop').style.display = 'none' ;
		document.getElementById(ciffer + 'VertiMid').style.display = 'block' ;
		document.getElementById(ciffer + 'VertiBut').style.display = 'none' ;
		break;
		case 5:
		document.getElementById(ciffer + 'HoriTopLeft').style.display = 'block' ;
		document.getElementById(ciffer + 'HoriTopRight').style.display = 'none' ;
		document.getElementById(ciffer + 'HoriButLeft').style.display = 'none' ;
		document.getElementById(ciffer + 'HoriButRight').style.display = 'block' ;
		document.getElementById(ciffer + 'VertiTop').style.display = 'block' ;
		document.getElementById(ciffer + 'VertiMid').style.display = 'block' ;
		document.getElementById(ciffer + 'VertiBut').style.display = 'block' ;
		break;
		case 6:
		document.getElementById(ciffer + 'HoriTopLeft').style.display = 'block' ;
		document.getElementById(ciffer + 'HoriTopRight').style.display = 'none' ;
		document.getElementById(ciffer + 'HoriButLeft').style.display = 'block' ;
		document.getElementById(ciffer + 'HoriButRight').style.display = 'block' ;
		document.getElementById(ciffer + 'VertiTop').style.display = 'block' ;
		document.getElementById(ciffer + 'VertiMid').style.display = 'block' ;
		document.getElementById(ciffer + 'VertiBut').style.display = 'block' ;
		break;
		case 7:
		document.getElementById(ciffer + 'HoriTopLeft').style.display = 'none' ;
		document.getElementById(ciffer + 'HoriTopRight').style.display = 'block' ;
		document.getElementById(ciffer + 'HoriButLeft').style.display = 'none' ;
		document.getElementById(ciffer + 'HoriButRight').style.display = 'block' ;
		document.getElementById(ciffer + 'VertiTop').style.display = 'block' ;
		document.getElementById(ciffer + 'VertiMid').style.display = 'none' ;
		document.getElementById(ciffer + 'VertiBut').style.display = 'none' ;
		break;
		case 8:
		document.getElementById(ciffer + 'HoriTopLeft').style.display = 'block' ;
		document.getElementById(ciffer + 'HoriTopRight').style.display = 'block' ;
		document.getElementById(ciffer + 'HoriButLeft').style.display = 'block' ;
		document.getElementById(ciffer + 'HoriButRight').style.display = 'block' ;
		document.getElementById(ciffer + 'VertiTop').style.display = 'block' ;
		document.getElementById(ciffer + 'VertiMid').style.display = 'block' ;
		document.getElementById(ciffer + 'VertiBut').style.display = 'block' ;
		break;
		case 9:
		document.getElementById(ciffer + 'HoriTopLeft').style.display = 'block' ;
		document.getElementById(ciffer + 'HoriTopRight').style.display = 'block' ;
		document.getElementById(ciffer + 'HoriButLeft').style.display = 'none' ;
		document.getElementById(ciffer + 'HoriButRight').style.display = 'block' ;
		document.getElementById(ciffer + 'VertiTop').style.display = 'block' ;
		document.getElementById(ciffer + 'VertiMid').style.display = 'block' ;
		document.getElementById(ciffer + 'VertiBut').style.display = 'block' ;
		break;
	}
}

function updateTime() {
	var currentTime = new Date();
    var h = currentTime.getHours();
    var m = currentTime.getMinutes();

 
	var c1 = (h/10)|0;
	var c2 = h % 10;

	var c3 = (m/10)|0;
	var c4 = m % 10;

	setCiffer("c1", c1);
	setCiffer("c2", c2);
	setCiffer("c3", c3);
	setCiffer("c4", c4);
}

