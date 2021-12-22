const rightbtn=document.querySelector('.right-btn-js')
  const leftbtn = document.querySelector('.left-btn-js')
  const imgNuber=document.querySelectorAll('.panner-js img')
  console.log(imgNuber.length)
  let index = 0
  rightbtn.addEventListener("click",function(){
      index = index +1;
      if(index >= imgNuber.length-1){index=0}
      document.querySelector(".panner-js").style.right = index *100+"%"
      })
  leftbtn.addEventListener("click",function(){
          index = index -1;
          if(index <0 ){index=imgNuber.length-1}
          document.querySelector(".panner-js").style.right = index *100+"%"
          })