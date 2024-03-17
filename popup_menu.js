const GEMINI_API_KEY = "API_KEY";
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`;

let btnGemini = document.getElementById("btn_gemini");
let inputText = document.getElementById("input_text");
let resultText = document.getElementById("result_text");

btnGemini.addEventListener("click", () => {
    btnGemini.disabled = true;

    fetch(GEMINI_API_URL, {
        method: "POST",
        body: JSON.stringify({
            contents: [{
                parts:[{
                    text: inputText.value
                }]
            }]
        }),
    })
    .then((response) => {
        return response.json();
    })
    .then((result) => {
        btnGemini.disabled = false;
        resultText.innerText = result["candidates"][0]["content"]["parts"][0]["text"];
    });
});