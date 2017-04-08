class cat {
  constructor(name, url) {
    this.name = name;
    this.clicks = 0;
    this.url = url; 
    this.id_title = "#"+name;
    cat_list.push(this);

  }
 

}

 cat.prototype.show = function(){
    $("#main_body").html("");
    
    $("#main_body").append("<div class = 'cats'>");
    $("#main_body").append("<h1>" + this.name +"</h1> ");
    $("#main_body").append("<img src = " + this.url + " id = '"+this.name+"'>");
    if (this.clicks == 1) {
    $("#main_body").append("<p>You have clicked on "+ this.name+" "+ this.clicks + " time</p>");
    }
    else {
    $("#main_body").append("<p>You have clicked on "+ this.name+" "+ this.clicks + " times</p>");
    }
    $("#main_body").append("</div>");   
    this.cat_click();   
  }

 cat.prototype.cat_click = function(){
    
    $(this.id_title).click($.proxy(function () {
      this.clicks++;
      this.show();
    }, this));
  };


  cat.prototype.render_list = function() {
    $("#cat_names").append("<li class = 'cat_names_list' id = '"+this.name+"_id'>"+this.name+"</li>");

    $("#"+this.name+"_id").click($.proxy(function(){
      this.show();
     }, this));   

}

var cat_list = [];

var Fluffy = new cat("Fluffy", "http://www.rd.com/wp-content/uploads/sites/2/2016/04/01-cat-wants-to-tell-you-laptop.jpg");
var Snuggles = new cat("Snuggles", "http://blog.hostelbookers.com/wp-content/uploads/2012/02/cat-happy-cat-e1329931204797.jpg");
var Whiskers = new cat("Whiskers", "http://i.imgur.com/xkKw5r8.jpg");
var Mittens = new cat("Mittens", "https://i.ytimg.com/vi/sfA0tZgtSeg/maxresdefault.jpg");
var Midnight = new cat("Midnight", "http://www.cutestpaw.com/wp-content/uploads/2016/02/Hello-neighbor.jpg");


$( document ).ready(function() {
                      
cat_list[0].show();

for(var i = 0; i < cat_list.length; i++) {
  cat_list[i].render_list();
}


});


  



    
