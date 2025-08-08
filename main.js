   var num = document.getElementById('num'),
btn = document.getElementById('btn'),
cont = document.getElementById('cont');
btn.onclick=function(){
    btn.hidden=true;
    num.hidden=true;
     const el = document.createElement('img');
                    el.src = `https://github.com/iabdo06450645-pixel/zad/blob/main/${num.value}.png?raw=true`;
                    
                    cont.appendChild(el)
}
