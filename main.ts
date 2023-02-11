type MapType = {
	[id: string]: HTMLElement;
}

function show_one_text_field(id: string, text_fields: MapType){
	for (const text_field_id in text_fields){
		text_fields[text_field_id].style.display = "none";
	}
	text_fields[id].style.display = "block";
}

function setup_buttons(){
	const buttons_ids: readonly string[] = ["aboutme", "projects", "contact", "gitea"];
	const buttons: MapType = {};
	const text_fields: MapType = {};
	for (const id of buttons_ids){
		buttons[id] = document.querySelector(".button#" + id);
		text_fields[id] = document.querySelector(".text#" + id);
		buttons[id].addEventListener("click", () => show_one_text_field(id, text_fields));
	}
	show_one_text_field("aboutme", text_fields);
}

function enable_dark_mode(content){
	content.style.backgroundColor = "rgb(60, 60, 60)";
	content.style.color = "rgb(255, 255, 255)";
}

function disable_dark_mode(content){
	content.style.backgroundColor = "rgb(255, 255, 255)";
	content.style.color = "rgb(0, 0, 0)";
}

function setup_dark_mode(){
	const dark_mode_button: HTMLInputElement = <HTMLInputElement>document.getElementById("darkmode");
	const content: HTMLElement = document.getElementById("content");
	let dark_mode_switch_function = () => {
		if (dark_mode_button.checked){ enable_dark_mode(content);}
		else{ disable_dark_mode(content);}
	}
	dark_mode_button.addEventListener("click",dark_mode_switch_function);
	dark_mode_switch_function();
}

function setup(){
	setup_buttons();
	setup_dark_mode();
}

setup();