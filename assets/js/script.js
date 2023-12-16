function on_menu_btn_click() {
    console.log("on_menu_btn_click");
    var x = document.getElementById("menu");
    if (x.style.display !== "none") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}