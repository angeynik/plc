document.write('<script src="WebSys.js"></script>');


function showAnimApplet()
{
   document.write('<APPLET CODE=AnimationApplet.class archive="EXOApplets.jar" WIDTH=900 HEIGHT=500 MAYSCRIPT NAME=AnimView ID=AnimView>');
   document.write('<PARAM NAME="image" VALUE="">');
   document.write('<PARAM NAME="Name" VALUE="AnimApplet">');
   document.write('<PARAM NAME="SystemAppletName" VALUE="EXOWebSys">');
   document.write('<PARAM NAME="ConfigFile" VALUE="OverviewAnimation.Acav.gz">');
   //document.write('<PARAM NAME="TestLayoutOnly" VALUE="False">');
   document.write('Your browser is not Java enabled.');
   document.write('</APPLET>');
}


function showSetPointLeftApplet()
{
   document.write('<APPLET CODE=ParamApplet.class archive="EXOApplets.jar" MAYSCRIPT WIDTH=450 HEIGHT=500>');
   document.write('<PARAM NAME=Name VALUE="ParameterApplet">');
   document.write('<PARAM NAME=SystemAppletName VALUE="EXOWebSys">');
   document.write('<PARAM NAME=ConfigFile VALUE="SetPointLeft.acpt.gz">');
   document.write('<PARAM NAME="image" VALUE="">');
   document.write('<PARAM NAME="ComPort" VALUE="26486">');
   document.write('Your browser is not Java enabled.');
   document.write('</APPLET>');
}
 
function showSetPointRightApplet()
{
   document.write('<APPLET CODE=ParamApplet.class archive="EXOApplets.jar" MAYSCRIPT WIDTH=540 HEIGHT=500>');
   document.write('<PARAM NAME=Name VALUE="ParameterApplet">');
   document.write('<PARAM NAME=SystemAppletName VALUE="EXOWebSys">');
   document.write('<PARAM NAME=ConfigFile VALUE="SetPointRight.acpt.gz">');
   document.write('<PARAM NAME="image" VALUE="">');
   document.write('<PARAM NAME="ComPort" VALUE="26486">');
   document.write('Your browser is not Java enabled.');
   document.write('</APPLET>');
}

function showAlarmStatusApplet()
{
   document.write('<APPLET CODE=AlarmApplet.class archive="EXOApplets.jar" MAYSCRIPT WIDTH=700 HEIGHT=500>');
   document.write('<PARAM NAME=Name VALUE="AlarmStatusApplet">');
   document.write('<PARAM NAME=SystemAppletName VALUE="EXOWebSys">');
   document.write('<PARAM NAME=ConfigFile VALUE="Alarms.acas.gz">');
   document.write('<PARAM NAME="image" VALUE="">');
   document.write('<PARAM NAME="ComPort" VALUE="26486">');
   document.write('Your browser is not Java enabled.');
   document.write('</APPLET>');
}

function showInputApplet()
{
   document.write('<APPLET CODE=ParamApplet.class archive="EXOApplets.jar" MAYSCRIPT WIDTH=430 HEIGHT=500>');
   document.write('<PARAM NAME=Name VALUE="InputApplet">');
   document.write('<PARAM NAME=SystemAppletName VALUE="EXOWebSys">');
   document.write('<PARAM NAME=ConfigFile VALUE="Input.acpt.gz">');
   document.write('<PARAM NAME="image" VALUE="">');
   document.write('<PARAM NAME="ComPort" VALUE="26486">');
   document.write('Your browser is not Java enabled.');
   document.write('</APPLET>');
}

function showOutputApplet()
{
   document.write('<APPLET CODE=ParamApplet.class archive="EXOApplets.jar" MAYSCRIPT WIDTH=430 HEIGHT=500>');
   document.write('<PARAM NAME=Name VALUE="OutPutApplet">');
   document.write('<PARAM NAME=SystemAppletName VALUE="EXOWebSys">');
   document.write('<PARAM NAME=ConfigFile VALUE="Output.acpt.gz">');
   document.write('<PARAM NAME="image" VALUE="">');
   document.write('<PARAM NAME="ComPort" VALUE="26486">');
   document.write('Your browser is not Java enabled.');
   document.write('</APPLET>');
}

function showSettingsApplet()
{
   document.write('<APPLET CODE=ParamApplet.class archive="EXOApplets.jar" MAYSCRIPT WIDTH=360 HEIGHT=500>');
   document.write('<PARAM NAME=Name VALUE="SettingsApplet">');
   document.write('<PARAM NAME=SystemAppletName VALUE="EXOWebSys">');
   document.write('<PARAM NAME=ConfigFile VALUE="Settings.acpt.gz">');
   document.write('<PARAM NAME="image" VALUE="">');
   document.write('<PARAM NAME="ComPort" VALUE="26486">');
   document.write('Your browser is not Java enabled.');
   document.write('</APPLET>');
}

function showAlarmSettingsApplet()
{
   document.write('<APPLET CODE=ParamApplet.class archive="EXOApplets.jar" MAYSCRIPT WIDTH=585 HEIGHT=500>');
   document.write('<PARAM NAME=Name VALUE="AlarmSettingsApplet">');
   document.write('<PARAM NAME=SystemAppletName VALUE="EXOWebSys">');
   document.write('<PARAM NAME=ConfigFile VALUE="AlarmSettings.acpt.gz">');
   document.write('<PARAM NAME="image" VALUE="">');
   document.write('<PARAM NAME="ComPort" VALUE="26486">');
   document.write('Your browser is not Java enabled.');
   document.write('</APPLET>');
}

