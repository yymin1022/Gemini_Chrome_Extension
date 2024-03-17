let btnGemini = document.getElementById("btn_gemini");
let inputText = document.getElementById("input_text");

btnGemini.addEventListener("click", () => {
    btnGemini.disabled = true;
    setTimeout(() => {
        console.log(`Text is ${inputText.value}`);
        console.log("Loading Done!");
        btnGemini.disabled = false;
    }, 3000);
});