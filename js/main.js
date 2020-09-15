$(document).ready(function(){

  function underdev(){
    alert("Sorry! This option is currently under development.");
  }
  function printThis(){
    if($(this).text()){
      console.log($(this).text());
    }
    else{
      console.log($(this).val());
    }
  }





  //CUSTOM CONTEXT MENU
  $(document).on('contextmenu', function(){ //deactivating default right click function for the whole document
    return false; //we can also use - event.preventDefault();
  })

  $(document).on('mousedown', function(event){
    event.stopPropagation();
    if(event.which==3){ //if right clicked
      $('.hidden').removeClass('shown');
      if($(event.target).attr('class')=='pics'){
        $('.save-img, .new-tab').addClass('shown');
      }
      else if($(event.target).is('a')){
        $('.new-tab').addClass('shown');
      }
      $('#context').css({ //change css of it to
        top: event.pageY,
        left: event.pageX
      });
      $('#context').fadeIn();
      return false; //let's it stay after fading in
    }
    $('#context').fadeOut();
  })





  //DROPDOWN MENU
  $('[data-trigger="dropdown"]').on('mouseenter', function(){
    let submenu = $(this).parent().find('.sub-menu'); //.parent() - Get the parent of each element in the current set of matched elements, .find() - Get the descendants of each element in the current set of matched elements
    submenu.fadeIn(300); //.fadeIn - Display the matched elements by fading them to opaque.
    $('.profile-menu').on('mouseleave', function(){
      submenu.fadeOut(300); //.fadeOut - Hide the matched elements by fading them to transparent.
    })
  });

  $('.sub-menu-items').on('click', underdev);

  $('.theme').on('click', function(){
    if($('#style').attr('href')=="css/style.css"){
      $('#style').attr('href', "css/dark.css");
      $('.theme').html("Light Mode");
    }
    else{
      $('#style').attr('href', "css/style.css");
      $('.theme').html("Dark Mode");
    }
  })

  $('.log').on('click', function(){
    if($('.menu-trigger').html()==' Signed In '){
      alert('Logged Out');
      $('.log').html("Log In");
      $('.menu-trigger').html("Signed Out");
    }
    else{
      alert('Logged In');
      $('.log').html("Log Out");
      $('.menu-trigger').html("Signed In");
    }
  })





  //SEARCH BUTTON AND SEARCH INPUT
  $('#search-button').on('click', function(){ //.on - Attach an event handler function for one or more events to the selected elements.
    alert("Sorry! Search Bar is currently under development. \nYou won't see this message again.");
    $('#search-button').html("Error!"); //.html - Get the HTML contents of the first element in the set of matched elements or set the HTML contents of every matched element.
    $('#search-button').off('click'); //off - Remove an event handler.
    $('.my-input').val(""); //resetting input field
  });





  //MAIL-BOX INPUT
  $('input').focusout(printThis);

  $('.mail-box').focusout(function(){
    if(!($(this).val().indexOf('@')>-1) && !($(this).val().indexOf('.')>-1)){ //checking if the input contains both '@' and '.' or not
      alert('INVALID ID');
    }
  })

  $('#submit').on('click', function(){
    alert('Thank you for joining our subscription service!');
    $('.mail-box').val(""); //resetting input field
  })





})
