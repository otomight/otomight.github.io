const	images:	HTMLImageElement[] = (
	Array.from(
		document.querySelectorAll(".clickable-image")
	) as HTMLImageElement[]
);
const	modal:	HTMLElement | null = (
	document.getElementById("modal")
);
const	modalImg:	HTMLImageElement | null = (
	document.getElementById("modal-img") as HTMLImageElement
);

function printImage(_: MouseEvent, image: HTMLImageElement): void {
	if (modal === null || modalImg === null)
		return
	modal.classList.add("show");
	modalImg.src = image.src;
}

function hideModal(_: MouseEvent): void {
	if (modal === null)
		return;
	modal.classList.remove("show");
}

document.addEventListener("DOMContentLoaded", function () {
	if (modal !== null) {
		images.forEach((image) => image.addEventListener("click", (event) =>
			printImage(event, image))
		);
		modal.addEventListener("click", (event) =>
			hideModal(event)
		);
	}
});
