const folderButton = document.getElementById("folderButton");
const caseBoard = document.getElementById("caseBoard");

folderButton.addEventListener("click", function(){
    caseBoard.classList.toggle("hidden");
})