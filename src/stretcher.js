const fs = require('fs');

//Save working version
//originalSong = JSON.parse(fs.readFileSync("expert.json"));
//fs.writeFile('./.expertOriginal.json', JSON.stringify(originalSong) , 'utf-8');

//originalSong = JSON.parse(fs.readFileSync("expert.json"));
//fs.writeFile('./.expertOriginal.json', JSON.stringify(originalSong) , 'utf-8');

//Save working version
const expertFile = "expert.json";
const backupFile = "./.expertOriginal.json";
const scale = 2;

originalSong = JSON.parse(fs.readFileSync(backupFile));

function scaleTimes(object, propertyName, pScale){
  object[propertyName].forEach(function(oEvent){
      if(oEvent.hasOwnProperty("_time")){
        oEvent._time = oEvent._time * pScale;
      }
      if(oEvent.hasOwnProperty("_duration")){
        oEvent._duration = oEvent._duration * pScale;
      }
  });

}

  originalSong._beatsPerMinute = originalSong._beatsPerMinute * scale;

["_events", "_notes", "_obstacles"].forEach(function(sProperty){
  scaleTimes(originalSong, sProperty, scale)
});





fs.writeFile(expertFile, JSON.stringify(originalSong) , 'utf-8');
