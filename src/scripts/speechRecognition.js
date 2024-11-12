if ("webkitSpeechRecognition" in window) {
    let speechRecognition = new webkitSpeechRecognition();
    let final_transcript = "";
  
    speechRecognition.continuous = true;
    speechRecognition.interimResults = true;
    speechRecognition.lang = document.querySelector("#select_dialect").value;
  
    speechRecognition.onstart = () => {
      document.querySelector("#status").style.display = "block";
    };
    speechRecognition.onerror = () => {
      document.querySelector("#status").style.display = "none";
      console.log("Speech Recognition Error");
    };
    speechRecognition.onend = () => {
      document.querySelector("#status").style.display = "none";
      console.log("Speech Recognition Ended");
    };
  
    speechRecognition.onresult = (event) => {
      let interim_transcript = "";
  
      for (let i = event.resultIndex; i < event.results.length; ++i) {

        if (event.results[i].isFinal) {
          final_transcript += event.results[i][0].transcript;
        } else {
          interim_transcript += event.results[i][0].transcript;
        }
      }
      document.querySelector("#final").innerHTML = final_transcript;
      document.querySelector("#interim").innerHTML = interim_transcript;

      //AQUIIIIII
      console.log("RESULTADO: ========> " + interim_transcript);
      recognizeWord(interim_transcript);
    };
  
    document.querySelector("#start").onclick = () => {
      speechRecognition.start();
    };
    document.querySelector("#stop").onclick = () => {
      speechRecognition.stop();
    };
  } else {
    console.log("Speech Recognition Not Available");
  }


  //AI - FUNCTION TO INTERACT WITH THE DOM!
  function recognizeWord(input){

    var word = input.toLowerCase();

    if(word.includes('red')){
      document.body.style.backgroundColor="red";
    }

    if(word.includes('blue')){
      document.body.style.backgroundColor="blue";
    }

    if(word.includes('pink')){
      document.body.style.backgroundColor="pink";
    }

    if(word.includes('yellow')){
      document.body.style.backgroundColor="yellow";
    }

    if(word.includes('purple')){
      document.body.style.backgroundColor="purple";
    }

    if(word.includes('green')){
      document.body.style.backgroundColor="green";
    }

    if(word.includes('orange')){
      document.body.style.backgroundColor="orange";
    }

    if(word.includes('brown')){
      document.body.style.backgroundColor="brown";
    }

    if(word.includes('black')){
      document.body.style.backgroundColor="black";
    }

    if(word.includes('school')){
      document.getElementById("dialogImage").src = "../resources/images/littleCloversLogo.jpeg";
      document.getElementById("favDialog").showModal();
    }


    if(word.includes('numbers')){
      document.getElementById("dialogImage").src = "../resources/images/numbers.gif";
      document.getElementById("favDialog").showModal();
    }

    if(word.includes('dinosaurs')){
      document.getElementById("dialogImage").src = "../resources/images/dinasours.jpeg";
      document.getElementById("favDialog").showModal();
    }

    if(word.includes('close') || word.includes('remove')){
      document.getElementById("favDialog").close();
    }

    if(word.includes('stop')){
      document.getElementById("babyShark").pause();
      document.getElementById("wheelsOnTheBus").pause();
      document.getElementById("clovi").pause();
      document.getElementById("countingNumbers").pause();
      document.getElementById("moveIt").pause();
    }

    if(word.includes('shark')){
      document.getElementById("babyShark").play();

      setTimeout(function(){
        document.getElementById("babyShark").pause();
      }, 120000);
    }

    if(word.includes('wheels')){
      document.getElementById("wheelsOnTheBus").play();

      setTimeout(function(){
        document.getElementById("wheelsOnTheBus").pause();
      }, 120000);
    }

    if(word.includes('hello') || word.includes('clovi')){
      document.getElementById("clovi").play();

      setTimeout(function(){
        document.getElementById("clovi").pause();
      }, 120000);
    }

    if(word.includes('counter')){
      document.getElementById("countingNumbers").play();

      setTimeout(function(){
        document.getElementById("countingNumbers").pause();
      }, 120000);
    }

    if(word.includes('move it')){
      document.getElementById("moveIt").play();

      setTimeout(function(){
        document.getElementById("moveIt").pause();
      }, 120000);
    }
  }