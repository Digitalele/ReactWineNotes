var $ = require('jquery');


module.exports = {
  setWines: function (wine) {
    if ($.isArray(wine)) {
      localStorage.setItem('wine', JSON.stringify(wine));
      return wine;
    }
  },
  getWines: function () {
    let stringwine = localStorage.getItem('wine');
    let wine = [];
    // console.log(stringwine);

    try {
      wine = JSON.parse(stringwine);
      // console.log(wine);
    } catch (e) {
		console.log("error");
    }
    return $.isArray(wine) ? wine : [];
  },



  setFireWines: function (fireWine) {
    if ($.isArray(fireWine)) {
      localStorage.setItem('fireWine', JSON.stringify(fireWine));
      return fireWine;
    }
  },
  getFireWines: function () {
    let stringFireWine = localStorage.getItem('fireWine');
    let fireWine = [];
    // console.log(stringFireWine);

    try {
      fireWine = JSON.parse(stringFireWine);
      // console.log(wine);
    } catch (e) {
    console.log("error");
    }
    return $.isArray(fireWine) ? fireWine : [];
  }


};


//WineApi.getWine(location).then((wine));
//with this location as par
//wine : [];

