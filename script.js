function hideAll(text_fields){
	for(let text_field of text_fields.values()){
		text_field.style.display = "none";
	}
}

function showText(text_fields, id){
	hideAll(text_fields);
	text_fields.get(id).style.display = "block";
}

function main(){
	const buttons_ids = ["aboutme", "projects", "contact", "gitea"];
	const buttons = new Map();
	const text_fields = new Map();
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
}

main();