function displayname(event) {
    event.preventDefault(event) {
        let text_value = document.getElementById("txt_name").value;
        // cocument.write(txt_value)
        document.getElementById("span-display").textContent = txt_value;
    }
}