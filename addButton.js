document.getElementById("addButton").onclick = function () {
    const btn = document.createElement("button");
    btn.textContent = "Kevin Durant";
    document.getElementById("container").appendChild(btn)
};