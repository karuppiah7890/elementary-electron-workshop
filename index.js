var picture = require('cat-picture');
var image = require('lightning-image-poly');
var fs = require('fs');
var remote = require('electron').remote;

var src = picture.src;
picture.remove();

var viz = new image('#visualization',null,[src],{hullAlgorithm: 'convex'});

function save() {
  remote.getCurrentWindow().webContents.printToPDF({portrait:true},function(err,data){
      if(err)
        return alert('Error generating PDF! ' + error.message);

      fs.writeFile('annotation.pdf',data,function(err){
        if(err)
        return alert('Error generating PDF! ' + error.message);

        alert('PDF saved!');
      });
  });
}

window.addEventListener('keydown',function(e){
  if(e.keyCode==80)
  save();
});
