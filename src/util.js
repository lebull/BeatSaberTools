class BSTMath{
      //Helper
      //Round to the nearest 'n'
      //https://stackoverflow.com/questions/13634813/javascript-round-to-the-nearest-value-on-a-scale
      static nearist(value, min, max, steps){
          var zerone = Math.round((value-min)*steps/(max-min))/steps; // bring to 0-1 range
          return zerone*(max-min) + min;
      }
};
