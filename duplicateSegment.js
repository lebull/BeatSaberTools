//86, 158  226

var Backup = require('./backup');
const fs = require('fs');


//var expertFile = "../Expert.json";
//var backupFile = "../.ExpertOriginal" + new Date() + ".json";


var doStuff = function(data, sProperty, originalStart, originalEnd, newStart){

  //calculate newEnd
  var newEnd = parseFloat(newStart) + parseFloat(originalEnd - originalStart)
  var offset = newStart - originalStart;

    console.log("\n--------");
  console.log("Copying all " + sProperty + " between " + originalStart + " and " + originalEnd + " over to " + newStart + " (which ends at " + newEnd + ")");

  //copy all notes//opsticales//events between oldStart and oldEnd
  var newNotes = [];
  var notesToDelete = [];
   data[sProperty].forEach(function(oEvent){
     if(originalStart <= oEvent._time && oEvent._time < originalEnd){
       var newEvent = JSON.parse(JSON.stringify(oEvent));

       if(newEvent.hasOwnProperty("_time")){
         newEvent._time = oEvent._time + offset;
         newNotes.push(newEvent);
       }
     }

    //Remove all notes between newStart and newEnd
     if(parseFloat(newStart) <= oEvent._time && oEvent._time < parseFloat(newEnd)){
       notesToDelete.push(oEvent);
     }

   });

   console.log("Deleting " + notesToDelete.length + " notes.");
   console.log("Start " + data[sProperty].length + " notes.");
   notesToDelete.forEach(function(delNote){
      var deleteIndex = data[sProperty].indexOf(delNote)
      data[sProperty].splice(deleteIndex, 1);
   });
   console.log("End " + data[sProperty].length + " notes.");

  newNotes.forEach(function(newNote){
      data[sProperty].push(newNote);;
  });

  console.log(newNotes.length.toString() + " new notes copied.")

  return data;
}

module.exports = function duplicateSegment(fileName, originalStart, originalEnd, newStart){
//  Backup(expertFile, backupFile);
  var originalSong = JSON.parse(fs.readFileSync(fileName));

  //["_events", "_notes", "_obstacles"].forEach(function(sProperty){
  ["_notes", "_obstacles"].forEach(function(sProperty){
    originalSong = doStuff(originalSong, sProperty, originalStart, originalEnd, newStart)
  });

  //Add Notes
  //console.log(originalSong);

  fs.writeFile(fileName, JSON.stringify(originalSong) , 'utf-8');

}


//main

if (require.main === module) {
  new module.exports(process.argv[2], process.argv[3], process.argv[4],  process.argv[5]);
}
