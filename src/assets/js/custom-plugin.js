
  function initMenu() {
		
	  // Sidebar - list submenu
	  $('#menu ul').hide();
	  $('#menu ul').children('.current').parent().show();
	  //$('#menu ul:first').show();
	  $(document).on('click','#menu li a', function() {
		  var checkElement = $(this).next();
			  checkElement.slideToggle(100);
		  }
		);
	// Toggleside bar
	$(document).on('click',"#menu-toggle",function(e) {
		e.preventDefault();
		$("#wrapper").toggleClass("toggled");
	});
	 $(document).on('click',"#menu-toggle-2",function(e) {
		e.preventDefault();
		$("#wrapper").toggleClass("toggled-2");		
		$('#menu ul').hide();		
	});	
	
	$(document).on('click','.msg-box .close-sm', function(){
		$(this).parents('.msg-box').remove();
		
	});
	
	// message Reply
	$(document).on('click','.reply-btn', function(){
		$(this).hide();
		$(this).parent().find('.reply-box').slideDown();
		
	});
	$(document).on('click','#msgReply', function(){
		var reply = $('.reply-field').val()
		$(this).parents('.reply-box').hide();			
		$('.reply-msg').fadeIn();
		$('.reply').html(reply)
		
	});
	$(document).on('click','.editReply', function(){
		var replytxt = $('.reply').text()
		$('.reply-msg').hide();		
		$('.reply-box').slideDown().find('.reply-field').val(replytxt);			
		
		
		
	});
	
	
	
	
	
		
}	 


      	  
    $(document).ready(function() {
		initMenu();      
	});
	
	
	
	
	
	