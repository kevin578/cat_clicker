class cat {
  constructor(name, url) {
    this.name = name;
    this.clicks = 0;
    this.url = url; 
    this.id_title = "#"+name;
    this.show();
  }
 

}

 cat.prototype.show = function(){
    $("#main_body").html("");
    $("#main_body").append("<div class = 'cats'>");
    $("#main_body").append("<h1>" + this.name +"</h1> ");
    $("#main_body").append("<img src = " + this.url + " id = '"+this.name+"'>");
    $("#main_body").append("<p>You have clicked on "+ this.name+" "+ this.clicks + " times</p>");
    $("#main_body").append("</div>");   
    this.cat_click();   
  }

 cat.prototype.cat_click = function(){
    
    $(this.id_title).click($.proxy(function () {
      console.log(this.clicks);
      this.clicks++;
      this.show();
    }, this));
  };


$( document ).ready(function() {
                           
var fluffy = new cat("fluffy", "http://www.rd.com/wp-content/uploads/sites/2/2016/04/01-cat-wants-to-tell-you-laptop.jpg");

});


    
