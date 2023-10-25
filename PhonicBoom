//Import Gentle JSON v1.0
#include "json2.js"

var CHARLIESDIC = {
    "aa" : [7,"Oh"],
    "ae" : [1, "Aa"],
    "ah" : [10,"Uh"],
    "ao" : [7,"Oh"],
    "aw" : [1, "Aa"],
    "ay" : [3,"Ee"],
    "b" : [6,"M"],
    "ch" : [9,"S"],
    "d" : [2,"D"],
    "dh" : [5,"L"],
    "eh" : [10,"Uh"],
    "er" : [8,"R"],
    "ey" : [3,"Ee"],
    "f" : [4,"F"],
    "g" : [2,"D"],
    "hh" : [3,"Ee"],
    "ih" : [3,"Ee"],
    "iy" : [3,"Ee"],
    "jh" : [2,"D"],
    "k" : [2,"D"],
    "l" : [5,"L"],
    "m" : [6,"M"],
    "n" : [2,"D"],
    "ng" : [2,"D"],
    "ow" : [7,"Oh"],
    "oy" : [7,"Oh"],
    "p" : [6,"M"],
    "r" : [8,"R"],
    "s" : [9,"S"],
    "sh" : [9,"S"],
    "t" : [2,"D"],
    "th" : [5,"L"],
    "uh" : [10,"Uh"],
    "uw" : [11,"W-Oo"],
    "v" : [4,"F"],
    "w" : [11,"W-Oo"],
    "y" : [3,"Ee"],
    "z" : [2,"D"],
    "zh" : [2,"D"],
    "sil" : [0, "Neutral"]
};


//alert(okayGo);



//test one - is this object loading? test by doing an alert

//test two - yeah we're loading. the next test iis to loop through and access eahc phoneme.
//that's a for loop w the length of the WORDS array.
// Then inside of each word, we get the length of the phones array and loop through.


slapValuesDown = function(myObj){
    var activeComp = app.project.activeItem;
    var activeLayer = activeComp.selectedLayers[0];
    var frameRizzle = activeComp.frameRate; //get the frame rate, but in a cool way that wont accidentally reference a system variable
    var theEffect = activeLayer.property("Effects"); //A reference for an arbitrary effect property
    var theSlider = theEffect.property("Mouth Slider").property("Slider"); // A reference for a slider property (always called "Mouth Slider" in this version)

    for (i = 0; i < myObj.words.length; i++){
        var myTimeCode = myObj.words[i].start; //this will update with each new word
        try{
            for (j = 0; j < myObj.words[i].phones.length; j++){
                var myLongPhone = myObj.words[i].phones[j].phone;  //This describes each sequential phoneme "j" in word "i"
                var myShortPhone = myLongPhone.split("_")[0]; //this describes the same phoneme just with extra syntax CHOPPED OFF.

                if (myShortPhone != "oov")
                {
                    var myFinalPhone = CHARLIESDIC[myShortPhone][0]; //this describes either a final phoneme or a number that corresponds.
                    theSlider.setValueAtTime(myTimeCode, myFinalPhone);
                    myTimeCode = myTimeCode + myObj.words[i].phones[j].duration; //this updates AFTER they keyframe is applied.

                    if (j == myObj.words[i].phones.length - 1){ //this if statement basically just sees if we're at the end and if so, adds a NEUTRAL shape.
                        theSlider.setValueAtTime(myObj.words[i].end, 0);
                    }
                }
            }
        }
        catch(err){
            alert("Unparsed Word Detected. Skipping.");
        }
    }
}


getJSON = function(){
    var myFile = new File();
    try {
        var myFile = File.openDialog("Choose a JSON file with Mouth Data");
        myFile.open("r");
    } catch(err) {alert("Did you choose a valid filetype?");}
    var myJson = myFile.read();
    var myObj = JSON.parse(myJson);
    myFile.close();
    //alert(myObj["transcript"]);
    return myObj;
}

var myObjo = getJSON();
slapValuesDown(myObjo);

