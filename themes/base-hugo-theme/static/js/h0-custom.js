

(function($) {
    var jQuery = $.noConflict(false);
    var $ = jQuery;

    $('#toggleDrawer').on('click', function() {
      // console.log('#toggleDrawer selected');
      $('#drawer').addClass('show');
      $('#closeDrawer').focus();
    });

    $('#closeDrawer').on('click', function() {
        // console.log('#closeDrawer selected');
        $('#drawer').removeClass('show');
        $('#toggleDrawer').focus();
    });

    $('#closeLoop').on('keypress', function(e) {
      // console.log('closeloop keypress');
      if(e.which == 13) {
        $('#closeDrawer').focus();
      }
    });

    $('#drawer .navlinks a').on('click', function() {
      $('#drawer').removeClass('show');
      $('#toggleDrawer').focus();
    }); 

    function checkScroll(y) {
        // console.log(checkScroll);
        // If the scroll is at the top, not sticky.
        // Transition comes farther down the page for
        // the the front page.
        var heroHeight = $('#hero') ? $('#hero').height() : 0;
        // console.log(heroHeight);
        if (y <= (heroHeight - 48)) {
            // $('body').addClass('scroll-top');
            $('nav').removeClass('sticky-top');
            $('.subnav').removeClass('sticky-top');
        } else if (y > (heroHeight - 64)) {
            // $('body').removeClass('scroll-top');
            $('nav').addClass('sticky-top');
            $('.subnav').addClass('sticky-top');
        }
    }

 

  $( document ).ready(function() {
    // Manage navbar appearance by scroll position
    $( window ).scroll(function() {
      var t = $(window).scrollTop();
      checkScroll(t);
    });
    // Check on page load as well.
    var t = $(window).scrollTop();
    checkScroll(t);

    // Smooth scroll down on button click
    $('.scroll-to-section').on('click', function(e) {
        console.log('click');
        e.preventDefault();
        var target_id = $(e.target).attr('data-scroll-target');
        // console.log(target_id);
        $target = $('#' + target_id);
        // console.log($target);
        $('html, body').animate({
            scrollTop: ($target.offset().top) - 48
        }, 500);
        var t = $(window).scrollTop();
        checkScroll(t);
    });

   
// CLP ----------------------------------------------------------------


  
 
// Load spreadsheet ------------------------------------------------------------------------- /

$(document).ready(function () {

  $('.years').append('Crosswalk_1850_1860.zip');
  $('.file-title').append('&nbsp;1850-1860');

  $("select").change(function(){
    var censusID1 = $( "#census1" ).val();
    var censusID2 = $( "#census2" ).val();
    if (censusID2 <= censusID1) {
      console.log('Invalid range');
      censusID2 = Number(censusID1) + 10
      $("select#census2").val(censusID2);
    };

    $('select#census2').find('option').each(function() {
        if (Number(this.value) <= censusID1) {
            $(this).hide();
        } else {
            $(this).show();
        }
    });
    var fileLinkYears = '&nbsp;' + censusID1 + '—' + censusID2;
    var fileLinkTitle = 'Crosswalk_' + censusID1 + '_' + censusID2 + '.zip';
    
    console.log(fileLinkTitle); 
    $('.file-title').empty();
    $('.file-title').append(fileLinkYears); 
    $('.years').empty();
    $('.years').append(fileLinkTitle);
   // getCrosswalk(censusID3,censusID4);
  });



});


   
  });
})(jQuery);
