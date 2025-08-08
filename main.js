   var num = document.getElementById('num'),
btn = document.getElementById('btn'),
cont = document.getElementById('cont');
btn.onclick=function(){
    btn.hidden=true;
    num.hidden=true;
     const el = document.createElement('img');
                    el.src = `${num.value}.png`;
                    
                    cont.appendChild(el)
}
