function cortaS(palavra){
    let novap=''
    let esp=' '
    for (i=0;i < palavra.length;i++){
        if (palavra[i] === esp){
            esp=i
            break
        }
        else{
            novap+=palavra[i]
        }
    }return novap 
}
function transformaN(palavraN){
    const caract=['0','1','2','3','4','5','6','7','8','9'];
    let numS=''
    for (let i=0;i<palavraN.length;i++){
        if(caract.includes(palavraN[i])){
            numS += palavraN[i]
        }
        else if(palavraN[i] === ','){
            numS+='.'
        }
    }return Number(numS)
}

function liga(seletor){
    const classe=cortaS(seletor)
    const sel= classe +' .borda-verde'
    const greenbox=document.querySelector(sel)//sel= .comida .borda-verde
    const iverde=document.querySelector(sel+' .icone')
    if(greenbox !== null){
        greenbox.classList.remove('borda-verde')
        iverde.classList.remove('aparece')
    }

    const gbox= document.querySelector(seletor);
    gbox.classList.add('borda-verde')
    const verde=document.querySelector(seletor+ ' .icone')
    verde.classList.add('aparece')
}

function pegandoInfo(){
    //Pegar as informaçoes de preco e nome de cada div com borda verde
    //retorna um array
    const nomeC=document.querySelector('.comida .borda-verde .nomeP')
    const precoC=document.querySelector('.comida .borda-verde .preco')
    const nomeB=document.querySelector('.bebida .borda-verde .nomeP')
    const precoB=document.querySelector('.bebida .borda-verde .preco')
    const nomeS=document.querySelector('.sobremesa .borda-verde .nomeP')
    const precoS=document.querySelector('.sobremesa .borda-verde .preco')
    if(nomeC!==null && nomeB!==null && nomeS!==null){
        return[[nomeC.innerHTML,precoC.innerHTML],[nomeB.innerHTML,precoB.innerHTML],[nomeS.innerHTML,precoS.innerHTML]]
    }    
}
function ligarFinal(){
    if (pegandoInfo() !== undefined){
        const botao=document.querySelector('.teste')
        botao.classList.remove('fundo-cinza')
        botao.classList.add('fundo-verde')

        const trocaP=document.querySelector('.final')
        trocaP.innerHTML='Fechar pedido'
        const Total=transformaN(pegandoInfo()[0][1])+transformaN(pegandoInfo()[1][1])+transformaN(pegandoInfo()[2][1])
        /*
        let texto=`Olá,%20gostaria%20de%20fazer%20o%20pedido:%0A-%20Prato:%20${pegandoInfo()[0][0]}%0A-%20Bebida:%20${pegandoInfo()[1][0]}%0A-%20Sobremesa:%20${pegandoInfo()[2][0]}%0ATotal:%20R$%20${Total}`
        const linkando=document.querySelector('.linkar')
        linkando.href='https://wa.me/5521998320863?text='+texto
        */
    }
}
function janelaEndereco(){
    if(pegandoInfo() !== undefined){
        const en=document.querySelector('.Endereco-Nome')
        en.classList.remove('some')
    }
}
function cancela(seletor){
    const doc=document.querySelector(seletor)
    doc.classList.add('some')
}


