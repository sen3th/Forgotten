const folderButton = document.getElementById("folderButton");
const caseBoard = document.getElementById("caseBoard");
const tabs = document.querySelectorAll(".tab");
const papers = document.querySelectorAll(".paper");
const photos = document.querySelectorAll(".photo");
const photoText = document.getElementById("photoText");

const photoNotes = {
    1: "Unexpected encounter with the Arctic Frost. Blurry image due to its rapid movement and its camouflage.",
    2: "Close-up of the owl's wing. The colours has been inverted to make the details more visible.",
    3: "Close up photo of the bird's claws.",
    4: "One of the best images captured of the owl. It was actively hunting and was captured on flight. The contarst has been changed to make the animal more visible."
};

photos.forEach(function (photo){
    photo.addEventListener("click", function(){
        const selectedPhoto = photo.dataset.photo;
        photos.forEach(function(item){
            item.classList.remove("active");
        })

        photo.classList.add("active");
        photoText.textContent = photoNotes[selectedPhoto];
    })
})

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