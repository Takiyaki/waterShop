const a=document.querySelector("a[href='#contact']");
a.addEventListener("click",scrolingTransition);
function scrolingTransition(){
	event.preventDefault();
	const blockId=a.getAttribute("href");
	document.querySelector(""+blockId).scrollIntoView({
		behavior: "smooth",
		block: "start"
	})
};