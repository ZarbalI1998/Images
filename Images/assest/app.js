let fileInput = document.getElementById("file")

fileInput.addEventListener("change", function(e){
    let files = Array.from(e.target.files);
    files.forEach((file)=>{})
    ShowImage(file);

})



function ShowImage(file){
    const fileReader =new FileReader();
    fileReader.readAsDataURL(file);

    function ShowImage(file){
        if(!file.typeincludes("image/*"))
        alert("Please choose image format");
        return;
    }

    fileReader.addEventListener("loadend", function(){
        let scr = fileReader.result;
        let image = document.createElement("div");
        image.style.width = "150px"
        image.style.height = "150px"
        let img = document.createElement("img");
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.objectFit = "contain";
        img.scr = scr;
        image.append(img);
        images.appendChild(image);


    })

}