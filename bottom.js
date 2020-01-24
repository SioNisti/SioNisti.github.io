var fileName = location.href.split("/").slice(-1);

if(localStorage.getItem('Language') === 'fi') {
  if(fileName[0] === 'index.html') {
    document.getElementsByClassName("index1")[0].innerHTML = "sionTea Discord serveri";
    document.getElementsByClassName("index2")[0].innerHTML = "Jos sinulla on ylimääräistä rahaa voit lahjoittaa minulle täältä. (Ketään ei pakoiteta lahjoittamaan)";
    document.getElementsByClassName("index3")[0].innerHTML = "Speedrun kategoriat";
    document.getElementsByClassName("index4")[0].innerHTML = "Videot";
    document.getElementsByClassName("index5")[0].innerHTML = "Minun pelit";
    document.getElementsByClassName("index6")[0].innerHTML = "Muut";
    document.getElementsByClassName("index7")[0].innerHTML = "Minä olen SioN, minä tykkään pelata vanhoja pelejä koska tykkään niistä.<br/> Minun salainen kykyni on että osaan röyhtäistä milloin haluan.";
    document.getElementsByClassName("index8")[0].innerHTML = "Stream aikataulut:";
    document.getElementsByClassName("index9")[0].innerHTML = "Perjantaina ja launataina kello 20:00<br/> (Joskus saatan streamata myös sunnuntaina)";
    document.getElementsByClassName("index10")[0].innerHTML = "Viimeisin Streami";
    document.getElementsByClassName("index11")[0].innerHTML = "Twitch Upotus";
    document.getElementsByClassName("index12")[0].innerHTML = "Sosiaalinen Media";
  } 

  if(fileName[0] === 'videos.html'	) {
    document.getElementsByClassName("video1")[0].innerHTML = "Speedrun Tutoriaalit";
    document.getElementsByClassName("video2")[0].innerHTML = "Takaisin";
    document.getElementsByClassName("video3")[0].innerHTML = "Ocarina of Time Tutoriaalit";
    document.getElementsByClassName("video4")[0].innerHTML = "Super Mario 64 Tutoriaalit";
  }

  if(fileName[0] === 'downloads.html'	) {
    document.getElementsByClassName("download1")[0].innerHTML = "Pelit";
    document.getElementsByClassName("download2")[0].innerHTML = "sionTea Discord serveri";
    document.getElementsByClassName("download3")[0].innerHTML = "Takaisin";
  }

  if(fileName[0] === 'other.html'	) {
    document.getElementsByClassName("other1")[0].innerHTML = "Muut";
    document.getElementsByClassName("other2")[0].innerHTML = "Takaisin";
    document.getElementsByClassName("other3")[0].innerHTML = "Ao Oni (Suomalainen Käännös)";
    document.getElementsByClassName("other4")[0].innerHTML = "JEPPLEksen ProStrats ohjelma";
  }

  if(fileName[0] === 'aoonifin.html'	) {
    document.getElementsByClassName("onifin1")[0].innerHTML = "Ao Oni (Suomalainen Käännös)";
    document.getElementsByClassName("onifin2")[0].innerHTML = "Tekijä SioN";
    document.getElementsByClassName("onifin3")[0].innerHTML = "Tämä on suomalainen käännös Ao Oni nimisestä RPG kauhupelistä";
    document.getElementsByClassName("onifin4")[0].innerHTML = "Lataa";
    document.getElementsByClassName("onifin5")[0].innerHTML = "Takaisin";
  }

  if(fileName[0] === 'prostrats.html'	) {
    document.getElementsByClassName("pro1")[0].innerHTML = "Tekijä JEPPLES";
    document.getElementsByClassName("pro2")[0].innerHTML = "ProStrats on simppeli ohjelma joka laskee sinun onnistumis prosenttisi esimerkiksi jossain speedrun tempussa";
    document.getElementsByClassName("pro3")[0].innerHTML = "Lataa";
    document.getElementsByClassName("pro4")[0].innerHTML = "Takaisin";
  }

  if(fileName[0] === 'games.html'	) {
    document.getElementsByClassName("game1")[0].innerHTML = "Valitse peli";
    document.getElementsByClassName("game2")[0].innerHTML = "sionTea Discord Serveri";
    document.getElementsByClassName("game3")[0].innerHTML = "Me olemme saatu 131+ speedrunia 17/11/2017 lähtien";
    document.getElementsByClassName("game4")[0].innerHTML = "Aktiivisin peli oli Super Mario 64 joka sai 2018 huhtikuussa jopa 18 speedrunia";
    document.getElementsByClassName("game5")[0].innerHTML = "Takaisin";
    document.getElementsByClassName("game6")[0].innerHTML = "Pelaajat";
    document.getElementsByClassName("game7")[0].innerHTML = "Lataa Muumipelit";
  }
	
  if(fileName[0] === 'sm64.html'	) {
    document.getElementsByClassName("sm641")[0].innerHTML = "Takaisin";
    document.getElementsByClassName("sm642")[0].innerHTML = "Rom Hackit";
    document.getElementsByClassName("sm643")[0].innerHTML = "Säännöt, Toad Kartta ja reitit";
    document.getElementsByClassName("sm644")[0].innerHTML = "lähetä speedruni";
    document.getElementsByClassName("sm645")[0].innerHTML = "Jotkin videot ovat hukattuja koska alussa vain minun tarvitsi nähdä se jonka takia yleensä niitä videoita ei tallennettu";
  }
	
  if(fileName[0] === 'sm64hacks.html'	) {
    document.getElementsByClassName("sm64hack1")[0].innerHTML = "Rom Hackit";
    document.getElementsByClassName("sm64hack2")[0].innerHTML = "Takaisin";
    document.getElementsByClassName("sm64hack3")[0].innerHTML = "Säännöt";
    document.getElementsByClassName("sm64hack4")[0].innerHTML = "Lähetä speedruni";
  }
	
  if(fileName[0] === 'sm64rules.html'	) {
    document.getElementsByClassName("sm64rule1")[0].innerHTML = "SÄÄNNÖT, KARTAT JA REITIT";
    document.getElementsByClassName("sm64rule2")[0].innerHTML = "Takaisin SM64:ään";
    document.getElementsByClassName("sm64rule3")[0].innerHTML = "SÄÄNNÖT:";
    document.getElementsByClassName("sm64rule4")[0].innerHTML = "Speedrunin päämääränä on puhua kaikille Toadeille ja sitten tehdä wdw clip niminen temppu Bowserin loputtomissa portaissa.  Aika alkaa kun konsoli käynnistyy tai emulaattori resetoidaan. |Project64 1.6 on ainoa sallittu emulaattori| Aika loppuun kun näät Lakitun muuttuvan X kirjaimeksi ruudun oikeassa alakulmassa wdw clipin jälkeen.";
    document.getElementsByClassName("sm64rule5")[0].innerHTML = "KOKIRI TOAD SÄÄNNÖT";
    document.getElementsByClassName("sm64rule6")[0].innerHTML = "Tavallisessa Kokiri Toad speedrunissa sinun pitää puhua kaikille Toadeille, päihittää Deku Tree ja sitten ottaa tähti joka sijaitsee kaupan yläpuolella seinässä olevassa kolossa.  <br/>Aika alkaa emulaattorin uudelleen käynnistäesssä ja loppuu kun kaupan yläpuolella oleva tähti katoaa sen otettuaan, paitsi Magic kategoriassa aika loppuu kun ostat taikavoimat";
    document.getElementsByClassName("sm64rule7")[0].innerHTML = "REITIT<br/>";
    document.getElementsByClassName("sm64rule8")[0].innerHTML = "Toad% Discord serveri<br/>";
    document.getElementsByClassName("sm64rule9")[0].innerHTML = "Kartat";
    document.getElementsByClassName("sm64rule10")[0].innerHTML = "2.0 Kartta";
    document.getElementsByClassName("sm64rule11")[0].innerHTML = "3.0 Kartta";
  }
	
  if(fileName[0] === 'oot.html'	) {
    document.getElementsByClassName("oot1")[0].innerHTML = "Takaisin";
    document.getElementsByClassName("oot2")[0].innerHTML = "Lähetä speedruni";	//muista korjata se saatanan nappula kaikkiin pelien runi boardeille tarkoitetuille sivulle jotka ovat tässä alla--------------- (tehty) 
    document.getElementsByClassName("oot3")[0].innerHTML = "Säännöt";
  }
	
  if(fileName[0] === 'tp.html'	) {
    document.getElementsByClassName("tp1")[0].innerHTML = "Takaisin";
    document.getElementsByClassName("tp2")[0].innerHTML = "Lähetä speedruni";
    document.getElementsByClassName("tp3")[0].innerHTML = "Säännöt";
  }
	
  if(fileName[0] === 'terraria.html'	) {
    document.getElementsByClassName("terraria1")[0].innerHTML = "Takaisin";
    document.getElementsByClassName("terraria2")[0].innerHTML = "Lähetä speedruni";
    document.getElementsByClassName("terraria3")[0].innerHTML = "Säännöt";
  }
	
  if(fileName[0] === 'sms.html'	) {
    document.getElementsByClassName("sms1")[0].innerHTML = "Takaisin";
    document.getElementsByClassName("sms2")[0].innerHTML = "Lähetä speedruni";
    document.getElementsByClassName("sms3")[0].innerHTML = "Säännöt";
  }
	
  if(fileName[0] === 'aooni.html'	) {
    document.getElementsByClassName("oni1")[0].innerHTML = "Takaisin";
    document.getElementsByClassName("oni2")[0].innerHTML = "Lähetä speedruni";
    document.getElementsByClassName("oni3")[0].innerHTML = "Säännöt";
  }
	
  if(fileName[0] === 'fs.html'	) {
    document.getElementsByClassName("fs1")[0].innerHTML = "Takaisin";
    document.getElementsByClassName("fs2")[0].innerHTML = "Lähetä speedruni";
    document.getElementsByClassName("fs3")[0].innerHTML = "Säännöt";
  }
	
  if(fileName[0] === 'mefb.html'	) {
    document.getElementsByClassName("mefb1")[0].innerHTML = "Takaisin";
    document.getElementsByClassName("mefb2")[0].innerHTML = "Lähetä speedruni";
    document.getElementsByClassName("mefb3")[0].innerHTML = "Säännöt";
  }
	
  if(fileName[0] === 'theunknown.html'	) {
    document.getElementsByClassName("unknown1")[0].innerHTML = "Takaisin";
    document.getElementsByClassName("unknown2")[0].innerHTML = "Lähetä speedruni";
    document.getElementsByClassName("unknown3")[0].innerHTML = "Säännöt";
  }
	
  if(fileName[0] === 'sv.html'	) {
    document.getElementsByClassName("sv1")[0].innerHTML = "Takaisin";
    document.getElementsByClassName("sv2")[0].innerHTML = "Lähetä speedruni";
    document.getElementsByClassName("sv3")[0].innerHTML = "Säännöt";
  }
	
  if(fileName[0] === 'multimeme.html'	) {
    document.getElementsByClassName("mm1")[0].innerHTML = "Takaisin";
    document.getElementsByClassName("mm2")[0].innerHTML = "Lähetä speedruni";
    document.getElementsByClassName("mm3")[0].innerHTML = "Säännöt";
  }
	
  if(fileName[0] === 'duke.html'	) {
    document.getElementsByClassName("dn1")[0].innerHTML = "Takaisin";
    document.getElementsByClassName("dn2")[0].innerHTML = "Lähetä speedruni";
    document.getElementsByClassName("dn3")[0].innerHTML = "Säännöt";
  }
}
if(localStorage.getItem("Language") === "null") {
  localStorage.setItem("Language", "en");
}

var selectedLanguage = localStorage.getItem("Language");
document.getElementById("languageSelector").value = selectedLanguage;