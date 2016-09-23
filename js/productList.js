
var matRestName=["Dycal Dentsply ",
"Amalgam A1 III spills - 50 capsules",
"Amalgam A1 - 50 capsules",
"Amalgam Bien Cap - 50 capsules",
"Amalgam YDA - 50 capsules",
"Amalgam 60% silver - 50 capsules",
"Amalgam 70% silver - 50 capsules",
"Adhesor Carbofine (ZInc Polycarboxylate)(Spofa) ",
" Adhesor (ZInc Phosphate)(Spofa) ",
"Eugenol",
"Kromoglass Glass Ionomer Cement",
"Glass Ionomer Cement",
"Articulating Paper - Pack",
"Polishing Paste -  Alpha pro - 100g",
"Temporary filling Acrotemp",
"Litark Temporary filling - 6 sticks",
"Meta temporary filling",
"3m Composite Z250 xt",
"3m Composite Z350 xt",
"Ardent Flowable Composite 2g",
"Ardent Composite - Nanohybrid 4g",
"Matrix Band Pack - Tofflemyre",
"Retraction cord Atriapak",
"Wooden Wedge 100pcs assorted",
"Fluoride Gel",
"Fiber Post Kit",
"Metal Post Kit - NORDIN",
"Bleaching SDI - Polaoffice+"]
var matRestPrice=[
140,
350,
270,
315,
250,
325,
370,
155,
110,
25,
200,
60,
55,
30,
13,
42,
32,
250,
350,
100,
145,
5,
80,
35,
45,
90,
290,
270,
]
var matRestImage=[
"images/",
"images/aone3.jpg",
"images/aone.jpg",
"images/biancap.jpg",
"images/yda.jpg",
"images/dmp60.jpg",
"images/dmp70.jpg",
"images/",
"images/",
"images/eugenol.jpg",
"images/",
"images/ionogem.jpg",
"images/",
"images/",
"images/",
"images/",
"images/",
"images/",
"images/",
"images/",
"images/ardent.jpg",
"images/",
"images/retraction.jpg",
"images/wedge.jpg",
"images/",
"images/",
"images/nordin.jpg",
"images/",
]
var matOrthoImage=[
"images/orthowax.jpg",
"images/",
"images/",
"images/bracket.jpg",
"images/closedcoil.jpg",
"images/opencoil.jpg",
"images/orthoband.jpg",
"images/wire.jpg",
"images/otie",
]
var matOrthoName=[
"ortho wax",
"Power Chain",
"Buccal Tube",
"Orthodontic Brackets",
"Closed Coil",
"Open Coil",
"Molar Bands",
"Arch wire Pack 10 pcs",
"O-ties",
]
var matOrthoPrice=[
5,
40,
22.5,
41,
49,
31,
220,
21,
43,
]
var insRestName=[
"Amalgam Pins Kit",
"Polishing Brushes for low speed x100",
"Polishing Brushes for low speed x100 - كتان Linin",
"Micro brushes 100 pcs",
"Composite Finishing Strip - Tor vm",
"Composite Finishing Strip - Microdont",
"Composite Finishing Disc Kit - Tor vm",
"Composite Finishing Disc Kit - Microdont",
"Composite Finishing Points Kit - Microdont",
"Amalgam Polishing Kit - 9pcs",
"Composite Polishing Kit - 9pcs",
"Carbide Burs",
"Diamond burs - Mani High copy",
"Diamond burs - Made in Taiwan",
"Bur holder - Microdont - Autoclavable",
]
var insRestImage=[
"images/",
"images/",
"images/linen.jpg",
"images/",
"images/",
"images/",
"images/",
"images/",
"images/",
"images/amalgampol.jpg",
"images/",
"images/carbide.jpg",
"images/",
"images/diamond.jpg",
"images/",
]
var insRestPrice=[
85,
85,
160,
15,
50,
75,
140,
120,
150,
90,
90,
7.5,
3.5,
5,
]
var devRestPrice=[
850,
295,
395,
9,
95
]
var devRestName=[
"LED Light Cure High Intensity - 1-year Guarantee",
"Light Cure device",
"Gutta Percha Cutter",
"Carbide Burs",
"Amalgam Polishing Kit"
]
var devRestImage=[
"images/lightcure.jpg",
"images/lightcure2.jpg",
"images/guttacut.jpg",
"images/carbide.jpg",
"images/amalgampol.jpg",
]
// var product_factory = function (name, id, category, image) {
//   var matRest =function () {
//     var i=0
//     for (i = 0; i < matRestName.length; i++) {
//       var product={};
//       product.name=matRestName[i];
//       product.price=matRestPrice[i];
//       product.image=matRestImage[i];
//       product.category="Restorative";
//       matProduct.push(product)
//
//     }
//     return matProduct
//   }
//   matRest()
//   return
// }
// var matRest =function () {
//   var matProduct;
//   for (var i = 0; i <matRestName.length; i++) {
//     var product={};
//     product.name=matRestName[i];
//     product.price=matRestPrice[i];
//     product.image=matRestImage[i];
//     product.category="Restorative";
//     // matProduct.push(product)
//
//   }
//   return matProduct
// }
var cart=[]
var allProducts=[]
var product_factory=function (x) {

  for (i = 0; i < devRestName.length; i++) {
    var prod={}
    prod.name=devRestName[i];
    prod.price=devRestPrice[i];
    prod.image=devRestImage[i];
    prod.category="Restorative";
    allProducts.push(prod)
  }

  var product={
    id: x,
    source: allProducts[x],
    $cartItemEl: $('<li class="row cart-item">'),
    $el: $('<div class="product-box">').appendTo($('.item .col-sm-12')),
    initialize: function(x) {
      this.$el.attr('id',x)
      this.$cartItemEl.addClass("item_"+x)
      this.id=x
      var thisProduct=this
      // thisProduct.source=thisProduct.source
      // $.get(this.source, function(data) {
      //   thisPost.source= data
        thisProduct.render()
      //
      // })
      allProducts.push(this)
    },
    render:function() {
      var $imageEl = $('<img>').attr('src',this.source.image);
      var $nameEl = $('<h4>').addClass('name').text(this.source.name);
      var $priceEl = $('<div>').addClass('price').text(this.source.price+" EGP");
      var $addToCartEl = $('<button type="button" class="btn btn-primary" id="addToCart">Add To Cart</button>');

      $imageEl.click(this.productView.bind(this));
      $nameEl.click(this.productView.bind(this));
      $priceEl.click(this.productView.bind(this));
      $addToCartEl.click(this.addToCart.bind(this))

      this.$el.append([
        $nameEl,
        $imageEl,
        $priceEl,
        $addToCartEl,
        // $('<input type="text" name="edit-post-title">').attr("value",this.source.title).attr("style","display: none").addClass("edit-title"),
        // $('<input type="text" name="edit-post-body">').attr("value",this.source.body).attr("style","display: none").addClass("edit-post"),
      ])
    },
    // highlight: function() {
    //   // (this.active===true)? (this.active=false):(this.active=true);
    //   this.active = !this.acitve;
    //   this.$el.toggleClass("active");
    // },
    productView: function() {
      $(".home-page").toggle();
      $(".product-page").toggle();

      var productDet = $('<div class="product-box">').append([$nameEl,
        $imageEl,
        $priceEl,
        $addToCartEl]);
      $(".product-details-container").append(productDet)
    },
    addToCart: function () {

      var found=false
      for (var i = 0; i < cart.length; i++) {

        if (cart[i]===this.source){
        console.log("fpond");
        found=true;
        var q= this.$cartItemEl.find('.qty').text()
        $("li.item_"+this.id).find(".qty").text(parseInt(q)+1)
        }

      }
      if (!found){
        cart.push(this.source);
        var cartAdd=[
          $('<span>').addClass('qty').text("1"),
          $('<span>').addClass('name').text(this.source.name),
          $('<span>').addClass('price').text(this.source.price+" EGP"),

        ]

        this.$cartItemEl.html(cartAdd)
        $(".cart ul.main").append(this.$cartItemEl)//.appendTo()
      }

    },
    // saveEdit: function() {
    //   this.$el.find(".title").toggle();
    //   this.$el.find(".body").toggle();
    //   this.$el.find(".edit-post").toggle();
    //   this.$el.find(".edit-title").toggle();
    //   var titleEditVal = this.$el.find(".edit-title").val();
    //   var bodyEditVal = this.$el.find(".edit-post").val();
    //   this.$el.find(".title").text(titleEditVal);
    //   this.$el.find(".body").text(bodyEditVal);
    //
    //
    // },

  };
  product.initialize(x)
}
$('.item .col-sm-12').html("")
for (var id = 0; id <=4; id++) {
product_factory(id);

}
