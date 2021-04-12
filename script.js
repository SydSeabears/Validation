var nav=document.body.querySelector(".nav");
var display=document.body.querySelector(".display");
var items=document.body.querySelector(".items").style.visibilty="hidden";
var zdisplay=document.body.querySelector(".zdisplay");
var hImport=document.body.querySelector(".important");

var list=[];
var pages = [
  {
    name: "Home",
    content: "Home"
  },
  {
    name:"About",
    content:"About"
  },
  {
    name:"View",
    content:"View Notes"
  }
  ];
document.body.querySelector(".nav").style.visibility="hidden";

function validate(){
  var valEle=document.body.querySelector(".valMess");
  var user=document.body.querySelector(".username").value;
  if(user==="coolStudent123"){
    valEle.innerHTML=""
    for(var i=0; i<pages.length; i++){
      createPage(pages[i]);
    }
    
    document.body.querySelector(".username").style.visibilty="hidden";
    document.body.querySelector(".validate").style.visibilty="hidden";
  }else{
    valEle.innerHTML="The username is incorrect."
  }
}
document.body.querySelector(".validate").addEventListener("click",function(){
  validate();
});

function createPage(pg){
  var bttn=document.createElement("button");
  bttn.addEventListener("click",function(){
    contentWrite(pg.content, pg.name);
  });
  bttn.innerHTML=pg.name;
  nav.appendChild(bttn);
  document.body.querySelector(".nav").style.visibilty="visible";
  contentWrite(pages[0].content, "Home");
}
function contentWrite(wd,pg){
  display.innerHTML="";
  
  if(pg=="Home"){
    homePage();
  }
  if(pg=="About"){
    aboutPage();
  }
  if(pg=="View"){
    viewPage();
  }
}

function aboutPage(){
  var title=document.createElement("h1");
  var name= document.createElement("h2");
  title.innerHTML="About";
  name.innerHTML="Sydney Seibers"
  
  display.appendChild(title);
  display.appendChild(name);
  
  document.body.querySelector(".zdisplay").innerHTML="";
  document.body.querySelector(".items").style.visibilty="hidden";
  document.body.querySelector(".submit").style.visibilty="hidden";
}

function homePage(){
  var title=document.createElement("h1");
  title.innerHTML="Home";
  display.appendChild(title);
  
   document.body.querySelector(".zdisplay").innerHTML="";
  document.body.querySelector(".items").style.visibilty="hidden";
  document.body.querySelector(".submit").style.visibilty="hidden";
}

function viewPage(){
  var title =document.createElement("h1");
  title.innerHTML="View Notes";
  display.appendChild(title);
  
  document.body.querySelector(".items").style.visibility="visible";
  document.body.querySelector(".submit").style.visibility="visible";
  rndrItems();
}

function rndrItems(){
  for (var i=0; i<list.length; i++){
    var ele=document.createElement("div");
    ele.innerHTML=list[i];
    document.body.querySelector(".zdisplay").appendChild(ele);
  }
}

function sbmt(){
  var txt=document.body.querySelector(".text").value;
  if(txt.length>1){
    document.body.querySelector(".submit").innerHTML="";
    document.body.querySelector(".zdisplay").innerHTML="";
    list.push(txt);
  }else{
    document.body.querySelector(".submit").innerHTML="There are not enough letters. Please input more letters.";
    document.body.querySelector(".zdisplay").innerHTML="";
  }
  var importance=document.body.querySelector(".importance").value;
  if (importance.length>0){
    document.body.querySelector(".submit").innerHTML="";
    document.body.querySelector(".zdisplay").innerHTML="";
    list.push(importance);
  }
  if(importance.length>0 && txt.length<=1){
    document.body.querySelector(".submit").innerHTML="There are not enough letters. Please input more letters.";
    document.body.querySelector(".zdisplay").innerHTML="";
    list.pop(importance);
  }
  rndrItems();
}

document.body.querySelector(".note").addEventListener("click",function(){
  sbmt();
});