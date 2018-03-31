$( document ).ready(function() {
	
	$(".btnzayavka3").click(function(){
		if ($('.formainput input[placeholder="Ваш телефон"]').val().replace(" ", "")=="" || $('.formainput input[placeholder="Ваше имя"]').val().replace(" ", "")==""){
			$(".error2").addClass("openerror");
			setTimeout(function(){
				$(".error2").removeClass("openerror");
			}, 1200);
		}
		else if ($(".nomera2 .open").html()==undefined){
			$(".error1").addClass("openerror");
			setTimeout(function(){
				$(".error1").removeClass("openerror");
			}, 1200);
		}
		else{
			$('.formainput input[name="zaezd"]').val($(".form-control").eq(2).val());
			$('.formainput input[name="vuezd"]').val($(".form-control").eq(3).val());
			$('.formainput input[name="count"]').val($(".punkt2 h1").eq(2).text());
			$('.formainput input[name="nomer"]').val($(".nomera2 .open .botnomer2 h1").text());
			$('.formainput input[name="itogo"]').val($(".itogo h1").text());
			
			var sd = $(this).parent().serialize();
			$("body").append('<div class="succefolly"> <div class="obls"><span>РЎРїР°СЃРёР±Рѕ!<br>Р’Р°С€Р° Р·Р°СЏРІРєР° РѕС‚РїСЂР°РІР»РµРЅР°</span><br></div></div>');
	$.ajax({
                    type: "POST",
                    url: "/send.php",
                    dataType: "text",
                    data: sd,
                    success: function (html) {
if(parseInt(html)==1){
	$( ".succefolly" ).addClass( "succ_yes" );
	setTimeout(function() {$( ".succefolly" ).removeClass( "succ_yes" ); }, 2000)
}else {	
}
                    },
                });
			
		}
	});
	


	
	$(".btnzayavka4").click(function(){
		var sd = $(this).parent().serialize();
		if ($('#tel').val().replace(" ", "")=="" || $('#name').val().replace(" ", "")==""){
			$(".error2").addClass("openerror");
			setTimeout(function(){
				$(".error2").removeClass("openerror");
			}, 1200);
		}
		else{
			$('.bgwh form input[name="type"]').val($(".bgwh form .typemerop span").text());
			
				$("body").append('<div class="succefolly"> <div class="obls"><span>Спасибо!<br>ЗАЯВКА ОТПРАВЛЕНА!</span><br></div></div>');
	$.ajax({
                    type: "POST",
                    url: "/send.php",
                    dataType: "text",
                    data: sd,
                    success: function (html) {
if(parseInt(html)==1){
	$( ".succefolly" ).addClass( "succ_yes" );
	setTimeout(function() {$( ".succefolly" ).removeClass( "succ_yes" ); }, 2000)
}else {	
}
                    },
                });
			
		}
	});
	
	
	
	
	
var max_next;	
if ($(".gallery").html() != undefined){
	
	$.get("/instagram.php", function( data ) { 
		var imgDatainst = jQuery.parseJSON(data); 
		max_next = imgDatainst["pagination"]["next_max_id"];		
			$(".gallery").html(''); 
			for(i = 0; i < imgDatainst["data"].length; i++){ 
			imgresultmax = imgDatainst["data"][i]["images"]["standard_resolution"]["url"]; 
			imgresultmin = imgDatainst["data"][i]["images"]["low_resolution"]["url"]; 
			$(".gallery").append('<div class="gallfoto" style="background: url(' + imgresultmax +') no-repeat center;" data-full="' + imgresultmax +'">	<div class="lupa"></div></div>'); 
		} 
		gall();
		GallaryMimbo.init();	
		loadnext();			
	});
	
	}	

	
	function loadnext(){
		var flag99 = 0;
		$(window).scroll(function(){
		hnow=$(window).scrollTop();
		hneed=$("#contacts p").offset().top;
		if (hnow + screen.height>=hneed){
				if(flag99 == 0){
			$.get("/instagram.php?max=" + max_next, function( data ) { 
		var imgDatainst = jQuery.parseJSON(data); 
		max_next = imgDatainst["pagination"]["next_max_id"];		
			for(i = 0; i < imgDatainst["data"].length; i++){ 
			imgresultmax = imgDatainst["data"][i]["images"]["standard_resolution"]["url"]; 
			imgresultmin = imgDatainst["data"][i]["images"]["low_resolution"]["url"]; 
			$(".gallery").append('<div class="gallfoto" style="background: url(' + imgresultmax +') no-repeat center;" data-full="' + imgresultmax +'">	<div class="lupa"></div></div>'); 
		} 
		gall();
		GallaryMimbo.init();
		loadnext();		
	});
			flag99 = 1;
				}	
		}
		})
		
	}
	
	
	
	var flposs=0;
	massDate=['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
	var now = new Date();
	var datanew = new Date();
	var datanew2 = new Date();
	var datanew3 = new Date();
	var datanew4 = new Date();
	nowdate=now.getDate();
	nowmonth=now.getMonth();
	$(".punkt h1").eq(0).html("<span>"+nowdate+"/</span>"+massDate[nowmonth]);
	$(".punkt h1").eq(1).html("<span>"+nowdate+"/</span>"+massDate[nowmonth]);
	$(".punkt2 h1").eq(0).html("<span>"+nowdate+"/</span>"+massDate[nowmonth]);
	$(".punkt2 h1").eq(1).html("<span>"+nowdate+"/</span>"+massDate[nowmonth]);

    $('#datetimepicker1').datetimepicker(
      {	language: 'ru',
			pickTime: false,
			minDate: now,
			defaultDate: now
	  });	  
	  $("#datetimepicker1").on("dp.hide",function (e) {
		  newdate=$(".form-control").eq(0).val();
		  massvalue=newdate.split(".");
		  datanew=new Date(massvalue[2], massvalue[1]-1, massvalue[0]);
		  razndata=datanew2.getTime()-datanew.getTime();
		  if (razndata>=0){
			$(".punkt h1").eq(0).html("<span>"+massvalue[0]+"/</span>"+massDate[massvalue[1]-1]);  
		  }
		  else{
			  $(".punkt h1").eq(0).html("<span>"+massvalue[0]+"/</span>"+massDate[massvalue[1]-1]);  
			  $(".form-control").eq(1).val($(".form-control").eq(0).val());
			  newdate=$(".form-control").eq(1).val();
			  massvalue=newdate.split(".");
			  $(".punkt h1").eq(1).html("<span>"+massvalue[0]+"/</span>"+massDate[massvalue[1]-1]);
		  }
    });
	
	 $('#datetimepicker2').datetimepicker(
      {	language: 'ru',
			pickTime: false,
			minDate: now,
			defaultDate: now
	  });	  
	  $("#datetimepicker2").on("dp.hide",function (e) {
		  newdate=$(".form-control").eq(1).val();
		  massvalue=newdate.split(".");
		  datanew2=new Date(massvalue[2], massvalue[1]-1, massvalue[0]);
		  razndata=datanew2.getTime()-datanew.getTime();
		  if (razndata>=0){
			$(".punkt h1").eq(1).html("<span>"+massvalue[0]+"/</span>"+massDate[massvalue[1]-1]);
		  }
		  else{
			  $(".form-control").eq(1).val($(".form-control").eq(0).val());
			  newdate=$(".form-control").eq(1).val();
			  massvalue=newdate.split(".");
			  $(".punkt h1").eq(1).html("<span>"+massvalue[0]+"/</span>"+massDate[massvalue[1]-1]);
		  }			
    });
	
	$('#datetimepicker3').datetimepicker(
      {	language: 'ru',
			pickTime: false,
			minDate: now,
			defaultDate: now
	  });	  
	  $("#datetimepicker3").on("dp.hide",function (e) {
		  newdate=$(".form-control").eq(2).val();
		  massvalue=newdate.split(".");
		  datanew3=new Date(massvalue[2], massvalue[1]-1, massvalue[0]);
		  razndata=datanew4.getTime()-datanew3.getTime();
		  if (razndata>=0){
			$(".punkt2 h1").eq(0).html("<span>"+massvalue[0]+"/</span>"+massDate[massvalue[1]-1]);
		  }
		  else{
			  $(".punkt2 h1").eq(0).html("<span>"+massvalue[0]+"/</span>"+massDate[massvalue[1]-1]);
			  $(".form-control").eq(3).val($(".form-control").eq(2).val());
			  newdate=$(".form-control").eq(3).val();
			  massvalue=newdate.split(".");
			  $(".punkt2 h1").eq(1).html("<span>"+massvalue[0]+"/</span>"+massDate[massvalue[1]-1]);
		  }
		  calculator();
    });
	
	 $('#datetimepicker4').datetimepicker(
      {	language: 'ru',
			pickTime: false,
			minDate: now,
			defaultDate: now
	  });	  
	  $("#datetimepicker4").on("dp.hide",function (e) {
		  newdate=$(".form-control").eq(3).val();
		  massvalue=newdate.split(".");
		  datanew4=new Date(massvalue[2], massvalue[1]-1, massvalue[0]);
		  razndata=datanew4.getTime()-datanew3.getTime();
		  if (razndata>=0){
			$(".punkt2 h1").eq(1).html("<span>"+massvalue[0]+"/</span>"+massDate[massvalue[1]-1]);
		  }
		  else{
			  $(".form-control").eq(3).val($(".form-control").eq(2).val());
			  newdate=$(".form-control").eq(3).val();
			  massvalue=newdate.split(".");
			  $(".punkt2 h1").eq(1).html("<span>"+massvalue[0]+"/</span>"+massDate[massvalue[1]-1]);
		  }
		  calculator();
    });
	
	
	flopen=0;
	flopen2=0;
	
	$(".day").click(function(){
		calculator();
	});
	
	$(".punkt h1").eq(0).click(function(){
		if ($(".picker-open").html()==undefined && flopen==0){
			$(".closeblock2").css("display", "block");
			flopen=1;
			flopen2=0;
			$(".punkt .strdown").eq(0).click();
			$(".day").click(function(){
				flopen=0;
				flopen2=0;
				$(".closeblock2").css("display", "none");
			});
		}
		else if ($(".picker-open").html()==undefined){
			flopen=0;
			$(".closeblock2").css("display", "none");
		}
	});
	
	$(".punkt h1").eq(1).click(function(){
		if ($(".picker-open").html()==undefined && flopen==0){
			$(".closeblock2").css("display", "block");
			flopen=1;
			flopen2=0;
			$(".punkt .strdown").eq(1).click();
			$(".day").click(function(){
				flopen=0;
				flopen2=0;
				$(".closeblock2").css("display", "none");
			});
		}
		else if ($(".picker-open").html()==undefined){
			flopen=0;
			$(".closeblock2").css("display", "none");
		}
	});
	
	$(".punkt2 h1").eq(0).click(function(){
		if ($(".picker-open").html()==undefined && flopen2==0){
			$(".closeblock2").css("display", "block");
			flopen2=1;
			flopen=0;
			$(".punkt2 .strdown").eq(0).click();
			$(".day").click(function(){
				flopen=0;
				flopen2=0;
				$(".closeblock2").css("display", "none");
			});
		}
		else if ($(".picker-open").html()==undefined){
			flopen2=0;
			$(".closeblock2").css("display", "none");
		}
	});
	
	$(".punkt2 h1").eq(1).click(function(){
		if ($(".picker-open").html()==undefined && flopen2==0){
			$(".closeblock2").css("display", "block");
			flopen2=1;
			flopen=0;
			$(".punkt2 .strdown").eq(1).click();
			$(".day").click(function(){
				flopen=0;
				flopen2=0;
				$(".closeblock2").css("display", "none");
			});
		}
		else if ($(".picker-open").html()==undefined){
			flopen2=0;
			$(".closeblock2").css("display", "none");
		}
	});
	
	var opencountmenu=0;
	var nowcount=1;
	
	function countm(string){
		sizecount=$("."+string+" .countmenu ul li").length;
		if ($("."+string).html()!=undefined){
			widthcount=$("."+string).eq(2).innerWidth();
			counthtml=$("."+string+" h1").eq(2).html();
			$("."+string+" .countmenu").css("display","block");	
			for (i=0;i<sizecount;i++){
				if ($("."+string+" .countmenu ul li").eq(i).html()==counthtml){
					nowcount=i;
					break;
				}
			}
			h1height=$("."+string+" .countmenu ul li").outerHeight();
			$("."+string+" .countmenu").css("width", widthcount);
			$("."+string+" .countmenu").css("top", h1height*nowcount*(-1));		
		}
	}
	
	$(".punkt .strdown2").click(function(){
		if (opencountmenu==0){
			opencountmenu=1;
			countm("punkt");
			$(".closeblock2").css("display", "block");
		}
		else{
			opencountmenu=0;
			$(".punkt .countmenu").css("display","none");
			$(".closeblock2").css("display", "none");
		}
	});
	
	$(".punkt h1").eq(2).click(function(){
		if (opencountmenu==0){
			opencountmenu=1;
			countm("punkt");		
			$(".closeblock2").css("display", "block");
		}
		else{
			opencountmenu=0;
			$(".punkt .countmenu").css("display","none");
			$(".closeblock2").css("display", "none");
		}
	});
	
	$(".punkt .countmenu ul li").click(function(){		
		opencountmenu=0;
		$(".punkt h1").eq(2).html($(this).html());
		$(".punkt .countmenu ul li").removeClass("activecount");
		$(this).addClass("activecount");
		countm("punkt");
		$(".punkt .countmenu").css("display","none");
		$(".closeblock2").css("display", "none");
	});
	
	$(".closeblock2").click(function(){
		opencountmenu=0;
		opencountmenu2=0;
		flopen=0;
		flopen2=0;
		$(".punkt .countmenu").css("display","none");
		$(".punkt2 .countmenu").css("display","none");
		$(".closeblock2").css("display", "none");
	});
	
	
	var opencountmenu2=0;
	
	$(".punkt2 h1").eq(2).click(function(){
		if (opencountmenu2==0){
			opencountmenu2=1;
			countm("punkt2");		
			$(".closeblock2").css("display", "block");
		}
		else{
			opencountmenu2=0;
			$(".punkt2 .countmenu").css("display","none");
			$(".closeblock2").css("display", "none");
		}
	});
	
	$(".punkt2 .strdown2").click(function(){
		if (opencountmenu2==0){
			opencountmenu2=1;
			countm("punkt2");
			$(".closeblock2").css("display", "block");		
		}
		else{
			opencountmenu2=0;
			$(".punkt2 .countmenu").css("display","none");
			$(".closeblock2").css("display", "none");
		}
	});
	
	$(".punkt2 .countmenu ul li").click(function(){		
		opencountmenu2=0;
		$(".punkt2 h1").eq(2).html($(this).html());
		$(".punkt2 .countmenu ul li").removeClass("activecount");
		$(this).addClass("activecount");
		countm("punkt2");
		$(".punkt2 .countmenu").css("display","none");
		$(".closeblock2").css("display", "none");
	});
	
	$(".nomer2").click(function(){
		$(".nomer2").removeClass("open");
		$(this).addClass("open");
		calculator();
	});
	
	var typeopen=0;
	
	$(".typemenu").css("bottom", -$(".typemenu").outerHeight()-1);
	$(".typemenu").css("display", "none");
	
	$(".typemerop").click(function(){
		if (typeopen==0){
			typeopen=1
			$(".typemenu").css("display", "block");
			$(".closeblock").css("display", "block");
		}
		else{
			typeopen=0;
			$(".typemenu").css("display", "none");
			$(".closeblock").css("display", "none");
		}
	});
	
	if ($(".typemerop").html()!=undefined){
		oldhtml=$(".typemerop").html().split("<div")[1];
		$(".typemenu ul li").click(function(){
		$(".typemenu ul li").removeClass("activetype");
		$(".closeblock").css("display", "none");		
		$(this).addClass("activetype");
		$(".typemerop span").text($(this).text());	
	});
	}
	
	$(".closeblock").click(function(){
		typeopen=0;
		$(".typemenu").css("display", "none");
		$(".closeblock").css("display", "none");
	});
	
	
	var openform=0;
	
	function openformnomer(){
		if (openform==0){
			openform=1;
			$(".centertxt2").addClass("openform");
			$(".forma").css("display","none");
			document.body.style.overflow = 'hidden';	
		}
		else{
			openform=0;
			$(".forma").css("display","block");
			$(".centertxt2").removeClass("openform");
			document.body.style.overflow = 'auto';	
		}
	}
	
	$(".btnzayavka").click(function(){
		$(".punkt2 h1").eq(0).html($(".punkt h1").eq(0).html());
		$(".punkt2 h1").eq(1).html($(".punkt h1").eq(1).html());
		$(".form-control").eq(2).val($(".form-control").eq(0).val());
		$(".form-control").eq(3).val($(".form-control").eq(1).val());
		datanew3=datanew;
		datanew4=datanew2;
		calculator();
		openformnomer();
	});
	$(".btnzayavka2").click(function(){
		openformnomer();
		calculator();
	});
	$(".btnbron").click(function(){
		openformnomer();
		idnomer=$(this).attr("data");
		$('.nomer2').removeClass("open");
		$('.nomer2[data="'+idnomer+'"').addClass("open");
		calculator();
	});
	$(".closeform").click(function(){
		openformnomer();
	});
	
	
	function calculator(){
		sum=0;
		datafrom=$(".form-control").eq(2).val().split(".");   
		datato=$(".form-control").eq(3).val().split(".");
		cenanomera=Number($(".open .botnomer2 h2").text().replace(/[^0-9]/g, ''));
		datafrom2=new Date(datafrom[2], datafrom[1]-1, datafrom[0]);
		datato2=new Date(datato[2], datato[1]-1, datato[0]);
		countday=Math.floor((datato2.getTime()-datafrom2.getTime())/24/60/60/1000);
		sum=cenanomera*countday;
		if (sum==0)
			sum=cenanomera;
		$(".itogo h1").html(sum+"<span>руб</span>");		
	}
	
	
	var isopen = false;
	function endanim(){
		$(".menublock").removeClass("open");
	}

	function open(){
		if(isopen==false){
			isopen=true;
			$(".menublock").addClass("open");
			$(".menublock").animate({
					opacity: 1
				}, 
				{
					duration: 400,
					easing: "swing",
					queue: false,
				});
		}
		else{
			isopen=false;
			$(".menublock").animate({
					opacity: 0
				}, 
				{
					duration: 400,
					easing: "swing",
					queue: false,
					done: endanim
				});
		}
	}

	$(".gamb").click(function(){
		 open();
	 })
	 $(".slovo").click(function(){
		 open();
	 })
	 $(".menublock .btnclose").click(function(){
		 open();
	 })	 
	 $(".menublock a").click(function() {	
	 ssulka=$(this).attr("href").split('/');
		$("html, body").animate({
			scrollTop: $(ssulka[1]).offset().top + "px"
		  }, 
		  {
			 duration: 800,
			 easing: "swing"
		});
		open();
	});
	 
	 $(".btnnomera").click(function(){
		 $(".nonenomer").removeClass("nonenomer");
		 $(".btnnomera").css("margin-top", "0px");
		 $(".btnnomera").text("");
	 })
	 
	 
	 
	function otduh(){
		if ($(".otduh").html()!=undefined){
			widthotduh=$(".otduh").eq(0).innerWidth();
			heighth1=$(".otduh h1").eq(0).outerHeight();
			$(".otduh").css("height", widthotduh);	
			ptotduh=widthotduh/2-heighth1/2;
			$(".otduh").css("padding-top", ptotduh);
		}
	}
	function gall(){
		if ($(".gallfoto").html()!=undefined){
			widthgall=$(".gallfoto").eq(0).innerWidth();
			$(".gallfoto").css("height", widthgall);	
		}
	}
	otduh();
	gall();
	
	$(window).resize(function(){	
		otduh();
		gall();
	});
	
	
	
	var GallaryMimbo = {
			btnNext: "nextfoto", //Кнопка "вперед"
			btnPrev: "prevfoto", //Кнопка "назад 
			fullimg: "containerImg", //Контейнер с картинкой в полный размер
			close: "closeGallary", //Кнопка "закрыть"
			nameData: "full",	//Название DATA c адресом на полное излбражение	
			init: function(){
				 kk=0;
				 $('[data-'+GallaryMimbo.nameData+']').each(function(index) {
					 kk++;
					$(this).click(function() {	
						imgPrint = $(this).data(GallaryMimbo.nameData);
						$('body').after("<div class='" + GallaryMimbo.fullimg + "' style='background:url("+imgPrint+");'> </div>");
						$('.'+GallaryMimbo.fullimg).append('<div class="'+GallaryMimbo.close+'"></div>');
						$('.'+GallaryMimbo.fullimg).append('<div class="'+GallaryMimbo.btnPrev+'"></div>');
						$('.'+GallaryMimbo.fullimg).append('<div class="'+GallaryMimbo.btnNext+'"></div>');
						$('.'+GallaryMimbo.btnNext).click(function() {
							index++;
							newImg = $('[data-'+GallaryMimbo.nameData+']').eq(index).data(GallaryMimbo.nameData);
							if(newImg == undefined || index==kk){
							index = 0;	
							newImg = $('[data-'+GallaryMimbo.nameData+']').eq(index).data(GallaryMimbo.nameData);
							}	
							$('.'+GallaryMimbo.fullimg).css("background", "url("+ newImg +")");
						});
						$('.'+GallaryMimbo.btnPrev).click(function() {
							index--;
							newImg = $('[data-'+GallaryMimbo.nameData+']').eq(index).data(GallaryMimbo.nameData);
							if(newImg == undefined || index==-1){
							index = kk-1;
							newImg = $('[data-'+GallaryMimbo.nameData+']').eq(index).data(GallaryMimbo.nameData);
							}	
							$('.'+GallaryMimbo.fullimg).css("background", "url("+ newImg +")");
						});
						$('.' + GallaryMimbo.close).click(function() {
							$('.'+GallaryMimbo.fullimg).remove();
						});
					});
				});
			}
	};

	
	
	numfotopage=0;
		massfotopage=$(".fotonone");
		massfotopagelen=$(".fotonone").length;
		$(".glavfoto").attr("style", $(".fotonone").eq(numfotopage).attr("style"));
	
		$(".btnprev").click(function(){
			if (numfotopage==0){
				numfotopage=massfotopagelen-1;
			}
			else{
				numfotopage--;
			}
			$(".glavfoto").attr("style", $(".fotonone").eq(numfotopage).attr("style"));
		});
		
		$(".btnnext").click(function(){
			if (numfotopage==massfotopagelen-1){
				numfotopage=0;
			}
			else{
				numfotopage++;
			}
			$(".glavfoto").attr("style", $(".fotonone").eq(numfotopage).attr("style"));
		});
		
		
		numfotopage1=0;
		massfotopage1=$(".slidenone");
		massfotopagelen1=$(".slidenone").length;
		$(".slide").attr("style", $(".slidenone").eq(numfotopage1).attr("style"));
		$(".slide .opisslide").html($(".slidenone").eq(numfotopage1).html());
		
		$(".prevslide").click(function(){
			if (numfotopage1==0){
				numfotopage1=massfotopagelen1-1;
			}
			else{
				numfotopage1--;
			}
			$(".slide").attr("style", $(".slidenone").eq(numfotopage1).attr("style"));
			 $(".slide .opisslide").html($(".slidenone").eq(numfotopage1).html());
		});
		
		$(".nextslide").click(function(){
			if (numfotopage1==massfotopagelen1-1){
				numfotopage1=0;
			}
			else{
				numfotopage1++;
			}
			$(".slide").attr("style", $(".slidenone").eq(numfotopage1).attr("style"));
			$(".slide .opisslide").html($(".slidenone").eq(numfotopage1).html());
		});
		
		var num=0;
		$(".fotomenu").attr("style", $(".fotomenunone").eq(num).attr("style"));
		$(".menurestorana").html($(".menurestorananone").eq(num).html());
		
		$(".vid").click(function(){
			$(".vid").removeClass("vidactive");
			$(this).addClass("vidactive");
			num=$(".vid").index(this);
			$(".fotomenu").attr("style", $(".fotomenunone").eq(num).attr("style"));
			$(".menurestorana").html($(".menurestorananone").eq(num).html());
		});
		
				
		$(".typemerop").click(function(){
			
		});
		
		$(".prev").html("");
		$(".next").html("");
		
		
		
		
		
	leftbtn="leftslide";	// Кнопка переключения назад
	rightbtn="rightslide"	// Кнопка переключения вперед
	galleryblock="sliderak"; // Контейнер картинок и кнопок
	hiddenblock=".overhidden"; //Если кнопки неподвижные то они должны быть вне контейнера hiddenblock. hiddenblock скрывает лишнее в слайдере. Если такого нет, то значение = ""
	allphoto="akfoto";	// Класс хранения картинок
	

	leftphoto="akfoto1";	// Левая картинка
	middlephoto="akfoto2";	// Картинка посередине
	rightphoto="akfoto3";	// Правая картинка 

	
	// Длительность различных анимаций
	// Если durationAll >=0 то длительность всех анимацией равна этому числу
	//	иначе длительность берется с нижнего блока if
	durationAll=800;
	
	if (durationAll<0)
	{
	

	durationLeftToMiddle=400;
	durationMiddleToRight=400;

	durationRightToMiddle=400;
	durationMiddleToLeft=400;

	durationLeftToMiddleWidth=400;
	durationMiddleToRightWidth=400;
	
	durationLeftToMiddleHeight=400;
	durationMiddleToRightHeight=400;
	
	durationLeftToMiddleTop=400;
	durationMiddleToRightTop=400;
	
	durationRightToMiddleWidth=400;
	durationMiddleToLeftWidth=400;
	
	durationRightToMiddleHeight=400;
	durationMiddleToLeftHeight=400;
	
	durationRightToMiddleTop=400;
	durationMiddleToLeftTop=400;
	
	durationLeftToMiddleOpacityRise=400;
	durationMiddleToRightOpacityFall=400;
	
	durationRightToMiddleOpacityRise=400;
	durationMiddleToLeftOpacityFall=400;
	
	}
	else{
		durationLeftToMiddle=durationAll;
		durationMiddleToRight=durationAll;
		
		durationRightToMiddle=durationAll;
		durationMiddleToLeft=durationAll;
				
		durationLeftToMiddleWidth=durationAll;
		durationMiddleToRightWidth=durationAll;
		
		durationLeftToMiddleHeight=durationAll;
		durationMiddleToRightHeight=durationAll;
		
		durationLeftToMiddleTop=durationAll;
		durationMiddleToRightTop=durationAll;
				
		durationRightToMiddleWidth=durationAll;
		durationMiddleToLeftWidth=durationAll;
		
		durationRightToMiddleHeight=durationAll;
		durationMiddleToLeftHeight=durationAll;
		
		durationRightToMiddleTop=durationAll;
		durationMiddleToLeftTop=durationAll;
			
		durationLeftToMiddleOpacityRise=durationAll;
		durationMiddleToRightOpacityFall=durationAll;
				
		durationRightToMiddleOpacityRise=durationAll;
		durationMiddleToLeftOpacityFall=durationAll;
	}
	
	if ($("."+galleryblock).html()!=undefined){
	windowwidth=parseInt(document.documentElement.clientWidth);
	//var windowsWidth = parseInt(window.innerWidth);


	
	widthleft=$("."+leftphoto).outerWidth();
	heightleft=$("."+leftphoto).outerHeight();
	left=$("."+leftphoto).css("left");
	leftnumber=Number(left.split("px")[0]);
	topleft=$("."+leftphoto).css("top");
		
	widthmiddle=$("."+middlephoto).outerWidth();
	heightmiddle=$("."+middlephoto).outerHeight();
	middle=$("."+middlephoto).css("left");
	middlenumber=Number(middle.split("px")[0]);	
	middlestr="calc(50% - "+widthmiddle/2+"px)";
	topmiddle=$("."+middlephoto).css("top");
	
	widthright=$("."+rightphoto).outerWidth();
	heightright=$("."+rightphoto).outerHeight();
	right=$("."+rightphoto).css("right");
	rightnumber=Number(right.split("px")[0]);
	topright=$("."+rightphoto).css("top");
	
	otstupleft=(windowwidth-widthmiddle)/2-(widthleft+leftnumber);
	otstupright=(windowwidth-widthmiddle)/2-(widthright+rightnumber);
	
	// Если при изменении экрана меняется css картинок
	
	$(window).resize(function(){
		windowwidth=parseInt(document.documentElement.clientWidth);
		
		widthleft=$("."+leftphoto).outerWidth();
		heightleft=$("."+leftphoto).outerHeight();
		left=$("."+leftphoto).css("left");
		leftnumber=Number(left.split("px")[0]);		
		topleft=$("."+leftphoto).css("top");
			
		widthmiddle=$("."+middlephoto).outerWidth();
		heightmiddle=$("."+middlephoto).outerHeight();
		middle=$("."+middlephoto).css("left");
		middlenumber=Number(middle.split("px")[0]);			
		middlestr="calc(50% - "+widthmiddle/2+"px)";
		topmiddle=$("."+middlephoto).css("top");
		
		widthright=$("."+rightphoto).outerWidth();
		heightright=$("."+rightphoto).outerHeight();
		right=$("."+rightphoto).css("right");
		rightnumber=Number(right.split("px")[0]);
		topright=$("."+rightphoto).css("top");
		
		otstupleft=(windowwidth-widthmiddle)/2-(widthleft+leftnumber);
		otstupright=(windowwidth-widthmiddle)/2-(widthright+rightnumber);
	});
	
	arrphoto=$("."+galleryblock+" ."+allphoto);
	countphoto=arrphoto.length;
	lastindex=countphoto-1;
	nowindex=0;
	
	if (countphoto==1){
		nextphotogallery=0;
	}
	else{
		nextphotogallery=1;
	}
	
	$("."+leftphoto).attr("style", arrphoto.eq(lastindex).attr("style"));	
	$("."+middlephoto).attr("style", arrphoto.eq(0).attr("style"));
	$("."+middlephoto).html($("."+allphoto).eq(0).html());	
	$("."+rightphoto).attr("style", arrphoto.eq(nextphotogallery).attr("style"));
	
	leftstyle=$("."+leftphoto).attr("style");
	middlestyle=$("."+middlephoto).attr("style");
	rightstyle=$("."+rightphoto).attr("style");
	flaganimation=1;
	// Нажатие кнопки назад
	
	function GalleryPrev(){
	if (flaganimation==1){
		flaganimation=0;
		if (nowindex==0){
			nowindex=lastindex;
		}
		else{
			nowindex--;
		}
		
		
		//$("."+leftphoto).css("left", middle);
		$("."+leftphoto).animate({
			left: middle
		}, 
		{
			duration: durationLeftToMiddle,
			easing: "swing",
			queue: false,
			done: calcleft
		});
		
		//$("."+leftphoto).css("top", topmiddle);
		$("."+leftphoto).animate({
			top: topmiddle
		}, 
		{
			duration: durationLeftToMiddleTop,
			easing: "swing",
			queue: false
		});
		
		$("."+leftphoto).html($("."+allphoto).eq(nowindex).html());
		
		//$("."+leftphoto+" *").css("opacity", 1);
		$("."+leftphoto+" *").animate({
			opacity: 1
		}, 
		{
			duration: durationLeftToMiddleOpacityRise,
			easing: "swing",
			queue: false
		});
		
		//$("."+leftphoto).width(widthmiddle);
		$("."+leftphoto).animate({
			width: widthmiddle
		}, 
		{
			duration: durationLeftToMiddleWidth,
			easing: "swing",
			queue: false
		});
		
		//$("."+leftphoto).height(heightmiddle);
		$("."+leftphoto).animate({
			height: heightmiddle
		}, 
		{
			duration: durationLeftToMiddleHeight,
			easing: "swing",
			queue: false
		});		
		
		//$("."+middlephoto).css("left", "auto");
		
		//$("."+middlephoto).css("right", right);
		$("."+middlephoto).animate({
			right: right
		}, 
		{
			duration: durationMiddleToRight,
			easing: "swing",
			queue: false,
		});
		
		//$("."+middlephoto).css("top", topright);
		$("."+middlephoto).animate({
			top: topright
		}, 
		{
			duration: durationMiddleToRightTop,
			easing: "swing",
			queue: false
		});
		
		//$("."+middlephoto+" *").css("opacity", 0);
		$("."+middlephoto+" *").animate({
			opacity: 0
		}, 
		{
			duration: durationMiddleToRightOpacityFall,
			easing: "swing",
			queue: false
		});
		
		//$("."+middlephoto).width(widthright);
		$("."+middlephoto).animate({
			width: widthright
		}, 
		{
			duration: durationMiddleToRightWidth,
			easing: "swing",
			queue: false
		});
		
		//$("."+middlephoto).height(heightright);
		$("."+middlephoto).animate({
			height: heightright
		}, 
		{
			duration: durationMiddleToRightHeight,
			easing: "swing",
			queue: false,
			done: deletestyle2
		});
						
		newindex=nowindex-1;
		if (newindex<0){
			newindex=lastindex;
		}
		
		
		rightstyle=middlestyle;
		middlestyle=leftstyle;
		leftstyle=arrphoto.eq(newindex).attr("style");		
		
		
		
				
		$("."+leftphoto).eq(0).addClass(middlephoto);
		$("."+middlephoto).eq(1).addClass(rightphoto);
		$("."+rightphoto).eq(1).addClass(leftphoto);

		$("."+leftphoto).eq(0).removeClass(leftphoto);
		$("."+middlephoto).eq(1).removeClass(middlephoto);
		$("."+rightphoto).eq(1).removeClass(rightphoto);

		$("."+galleryblock+" ."+leftbtn).click(GalleryPrev);
		$("."+galleryblock+" ."+rightbtn).click(GalleryNext);
		$("."+middlephoto).swipe( { 
			swipeLeft:leftSwipe, 
			swipeRight:rightSwipe, 
			threshold:1 
		}); 
		
	}
	}
	
	function deletestyle2(){
		$("."+leftphoto).remove();	
		$("."+galleryblock+" "+hiddenblock).prepend('<div class="'+leftphoto+'" style=""></div>');	
		$("."+leftphoto).attr("style", leftstyle);
		$("."+middlephoto).attr("style", middlestyle);
		$("."+rightphoto).attr("style", rightstyle);
		flaganimation=1;
	}
	}
	// Нажатие кнопки вперед
	
	function GalleryNext(){		
		if (flaganimation==1){
			flaganimation=0;
		if (nowindex==lastindex){
			nowindex=0;
		}
		else{
			nowindex++;
		}
		
		$("."+rightphoto).css("left", "auto");
		
		//$("."+rightphoto).css("right", middle);
		$("."+rightphoto).animate({
			//right: middle
			right: middle
		}, 
		{
			duration: durationRightToMiddle,
			easing: "swing",
			queue: false,
			done: calcright
		});
		
		//$("."+rightphoto).css("top", topmiddle);
		$("."+rightphoto).animate({
			top: topmiddle
		}, 
		{
			duration: durationRightToMiddleTop,
			easing: "swing",
			queue: false
		});
		
		$("."+rightphoto).html($("."+allphoto).eq(nowindex).html());
		
		//$("."+rightphoto+" *").css("opacity", 1);
		$("."+rightphoto+ " *").animate({
			opacity: 1
		}, 
		{
			duration: durationRightToMiddleOpacityRise,
			easing: "swing",
			queue: false
		});
		
		//$("."+rightphoto).width(widthmiddle);
		$("."+rightphoto).animate({
			width: widthmiddle
		}, 
		{
			duration: durationRightToMiddleWidth,
			easing: "swing",
			queue: false
		});
		
		//$("."+rightphoto).height(heightmiddle);
		$("."+rightphoto).animate({
			height: heightmiddle
		}, 
		{
			duration: durationRightToMiddleHeight,
			easing: "swing",
			queue: false
		});
		
		//$("."+middlephoto).css("left", left);
		$("."+middlephoto).animate({
			left: left
		}, 
		{
			duration: durationMiddleToLeft,
			easing: "swing",
			queue: false
		});
		
		//$("."+middlephoto).css("top", topleft);
		$("."+middlephoto).animate({
			top: topleft
		}, 
		{
			duration: durationMiddleToLeftTop,
			easing: "swing",
			queue: false
		});
		
		//$("."+middlephoto+" *").css("opacity", 0);
		$("."+middlephoto+" *").animate({
			opacity: 0
		}, 
		{
			duration: durationMiddleToLeftOpacityFall,
			easing: "swing",
			queue: false
		});
		
		//$("."+middlephoto).width(widthleft);
		$("."+middlephoto).animate({
			width: widthleft
		}, 
		{
			duration: durationMiddleToLeftWidth,
			easing: "swing",
			queue: false
		});
		
		//$("."+middlephoto).height(heightleft);
		$("."+middlephoto).animate({
			height: heightleft
		}, 
		{
			duration: durationMiddleToLeftHeight,
			easing: "swing",
			queue: false,
			done: deletestyle
		});
		
		newindex=nowindex+1;
		if (newindex>lastindex){
			newindex=0;
		}
		
		leftstyle=middlestyle;
		middlestyle=rightstyle;
		rightstyle=arrphoto.eq(newindex).attr("style");
		
		$("."+leftphoto).eq(0).addClass(rightphoto);
		$("."+middlephoto).eq(0).addClass(leftphoto);
		$("."+rightphoto).eq(1).addClass(middlephoto);
								
		//$("."+firstphoto).remove();			
		$("."+leftphoto).eq(0).removeClass(leftphoto);
		$("."+middlephoto).eq(0).removeClass(middlephoto);	
		$("."+rightphoto).eq(1).removeClass(rightphoto);
		
		$("."+galleryblock+" ."+leftbtn).click(GalleryPrev);
		$("."+galleryblock+" ."+rightbtn).click(GalleryNext);
		$("."+middlephoto).swipe( { 
			swipeLeft:leftSwipe, 
			swipeRight:rightSwipe, 
			threshold: 1 
		}); 
		
	}
	}
	
	function calcleft(){
		$("."+middlephoto).css("left", middlestr);
	}
	function calcright(){
		$("."+middlephoto).css("right", middlestr);
	}
	
	function deletestyle(){
		$("."+rightphoto).remove();
		$("."+galleryblock+" "+hiddenblock).append('<div class="'+rightphoto+'" style=""></div>');
		$("."+leftphoto).attr("style", leftstyle);
		$("."+middlephoto).attr("style", middlestyle);
		$("."+rightphoto).attr("style", rightstyle);
		flaganimation=1;
	}
		
	
	if ($("."+galleryblock).html()!=undefined){
		$("."+middlephoto).swipe( { 
			swipeLeft:leftSwipe, 
			swipeRight:rightSwipe, 
			threshold:1 
		}); 
		$("."+galleryblock+" ."+leftbtn).click(GalleryPrev);
		$("."+galleryblock+" ."+rightbtn).click(GalleryNext);
		function leftSwipe(){ 
			GalleryNext();
		} 
		function rightSwipe(){ 		
			GalleryPrev();
		}
	}
	
	
});
 
