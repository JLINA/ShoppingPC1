$(function(){  
	    
	    //二级菜单隐藏
	    $(".mainnav2").hide();
	    //导航栏的鼠标经过时样式的改变
	    $(".main1 .main1box1 div").mousemove(function(){
	    	//鼠标划入每一行时样式背景变红
	    	   $(this).css({"background":"red"});
	    	//二级菜单变化
	    	   $(this).closest(".main1").siblings(".mainnav2").css({"border":"2px solid red"}).show();
	    	//划入二级菜单，菜单变化
	    	   $(this).closest(".main1").siblings(".mainnav2").mousemove(function(){
	    	   	     $(this).css({"border":"2px solid red"}).show();
	    	   }).mouseleave(function(){
	    	   	     $(this).css({"border":"2px solid white"}).hide();
	    	   })
	    }).mouseleave(function(){
	    	//鼠标离开时样式变回原样
	    	   $(this).css({"background":"rgb(255,101,55)"});
	    	   //鼠标离开时二级菜单变化
	    	   $(this).closest(".main1").siblings(".mainnav2").css({"border":"2px solid white"}).hide();
	    }).find("a").mousemove(function(){
	    	//鼠标划入每一个超链接文字时，文字变白色
	    	   $(this).css({"color":"white"});
	    }).mouseleave(function(){
	    	//鼠标划出每一个超链接文字时，文字变回黑色
	    	   $(this).css({"color":"black"});   
	    })
	
})
