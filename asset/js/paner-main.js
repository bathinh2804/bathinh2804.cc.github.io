const mrightbtn=document.querySelector('.mright-btn-js')
   const mleftbtn = document.querySelector('.mleft-btn-js')
   const mimgNuber=document.querySelectorAll('.main_panner-js img')
   console.log(mimgNuber.length)
   let mindex = 0
   mrightbtn.addEventListener("click",function(){
       mindex = mindex +1;
       if(mindex >= mimgNuber.length-1){mindex=0}
       document.querySelector(".main_panner-js").style.right = mindex *100+"%"
       })
   mleftbtn.addEventListener("click",function(){
           mindex = mindex -1;
           if(mindex <0 )mindex=mimgNuber.length-1
           document.querySelector(".main_panner-js").style.right = mindex *100+"%"
           })