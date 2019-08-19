
$(function() {
    $(".preload").fadeOut(2000, function() {
        $(".full").fadeIn(1000);        
    });
});


function showDiv() {
   document.getElementById('hideForm').style.display = "block";
   document.getElementById('butt').style.display = "none";
}


wow = new WOW(
      {
      boxClass:     'wow',      
      animateClass: 'animated', 
      offset:       0,          
      mobile:       true,       
      live:         true        
    }
    )
    wow.init();


var trigger = $('.language_selector');
var list = $('.languages');

trigger.click(function() {
    trigger.toggleClass('acti');
    list.slideToggle(200);
});

list.click(function() {
    trigger.click();
});





$(document).ready(function() {
$(function() {
      $( 'ul.dropdown-menu li' ).on( 'click', function() {
            $( this ).parent().find( 'li.acti' ).removeClass( 'acti' );
            $( this ).addClass( 'acti' );
      });
});
    
    
    
    
    
$("#modal_trigger").leanModal({
    top: 100,
    overlay: 0.6,
    closeButton: ".modal_close"
});
$("#registr").leanModal({
        top: 100,
        overlay: 0.6,
        closeButton: ".modal_close"
});

        // Calling Login Form
$("#modal_trigger").click(function() {
    $(".user_login1").hide();
    $(".user_register").hide();
    $(".user_login").show();
    $(".header_title").text('Sign in to your account');
});
        
    
$("#forgot").click(function(){
    $(".user_login").hide();
    $(".user_login1").show();
    $(".header_title").text('Forgot your password?');
});
    
   
        // Calling Register Form
$("#registr").click(function() {
    $(".user_login1").hide();
    $(".user_login").hide();
    $(".user_register").show();
    $(".header_title").text('Create new account');         
});

        

    
$('.navbar-toggle').click(function () {
    $(this).toggleClass('open');
});
    
    
$('#basic').flagStrap();
$('#origin').flagStrap({
    placeholder: {
        value: "",
        text: "Country of origin"
    }
});
    
$('#basic1').flagStrap();
$('#origin').flagStrap({
    placeholder: {
        value: "",
        text: "Country of origin"
    }
});
    
    
$("#owl-demo").owlCarousel({
    autoPlay: 3000,
    scrollPerPage : true,
    items : 1,
    itemsDesktop : [1400,1],
    itemsDesktopSmall : [1100,1],
    itemsTablet: [650,1], 
    pagination:true
});
   
$("#owl-demo1").owlCarousel({
    autoPlay: 3000, 
    scrollPerPage : true,
    items : 1,
    itemsDesktop : [1400,1],
    temsDesktopSmall : [1100,1],
    itemsTablet: [650,1],
    navigation:true,
    navigationText: [
      "<i class='icon-chevron-left icon-white'><</i>",
      "<i class='icon-chevron-right icon-white'>></i>"
    ],
    pagination:true
});
   
    
    
$('.registration-form').validate({
    rules: {
       inp1: {
	       required: true,   
	   },
       inp2: {
	       required: true,
	       number:true,
	   },
       inp3: {
	       required: true,
	       email:true,
	   },
       agree: "required"  
    },
    highlight: function(element) {
        $(element).closest('.control-group').removeClass('success').addClass('error');
    },
    success: function(element) {
        element
            .text('OK!').addClass('valid')
            .closest('.control-group').removeClass('error').addClass('success');
    }
});
    
    
$('.registration-form1').validate({
    rules: {   
	   inp5: {
	       required: true,  
	   },  
	   inp6: {
	       required: true,  
	   },  
        agree: "required"  
    },
    highlight: function(element) {
        $(element).closest('.control-group').removeClass('success').addClass('error');
    },
    success: function(element) {
        element
            .text('OK!').addClass('valid')
            .closest('.control-group').removeClass('error').addClass('success');
    }
});
    
    
$('.registration-form2').validate({
    rules: {
        inp7: {
	       required: true,
	       email:true,
	    },
        inp8: {
	       required: true,
	       minlength: 5 ,
	    },  
        agree: "required"  
    },
    highlight: function(element) {
        $(element).closest('.control-group').removeClass('success').addClass('error');
    },
    success: function(element) {
        element
            .text('OK!').addClass('valid')
            .closest('.control-group').removeClass('error').addClass('success');
    }
});
    
    
$('.registration-form3').validate({
    rules: {
        inp9: {
	       required: true,
	       email:true,
	    },  
        agree: "required"  
    },
    highlight: function(element) {
        $(element).closest('.control-group').removeClass('success').addClass('error');
    },
    success: function(element) {
        element
            .text('OK!').addClass('valid')
            .closest('.control-group').removeClass('error').addClass('success');
    }
});
    
    
$('.registration-form4').validate({
    rules: {
        inp10: {
	       required: true,
	    },
        inp11: {
	       required: true,
	    },
        inp12: {
	       required: true,
	       email:true,
	    },
        inp13: {
	       required: true,
	    },  
        agree: "required"  
    },
    highlight: function(element) {
        $(element).closest('.control-group').removeClass('success').addClass('error');
    },
    success: function(element) {
        element
            .text('OK!').addClass('valid')
            .closest('.control-group').removeClass('error').addClass('success');
    }
});
    
});
    
    
    
  

