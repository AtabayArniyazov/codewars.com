function validatePIN (pin) {
	for (var i = 0; i < pin.length; i++) {
		var pat1=/^\d{6}$/;
		var pat2=/^\d{4}$/;

		if (pin[i] && (pin.length == 4 || pin.length == 6)) {
			if(isNaN(pin[i])){
				return false;
			} else if (!pat1.test(pin) && !pat2.test(pin)) {
				return false;
			}
			return true;
		} else {
			return false;
		}
	}
	return false;
}