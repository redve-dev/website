const content = document.getElementById("text");
const buttons_ids = ["aboutme", "projects", "contact", "gitea"];
const buttons = new Map();
for(let button of buttons_ids){
	buttons.set(button, document.getElementById(button));
}

buttons.get("aboutme").onclick = function(){
	content.innerHTML = "About me";
}

buttons.get("projects").onclick = function(){
	content.innerHTML = "Projects";
}
