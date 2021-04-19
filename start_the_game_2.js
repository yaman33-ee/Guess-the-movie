//get the images array 
var set_no_photos=new Set();
while(set_no_photos.size<5)
{
  const k1 =Math.floor(Math.random()*5)+1;
  set_no_photos.add(k1);
}
var array_no_photos=[...set_no_photos]
console.log(array_no_photos)
var answers=[];

var i=1;
$(function(){
  $('#movie-image').attr('src','./images/image'+array_no_photos[0]+'.jpg')
  $('#submit_name').attr('disabled','true')
  $('#submit_input_name').focus(function(){
    $('.input').css('border','9px dotted green')
    $('#submit_name').removeAttr('disabled');
  })

  $('#submit_input_name').blur(function(){
    $('.input').css('border','3px dotted ')})
  $('#submit_name').click(function(){
    if(i==5) window.location.href="answers_page2.html"
   // console.log(i)
    var text=$('#submit_input_name').val()
    if(text.length>0) {
      console.log(text)
      answers.push(text)
      console.log(answers)
      $('#submit_name').attr('disabled','true')
      $('#movie-image').attr('src','./images/image'+array_no_photos[i++]+'.jpg')
      emptythings()
      
  localStorage.setItem('answers',JSON.stringify(answers))
    }
    else{$('.input').css('border','9px dotted red')
    alert ('Please Enter an answer')
  }
  })
  
})

let count=0
const nums=[0,10,20,30]
nums.forEach(num=>{if(num)count+=10})
console.log(count)
;

  localStorage.setItem('array_no_photos',JSON.stringify(array_no_photos));
function emptythings()
{
  document.querySelector('#submit_input_name').value='';
  
}







