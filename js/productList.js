
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
]
var devRestName=[
"LED Light Cure High Intensity - 1-year Guarantee",
"Light Cure device",
]
var devRestImage=[
"images/lightcure.jpg",
"images/lightcure2.jpg",
"images/guttacut.jpg",
]
var product_factory = function (name, id, category, image) {
  var matRest =function () {
    var i=0
    for (i = 0; i < matRestName.length; i++) {
      var product={};
      product.name=matRestName[i];
      product.price=matRestPrice[i];
      product.image=matRestImage[i];
      product.category="Restorative";
      matProduct.push(product)

    }
    return matProduct
  }
  matRest()
  return
}
var matRest =function () {
  var matProduct;
  for (var i = 0; i <matRestName.length; i++) {
    var product={};
    product.name=matRestName[i];
    product.price=matRestPrice[i];
    product.image=matRestImage[i];
    product.category="Restorative";
    matProduct.push(product)

  }
  return matProduct
}
matRest()
