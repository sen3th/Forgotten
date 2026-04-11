const folderButton = document.getElementById("folderButton");
const caseBoard = document.getElementById("caseBoard");
const tabs = document.querySelectorAll(".tab");
const papers = document.querySelectorAll(".paper");


folderButton.addEventListener("click", function(){
    caseBoard.classList.toggle("hidden");
})

tabs.forEach(function(tab){
    tab.addEventListener("click", function(){
        const selectedPanel = tab.dataset.panel;

        tabs.forEach(function (item){
            item.classList.remove("active");
        });
        tab.classList.add("active");
        papers.forEach(function (paper){
            if (paper.dataset.panel === selectedPanel){
                paper.classList.add("show");
            }else{
                paper.classList.remove("show");
            }
        })
    })
})