const fs = require('fs');
//import fs from 'fs';
module.exports = function Song(){

  return {

   loadTrack: function(filename){
     return JSON.parse(fs.readFileSync(filename));
   }
  }
  //
  // constructor(){}
  //
  // saveTrack(song, newFileName, options){
  //
  //   var fullpath = newFileName;
  //
  //   if(options.path){
  //     //@TODO: Join this path via fs.
  //     fullpath = options.path + "/" + fullpath;
  //   };
  //
  //   fs.writeFile(fullpath, JSON.stringify(song) , 'utf-8');
  // }
}

//export default Song;


// if (require.main === module) {
//
//   var expertFile = "../Expert.json";
//   var backupFile = "../backup/.ExpertOriginal" + new Date().getTime().toString() + ".json";
//
//
//   var filename = process.argv[2];
//
//   new module.exports(filename, backupFile);
// }
