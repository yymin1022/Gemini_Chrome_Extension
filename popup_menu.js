const GEMINI_API_KEY = "";
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`;

let btnGemini = document.getElementById("btn_gemini");
let inputText = document.getElementById("input_text");

btnGemini.addEventListener("click", () => {
    btnGemini.disabled = true;

    fetch(GEMINI_API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            contents: [{
                parts:[{
                    text: inputText.value
                }]
            }]
        }),
    })
    .then((response) => {
        response.json();
    })
    .then((result) => {
        console.log(result["candidates"][0]["content"]["parts"][0]["text"])
    });
});