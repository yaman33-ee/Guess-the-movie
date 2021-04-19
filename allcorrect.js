
const answers=JSON.parse(localStorage.getItem('answers'));
const indexes=JSON.parse(localStorage.getItem('array_no_photos'));


//console.log(answers)
//console.log(indexes)
 const answers_ready=[];
 var correct_score=0;
 var wrong_score=0;
 
 for(var i=1;i<=5;i++)
 {
  const answer_text=answers[indexes.indexOf(i)];
  
  answers_ready.push([`${i}`,answer_text])
 }
 
var correct_answers_array=[]

var correct_score = 5;
correct_answers_array=answers_ready

console.log(correct_answers_array)







document.querySelector(`#correct  `)
  .style.backgroundColor='#28a745';





  $(function(){
    var i=0;
    var j=0;
var gallery=$('#correct_images')

//set the first correct image 
gallery.attr('src',`./photos/${correct_answers_array[0][1]}.jpg`)
$('#correct_mn').text(correct_answers_array[0][1].toUpperCase())
$('#p2').text(correct_answers_array[0][1])




function set_correct_images()
{   i=(i+1)%correct_answers_array.length
  gallery.fadeOut(function(){gallery.attr('src',`./photos/${correct_answers_array[i][1]}.jpg`).fadeIn()})
  $('#correct_mn').text(correct_answers_array[i][1].toUpperCase())
  $('#p2').text(correct_answers_array[i][1])
}

gallery.on('click',set_correct_images)



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

  $('#reload_button').hover(
    function()  {$(this).text('Play Again')},
    function () {$(this).html(`<i class="fa fa-refresh " style="font-size:24px"></i>`)})
  
  
    
  $('#reload_button').click(
    function()  {window.location.href="start_the_game_2.html"})