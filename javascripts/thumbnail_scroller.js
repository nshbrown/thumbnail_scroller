$(document).ready(function(){
  var per_page = 6;
  var current_page = 1;
  var animation_speed = 800;
  
  var item_width = $('#items li').outerWidth(true);
  var total_number_of_items = $('#items li').length;
  var width_per_page = item_width * per_page;
  var total_pages = Math.ceil(total_number_of_items / per_page);

  // set the width of the parent element
  $('#items').width(item_width * total_number_of_items);

  // attach the right button
  $("#right").click(function(){
    if (current_page < total_pages) {
      current_page += 1;
      $("#items").animate({ 
        left: '-' + (width_per_page * (current_page - 1)) + "px"
      }, animation_speed );
    }
  });
  
  // attach the left button
  $("#left").click(function(){
    if (current_page > 1) {
      current_page -= 1;
      $("#items").animate({ 
        left: '-' + (width_per_page * (current_page - 1)) + "px"
      }, animation_speed );
    }
  });
});