/*

importGentleJSON = function(sliderName, activeComp, activeLayer) { //function to import GentleJSON data and cast to keyframes
    var frameRizzle = activeComp.frameRate; //get the frame rate, but in a cool way that wont accidentally reference a system variable
    var theEffect = activeLayer.property("Effects"); //A reference for an arbitrary effect property
    var theSlider = theEffect.property(sliderName).property("Slider"); // A reference for a slider property (always called "Mouth Slider" in this version)

    var myFile = new File(); //create a new file system variable

    try { //make sure there's a file that works
        var myFile = File.openDialog("Navigate to GentleJSON .dat file."); //grab your MoHo file here
        myFile.open("r");
        } catch(err) {alert("Did not choose a valid filetype");}

    var myLine;
    var tempArray;
    var i = 0;



    while(!myFile.eof){
        myLine=myFile.readln();
			myLine = myLine.replace("-", "");
			myLine = myLine.replace("E", "0");
			myLine = myLine.replace("AI", "1");
			myLine = myLine.replace("U", "2");
			myLine = myLine.replace("O", "3");
			myLine = myLine.replace("WQ", "4");
			myLine = myLine.replace("etc", "5");
			myLine = myLine.replace("L", "6");
			myLine = myLine.replace("FV", "7");
			myLine = myLine.replace("MBP", "8");
			myLine = myLine.replace("rest", "9");
			tempArray = myLine.split(" "); //split the line into an array where there's a space
            //tempArray = an array of the first and last things.
	
			if (i != 0){
			theSlider.setValueAtTime(((tempArray[0]-1)/frameRizzle), tempArray[1]);
              theSlider.setInterpolationTypeAtKey(theSlider.numKeys, KeyframeInterpolationType.HOLD, KeyframeInterpolationType.HOLD);


}


datTimeRemapFunction = function (layerName, activeComp){
    activeComp.layer(layerName.name).timeRemapEnabled = true;
    }

datAddSliderFunction = function (layerName, sliderName, activeComp){
        
        var mouthSlider = activeComp.layer(layerName.name).Effects.addProperty("ADBE Slider Control"); //Add a slider control
        mouthSlider.name  = sliderName; //name that slider control
    }

datAddSliderExpressionFunction = function(layerName, sliderName, activeComp){
    var myExpressionString = "framesToTime(effect(\"" + sliderName + "\")(\"Slider\"))"; //add an expression to a string 
    activeComp.layer(layerName.name).timeRemap.expression = myExpressionString; //add that expression to the time remap 
    }

{

function myScript(thisObj) {
          function myScript_buildUI(thisObj) {
                    var myPanel = (thisObj instanceof Panel) ? thisObj : new Window("palette", "Import GentleJSON Data", [10, 0, 200, 200]);
                    myPanel.orientation = "column";//new
                    
                    myPanel.grp = myPanel.add("Group", [0,0, 160, 150], "group1");//new
                    myPanel.grp.orientation = "cloumn";//new
                    
                    myPanel.grp.btn1 = myPanel.grp.add("Button", [0, 0, 150, 20], "Add Time Remap");//new
                    myPanel.grp.btn2 = myPanel.grp.add("Button", [0, 25, 150, 45], "Add Mouth Slider");//new
                    myPanel.grp.btn3 = myPanel.grp.add("Button", [0, 50, 150, 70], "Add Remap Expression");//new
                    myPanel.grp.btn4 = myPanel.grp.add("Button", [0, 75, 150, 95], "Import GentleJSON Data");//new
                  
                    myPanel.grp.btn1.onClick = function () {
                         var theComp = app.project.activeItem;
                         var theLayer = theComp.selectedLayers[0];
                        datTimeRemapFunction(theLayer, theComp);
                        }  
                    myPanel.grp.btn2.onClick = function () {
                        var theComp = app.project.activeItem;
                        var theLayer = theComp.selectedLayers[0];
                        datAddSliderFunction(theLayer, "Mouth Slider", theComp);
                        }
                     myPanel.grp.btn3.onClick = function () {
                        var theComp = app.project.activeItem;
                        var theLayer = theComp.selectedLayers[0];
                        datAddSliderExpressionFunction(theLayer, "Mouth Slider", theComp);
                        }
                     myPanel.grp.btn4.onClick = function () {
                        var theComp = app.project.activeItem;
                        var theLayer = theComp.selectedLayers[0];
                        //importGentleJSON("Mouth Slider", theComp, theLayer);
                        var tmpJSON = getJSON();
                        }

                    return myPanel;
          }
 
 
          var myScriptPal = myScript_buildUI(thisObj);
 
 
          if ((myScriptPal != null) && (myScriptPal instanceof Window)) {
                    myScriptPal.center();
                    myScriptPal.show();
                    }
          }
 
 
          myScript(this);
}
*/
