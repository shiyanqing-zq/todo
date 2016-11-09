//$(function(){
//	var arr=[{a:1,b:2},{a:2,b:3},{a:3,b:2}];
//	var newarr=[];
//	for(var i=0 ; i<arr.length; i++){
//		if(arr[i].b != 2){
//			newarr.push(arr[i]);
//		}
//	}
//	console.log(newarr);
//});

//var all = $(".footer .all");
//var completed = $(".footer .completed");
//
//all.on("touchend",function(){
//	$(".footer li").removeClass("active");
//	$(this).addClass("active");
//	ul.find("li:not(.done)").hide();
//});
$(document).ready(function(){
	var add=$(".add")
    var todos=[];
    var ul=$("ul")
//   显示

	if(localStorage.todos){
		todos=JSON.parse(localStorage.todos)
		render();
	}   
//   添加li
     add.on("touchend",function(){
     	var input=$("input")
     	var v=input.val();
     	$.trim(v)
     	if(!v){
     		return;}
     	var todo={
     		name:v,
     		state:0
     	};
     	todos.push(todo);
     	localStorage.todos=JSON.stringify(todos);
     	render();
     	input.val("");
     })
//   滑动
     var startpos;
     ul.on("touchstart","li",function(e){
     	startpos=e.originalEvent.changedTouches[0].clientX;
     	
     })
	 ul.on("touchend","li",function(e){
	 	var endpos=e.originalEvent.changedTouches[0].clientX;
	 	var index=$(this).index();
	 		
	 	 if(endpos-startpos>50){
	 		todos[index].state=1;		
	 		$(this).addClass("done");
	 	}
	  if(endpos-startpos<-50){
	 		todos[index].state=0;
	 		$(this).removeClass("done");
	 	}
	  localStorage.todos=JSON.stringify(todos)
	 })
//   删除
	var delete1=$(".delete");
	var li=$("li");
	ul.on("touchend",".delete",function(){
	 	li=$("li");
	 	delete1=$(".delete");
	 	var index=delete1.index($(this));
	 	todos.splice(index,1)
	 	localStorage.todos=JSON.stringify(todos)
	 	li.eq(index).remove();
	  })
     function render(){
     	ul.empty();
     	for(var i=0;i<todos.length;i++){
     		var c=(todos[i].state)?"done":""
     		$("<li class='"+c+"'><div class='content'>"+todos[i].name+"<div class='delete iconfont'>&#xe65c;</div></div></li>")
     		.appendTo(ul);
     	}
		
     }
    

//    最后下面那三个按钮
   var all=$(".all")
   var footer=$(".footer")
   var divs=$(".footer div");
   $(".footer div").eq(0).addClass("active");
  footer.on("touchend","div",function(){
  	var index=divs.index($(this))
  	divs.removeClass("active")
  	$(this).addClass("active")
   	var li=$("li");
   	li.show();
   	if($(this).attr("data-role")=="com"){
   		var done=$("li:not(.done)")
   		done.hide()
   	}
   if($(this).attr("data-role")=="now"){
   		
   		var nodone=$(".done")
   		nodone.hide()
   	}
    })
  
  
  
  //清除所有完成
  var clear=$(".clearall")
  clear.on("touchend",function(){
  	var done=$(".done")
  	done.each(function(i){
  		$(this).delay(i*80).queue(function(){
  			$(this).addClass("dong1").dequeue()
  		}).delay(800).queue(function(){
  			$(this).removeClass("dong1").dequeue();
  		})
  	})
   var newarr=[];
   for(var i=0;i<todos.length;i++){
     	if(todos[i].state!==1){
     		newarr.push(todos[i])
     	}
     } 
     todos=newarr;
     localStorage.todos=JSON.stringify(todos)
  })
  
  
  
// footer.on("touchend",".nowan",function(){
// 	ul.css("display","none")
//  ul.eq(2).css("display","block")
//})

//遍历数组
//   var arr=[{a:1,b:2},{a:2,b:2},{a:1,b:1}]
//   var newarr=[];
//   for(var i=0;i<arr.length;i++){
//   	if(arr[i].b!==2){
//   		newarr.push(arr[i])
//   	}
//   }
//   arr=newarr;
//   console.log(arr)
	//当点击新建便签的时候home消失，同时要编写的内容出现
	$(".home").show();
	$(".header").hide();
	$(".nav").hide();
	$("ul").hide();
	$(".footer").hide();
	$(".doset").hide();
	$(".home").on("touchstart",function(){
		$(".home").hide();
		$(".header").show();
		$(".nav").show();
		$("ul").show();
		$(".footer").show();
		$(".doset").hide();
	});
	//当点击返回键back时，编写页面消失，挽回到新建便签
	$(".back").on("touchstart",function(){
		$(".header").hide();
		$(".nav").hide();
		$("ul").hide();
		$(".footer").hide();
		$(".home").show();
	});
	//
	ul.on("touchstart",".done",function(){
		$(".doset").delay(111).queue(function(){
			$(this).hide().dequeue();
		}).delay(888).queue(function(){
			$(this).show().dequeue();
		});
	});
});
