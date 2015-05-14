function showEspecialidade(){
	
	var bookview = Alloy.createController("especialidades", {}).getView();
	
	if (OS_ANDROID) {
		bookview.open();	
	}
}

$.index.open();
