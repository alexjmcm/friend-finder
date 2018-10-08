module.exports = setAPI = function (appMod, pathMod) {
    
    var dataBaseFile = require(pathMod.join(__dirname, "..", "data", "friends.js"));
    var dataBaseFile2 = require(pathMod.join(__dirname, "..", "data", "male.js"));
    var dataBaseFile3 = require(pathMod.join(__dirname, "..", "data", "female.js"));
   

  
    appMod.get("/api/friends", function (req, res) {
        res.json(dataBaseFile);
    });

    appMod.post("/api/friends", function (req, res) {
        var index;
        var bestMatch;
       
        for (var i = 0; i <= dataBaseFile.length - 1; i++) {
           
            if (dataBaseFile[i].name === req.body.name) {
              
                index = i;
                continue;
            } else {
                var perScore = dataBaseFile[i].scores;
                var difference = 0;
                for (var j = 0; j <= perScore.length -1; j++) {
                  
                    difference += Math.abs(req.body.scores[j] - perScore[j]);
                }
                
                if (!(bestMatch == null)) {
                  
                    if (bestMatch.diff > difference) {
                        
                        bestMatch = {index: i, diff: difference};
                       
                    } else if (bestMatch.diff === difference && Math.floor(Math.random() * 2) === 0) {
                       
                        bestMatch = {index: i, diff: difference};
                    }
              
                } else {
                  
                    bestMatch = {index: i, diff: difference};
                }
            }
        }
        
        res.json(dataBaseFile[bestMatch.index]);

       
        if (index == null) {
            dataBaseFile.push(req.body);
       
        } else {
         
            dataBaseFile[index].photo = req.body.photo;
            dataBaseFile[index].scores = req.body.scores;
        }
        res.end();
    });

    appMod.get("/api/male", function (req, res) {
        res.json(dataBaseFile2);
    });

   
    appMod.post("/api/male", function (req, res) {
        var index;
        var bestMatch;
       
        for (var i = 0; i <= dataBaseFile2.length - 1; i++) {
      
            if (dataBaseFile2[i].name === req.body.name) {
            
                index = i;
                continue;
            } else {
                var perScore = dataBaseFile2[i].scores;
                var difference = 0;
                for (var j = 0; j <= perScore.length -1; j++) {
                 
                    difference += Math.abs(req.body.scores[j] - perScore[j]);
                }
         
                if (!(bestMatch == null)) {
                   
                    if (bestMatch.diff > difference) {
                        
                        bestMatch = {index: i, diff: difference};
                        
                    } else if (bestMatch.diff === difference && Math.floor(Math.random() * 2) === 0) {
                    
                        bestMatch = {index: i, diff: difference};
                    }
              
                } else {
                
                    bestMatch = {index: i, diff: difference};
                }
            }
        }
       
        res.json(dataBaseFile2[bestMatch.index]);

       
        if (index == null) {
            dataBaseFile2.push(req.body);
    
        } else {
         
            dataBaseFile2[index].photo = req.body.photo;
            dataBaseFile2[index].scores = req.body.scores;
        }
        res.end();
    });


    appMod.get("/api/female", function (req, res) {
        res.json(dataBaseFile3);
    });

    
    appMod.post("/api/female", function (req, res) {
        var index;
        var bestMatch;
       
        for (var i = 0; i <= dataBaseFile3.length - 1; i++) {
         
            if (dataBaseFile3[i].name === req.body.name) {
                
                index = i;
                continue;
            } else {
                var perScore = dataBaseFile3[i].scores;
                var difference = 0;
                for (var j = 0; j <= perScore.length -1; j++) {
                   
                    difference += Math.abs(req.body.scores[j] - perScore[j]);
                }
  
                if (!(bestMatch == null)) {
                  
                    if (bestMatch.diff > difference) {
                      
                        bestMatch = {index: i, diff: difference};
                      
                    } else if (bestMatch.diff === difference && Math.floor(Math.random() * 2) === 0) {
                    
                        bestMatch = {index: i, diff: difference};
                    }
             
                } else {
        
                    bestMatch = {index: i, diff: difference};
                }
            }
        }
   
        res.json(dataBaseFile3[bestMatch.index]);

        if (index == null) {
            dataBaseFile3.push(req.body);
      
        } else {
       
            dataBaseFile3[index].photo = req.body.photo;
            dataBaseFile3[index].scores = req.body.scores;
        }
        res.end();
    });









}

