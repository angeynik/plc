/*
WebSys.js
Javascript fil för att underlätta login rutiner i Regins WebApplet system.
Author: Stefan Johansson
Company: AB Regin


Gör så här:

-Lägg till följande i din index.html (eller vad nu din start/huvudsida heter)
   <Script>
           var intDoLogout=0;
   </script>

-Lägg till följande rad i filen som hanterar logout (där logout länken/knappen finns):
   <script src="WebSys.js"></script>
   
   Exempel överst i ShowApplets.js: document.write('<script src="WebSys.js"></script>');

-Lägg till följande i koden för länken/knappen som hanterar din logout.
   onClick="Logout();"
   
   Exempel: <a name="Logout" href="login.html" target="mainwindow" onClick="Logout();">Logga_ut</a>


Login:
När man loggat in i Login-appletten för man ett anropa tillbaka till en funktion som
MÅSTE heta "OnLogin". Denna funktion finns således nedan för att underlätta för användaren.
I denna funktion ändrar man sedan vad man vill ska hända då man loggat in.

Logout:
Vid utloggning (genom tryck på Logout länken) anropas "Logout" funktionen nedan.
Detta göres genom att man inkluderar denna script fil i sin html sida "<script src="WebSys.js"></script>"
och i knappen kod så lägger man till onClick="Logout();". Då kommer "Logout" funktionen anropas och sätta nödvändig parameter.
Man måste alltså ha variablen intDoLogout deklarad någonstans (där den BARA kommer bli initierad exakt 1 gång, lämpligen i sin index.html)
*/
var inpara_Language="";
//var intDoLogout=0;

function Logout()
{
   //alert("Logout, Sätter Loggar ut...");
   //intDoLogout = 1;
   parent.intDoLogout = 1;
}
function OnLogin(level)
{
  //alert("Loggad in med nivå: " + level);
  if(level > 0)
  {
     window.location="Overview.html";
  }
  //intDoLogout = 0;
  parent.intDoLogout = 0;
}
function getLogout()
{
     //alert("getLogout...");
     //return intDoLogout;
	 return parent.intDoLogout;
}
function getPassword()
{
     //return parent.pass; We can NOT do this coz we get Access Denied getting variables across domains.... suck
     return window.name;   //return name of the frame instead, and the name is set to the password in the index (owner) site.
}
function getLanguageInPara()
{	
	setLanguageInPara();
	return inpara_Language;
}
function setLanguageInPara()
{
	  //var s = "setLanguageInPara():\r\n" + navigator.userLanguage + "\r\n" + window.navigator.language +"\r\n"+navigator.language +"\r\n"+navigator.browserLanguage
	  //alert(s)		
	  //if(navigator.language == null || navigator.language=="")
	  var lang = navigator.language;
	  if(lang != null && lang != "" && lang != "null" && lang != "undefined")
	  {	    
		inpara_Language = navigator.language
		//alert("1 inpara_Language: " + inpara_Language)
	  }
	  else
	  {
		inpara_Language = navigator.userLanguage
		//alert("2 inpara_Language: " + inpara_Language)
	  }	  	  
}
/* getValueFromIndex(AppletIndex,varialbe)
   Peek a variable in the controller using a applet at a index.
   The first applet loaded on your page gets index 0 and so on...
*/
function getValueFromIndex(AppletIndex,variable)
{
      var getText;
      try
      {
         //getText = document.FanLeft.Peek("T,12,$");
         //getText = parent.FrameName.document.applets[AppletIndex].Peek(variable);
         getText = document.applets[AppletIndex].Peek(variable);
      }
      catch(err)
      {
         if (repeat < 1)
         {
            repeat = repeat + 1;
            t = setTimeout("getTitle()",800);
         }
      }
      return getText;
}
/* getValue(AppletName,variable)
   Peek a variable in the controller using a applet with a specific name.
*/
function getValue(AppletName,variable)
{
      var getText;
      var cmd;
      try
      {
         //getText = document.FanLeft.Peek("T,12,$");
         cmd = "document." + AppletName + ".Peek('" + variable + "')";
         getText = eval(cmd);
      }
      catch(err)
      {
         if (repeat < 1)
         {
            repeat = repeat + 1;
            t = setTimeout("getTitle()",800);
         }
      }
      return getText;
}