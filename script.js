function hideAll(text_fields){
	for(let text_field of text_fields.values()){
		text_field.style.display = "none";
	}
}

function showText(text_fields, id){
	hideAll(text_fields);
	text_fields.get(id).style.display = "block";
}

function enable_dark_mode(content){
	content.style.background = "rgb(60, 60, 60)";
	content.style.color = "white";
}

function disable_dark_mode(content){
	content.style.background = "white";
	content.style.color = "black";

}

function main(){
	const buttons_ids = ["aboutme", "projects", "contact", "gitea"];
	const buttons = new Map();
	const text_fields = new Map();
	const content = document.querySelector("#content");
	for(let button of buttons_ids){
		buttons.set(button, document.querySelector(".button#" + button));
		text_fields.set(button, document.querySelector(".text#" + button));
	}
	for(let button of buttons.values()){
		button.addEventListener("click", function(){
			showText(text_fields, button.id);
		});
	}
	showText(text_fields, "aboutme");

	const dark_mode_button = document.getElementById("darkmode");
	dark_mode_button.addEventListener("click", function(){
		if(dark_mode_button.checked){
			enable_dark_mode(content);
		} else {
			disable_dark_mode(content);
		}
	});
	if(dark_mode_button.checked){
		enable_dark_mode(content);
	} else {
		disable_dark_mode(content);
	}
}

main();
