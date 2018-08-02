const fs = require('fs');






module.exports = function Backup(filename, newFileName){
    originalSong = JSON.parse(fs.readFileSync(filename));
    fs.writeFile(newFileName, JSON.stringify(originalSong) , 'utf-8');
}

if (require.main === module) {

  var expertFile = "../Expert.json";
  var backupFile = "../backup/.ExpertOriginal" + new Date().getTime().toString() + ".json";


  var filename = process.argv[2];

  new module.exports(filename, backupFile);
}
