//mömmölillukka
/*
Muumit Ja Taikurin hattu Auto splitter made by SioN.
edit: 3/2/22
siontea.com
*/

state("Moomin3") {
	//pointer to ruby count
	int RubCunt : 0x0012C834, 0xF88, 0x4, 0x0, 0x1C, 0x888, 0x8;
	//pointer to some sort of global animation frame counter
	int AnimFrm : 0x000A6324, 0x2C;
}

startup {
	vars.timerModel = new TimerModel { CurrentState = timer };
	Action<string> Debug = (text) => { print("[Muumit Ja Taikurin hattu] " + text); };
	vars.Debug = Debug;
	vars.Debug("Initialized!");
}

init {
	//the purpose of this variable is to make sure that the splitter doesn't split for a ruby piece after you got all 9
	vars.nosplit = 0;
	//testaa
	refreshRate = 30;
}

start
{
	//starts the time when animfrm is 684.
	//it will start the time no matter which of the three gems you click in the menu
	//ce sucks
	if (current.AnimFrm == 684) {
		vars.Debug("alkaa " + current.AnimFrm);
		return true;
	}
}

split {
	//split if current ruby amount is greater than on the previous frame and that nosplit is less than 9
	if (old.RubCunt < current.RubCunt && vars.nosplit < 9) {
		vars.nosplit++; //add 1 to nosplit
		vars.Debug("strupiini get " + vars.nosplit + " " + current.RubCunt);
		return true;
	}
	
	//split if current ruby amount is 9, nosplit is 9,  previous animation frame is 156 and current animation frame is 157
	else if (current.RubCunt == 9 && vars.nosplit == 9 && old.AnimFrm == 156 && current.AnimFrm == 157) {
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
	//untested
	if (RubCunt == 0 && old.AnimFrm == 684 && current.AnimFrm == 665) {
		return true;
	}
}

exit {
	//reset the timer and set nosplit to 0 when the game closes
	vars.timerModel.Reset();
	vars.nosplit = 0;
}
