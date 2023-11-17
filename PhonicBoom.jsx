//Phonic Boom vx Oct 25, 2023

//Import Gentle JSON v1.0
#include "json2.js"
#include "chuckdict.js"

var dropDownMouthList =["MBP1", "Ah", "CONS1", "Eh", "FV", "LTH", "MBP2", "Oh", "CONS2", "CONS3", "Ih", "Wu"];

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


slapValuesDown = function(myObj){
    var activeComp = app.project.activeItem;
    var activeLayer = activeComp.selectedLayers[0];
    var frameRizzle = activeComp.frameRate; //get the frame rate, but in a cool way that wont accidentally reference a system variable
    var theEffect = activeLayer.property("Effects"); //A reference for an arbitrary effect property
    var theSlider = theEffect.property("Mouth Slider").property("Slider"); // A reference for a slider property (always called "Mouth Slider" in this version)
    var theDropdown = theEffect.property("Mouth Shapes").property("Menu"); // A reference for a dropdown menu.
    
    for (i = 0; i < myObj.words.length; i++){
        var myTimeCode = myObj.words[i].start; //this will update with each new word
        try{
            for (j = 0; j < myObj.words[i].phones.length; j++){
                //"long phone" is the JSON given string, "short phone" is an abreviated version for our purposes
                var myLongPhone = myObj.words[i].phones[j].phone;  //This describes each sequential phoneme "j" in word "i"
                var myShortPhone = myLongPhone.split("_")[0]; //this describes the same phoneme just with extra syntax CHOPPED OFF.

                //Quick check to see if it's an error case. If not, procede.
                if (myShortPhone != "oov")
                {
                    var myFinalPhone = CHARLIESDIC[myShortPhone][0]; //this describes either a final phoneme or a number that corresponds.
                    theSlider.setValueAtTime(myTimeCode, myFinalPhone);
                    myTimeCode = myTimeCode + myObj.words[i].phones[j].duration; //this updates AFTER they keyframe is applied.

                    if (j == myObj.words[i].phones.length - 1)
                    { //this if statement basically just sees if we're at the end and if so, adds a NEUTRAL shape.
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

addDropDown = function(selLayer)
{
    //Add a dropdown effect with mouth shapes
    //M, Ah, Ch, Eh, F, L, M, Oh, Ch, Ch, I, W;
    var dropdownEffect = selLayer.property("ADBE Effect Parade").addProperty("ADBE Dropdown Control");
    dropdownEffect.property(1).setPropertyParameters(dropDownMouthList);
}

addSlider = function(selLayer)
{
    var mouthSlider = app.project.activeItem.selLayer.Effects.addProperty("ADBE Slider Control");
    mouthSlider.name  = "Mouth Slider";
}

checkIfDropdown = function (selLayer)
{

}



var myObjo = getJSON();
slapValuesDown(myObjo);