function showLogInApplet()
{
   document.write('<APPLET CODE=EXOWebLogin.class MAYSCRIPT NAME=EXOWebLogInApplet archive="EXOApplets.jar" WIDTH=250 HEIGHT=300>');
   document.write('<PARAM NAME="image" VALUE="">');
   document.write('<PARAM NAME="ComPort" VALUE="26486">');
   document.write('Your browser is not Java enabled.');
   document.write('</APPLET>');
}

function showTimeSchedule()
{
   document.write('<APPLET CODE=ParamApplet.class archive="EXOApplets.jar" MAYSCRIPT WIDTH=402 HEIGHT=100%>');
   document.write('<PARAM NAME=Name VALUE="TimeScheduleApplet">');
   document.write('<PARAM NAME=SystemAppletName VALUE="EXOWebSys">');
   document.write('<PARAM NAME=ConfigFile VALUE="TimeSchedule.acpt.gz">');
   document.write('<PARAM NAME="image" VALUE="">');
   document.write('<PARAM NAME="ComPort" VALUE="26486">');
   document.write('Your browser is not Java enabled.');
   document.write('</APPLET>');
}

function showHolidaySchedule()
{
   document.write('<APPLET CODE=ParamApplet.class archive="EXOApplets.jar" MAYSCRIPT WIDTH=330 HEIGHT=100%>');
   document.write('<PARAM NAME=Name VALUE="HolidayScheduleApplet">');
   document.write('<PARAM NAME=SystemAppletName VALUE="EXOWebSys">');
   document.write('<PARAM NAME=ConfigFile VALUE="HolidaySchedule.acpt.gz">');
   document.write('<PARAM NAME="image" VALUE="">');
   document.write('<PARAM NAME="ComPort" VALUE="26486">');
   document.write('Your browser is not Java enabled.');
   document.write('</APPLET>');
}

function showManualAutoLeftApplet()
{
   document.write('<APPLET CODE=ParamApplet.class archive="EXOApplets.jar" MAYSCRIPT WIDTH=352 HEIGHT=500>');
   document.write('<PARAM NAME=Name VALUE="ManualAutoLeftApplet">');
   document.write('<PARAM NAME=SystemAppletName VALUE="EXOWebSys">');
   document.write('<PARAM NAME=ConfigFile VALUE="ManualAutoLeft.acpt.gz">');
   document.write('<PARAM NAME="image" VALUE="">');
   document.write('<PARAM NAME="ComPort" VALUE="26486">');
   document.write('Your browser is not Java enabled.');
   document.write('</APPLET>');
}

function showManualAutoRightApplet()
{
   document.write('<APPLET CODE=ParamApplet.class archive="EXOApplets.jar" MAYSCRIPT WIDTH=400 HEIGHT=500>');
   document.write('<PARAM NAME=Name VALUE="ManualAutoRightApplet">');
   document.write('<PARAM NAME=SystemAppletName VALUE="EXOWebSys">');
   document.write('<PARAM NAME=ConfigFile VALUE="ManualAutoRight.acpt.gz">');
   document.write('<PARAM NAME="image" VALUE="">');
   document.write('<PARAM NAME="ComPort" VALUE="26486">');
   document.write('Your browser is not Java enabled.');
   document.write('</APPLET>');
}

function showChartApplet()
{
   document.write('<APPLET CODE=LineChart.class archive="EXOApplets.jar" WIDTH=800 HEIGHT=660 MAYSCRIPT NAME=RTC ID=RTC>');
   document.write('<PARAM NAME=Name VALUE="RealTimeChartApplet">');
   document.write('<PARAM NAME=SystemAppletName VALUE="EXOWebSys">');
   document.write('<PARAM NAME=ConfigFile VALUE="RealTimeChart.acrtc.gz">');
   document.write('<PARAM NAME=image VALUE="">');
   document.write('<PARAM NAME="ComPort" VALUE="26486">');
   document.write('Your browser is not Java enabled.');
   document.write('</APPLET>');
}



