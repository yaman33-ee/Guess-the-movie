
const answers=JSON.parse(localStorage.getItem('answers'));
const indexes=JSON.parse(localStorage.getItem('array_no_photos'));


console.log(answers)
console.log(indexes)
 const answers_ready=[];
 var correct_score=0;
 var wrong_score=0;
 
 for(var i=1;i<=5;i++)
 {
  const answer_text=answers[indexes.indexOf(i)];
  
  answers_ready.push([`${i}`,answer_text])
 }
 console.log(answers_ready)
var correct_answers_array=[]
var wrong_answers_array=[]


console.log(correct_answers_array)
console.log(wrong_answers_array)

checkimages()

if(correct_answers_array.length===0)
window.location.href="allwrong.html"

if (correct_answers_array.length===5)
window.location.href="allcorrect.html"

correct_score+=correct_answers_array.length;
wrong_score+=wrong_answers_array.length;

document.querySelector(`#correct  `)
  .style.backgroundColor='#28a745';

  document.querySelector(`#wrong  `)
  .style.backgroundColor='#CD5C5C';



  $(function(){
    var i=0;
    var j=0;
var gallery=$('#correct_images')
var gallery2=$('#wrong_images')
//set the first correct image 
gallery.attr('src',`./photos/${correct_answers_array[0][2]}.jpg`)
$('#correct_mn').text(correct_answers_array[0][2])
$('#p2').text(correct_answers_array[0][1])


//set the first wrong image 
gallery2.attr('src',`./photos/${wrong_answers_array[0][2]}.jpg`)
$('#wrong_mn').text(wrong_answers_array[0][2])
$('#p3').text(wrong_answers_array[0][1])

function set_correct_images()
{   i=(i+1)%correct_answers_array.length
  gallery.fadeOut(function(){gallery.attr('src',`./photos/${correct_answers_array[i][2]}.jpg`).fadeIn()})
  $('#correct_mn').text(correct_answers_array[i][2])
  $('#p2').text(correct_answers_array[i][1])
}
function setthewrongimages()
{
  j=(j+1)%wrong_answers_array.length
  gallery2.fadeOut(function(){
  
    gallery2.attr('src',`./photos/${wrong_answers_array[j][2]}.jpg`).fadeIn()})
  $('#wrong_mn').text(wrong_answers_array[j][2])
  $('#p3').text(wrong_answers_array[j][1])
}
gallery.on('click',set_correct_images)
gallery2.on('click',setthewrongimages)


$('#container2').hide()
$('#container3').hide()

$('#show_results').on('click',function(){
 
  if (correct_score>=2)
  { $('body').css('background-color','white')
    $('.container').fadeOut(1000)
    $('#footer').hide(1000)
  $('#container2').slideDown(1000)
  var success_text=`Good Job ,You Have Scored  <span style="color:blue">${correct_score} </span> /5 points`
  $('#success-line').html(success_text)
 }
 else
{ $('body').css('background-color','white')
  $('.container').fadeOut(1000)
  $('#footer').hide(1000)
  $('#container3').slideDown(2000)
  var fail_text=`Good Job ,You Have Scored  <span style="color:red"> ${5-wrong_score} </span> /5 points`
  
  $('#fail-line').html(fail_text)
}
})



$('#stayinpage').click(function(){
  $('body').css('background-color','#030321')
  $('#container2').hide(1000)
  $('.container').fadeIn(1000)
  $('#footer').show(1000)})



  $('#goback').css('color','red')
  $('#goback').click(function(){
    console.log('hi')
    window.location.href="start_the_game_2.html"
  })
   
  })


function checkimages()
{
  //check the first image
 if( answers_ready[0][1].toLowerCase()==='aquaman')
 correct_answers_array.push([answers_ready[0][0],answers_ready[0][1],'Aquaman'])
 else
 wrong_answers_array.push([answers_ready[0][0],answers_ready[0][1],'Aquaman'])
//check the second image
if( answers_ready[1][1].toLowerCase()==='avengers end game')
correct_answers_array.push([answers_ready[1][0],answers_ready[1][1],'Avengers End Game'])
else 
wrong_answers_array.push([answers_ready[1][0],answers_ready[1][1],'Avengers End Game'])


//check the third image
if( answers_ready[2][1].toLowerCase()==='non stop')
correct_answers_array.push([answers_ready[2][0],answers_ready[2][1],'Non Stop'])
else 
wrong_answers_array.push([answers_ready[2][0],answers_ready[2][1],'Non Stop'])

//check the fourth image
if( answers_ready[3][1].toLowerCase()==='once upon atime in hollywood')
correct_answers_array.push([answers_ready[3][0],answers_ready[3][1],'Once Upon Atime In Hollywood'])
else 
wrong_answers_array.push([answers_ready[3][0],answers_ready[3][1],'Once Upon Atime In Hollywood'])

//check the fifth image
if( answers_ready[4][1].toLowerCase()==='pulp fiction')
correct_answers_array.push([answers_ready[4][0],answers_ready[4][1],'Pulp Fiction'])
else 
wrong_answers_array.push([answers_ready[4][0],answers_ready[4][1],'Pulp Fiction'])

}

$('#reload_button').hover(
  function()  {$(this).text('Play Again')},
  function () {$(this).html(`<i class="fa fa-refresh " style="font-size:24px"></i>`)})


  
$('#reload_button').click(
  function()  {window.location.href="start_the_game_2.html"})