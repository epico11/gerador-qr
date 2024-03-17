const input = document.querySelector("input");
const qrcode = document.querySelector("#qrcode");

document.addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
        genQRCode();
    }
});
// Ao apertar a tecla enter a função é chamada

function genQRCode(){
    if(!input.value) return;
    qrcode.src = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${input.value}`;
}
// Função para gerar o QR Code. O link é atribuído no src do campo img 
// Usa-se o valor do input como parâmetro neste link para gerar o QR Code dele

async function baixarImagemFetch() {
    const img = document.getElementById("qrcode");
    const response = await fetch(img.src);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "QRCode.jpg";
    a.click();
    window.URL.revokeObjectURL(url);
}
// Fução para baixar imagem do QR Code gerado