function getLanguage()
{

      if (navigator.appName == 'Netscape')
          {
          if (navigator.language=="sv") {return "menuSv.html"}
          else if (navigator.language=="sv-SE") {return "menuSv.html"}
          else if (navigator.language=="no") {return "menuNo.html"}
          else if (navigator.language=="da") {return "menuDa.html"}
          else if (navigator.language=="de") {return "menuDe.html"}
          else if (navigator.language=="fr") {return "menuFr.html"}
          else if (navigator.language=="fi") {return "menuFi.html"}
          else if (navigator.language=="ru") {return "menuRu.html"}
          else if (navigator.language=="pl") {return "menuPl.html"}
          else if (navigator.language=="hu") {return "menuHu.html"}
          else if (navigator.language=="cs") {return "menuCs.html"}
          else if (navigator.language=="lt") {return "menuLt.html"}
          else if (navigator.language=="et") {return "menuEt.html"}
          else if (navigator.language=="lv") {return "menuLv.html"}
          else if (navigator.language=="sl") {return "menuSl.html"}
          else if (navigator.language=="es") {return "menuEs.html"}
          else if (navigator.language=="pt") {return "menuPt.html"}
          else if (navigator.language=="it") {return "menuIt.html"}
          else if (navigator.language=="sk") {return "menuSk.html"}
          else if (navigator.language=="nl") {return "menuNl.html"}
          else if (navigator.language=="tr") {return "menuTr.html"}
          else {return "menuEn.html"}
          }
      else
         {
         if (navigator.userLanguage=="sv") {return "menuSv.html"}
         else if (navigator.userLanguage=="sv-SE") {return "menuSv.html"}
         else if (navigator.userLanguage=="no") {return "menuNo.html"}
         else if (navigator.userLanguage=="da") {return "menuDa.html"}
         else if (navigator.userLanguage=="de") {return "menuDe.html"}
         else if (navigator.userLanguage=="fr") {return "menuFr.html"}
         else if (navigator.userLanguage=="fi") {return "menuFi.html"}
         else if (navigator.userLanguage=="ru") {return "menuRu.html"}
         else if (navigator.userLanguage=="pl") {return "menuPl.html"}
         else if (navigator.userLanguage=="hu") {return "menuHu.html"}
         else if (navigator.userLanguage=="cs") {return "menuCs.html"}
         else if (navigator.userLanguage=="lt") {return "menuLt.html"}
         else if (navigator.userLanguage=="et") {return "menuEt.html"}
         else if (navigator.userLanguage=="lv") {return "menuLv.html"}
         else if (navigator.userLanguage=="sl") {return "menuSl.html"}
         else if (navigator.userLanguage=="es") {return "menuEs.html"}
         else if (navigator.userLanguage=="pt") {return "menuPt.html"}
         else if (navigator.userLanguage=="it") {return "menuIt.html"}
         else if (navigator.userLanguage=="sk") {return "menuSk.html"}
         else if (navigator.userLanguage=="nl") {return "menuNl.html"}
         else if (navigator.userLanguage=="tr") {return "menuTr.html"}
         else {return "menuEn.html"}
         }
}


function getControllerTitle()
{
   return document.write("Air Handling Controller");
}

function getTabTitle()
{
   return document.write('<title> Air Handling Controller, Corrigo E</title>')
}

function getLink1()
{
      return document.write('<a href="" target="_blank"></a>')
}
function getLink2()
{
      return document.write('<a href="" target="_blank"></a>')
}
function getLink3()
{
      return document.write('<a href="" target="_blank"></a>')
}
function getLink4()
{
      return document.write('<a href="" target="_blank"></a>')
}

function getLinkRegin()
{
      return document.write('<a href="http://www.regin.se" target="_blank"><img src="ReginWaves.gif" align="absmiddle" border="no">www.regin.se</a>')
}



function PopUpRTC()
{
   if (!parent.newRTC.closed && parent.newRTC.location) {
      parent.newRTC.focus()
   }
   else {
      parent.newRTC = window.open('RTC.html', 'RTCwin', 'toolbar=no, directories=no, scrollbars=yes, location=no, status=no, menubar=no, resizable=yes, width=850, height=600');
      if (!parent.newRTC.opener) parent.newRTC.opener = self;
   }
}


function getLinkRTC()
{
      //return document.write('<a href="RTC.html" target="_blank"><img src="Chart.gif" align="absmiddle" border="no">Chart</a>');
}

