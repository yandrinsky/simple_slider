const gallery_items = document.querySelectorAll(".gal_item");

gallery_items.forEach(item => {
    item.onclick = (e) => {
        gallery_items.forEach(item => {
            item.classList.remove("opened");
        })
        e.target.classList.add("opened")
    }
})