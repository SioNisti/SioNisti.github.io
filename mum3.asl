//mömmölillukka
/*
Muumit Ja Taikurin hattu Auto splitter made by SioN.
edit: 3/2/22
siontea.com

Tested to work on versions 6.0.2.32 and 6.5.0.0
*/

state("Moomin3") {
	//pointer to ruby count
	int RubCunt : 0x0012C834, 0xF88, 0x4, 0x0, 0x1C, 0x888, 0x8;
	//pointer to some sort of global animation frame counter (maybe?  in any case it works consistently)
	int AnimFrm : 0x000A6324, 0x2C;
}

startup {
	vars.timerModel = new TimerModel { CurrentState = timer };
	Action<string> Debug = (text) => { print("[Muumit Ja Taikurin hattu] " + text); };
	vars.Debug = Debug;
	vars.Debug("Initialized!");
	
	//custom setting if you want to change the update refresh rate
	settings.Add("60", true, "60 Refresh rate (Otherwise 30)");
}

init {
	//the purpose of this variable is to make sure that the splitter doesn't split for a ruby piece after you got all 9
	vars.nosplit = 0;
	if (settings["60"]) {
		refreshRate = 60;
	} else { 
		refreshRate = 30;
	}
}

start
{
	//starts the time when animfrm is 684.
	//it will start the time no matter which of the three gems you click in the menu
	if (current.AnimFrm == 684) {
		vars.Debug("alkaa " + current.AnimFrm);
		return true;
	}
	
	//ce sucks.  
	//it didnt update the values visually so i had no idea these values actually changed.
	//wasted 4 hours on trying to find a value that did change when i could just reuse the AnimFrm.
}

split {
	//split if current ruby amount is greater than on the previous frame and that nosplit is less than 9
	if (old.RubCunt < current.RubCunt && vars.nosplit < 9) {
		vars.nosplit++; //add 1 to nosplit
		vars.Debug("strupiini get " + vars.nosplit + " " + current.RubCunt);
		return true;
	}
	
	//split if current ruby amount is 9, nosplit is 9,  previous animation frame is 157 and current animation frame is 158
	else if (current.RubCunt == 9 && vars.nosplit == 9 && old.AnimFrm == 157 && current.AnimFrm == 158) {
		vars.Debug("loppu >:D " + vars.nosplit + " " + current.AnimFrm);
		return true;
	} 
	
	//otherwise no split
	else {
		return false;
	}
}

reset {
	//reset if you have 0 ruby pieces and you are going from the map screen to the main menu screen
	if (current.RubCunt == 0 && vars.nosplit == 0 && old.AnimFrm == 1048 && current.AnimFrm == 680) {
		vars.nosplit = 0;
		return true;
	}
	return false;
}

exit {
	//reset the timer and set nosplit to 0 when the game closes
	vars.timerModel.Reset();
	vars.nosplit = 0;
}
