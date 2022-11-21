export function printconsole(mensage:string){
    console.log(mensage);

    var paragrafo: HTMLParagraphElement =  document.createElement("p");
    paragrafo.textContent = "mi paragrafro 3";
    document.body.appendChild(paragrafo);
}