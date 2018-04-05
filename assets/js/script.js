$( document ).ready(function() {
				DownLoadData();
				
                $("#about_scroll").fadeOut();   
                $("#work_scroll").fadeOut();
                $("#contact_scroll").fadeOut();

                $("#about").click(function(){
                    $("#index").fadeOut();
                    $("#about_scroll").fadeIn();
                    $('#about_left').addClass('animated slideInLeft');
                    $('#about_right').addClass('animated slideInRight');
                    });
                $("#work").click(function(){
                    $("#index").fadeOut();
                    $("#work_scroll").fadeIn();
                    $('#work_left').addClass('animated slideInLeft');
                    $('#work_right').addClass('animated slideInRight');
                    });
                $("#contact").click(function(){
                    $("#index").fadeOut();
                    $("#contact_scroll").fadeIn();
                    $('#contact_left').addClass('animated slideInLeft');
                    $('#contact_right').addClass('animated slideInRight');
                    });
                
                $(".back").click(function(){
                    $(".pages").fadeOut();
                    $("#index").fadeIn();
                    $('#index_left').addClass('animated slideInLeft');
                    $('#index_right').addClass('animated slideInRight');
                    });
           
		});

	function DownLoadData(){
		$.ajax({  
		    type:'post',  
		    url:"assets/jsonData.json",
		    contentType:'application/json;charset=utf-8', 
		    data:"", 
		    success:function(data){
		    	console.warn(data)
		    	for(var i=0; i<data.length; i++){
		    		CreateDataHtml(data[i]);	
		    	}
		    },
		    error:function(e){
		    	console.warn(e)
		    }
		});  
	}

	function CreateDataHtml(data){
		if(data.type == "logo"){
			$(".logo h4").append(data.logo);
			$(".home-description").append(data.home);
		} 
		if(data.type == "about"){
			$("#about_right .subtitle").append(data.about);
			$("#about_right .info").append(data.info);
		}
		if(data.type == "work"){
			$("#work_right .subtitle").append(data.work);
			$("#work_right .info").append(data.info);
		}
		if(data.type == "contact"){
			$("#contact_right .subtitle").append(data.contact);
		} 
	}
	
	function Success(){
		console.warn($(".form_edit").serialize())
	}