state("Moomin3") {
	int RubCunt : 0x0012C834, 0xF88, 0x4, 0x0, 0x1C, 0x888, 0x8;
	int AnimFrm : 0x000A6324, 0x2C;
}

startup {
    vars.timerModel = new TimerModel { CurrentState = timer };
	Action<string> Debug = (text) => {
		print("[Muumit Ja Taikurin hattu] " + text);
	};
	vars.Debug = Debug;
	vars.Debug("Initialized!");
}

init {
	vars.nosplit = 0;
}

split {
	if (old.RubCunt < current.RubCunt && vars.nosplit < 9) {
		vars.nosplit++;
		vars.Debug("strupiini get " + vars.nosplit + " " + current.RubCunt);
		return true;
	}
	else if (current.RubCunt == 9 && vars.nosplit == 9 && old.AnimFrm == 157 && current.AnimFrm == 158) {
		vars.Debug("loppu >:D " + vars.nosplit + " " + current.AnimFrm);
		return true;
	} else { 
		return false;
	}
}

exit {
    vars.timerModel.Reset();
	vars.nosplit = 0;
}
