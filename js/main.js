'use strict';
window.onload=()=>{
    const list=[
        ['想像的な','creative','creative.png'],
        ['恐竜','dinosaur','dinosaur.png'],
        ['平等','equality','equality.png'],
        ['爆発','explosion','explosion.png'],
        ['クラゲ','jerryfish','jerryfish.png'],
        ['祈る','pray','pray.png'],
        ['真剣な','serious','serious.png'],
    ];
    const eng=document.getElementById('eng');
    const entry=document.getElementById('entry');
    const img=document.getElementById('img');
    const btn=document.getElementById('btn');
    const result=document.getElementById('result');
    let index=0;
    let correct=0;
    btn.addEventListener('click',()=>{
        let ans=entry.value.toLowerCase();
        let msg='';
        if(ans==list[index][1]){
            correct++;
            msg='正解！';
        }else{
            msg=`不正解!${list[index][0]}は${list[index][1]}`;
        }
        if(index==list.length-1){
            msg+=`<br>全${list.length}問中,${correct}問正解`;
            index=-1;
        }
        result.innerHTML=msg;
        result.classList.remove('fade');
        setTimeout(function(){
            result.classList.add('fade');
        },1500);
        setItem(++index);
        entry.focus();
    });
    function setItem(index){
        entry.value='';
        eng.textContent=list[index][0];
        img.src='images/'+list[index][2];
    }
    setItem(index);
}















