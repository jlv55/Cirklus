$(window).load(function(){
  'use strict';
  $(".menuDefault").sticky({ topSpacing: 80, });
});

$(document).ready(function(){

 
      
       /* RESPONSIVE MENU JS */
        jQuery('nav').meanmenu();

                  /* BACKGROUND BACKSTRETCH JS */
  $.backstretch([
            /*Change the images url for change the background images*/
            /*Add your images to images directory and background subdirectory*/
      "images/background/monkey.jpg"
   /* , "images/background/california.jpg"
    , "images/background/monkey.jpg"
    , "images/background/smkg.jpg"
    , "images/background/paris.jpg" */
  ], {duration: 3000, fade: 1500});

                    /* CIRCULE ROTATION JS */
          /*You can delete this JS code and the jQueryRotateCompressed.js 
          inside the html file if you don't like the rotate effect :)*/
  var rotation = function (){
   $("#circule").rotate({
      angle:-100, 
      animateTo:360,
      duration:5000,
   });
  };
  rotation();  
    $('#name').shuffleLetters();

    $("a.first").pageslide({speed:700});

  $("a.first").on({
    click: function(){
      $('#wrapper').addClass('hideoverflow')
    }
  });
  
  $('#maincontainer, .mean-nav').click(function(){
    if ($('#wrapper').has('hideoverflow')) {
      $('#wrapper').removeClass('hideoverflow')
    }
  });


  $('#circule').hide();
  $('#circule').show(2000);


                      /* Pages Containers */
              /*Here you can change the default images when the mouse are on one of the menu items*/
  var ABimage = 'images/circule/dog.jpg';
  var SKimage = 'images/circule/direction.png';
  var PFimage = 'images/circule/feynman.jpg';
  var BLOGimage = 'images/circule/smkdrug.jpg';
  var CNimage = 'images/circule/dogsglass.jpg';
  var defaultImage = 'images/circule/dog.jpg';  /*When the mouseout event is active*/

  $('.GCchild').hide();

  $('#about').on({
    click: function(){
      $('#ABcontainer').toggle('slow')
    },
    mouseover: function(){
      $('#circule').attr('src',ABimage)
    },
    mouseout: function(){
      $('#circule').attr('src',defaultImage)
    }
  });

  $('#skills').on({
    click: function(){
      $('#SKcontainer').toggle('slow')
    },
    mouseover: function(){
      $('#circule').attr('src',SKimage)
    },
    mouseout: function(){
      $('#circule').attr('src',defaultImage)
    }
  });

  $('#portfolio').on({
    click: function(){
      $('#PFcontainer').toggle('slow')
    },
    mouseover: function(){
      $('#circule').attr('src',PFimage)
    },
    mouseout: function(){
      $('#circule').attr('src',defaultImage)
    }
  });

  $('#blog').on({
    click: function(){
      $('#BLOGcontainer').toggle('slow')
    },
    mouseover: function(){
      $('#circule').attr('src',BLOGimage)
    },
    mouseout: function(){
      $('#circule').attr('src',defaultImage)
    }
  });

  $('#contact').on({
    click: function(){
      $('#CNcontainer').toggle('slow')
    },
    mouseover: function(){
      $('#circule').attr('src',CNimage)
    },
    mouseout: function(){
      $('#circule').attr('src',defaultImage)
    }
  });

                  /* TABS JS */

   function resetTabs(){
    $("#tabcontainer > div").hide(); //Hide all tabcontainer
    $("#tabs a").attr("id",""); //Reset id's      
}

var myUrl = window.location.href; //get URL
var myUrlTab = myUrl.substring(myUrl.indexOf("#")); // For mywebsite.com/tabs.html#tab2, myUrlTab = #tab2     
var myUrlTabName = myUrlTab.substring(0,4); // For the above example, myUrlTabName = #tab

(function(){
    $("#tabcontainer > div").hide(); // Initially hide all tabcontainer
    $("#tabs li:first a").attr("id","current"); // Activate first tab
    $("#tabcontainer > div:first").fadeIn(); // Show first tab tabcontainer
    
    $("#tabs a").on("click",function(e) {
        e.preventDefault();
        if ($(this).attr("id") == "current"){ //detection for current tab
         return       
        }
        else{             
        resetTabs();
        $(this).attr("id","current"); // Activate this
        $($(this).attr('name')).fadeIn(); // Show content for current tab
        }
    });

    for (i = 1; i <= $("#tabs li").length; i++) {
      if (myUrlTab == myUrlTabName + i) {
          resetTabs();
          $("a[name='"+myUrlTab+"']").attr("id","current"); // Activate url tab
          $(myUrlTab).fadeIn(); // Show url tab content        
      }
    }
})()
//Quotes
  $('.carousel').carousel('cycle', {
     interval: 5000
   });


//skills charts 
 
  $('.chart').easyPieChart({
      barColor: '#00B1AB',
      trackColor: '#cccccc',
      scaleColor: false,
      lineWidth: 10,
      easing: 'easeOutBounce',
      onStep: function(from, to, percent) {
        $(this.el).find('.percent').text(Math.round(percent));
      }
    });
  //image PopUp

  $('.image-popup-vertical-fit').magnificPopup({
          type: 'image',
          closeOnContentClick: true,
          image: {
            verticalFit: false
          }
        });

            /* CONTACT FORM JS */
            /* write your email url in contact.php file */

            $('.sendbutton').click(function() {
              var name = $('.name').val();
                  email = $(".email").val();
                  email_validation = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
                  message = $('.message').val();
 
              if (name == '') {
               $('.name').focus();
               return false;
              }else if(email == "" || !email_validation.test(email)){
                $('.email').focus();    
                return false;
              }else if(message == ""){
                $('.message').focus();
                return false;
              }else{
                var datos = 'name='+ name + '&email=' + email + '&message=' + message;
                $.ajax({
                  type: 'POST',
                  url: 'contact.php',
                  data: datos
            });
            return false;
        };
    });  


              //Twitter feed
  jQuery('#tweets').tweetable({
    username: 'JLV_55', //twitter username 
    time: true, 
    rotate: true, 
    speed: 7000, 
    limit: 5, 
    replies: true,
    position: 'append',
    failed: "Sorry, twitter is currently unavailable for this user.",
    loading: "Loading tweets...",
    html5: true,
    onComplete:function($ul){
      $('time').timeago();
    }
  });
 
  });