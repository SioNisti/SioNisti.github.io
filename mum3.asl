state("Moomin3") {
	//int Ruby : 0x000EEDC4, 0x888, 0x8;
	//int Ruby : 0x0012C834, 0xFC8, 0x4, 0x0, 0x1C, 0x888, 0x8;
	int Ruby : 0x0012C834, 0xFF8, 0x4, 0x0, 0x1C, 0x888, 0x8;
}

init {
	vars.strup = 0;
	vars.strupold = 0;
}

update {
	
	if (current.Ruby != null) {
		vars.strup = current.Ruby;
	}
	if (old.Ruby != null) {
		vars.strupold = old.Ruby;
	}
}

split {
	if (vars.strupold < vars.strup) {
		return true;
	}
}