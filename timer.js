



document.querySelector('.timer-button').addEventListener('click', function () {
  let hour = Number(document.getElementById("timer-id").value);
  let Minutes = Number(document.getElementById("timer-Minutes").value);
  let Seconds = Number(document.getElementById("timer-Seconds").value);


  document.querySelector('.timer-button').disabled=true;

  let total = hour * 3600 + Minutes * 60 + Seconds;




  let ti = setInterval(function () {



    document.querySelector('.time-left').textContent = Math.floor(total / 3600) + "::" + (Math.floor(total / 60)) % 60 + '::' + total % 60;


    if (total <= 0) {
      console.log('entered into if block');
      alert('time up');
      clearInterval(ti);
    }
    console.log(total)
    total--;
  }, 1000)

})

//(date.hour() +hour)-date.getHours() +'::'+(date.getMinutes()+Minutes)-Minutes +'::'+(date.getSeconds()+Seconds)-date.getSeconds;