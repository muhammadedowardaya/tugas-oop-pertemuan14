const pre = document.querySelectorAll("pre");

pre.forEach((pre) => {
    pre.addEventListener("copy", (event) => {
        alert("anjay di copy euy :) ");
        const text = 
`
Aduh euy, Maaf ya gaes, 
kalian gak bisa copy paste code dari saya, 
ketik aja manual ehehehe...
`;
        event.clipboardData.setData("text/plain", text);
        event.preventDefault();
    });
});

const p = document.querySelectorAll("p");
p.forEach((p) => {
    p.addEventListener("copy", (event) => {
        alert("Ngapain copy paragrafnya, mending code nya aja wkwk");
        const text = `Kan udah saya bilang _-`;
        event.clipboardData.setData("text/plain", text);
        event.preventDefault();
    });
});