function getLinkLogout()
{
      if (navigator.appName == 'Netscape')
         {
         if (navigator.language=="sv") {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">Logga ut</a>')}
         else if (navigator.language=="sv-SE") {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">Logga ut</a>')}
         else if (navigator.language=="no") {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">Logg ut</a>')}
         else if (navigator.language=="da") {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">Log ud</a>')}
         else if (navigator.language=="de") {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">Ausloggen</a>')}
         else if (navigator.language=="fr") {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">Logout</a>')}
         else if (navigator.language=="fi") {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">Kirjaudu ulos</a>')}
         else if (navigator.language=="ru") {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">B:;NG8BLAO</a>')}
         else if (navigator.language=="pl") {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">Wylogowanie</a>')}
         else if (navigator.language=="hu") {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">Kilépés</a>')}
         else if (navigator.language=="cs") {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">Odhlaseni</a>')}
         else if (navigator.language=="lt") {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">Logout</a>')}
         else if (navigator.language=="et") {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">Logi välja</a>')}
         else if (navigator.language=="lv") {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">Atslegaanas</a>')}
         else if (navigator.language=="sl") {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">Odjava</a>')}
         else if (navigator.language=="es") {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">Logout</a>')}
         else if (navigator.language=="pt") {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">Logout</a>')}
         else if (navigator.language=="it") {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">Logout</a>')}
         else if (navigator.language=="sk") {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">Logout</a>')}
         else if (navigator.language=="nl") {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">Uitloggen</a>')}
         else if (navigator.language=="tr") {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">Logout</a>')}
         else {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">Logout</a>')}
         }
      else
          {
          if (navigator.userLanguage=="sv") {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">Logga ut</a>')}
          else if (navigator.userLanguage=="sv-SE") {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">Logga ut</a>')}
          else if (navigator.userLanguage=="no") {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">Logg ut</a>')}
          else if (navigator.userLanguage=="da") {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">Log ud</a>')}
          else if (navigator.userLanguage=="de") {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">Ausloggen</a>')}
          else if (navigator.userLanguage=="fr") {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">Logout</a>')}
          else if (navigator.userLanguage=="fi") {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">Kirjaudu ulos</a>')}
          else if (navigator.userLanguage=="ru") {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">B:;NG8BLAO</a>')}
          else if (navigator.userLanguage=="pl") {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">Wylogowanie</a>')}
          else if (navigator.userLanguage=="hu") {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">Kilépés</a>')}
          else if (navigator.userLanguage=="cs") {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">Odhlaseni</a>')}
          else if (navigator.userLanguage=="lt") {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">Logout</a>')}
          else if (navigator.userLanguage=="et") {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">Logi välja</a>')}
          else if (navigator.userLanguage=="lv") {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">Atslegaanas</a>')}
          else if (navigator.userLanguage=="sl") {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">Odjava</a>')}
          else if (navigator.userLanguage=="es") {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">Logout</a>')}
          else if (navigator.userLanguage=="pt") {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">Logout</a>')}
          else if (navigator.userLanguage=="it") {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">Logout</a>')}
          else if (navigator.userLanguage=="sk") {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">Logout</a>')}
          else if (navigator.userLanguage=="nl") {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">Uitloggen</a>')}
          else if (navigator.userLanguage=="tr") {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">Logout</a>')}
          else {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">Logout</a>')}
          }
}

function getMenuLang1()
{
      if (navigator.appName == 'Netscape')
         {
         if (navigator.language=="sv") {return (' Logga in')}
         else if (navigator.language=="sv-SE") {return (' Logga in')}
         else if (navigator.language=="no") {return (' Logg inn')}
         else if (navigator.language=="da") {return (' Log ind')}
         else if (navigator.language=="de") {return (' Einloggen')}
         else if (navigator.language=="fr") {return (' Login')}
         else if (navigator.language=="fi") {return (' Sisäänkirjautuminen')}
         else if (navigator.language=="ru") {return (' >4:;NG8BLAO')}
         else if (navigator.language=="pl") {return (' Logowanie')}
         else if (navigator.language=="hu") {return (' Belépés')}
         else if (navigator.language=="cs") {return (' Prihlaseni')}
//         else if (navigator.language=="lt") {return ('')}
         else if (navigator.language=="et") {return (' Logi sisse')}
         else if (navigator.language=="lv") {return (' Piesleganas')}
         else if (navigator.language=="sl") {return (' Prijava')}
//         else if (navigator.language=="es") {return ('')}
//         else if (navigator.language=="pt") {return ('')}
//         else if (navigator.language=="it") {return ('')}
//         else if (navigator.language=="sk") {return ('')}
         else if (navigator.language=="nl") {return (' Inloggen')}
         else if (navigator.language=="tr") {return (' Login')}
         else {return (' Login')}
         }
      else
         {
         if (navigator.userLanguage=="sv") {return (' Logga in')}
         else if (navigator.userLanguage=="sv-SE") {return (' Logga in')}
         else if (navigator.userLanguage=="no") {return (' Logg inn')}
         else if (navigator.userLanguage=="da") {return (' Log ind')}
         else if (navigator.userLanguage=="de") {return (' Einloggen')}
         else if (navigator.userLanguage=="fr") {return (' Login')}
         else if (navigator.userLanguage=="fi") {return (' Sisäänkirjautuminen')}
         else if (navigator.userLanguage=="ru") {return (' >4:;NG8BLAO')}
         else if (navigator.userLanguage=="pl") {return (' Logowanie')}
         else if (navigator.userLanguage=="hu") {return (' Belépés')}
         else if (navigator.userLanguage=="cs") {return (' Prihlaseni')}
//         else if (navigator.userLanguage=="lt") {return ('')}
         else if (navigator.userLanguage=="et") {return (' Logi sisse')}
         else if (navigator.userLanguage=="lv") {return (' Piesleganas')}
         else if (navigator.userLanguage=="sl") {return (' Prijava')}
//         else if (navigator.userLanguage=="es") {return ('')}
//         else if (navigator.userLanguage=="pt") {return ('')}
//         else if (navigator.userLanguage=="it") {return ('')}
//         else if (navigator.userLanguage=="sk") {return ('')}
         else if (navigator.userLanguage=="nl") {return (' Inloggen')}
         else if (navigator.userLanguage=="tr") {return (' Login')}
         else {return (' Login')}
          }
}

function getMenuLang2()
{
      if (navigator.appName == 'Netscape')
         {
         if (navigator.language=="sv") {return (' Översikt')}
         else if (navigator.language=="sv-SE") {return (' Översikt')}
         else if (navigator.language=="no") {return (' Oversikt')}
         else if (navigator.language=="da") {return (' Overblik')}
         else if (navigator.language=="de") {return (' Übersicht')}
         else if (navigator.language=="fr") {return (' Vue d´ensemble')}
         else if (navigator.language=="fi") {return (' Yleiskatsaus')}
         else if (navigator.language=="ru") {return (' =D>@<0F8O')}
         else if (navigator.language=="pl") {return (' Przeglad')}
         else if (navigator.language=="hu") {return (' Áttekintés')}
         else if (navigator.language=="cs") {return (' Prehled')}
//         else if (navigator.language=="lt") {return ('')}
         else if (navigator.language=="et") {return (' Ülevaade')}
         else if (navigator.language=="lv") {return (' Apskate')}
         else if (navigator.language=="sl") {return (' Pregled')}
//         else if (navigator.language=="es") {return ('')}
//         else if (navigator.language=="pt") {return ('')}
//         else if (navigator.language=="it") {return ('')}
//         else if (navigator.language=="sk") {return ('')}
         else if (navigator.language=="nl") {return (' Overzicht')}
         else if (navigator.language=="tr") {return (' Genel')}
         else {return (' Overview')}
         }
      else
         {
         if (navigator.userLanguage=="sv") {return (' Översikt')}
         else if (navigator.userLanguage=="sv-SE") {return (' Översikt')}
         else if (navigator.userLanguage=="no") {return (' Oversikt')}
         else if (navigator.userLanguage=="da") {return (' Overblik')}
         else if (navigator.userLanguage=="de") {return (' Übersicht')}
         else if (navigator.userLanguage=="fr") {return (' Vue d´ensemble')}
         else if (navigator.userLanguage=="fi") {return (' Yleiskatsaus')}
         else if (navigator.userLanguage=="ru") {return (' =D>@<0F8O')}
         else if (navigator.userLanguage=="pl") {return (' Przeglad')}
         else if (navigator.userLanguage=="hu") {return (' Áttekintés')}
         else if (navigator.userLanguage=="cs") {return (' Prehled')}
//         else if (navigator.userLanguage=="lt") {return ('')}
         else if (navigator.userLanguage=="et") {return (' Ülevaade')}
         else if (navigator.userLanguage=="lv") {return (' Apskate')}
         else if (navigator.userLanguage=="sl") {return (' Pregled')}
//         else if (navigator.userLanguage=="es") {return ('')}
//         else if (navigator.userLanguage=="pt") {return ('')}
//         else if (navigator.userLanguage=="it") {return ('')}
//         else if (navigator.userLanguage=="sk") {return ('')}
         else if (navigator.userLanguage=="nl") {return (' Overzicht')}
         else if (navigator.userLanguage=="tr") {return (' Genel')}
         else {return (' Overview')}
          }
}

function getMenuLang3()
{
      if (navigator.appName == 'Netscape')
         {
         if (navigator.language=="sv") {return (' Ärvärden/Börvärden')}
         else if (navigator.language=="sv-SE") {return (' Ärvärden/Börvärden')}
         else if (navigator.language=="no") {return (' Erverdi/Børverdi')}
         else if (navigator.language=="da") {return (' Aktuel/Setpunkt')}
         else if (navigator.language=="de") {return (' Istwert/Sollwert')}
         else if (navigator.language=="fr") {return (' Réel/Consigne')}
         else if (navigator.language=="fi") {return (' Todellinen/Asetettu')}
         else if (navigator.language=="ru") {return (' "5:CI/#AB02:8')}
         else if (navigator.language=="pl") {return (' Wart. rzeczywista/Nastawa')}
         else if (navigator.language=="hu") {return (' Aktuális beállítások')}
         else if (navigator.language=="cs") {return (' Aktualni/Zadana')}
//         else if (navigator.language=="lt") {return ('')}
         else if (navigator.language=="et") {return (' Tegelik/Seadepunkt')}
         else if (navigator.language=="lv") {return (' Aktuals/Uzstadijums')}
         else if (navigator.language=="sl") {return (' Dejansko/Nastavljeno')}
//         else if (navigator.language=="es") {return ('')}
//         else if (navigator.language=="pt") {return ('')}
//         else if (navigator.language=="it") {return ('')}
//         else if (navigator.language=="sk") {return ('')}
         else if (navigator.language=="nl") {return (' Gemeten/Gewenst')}
         else if (navigator.language=="tr") {return (' Hesaplanan/Setdegeri')}
         else {return (' Actual/Setpoint')}
         }
      else
         {
         if (navigator.userLanguage=="sv") {return (' Ärvärden/Börvärden')}
         else if (navigator.userLanguage=="sv-SE") {return (' Ärvärden/Börvärden')}
         else if (navigator.userLanguage=="no") {return (' Erverdi/Børverdi')}
         else if (navigator.userLanguage=="da") {return (' Aktuel/Setpunkt')}
         else if (navigator.userLanguage=="de") {return (' Istwert/Sollwert')}
         else if (navigator.userLanguage=="fr") {return (' Réel/Consigne')}
         else if (navigator.userLanguage=="fi") {return (' Todellinen/Asetettu')}
         else if (navigator.userLanguage=="ru") {return (' "5:CI/#AB02:8')}
         else if (navigator.userLanguage=="pl") {return (' Wart. rzeczywista/Nastawa')}
         else if (navigator.userLanguage=="hu") {return (' Aktuális beállítások')}
         else if (navigator.userLanguage=="cs") {return (' Aktualni/Zadana')}
//         else if (navigator.userLanguage=="lt") {return ('')}
         else if (navigator.userLanguage=="et") {return (' Tegelik/Seadepunkt')}
         else if (navigator.userLanguage=="lv") {return (' Aktuals/Uzstadijums')}
         else if (navigator.userLanguage=="sl") {return (' Dejansko/Nastavljeno')}
//         else if (navigator.userLanguage=="es") {return ('')}
//         else if (navigator.userLanguage=="pt") {return ('')}
//         else if (navigator.userLanguage=="it") {return ('')}
//         else if (navigator.userLanguage=="sk") {return ('')}
         else if (navigator.userLanguage=="nl") {return (' Gemeten/Gewenst')}
         else if (navigator.userLanguage=="tr") {return (' Hesaplanan/Setdegeri')}
         else {return (' Actual/Setpoint')}
          }
}

function getMenuLang4()
{
      if (navigator.appName == 'Netscape')
         {
         if (navigator.language=="sv") {return (' Larmstatus')}
         else if (navigator.language=="sv-SE") {return (' Larmstatus')}
         else if (navigator.language=="no") {return (' Alarmstatus')}
         else if (navigator.language=="da") {return (' Alarm Status')}
         else if (navigator.language=="de") {return (' Alarmstatus')}
         else if (navigator.language=="fr") {return (' Statuts des alarmes')}
         else if (navigator.language=="fi") {return (' Hälytyksen tila')}
         else if (navigator.language=="ru") {return (' 20@88')}
         else if (navigator.language=="pl") {return (' Status alarmów')}
         else if (navigator.language=="hu") {return (' Riasztási állapot')}
         else if (navigator.language=="cs") {return (' Alarm stav')}
//         else if (navigator.language=="lt") {return ('')}
         else if (navigator.language=="et") {return (' Häire staatud')}
         else if (navigator.language=="lv") {return (' Trauksmes statuss')}
         else if (navigator.language=="sl") {return (' Status Alarmov')}
//         else if (navigator.language=="es") {return ('')}
//         else if (navigator.language=="pt") {return ('')}
//         else if (navigator.language=="it") {return ('')}
//         else if (navigator.language=="sk") {return ('')}
         else if (navigator.language=="nl") {return (' Alarm Status')}
         else if (navigator.language=="tr") {return (' Alarm Durumu')}
         else {return (' Alarm Status')}
         }
      else
         {
         if (navigator.userLanguage=="sv") {return (' Larmstatus')}
         else if (navigator.userLanguage=="sv-SE") {return (' Larmstatus')}
         else if (navigator.userLanguage=="no") {return (' Alarmstatus')}
         else if (navigator.userLanguage=="da") {return (' Alarm Status')}
         else if (navigator.userLanguage=="de") {return (' Alarmstatus')}
         else if (navigator.userLanguage=="fr") {return (' Statuts des alarmes')}
         else if (navigator.userLanguage=="fi") {return (' Hälytyksen tila')}
         else if (navigator.userLanguage=="ru") {return (' 20@88')}
         else if (navigator.userLanguage=="pl") {return (' Status alarmów')}
         else if (navigator.userLanguage=="hu") {return (' Riasztási állapot')}
         else if (navigator.userLanguage=="cs") {return (' Alarm stav')}
//         else if (navigator.userLanguage=="lt") {return ('')}
         else if (navigator.userLanguage=="et") {return (' Häire staatud')}
         else if (navigator.userLanguage=="lv") {return (' Trauksmes statuss')}
         else if (navigator.userLanguage=="sl") {return (' Status Alarmov')}
//         else if (navigator.userLanguage=="es") {return ('')}
//         else if (navigator.userLanguage=="pt") {return ('')}
//         else if (navigator.userLanguage=="it") {return ('')}
//         else if (navigator.userLanguage=="sk") {return ('')}
         else if (navigator.userLanguage=="nl") {return (' Alarm Status')}
         else if (navigator.userLanguage=="tr") {return (' Alarm Durumu')}
         else {return (' Alarm Status')}
          }
}

function getMenuLang5()
{
      if (navigator.appName == 'Netscape')
         {
         if (navigator.language=="sv") {return (' In/Utgångar ')}
         else if (navigator.language=="sv-SE") {return (' In/Utgångar ')}
         else if (navigator.language=="no") {return (' Inngang/Utgang')}
         else if (navigator.language=="da") {return (' Input/Output')}
         else if (navigator.language=="de") {return (' Eingang/Ausgang')}
         else if (navigator.language=="fr") {return (' Entrées/Sorties')}
         else if (navigator.language=="fi") {return (' Input/Output')}
         else if (navigator.language=="ru") {return (' E>4K/KE>4K')}
         else if (navigator.language=="pl") {return (' Wejscia/Wyjscia')}
         else if (navigator.language=="hu") {return (' bemenet/kimenet')}
         else if (navigator.language=="cs") {return (' Vstup/Vystup')}
//         else if (navigator.language=="lt") {return ('')}
         else if (navigator.language=="et") {return (' Sisend/Väljund')}
         else if (navigator.language=="lv") {return (' Ieeja/izeja')}
         else if (navigator.language=="sl") {return (' Vhodi/Izhodi')}
//         else if (navigator.language=="es") {return ('')}
//         else if (navigator.language=="pt") {return ('')}
//         else if (navigator.language=="it") {return ('')}
//         else if (navigator.language=="sk") {return ('')}
         else if (navigator.language=="nl") {return (' In-/Uitgangen')}
         else if (navigator.language=="tr") {return (' Input/Output')}
         else {return (' Input/Output')}
         }
      else
         {
         if (navigator.userLanguage=="sv") {return (' In/Utgångar ')}
         else if (navigator.userLanguage=="sv-SE") {return (' In/Utgångar ')}
         else if (navigator.userLanguage=="no") {return (' Inngang/Utgang')}
         else if (navigator.userLanguage=="da") {return (' Input/Output')}
         else if (navigator.userLanguage=="de") {return (' Eingang/Ausgang')}
         else if (navigator.userLanguage=="fr") {return (' Entrées/Sorties')}
         else if (navigator.userLanguage=="fi") {return (' Input/Output')}
         else if (navigator.userLanguage=="ru") {return (' E>4K/KE>4K')}
         else if (navigator.userLanguage=="pl") {return (' Wejscia/Wyjscia')}
         else if (navigator.userLanguage=="hu") {return (' bemenet/kimenet')}
         else if (navigator.userLanguage=="cs") {return (' Vstup/Vystup')}
//         else if (navigator.userLanguage=="lt") {return ('')}
         else if (navigator.userLanguage=="et") {return (' Sisend/Väljund')}
         else if (navigator.userLanguage=="lv") {return (' Ieeja/izeja')}
         else if (navigator.userLanguage=="sl") {return (' Vhodi/Izhodi')}
//         else if (navigator.userLanguage=="es") {return ('')}
//         else if (navigator.userLanguage=="pt") {return ('')}
//         else if (navigator.userLanguage=="it") {return ('')}
//         else if (navigator.userLanguage=="sk") {return ('')}
         else if (navigator.userLanguage=="nl") {return (' In-/Uitgangen')}
         else if (navigator.userLanguage=="tr") {return (' Input/Output')}
         else {return (' Input/Output')}
          }
}


function getMenuLang6()
{
      if (navigator.appName == 'Netscape')
         {
         if (navigator.language=="sv") {return (' Tidsstyrning')}
         else if (navigator.language=="sv-SE") {return (' Tidsstyrning')}
         else if (navigator.language=="no") {return (' Kalender')}
         else if (navigator.language=="da") {return (' Tids Kontrol')}
         else if (navigator.language=="de") {return (' Zeitprogramm')}
         else if (navigator.language=="fr") {return (' Program. horaire')}
         else if (navigator.language=="fi") {return (' Aikaohjelmat')}
         else if (navigator.language=="ru") {return (' "09<5@K')}
         else if (navigator.language=="pl") {return (' Kontrola czasowa')}
         else if (navigator.language=="hu") {return (' Idoprogram')}
         else if (navigator.language=="cs") {return (' Casove programy')}
//         else if (navigator.language=="lt") {return ('')}
         else if (navigator.language=="et") {return (' Aja juhtimine')}
         else if (navigator.language=="lv") {return (' Taimers')}
         else if (navigator.language=="sl") {return (' Urnik')}
//         else if (navigator.language=="es") {return ('')}
//         else if (navigator.language=="pt") {return ('')}
//         else if (navigator.language=="it") {return ('')}
//         else if (navigator.language=="sk") {return ('')}
         else if (navigator.language=="nl") {return (' Tijd instellingen')}
         else if (navigator.language=="tr") {return (' Zaman Kontrolü')}
         else {return (' Time Control')}
         }
      else
         {
         if (navigator.userLanguage=="sv") {return (' Tidsstyrning')}
         else if (navigator.userLanguage=="sv-SE") {return (' Tidsstyrning')}
         else if (navigator.userLanguage=="no") {return (' Kalender')}
         else if (navigator.userLanguage=="da") {return (' Tids Kontrol')}
         else if (navigator.userLanguage=="de") {return (' Zeitprogramm')}
         else if (navigator.userLanguage=="fr") {return (' Program. horaire')}
         else if (navigator.userLanguage=="fi") {return (' Aikaohjelmat')}
         else if (navigator.userLanguage=="ru") {return (' "09<5@K')}
         else if (navigator.userLanguage=="pl") {return (' Kontrola czasowa')}
         else if (navigator.userLanguage=="hu") {return (' Idoprogram')}
         else if (navigator.userLanguage=="cs") {return (' Casove programy')}
//         else if (navigator.userLanguage=="lt") {return ('')}
         else if (navigator.userLanguage=="et") {return (' Aja juhtimine')}
         else if (navigator.userLanguage=="lv") {return (' Taimers')}
         else if (navigator.userLanguage=="sl") {return (' Urnik')}
//         else if (navigator.userLanguage=="es") {return ('')}
//         else if (navigator.userLanguage=="pt") {return ('')}
//         else if (navigator.userLanguage=="it") {return ('')}
//         else if (navigator.userLanguage=="sk") {return ('')}
         else if (navigator.userLanguage=="nl") {return (' Tijd instellingen')}
         else if (navigator.userLanguage=="tr") {return (' Zaman Kontrolü')}
         else {return (' Time Control')}
          }
}

function getMenuLang7()
{
      if (navigator.appName == 'Netscape')
         {
         if (navigator.language=="sv") {return (' Inställningar')}
         else if (navigator.language=="sv-SE") {return (' Inställningar')}
         else if (navigator.language=="no") {return (' Innstillinger')}
         else if (navigator.language=="da") {return (' Indstillinger')}
         else if (navigator.language=="de") {return (' Einstellungen')}
         else if (navigator.language=="fr") {return (' Config.')}
         else if (navigator.language=="fi") {return (' Asetukset')}
         else if (navigator.language=="ru") {return (' 0AB@>9:8')}
         else if (navigator.language=="pl") {return (' Ustawienia')}
         else if (navigator.language=="hu") {return (' Beállítások')}
         else if (navigator.language=="cs") {return (' Nastaveni')}
//         else if (navigator.language=="lt") {return ('')}
         else if (navigator.language=="et") {return (' Seaded')}
         else if (navigator.language=="lv") {return (' Iestatijumi')}
         else if (navigator.language=="sl") {return (' Nastavitve')}
//         else if (navigator.language=="es") {return ('')}
//         else if (navigator.language=="pt") {return ('')}
//         else if (navigator.language=="it") {return ('')}
//         else if (navigator.language=="sk") {return ('')}
         else if (navigator.language=="nl") {return (' Instellingen')}
         else if (navigator.language=="tr") {return (' Ayarlar')}
         else {return (' Settings')}
         }
      else
         {
         if (navigator.userLanguage=="sv") {return (' Inställningar')}
         else if (navigator.userLanguage=="sv-SE") {return (' Inställningar')}
         else if (navigator.userLanguage=="no") {return (' Innstillinger')}
         else if (navigator.userLanguage=="da") {return (' Indstillinger')}
         else if (navigator.userLanguage=="de") {return (' Einstellungen')}
         else if (navigator.userLanguage=="fr") {return (' Config.')}
         else if (navigator.userLanguage=="fi") {return (' Asetukset')}
         else if (navigator.userLanguage=="ru") {return (' 0AB@>9:8')}
         else if (navigator.userLanguage=="pl") {return (' Ustawienia')}
         else if (navigator.userLanguage=="hu") {return (' Beállítások')}
         else if (navigator.userLanguage=="cs") {return (' Nastaveni')}
//         else if (navigator.userLanguage=="lt") {return ('')}
         else if (navigator.userLanguage=="et") {return (' Seaded')}
         else if (navigator.userLanguage=="lv") {return (' Iestatijumi')}
         else if (navigator.userLanguage=="sl") {return (' Nastavitve')}
//         else if (navigator.userLanguage=="es") {return ('')}
//         else if (navigator.userLanguage=="pt") {return ('')}
//         else if (navigator.userLanguage=="it") {return ('')}
//         else if (navigator.userLanguage=="sk") {return ('')}
         else if (navigator.userLanguage=="nl") {return (' Instellingen')}
         else if (navigator.userLanguage=="tr") {return (' Ayarlar')}
         else {return (' Settings')}
          }
}

function getMenuLang8()
{
      if (navigator.appName == 'Netscape')
         {
         if (navigator.language=="sv") {return (' Hand/Auto')}
         else if (navigator.language=="sv-SE") {return (' Hand/Auto')}
         else if (navigator.language=="no") {return (' Manuell/Auto')}
         else if (navigator.language=="da") {return (' Manuel/Auto')}
         else if (navigator.language=="de") {return (' Hand/Auto')}
         else if (navigator.language=="fr") {return (' Manuel/Auto')}
         else if (navigator.language=="fi") {return (' Manual/Auto')}
         else if (navigator.language=="ru") {return ('  CG=>9/2B>')}
         else if (navigator.language=="pl") {return (' Manual/Auto')}
         else if (navigator.language=="hu") {return (' Kézi/Auto')}
         else if (navigator.language=="cs") {return (' Manual/Auto')}
//         else if (navigator.language=="lt") {return ('')}
         else if (navigator.language=="et") {return (' Käsitsi/Automaatne')}
         else if (navigator.language=="lv") {return (' Manuals/auto')}
         else if (navigator.language=="sl") {return (' Rocno/Avtomatsko')}
//         else if (navigator.language=="es") {return ('')}
//         else if (navigator.language=="pt") {return ('')}
//         else if (navigator.language=="it") {return ('')}
//         else if (navigator.language=="sk") {return ('')}
         else if (navigator.language=="nl") {return (' Hand/Auto')}
         else if (navigator.language=="tr") {return (' Manuel/Auto')}
         else {return (' Manual/Auto')}
         }
      else
         {
         if (navigator.userLanguage=="sv") {return (' Hand/Auto')}
         else if (navigator.userLanguage=="sv-SE") {return (' Hand/Auto')}
         else if (navigator.userLanguage=="no") {return (' Manuell/Auto')}
         else if (navigator.userLanguage=="da") {return (' Manuel/Auto')}
         else if (navigator.userLanguage=="de") {return (' Hand/Auto')}
         else if (navigator.userLanguage=="fr") {return (' Manuel/Auto')}
         else if (navigator.userLanguage=="fi") {return (' Manual/Auto')}
         else if (navigator.userLanguage=="ru") {return ('  CG=>9/2B>')}
         else if (navigator.userLanguage=="pl") {return (' Manual/Auto')}
         else if (navigator.userLanguage=="hu") {return (' Kézi/Auto')}
         else if (navigator.userLanguage=="cs") {return (' Manual/Auto')}
//         else if (navigator.userLanguage=="lt") {return ('')}
         else if (navigator.userLanguage=="et") {return (' Käsitsi/Automaatne')}
         else if (navigator.userLanguage=="lv") {return (' Manuals/auto')}
         else if (navigator.userLanguage=="sl") {return (' Rocno/Avtomatsko')}
//         else if (navigator.userLanguage=="es") {return ('')}
//         else if (navigator.userLanguage=="pt") {return ('')}
//         else if (navigator.userLanguage=="it") {return ('')}
//         else if (navigator.userLanguage=="sk") {return ('')}
         else if (navigator.userLanguage=="nl") {return (' Hand/Auto')}
         else if (navigator.userLanguage=="tr") {return (' Manuel/Auto')}
         else {return (' Manual/Auto')}
          }
}