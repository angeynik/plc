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




function getControllerTitle()
{
   return document.write("Air handling controller");
}

function getTabTitle()
{
   return document.write('<title> Air handling controller, Corrigo E</title>')
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

function getLinkLogout(lang)
{
         if (lang == "sv") {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">Logga ut</a>')}
         else if (lang == "no") {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">Logg ut</a>')}
         else if (lang == "da") {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">Log ud</a>')}
         else if (lang == "de") {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">Ausloggen</a>')}
         else if (lang == "fr") {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">Logout</a>')}
         else if (lang == "fi") {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">Kirjaudu ulos</a>')}
         else if (lang == "ru") {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">ВЫХОД</a>')}
         else if (lang == "pl") {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">Wylogowanie</a>')}
         else if (lang == "hu") {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">Kilépés</a>')}
         else if (lang == "cs") {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">Odhlaseni</a>')}
         else if (lang == "lt") {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">Logout</a>')}
         else if (lang == "et") {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">Logi välja</a>')}
         else if (lang == "lv") {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">Atslegaanas</a>')}
         else if (lang == "sl") {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">Odjava</a>')}
         else if (lang == "es") {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">Logout</a>')}
         else if (lang == "pt") {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">Logout</a>')}
         else if (lang == "it") {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">Uscita</a>')}
         else if (lang == "sk") {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">Logout</a>')}
         else if (lang == "nl") {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">Uitloggen</a>')}
         else if (lang == "tr") {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">Logout</a>')}
         else if (lang == "ro") {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">Deconectare</a>')}
         else {return document.write('<a name="Logout" href="login.html" target="mainwindow" onClick="Logout();"> <img src="Logout.gif" align="absmiddle" border="no">Logout</a>')}
}

function getMenuLang1(lang)
{
         if (lang == "sv") {return (' Logga in')}
         else if (lang == "no") {return (' Logg inn')}
         else if (lang == "da") {return (' Log ind')}
         else if (lang == "de") {return (' Einloggen')}
         else if (lang == "fr") {return (' Login')}
         else if (lang == "fi") {return (' Sisäänkirjautuminen')}
         else if (lang == "ru") {return (' ВХОД')}
         else if (lang == "pl") {return (' Logowanie')}
         else if (lang == "hu") {return (' Belépés')}
         else if (lang == "cs") {return (' Prihlaseni')}
//         else if (lang == "lt") {return (' Prisijungti')}
         else if (lang == "et") {return (' Logi sisse')}
         else if (lang == "lv") {return (' Piesleganas')}
         else if (lang == "sl") {return (' Prijava')}
//         else if (lang == "es") {return ('')}
//         else if (lang == "pt") {return ('')}
         else if (lang == "it") {return (' Accesso')}
//         else if (lang == "sk") {return ('')}
         else if (lang == "nl") {return (' Inloggen')}
         else if (lang == "tr") {return (' Login')}
         else if (lang == "ro") {return (' Conectare')}
         else {return (' Login')}
}

function getMenuLang2(lang)
{
         if (lang == "sv") {return (' Översikt')}
         else if (lang == "no") {return (' Oversikt')}
         else if (lang == "da") {return (' Overblik')}
         else if (lang == "de") {return (' Übersicht')}
         else if (lang == "fr") {return (' Vue d´ensemble')}
         else if (lang == "fi") {return (' Yleiskatsaus')}
         else if (lang == "ru") {return (' Информация')}
         else if (lang == "pl") {return (' Przeglad')}
         else if (lang == "hu") {return (' Áttekintés')}
         else if (lang == "cs") {return (' Prehled')}
//         else if (lang == "lt") {return (' Overview')}
         else if (lang == "et") {return (' Ülevaade')}
         else if (lang == "lv") {return (' Apskate')}
         else if (lang == "sl") {return (' Pregled')}
//         else if (lang == "es") {return ('')}
//         else if (lang == "pt") {return ('')}
         else if (lang == "it") {return (' Panoramica')}
//         else if (lang == "sk") {return ('')}
         else if (lang == "nl") {return (' Overzicht')}
         else if (lang == "tr") {return (' Genel')}
         else if (lang == "ro") {return (' Vedere generală')}
         else {return (' Overview')}
}

function getMenuLang3(lang)
{
         if (lang == "sv") {return (' Ärvärden/Börvärden')}
         else if (lang == "no") {return (' Erverdi/Børverdi')}
         else if (lang == "da") {return (' Aktuel/Setpunkt')}
         else if (lang == "de") {return (' Istwert/Sollwert')}
         else if (lang == "fr") {return (' Réel/Consigne')}
         else if (lang == "fi") {return (' Todellinen/Asetettu')}
         else if (lang == "ru") {return (' Текущ/Уставки')}
         else if (lang == "pl") {return (' Wart. rzeczywista/Nastawa')}
         else if (lang == "hu") {return (' Aktuális beállítások')}
         else if (lang == "cs") {return (' Aktualni/Zadana')}
//         else if (lang == "lt") {return (' Actual/Setpoint')}
         else if (lang == "et") {return (' Tegelik/Seadepunkt')}
         else if (lang == "lv") {return (' Aktuals/Uzstadijums')}
         else if (lang == "sl") {return (' Dejansko/Nastavljeno')}
//         else if (lang == "es") {return ('')}
//         else if (lang == "pt") {return ('')}
         else if (lang == "it") {return (' Valori/Setpoint')}
//         else if (lang == "sk") {return ('')}
         else if (lang == "nl") {return (' Gemeten/Gewenst')}
         else if (lang == "tr") {return (' Hesaplanan/Setdegeri')}
         else if (lang == "ro") {return (' Actuală/Programata')}
         else {return (' Actual/Setpoint')}
}

function getMenuLang4(lang)
{
         if (lang == "sv") {return (' Larmstatus')}
         else if (lang == "no") {return (' Alarmstatus')}
         else if (lang == "da") {return (' Alarm Status')}
         else if (lang == "de") {return (' Alarmstatus')}
         else if (lang == "fr") {return (' Statuts des alarmes')}
         else if (lang == "fi") {return (' Hälytyksen tila')}
         else if (lang == "ru") {return (' Аварии')}
         else if (lang == "pl") {return (' Status alarmów')}
         else if (lang == "hu") {return (' Riasztási állapot')}
         else if (lang == "cs") {return (' Alarm stav')}
//         else if (lang == "lt") {return (' Alarm Status')}
         else if (lang == "et") {return (' Häire staatud')}
         else if (lang == "lv") {return (' Trauksmes statuss')}
         else if (lang == "sl") {return (' Status Alarmov')}
//         else if (lang == "es") {return ('')}
//         else if (lang == "pt") {return ('')}
         else if (lang == "it") {return (' Stato allarmi')}
//         else if (lang == "sk") {return ('')}
         else if (lang == "nl") {return (' Alarm Status')}
         else if (lang == "tr") {return (' Alarm Durumu')}
         else if (lang == "ro") {return (' Stare alarmă')}
         else {return (' Alarm Status')}
}

function getMenuLang5(lang)
{
         if (lang == "sv") {return (' In/Utgångar ')}
         else if (lang == "no") {return (' Inngang/Utgang')}
         else if (lang == "da") {return (' Input/Output')}
         else if (lang == "de") {return (' Eingang/Ausgang')}
         else if (lang == "fr") {return (' Entrées/Sorties')}
         else if (lang == "fi") {return (' Input/Output')}
         else if (lang == "ru") {return (' Входы/Выходы')}
         else if (lang == "pl") {return (' Wejscia/Wyjscia')}
         else if (lang == "hu") {return (' bemenet/kimenet')}
         else if (lang == "cs") {return (' Vstup/Vystup')}
//         else if (lang == "lt") {return (' Iejimai/Isejimai')}
         else if (lang == "et") {return (' Sisend/Väljund')}
         else if (lang == "lv") {return (' Ieeja/izeja')}
         else if (lang == "sl") {return (' Vhodi/Izhodi')}
//         else if (lang == "es") {return ('')}
//         else if (lang == "pt") {return ('')}
        else if (lang == "it") {return (' Ingressi/Uscite')}
//         else if (lang == "sk") {return ('')}
         else if (lang == "nl") {return (' In-/Uitgangen')}
         else if (lang == "tr") {return (' Input/Output')}
         else if (lang == "ro") {return (' Intrări/Iesiri')}
         else {return (' Input/Output')}
}


function getMenuLang6(lang)
{
         if (lang == "sv") {return (' Tidsstyrning')}
         else if (lang == "no") {return (' Kalender')}
         else if (lang == "da") {return (' Tids Kontrol')}
         else if (lang == "de") {return (' Zeitprogramm')}
         else if (lang == "fr") {return (' Program. horaire')}
         else if (lang == "fi") {return (' Aikaohjelmat')}
         else if (lang == "ru") {return (' Таймеры')}
         else if (lang == "pl") {return (' Kontrola czasowa')}
         else if (lang == "hu") {return (' Idoprogram')}
         else if (lang == "cs") {return (' Casove programy')}
//         else if (lang == "lt") {return (' Laiko nustatymai')}
         else if (lang == "et") {return (' Aja juhtimine')}
         else if (lang == "lv") {return (' Taimers')}
         else if (lang == "sl") {return (' Urnik')}
//         else if (lang == "es") {return ('')}
//         else if (lang == "pt") {return ('')}
         else if (lang == "it") {return (' Controllo tempi')}
//         else if (lang == "sk") {return ('')}
         else if (lang == "nl") {return (' Tijd instellingen')}
         else if (lang == "tr") {return (' Zaman Kontrolü')}
         else if (lang == "ro") {return (' Control timp')}
         else {return (' Time Control')}
}

function getMenuLang7(lang)
{
         if (lang == "sv") {return (' Inställningar')}
         else if (lang == "no") {return (' Innstillinger')}
         else if (lang == "da") {return (' Indstillinger')}
         else if (lang == "de") {return (' Einstellungen')}
         else if (lang == "fr") {return (' Config.')}
         else if (lang == "fi") {return (' Asetukset')}
         else if (lang == "ru") {return (' Настройки')}
         else if (lang == "pl") {return (' Ustawienia')}
         else if (lang == "hu") {return (' Beállítások')}
         else if (lang == "cs") {return (' Nastaveni')}
//         else if (lang == "lt") {return (' Nustatymai')}
         else if (lang == "et") {return (' Seaded')}
         else if (lang == "lv") {return (' Iestatijumi')}
         else if (lang == "sl") {return (' Nastavitve')}
//         else if (lang == "es") {return ('')}
//         else if (lang == "pt") {return ('')}
         else if (lang == "it") {return (' Impostazioni')}
//         else if (lang == "sk") {return ('')}
         else if (lang == "nl") {return (' Instellingen')}
         else if (lang == "tr") {return (' Ayarlar')}
         else if (lang == "ro") {return (' Setări')}
         else {return (' Settings')}
}

function getMenuLang8(lang)
{
         if (lang == "sv") {return (' Hand/Auto')}
         else if (lang == "no") {return (' Manuell/Auto')}
         else if (lang == "da") {return (' Manuel/Auto')}
         else if (lang == "de") {return (' Hand/Auto')}
         else if (lang == "fr") {return (' Manuel/Auto')}
         else if (lang == "fi") {return (' Manual/Auto')}
         else if (lang == "ru") {return (' Ручной/Авто')}
         else if (lang == "pl") {return (' Manual/Auto')}
         else if (lang == "hu") {return (' Kézi/Auto')}
         else if (lang == "cs") {return (' Manual/Auto')}
//         else if (lang == "lt") {return (' Rankinis/Auto')}
         else if (lang == "et") {return (' Käsitsi/Automaatne')}
         else if (lang == "lv") {return (' Manuals/auto')}
         else if (lang == "sl") {return (' Rocno/Avtomatsko')}
//         else if (lang == "es") {return ('')}
//         else if (lang == "pt") {return ('')}
        else if (lang == "it") {return (' Manuale/Auto')}
//         else if (lang == "sk") {return ('')}
         else if (lang == "nl") {return (' Hand/Auto')}
         else if (lang == "tr") {return (' Manuel/Auto')}
         else if (lang == "ro") {return (' Manual/Automat')}
         else {return (' Manual/Auto')}
}