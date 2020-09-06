export function printconsole(mensage:string){
    console.log(mensage);

    var paragrafo: HTMLParagraphElement =  document.createElement("p");
    paragrafo.textContent = "mi paragrafro";
    document.body.appendChild(paragrafo);
}