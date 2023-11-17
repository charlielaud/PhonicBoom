var panelGlobal = this;
var ImportLipKeys = (function () {

  /*
  Code for Import https://scriptui.joonas.me — (Triple click to select): 
  {"activeId":6,"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":"ImportLipKeys","windowType":"Dialog","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":false},"text":"Lip Key Tools","preferredSize":[0,0],"margins":16,"orientation":"column","spacing":10,"alignChildren":["center","top"]}},"item-2":{"id":2,"type":"Panel","parentId":0,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Importer Tools","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":"center"}},"item-3":{"id":3,"type":"Button","parentId":2,"style":{"enabled":true,"varName":null,"text":"Import Data","justify":"center","preferredSize":[150,0],"alignment":"center","helpTip":null}},"item-4":{"id":4,"type":"Button","parentId":2,"style":{"enabled":true,"varName":null,"text":"Plus One","justify":"center","preferredSize":[150,0],"alignment":"center","helpTip":"\"Plus One\" increments each selected key value by 1.  This is useful when using a dropdown menu, which starts at 1 instead of 0."}},"item-5":{"id":5,"type":"Button","parentId":2,"style":{"enabled":true,"varName":null,"text":"Generate Slider","justify":"center","preferredSize":[150,0],"alignment":"center","helpTip":null}},"item-6":{"id":6,"type":"Button","parentId":2,"style":{"enabled":true,"varName":null,"text":"Generate Dropdown","justify":"center","preferredSize":[150,0],"alignment":"center","helpTip":null}}},"order":[0,2,3,4,5,6],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":true,"afterEffectsDockable":true,"itemReferenceList":"None"}}
  */ 

  // IMPORTLIPKEYS
  // =============
  var ImportLipKeys = (panelGlobal instanceof Panel) ? panelGlobal : new Window("palette"); 
      if ( !(panelGlobal instanceof Panel) ) ImportLipKeys.text = "Lip Key Tools"; 
      ImportLipKeys.orientation = "column"; 
      ImportLipKeys.alignChildren = ["center","top"]; 
      ImportLipKeys.spacing = 10; 
      ImportLipKeys.margins = 16; 

  // PANEL1
  // ======
  var panel1 = ImportLipKeys.add("panel", undefined, undefined, {name: "panel1"}); 
      panel1.text = "Importer Tools"; 
      panel1.orientation = "column"; 
      panel1.alignChildren = ["left","top"]; 
      panel1.spacing = 10; 
      panel1.margins = 10; 
      panel1.alignment = ["center","top"]; 

  var button1 = panel1.add("button", undefined, undefined, {name: "button1"}); 
      button1.text = "Import Data"; 
      button1.preferredSize.width = 150; 
      button1.alignment = ["center","top"]; 

  var button2 = panel1.add("button", undefined, undefined, {name: "button2"}); 
      button2.helpTip = "\u0022Plus One\u0022 increments each selected key value by 1.  This is useful when using a dropdown menu, which starts at 1 instead of 0."; 
      button2.text = "Plus One"; 
      button2.preferredSize.width = 150; 
      button2.alignment = ["center","top"]; 

  var button3 = panel1.add("button", undefined, undefined, {name: "button3"}); 
      button3.text = "Generate Slider"; 
      button3.preferredSize.width = 150; 
      button3.alignment = ["center","top"]; 

  var button4 = panel1.add("button", undefined, undefined, {name: "button4"}); 
      button4.text = "Generate Dropdown"; 
      button4.preferredSize.width = 150; 
      button4.alignment = ["center","top"]; 
      button4.onClick = function (){
        alert("Ya clicked me");
      }

  ImportLipKeys.layout.layout(true);
  ImportLipKeys.layout.resize();
  ImportLipKeys.onResizing = ImportLipKeys.onResize = function () { this.layout.resize(); }

  if ( ImportLipKeys instanceof Window ) ImportLipKeys.show();

  return ImportLipKeys;

}());