$(document).ready(() => {
  // your code here
  console.log('page loaded!')
  $('button').click(function(){
    let target = $(this);
    // console.log(target);
    // console.log('button was clicked');
    // console.log(target.innerText);

    if (target.text() === 'c') {
      $('#cAudio')[0].play();
    } else if (target.text() === 'd') {
      $('#dAudio')[0].play();
    } else if (target.text() === 'e'){
      $('#eAudio')[0].play();
    } else if (target.text() === 'f'){
      $('#fAudio')[0].play();
    } else if (target.text() === 'g'){
      $('#gAudio')[0].play();
    } else if (target.text() === 'a'){
      $('#aAudio')[0].play();
    } else if (target.text() === 'b'){
      $('#bAudio')[0].play();
    }
  });

    $('body').keydown(function(event){
      console.log(event.keyCode);
      if  (event.keyCode === 67){
        $('#cAudio')[0].play();
      } else if (event.keyCode === 68){
        $('#dAudio')[0].play();
      } else if (event.keyCode === 69){
        $('#eAudio')[0].play();
      } else if (event.keyCode === 70){
        $('#fAudio')[0].play();
      } else if (event.keyCode === 71){
        $('#eAudio')[0].play();
      } else if (event.keyCode === 65){
        $('#aAudio')[0].play();
      } else if (event.keyCode === 66){
        $('#bAudio')[0].play();
      }
    });


});
