module.exports = function(){
  return{
    //Remove duplicates
    RemoveDuplicates: function(song){
      //NYI
    };

    //Round to the nearest 1, x.5, x.25, x.125, x.333, x.666
    Quantize: function(song){
      //NYI
    };


    //Helper
    //Round to the nearest 'n'
    //https://stackoverflow.com/questions/13634813/javascript-round-to-the-nearest-value-on-a-scale
    _nearest: function (value, min, max, steps){
        var zerone = Math.round((value-min)*steps/(max-min))/steps; // bring to 0-1 range
        return zerone*(max-min) + min;
    }
  };
};
