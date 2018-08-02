//const fs = require('fs');
import fs from 'fs';
class Song{

  static load(filename){
    return JSON.parse(fs.readFileSync(filename));
  }

  static save(song, newFileName, options){

    var fullpath = newFileName;

    if(options.path){
      //@TODO: Join this path via fs.
      fullpath = options.path + "/" + fullpath;
    };

    fs.writeFile(fullpath, JSON.stringify(song) , 'utf-8');
  }
}

module.exports = Song();



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
