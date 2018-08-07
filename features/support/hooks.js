const {After} = require('cucumber');
const fs = require('fs');

After(function(scenarioResult) {
    if(scenarioResult.result.status === 'failed') {
      var path = (scenarioResult.pickle.name+ ".png").replace(/ /g,"_");
      path = 'screenShots/'+path;
      this.driver.takeScreenshot().then(function(data){
        var base64Data = data.replace(/^data:image\/png;base64,/,"");
        fs.writeFile(path, base64Data, 'base64', function(err) {
            if(err) console.log(err);
        });
      });
    }
    return this.driver.quit();
  });