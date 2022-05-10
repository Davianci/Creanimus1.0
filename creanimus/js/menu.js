var pos=1;
$(document).ready(function(){

$(window).resize(function(){
      switch (pos){
      case 1: pag1();
      break;
      case 2: pag2();
      break;
      case 3: pag3();
      break;
      case 4: pag4();
      break;
    }
    });

 $("#btn1").click(function(){/*llamado pde funciones para el boton 1*/

    switch (pos){
      case 1: pag2();
      break;
      case 2: pag1();
      break;
      case 3: pag1();
      break;
      case 4: pag2();
      break;
    }
    });
      $("#btn2").click(function(){/*llamado pde funciones para el boton 2*/

    switch (pos){
      case 1: pag4();
      break;
      case 2: pag3();
      break;
      case 3: pag2();
      break;
      case 4: pag1();
      break;
    }
    });
      $("#btn3").click(function(){/*llamado pde funciones para el boton 3*/

    switch (pos){
      case 1: pag3();
      break;
      case 2: pag4();
      break;
      case 3: pag4();
      break;
      case 4: pag3();
      break;
    }    
  });


  $(".txtpregunta").click(function(){
  	pag2();
  });

});


function pag1(){
pos=1;
if ($("body").width()>920) {/* se cumple si el ancho es mayor a 920 px*/
var valores=['0px','0px','3px','30%','10%','6%','25%','1%'];

};

if ($("body").width()<920 && $("body").width()>=480) {/* se cumple si el ancho es entre 920 y 480 px*/
var valores=['0px','0px','3px','30%','10%','6%','25%','1%'];

};

if ($("body").width()<480) {/* se cumple si el ancho es menor a 480 px*/
var valores=['0px','0px','3px','18%','4%','3%','27%','1%'];

};
valores.push("Cómo","Contáctanos","Nuestro<br/> plan","st2 st3","st1","st1 st3","st2","st1 st2","st3");
ubicar(valores); /*envia los bvalores para mover los botones*/

}

function pag2(){
pos=2;
  if ($("body").width()>920) {/* se cumple si el ancho es mayor a 920 px*/
var valores=['-100%','0px','90%','30%','85%','6%','70%','1%'];

};

if ($("body").width()<920 && $("body").width()>=480) {/* se cumple si el ancho es entre 920 y 480 px*/
var valores=['-100%','0px','87%','30%','80%','6%','67%','1%'];

};

if ($("body").width()<480) {/* se cumple si el ancho es menor a 480 px*/
var valores=['-100%','0px','78%','18%','70%','3%','48%','1%'];

};
valores.push("El problema","Nuestro<br/> plan","Contáctanos","st1 st3","st2","st2 st1","st3","st3 st1","st2");
ubicar(valores);/*envia los valores para mover los botones*/

}

function pag3(){
  pos=3;
    if ($("body").width()>920) {/* se cumple si el ancho es mayor a 920 px*/
var valores=['0px','-100%','25%','77%','10%','75%','3%','50%'];

};

if ($("body").width()<920 && $("body").width()>=480) {/* se cumple si el ancho es entre 920 y 480 px*/
var valores=['0px','-100%','25%','74%','10%','67%','1%','45%'];

};

if ($("body").width()<480) {/* se cumple si el ancho es menor a 480 px*/
var valores=['0px','-100%','32%','84%','10%','82%','3px','68%'];

};
valores.push("El problema","Cómo","Contáctanos","st1 st3","st2","st2 st3","st1","st3 st1","st2");
ubicar(valores);/*envia los bvalores para mover los botones*/

}

function pag4(){
  pos=4;
    if ($("body").width()>920) {/* se cumple si el ancho es mayor a 920 px*/
var valores=['-100%','-100%','70%','77%','85%','75%','90%','50%'];

};

if ($("body").width()<920 && $("body").width()>=480) {/* se cumple si el ancho es entre 920 y 480 px*/
var valores=['-100%','-100%','67%','74%','80%','67%','87%','45%'];

};

if ($("body").width()<480) {/* se cumple si el ancho es mayor a 920 px*/
var valores=['-100%','-100%','48%','84%','70%','82%','78%','68%'];

};
valores.push("Cómo","El problema","Nuestro<br/> plan","st2 st3","st1","st1 st3","st2","st2 st1","st3");
ubicar(valores);/*envia los bvalores para mover los botones*/
	
}

function ubicar(v){/*realiza el movimiento de los botones de acuerdo a los valores que reciba  para posicionar

/*muevo los botones*/
$("#cont").animate({left:v[0],top:v[1]},1500);
$("#btn1").animate({right:v[2],bottom:v[3]},1500);
$("#btn2").animate({right:v[4],bottom:v[5]},1500);
$("#btn3").animate({right:v[6],bottom:v[7]},1500);

/*cambio textos*/
$("#btn1 p").html(v[8]);
$("#btn2 p").html(v[9]);
$("#btn3 p").html(v[10]);
/*ajusto estilos*/
$("#btn1 p").removeClass(v[11]);
$("#btn1 p").addClass(v[12]);
$("#btn2 p").removeClass(v[13]);
$("#btn2 p").addClass(v[14]);
$("#btn3 p").removeClass(v[15]);
$("#btn3 p").addClass(v[16]);
}
