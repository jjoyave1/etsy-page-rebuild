$(document).ready( function() {

  var resultsCount = items.count;
  $("#resultsCount").append(" (" + resultsCount + " results)");
  $("#resultsCount").css({"font-size": "12px"});
  $("#resultsCount").css({"color": "grey"});

  items.results.forEach( function(item){
    price = item.price;
    title = item.title;
    login = item.Shop.shop_name;
    link = item.url;
    userLink = item.Shop.url;
    picture = item.Images[0].url_170x135;

    $("#resultsDisplay").append("<div class ='imgCard'>" + "<a href='about:blank'><div class='advertisement'>"+ "Ad" + "</div></a>" +"<a href='about:blank'>" + "<div class = 'hoverIcon1 card-icon'>" + "<img src='images/heart.png'></div></a>"
      + "<a href='about:blank'><div class='hoverIcon2 card-icon'><div class='hamburger'><img src='images/hamburger.png'></div><span class='hoverTriangle'>" + "&#x25BE;" + "</span></div></a>"
      + "<img class= 'item-image' src='" + picture + "'></img>"
      + "<div class='card-info'><div class='card-row'><a class = 'item-link' href='" + link + "'>" + title + "</a></div>"
      + "<div class='card-row'><a href='" + userLink + "' class = 'user-link'>" + login + "</a><div class='item-price'>" + "$" + price + "</div></div></div></div>")

      // $("").css({"text-decoration": + "none;"});
      // $("").css({"color": + "grey;"});
      // $("").css({"font-size": + "12px;"});
      // $("").css({"overflow": + "hidden;"});
      // $("").css({"text-overflow": + "ellipsis"});

  });

});
