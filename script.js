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

function liga(seletor){
    const classe=cortaS(seletor)
    const sel= classe +' .borda-verde'
    const greenbox=document.querySelector(sel)//sel= .comida .borda-verde
    
    if(greenbox !== null){
        greenbox.classList.remove('borda-verde')
    }

    const gbox= document.querySelector(seletor);
    gbox.classList.add('borda-verde')
    
    
}
