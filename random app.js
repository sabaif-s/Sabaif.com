
const questionNumber=document.querySelector(".question-number");
const questionText=document.querySelector(".question-text");
const optionContainer=document.querySelector(".option-container");
const answersIndicatorContainer=document.querySelector(".answers-indicator");
const quizBox=document.querySelector(".quiz-box");
const homeBox=document.querySelector(".home-box");
const resultBox=document.querySelector(".result-box");
const imageContainer=document.getElementById("img-container");
const videos=document.querySelector(".videoContainer");
const Body=document.getElementById("body");
const nextB=document.getElementById("nexts");


 let questionCounter= 0;
 let currentQuestion;
 let availableQuestions =[];
 let availableOptions=[];
 let correctAnswer=0;
 let attempt=0;
 var isPlaying=true;
 const quizLimit=10;//if i want all question set it to quiz.length
 
//  push the questions into availableQuestions Array
function setAvailableQuestions(){
    const totalQuestion = quiz.length;
    questionText.appendChild(answersIndicatorContainer);
   
    // quizBox.appendChild(optionContainer);
    // quizBox.appendChild(nextB);
    // questionText.appendChild(answersIndicatorContainer);
    // answersIndicatorContainer.appendChild(indicators);
    for(let i=0; i<totalQuestion; i++){
        availableQuestions.push(quiz[i])
    }
}
// set question number and question text
function getNewQuestion(){
    // questionText.innerHTML='';
    
    imageContainer.innerHTML='';
    // console.log(availableQuestions)
     optionContainer.innerHTML='';
    //set question number
    questionNumber.innerHTML="Question "+ (questionCounter+1) + " of " + quizLimit;
    // set question text
    // set random questions
    const questionIndex= availableQuestions[Math.floor(Math.random()* availableQuestions.length)];
    currentQuestion=questionIndex;
    questionText.innerHTML=currentQuestion.q;
    
    // to overcome repetation problems
    const index1=availableQuestions.indexOf(questionIndex);
    // to remove current question for the next random choosing
    availableQuestions.splice(index1,1);
    // set options to the question
    if(currentQuestion.hasOwnProperty("img")){
      const divs=document.createElement("img");
      divs.className="img-gallery";
      divs.src=currentQuestion.img;
      imageContainer.appendChild(divs);
      fullImg(divs);
      questionText.appendChild(imageContainer);
      nextB.classList.add("newNextimg");
      nextB.classList.add("media");
    }
    if(currentQuestion.hasOwnProperty("jokes")){
        const jokes=document.createElement("audio");
        jokes.id="audij";
        jokes.setAttribute("src",currentQuestion.jokes);
        questionText.appendChild(jokes);
        console.log(jokes);
    }
      if(currentQuestion.hasOwnProperty("img1")){
        const divs2=document.createElement("img");
        divs2.className="img-gallery";
        divs2.src=currentQuestion.img1;
        imageContainer.appendChild(divs2);
        questionText.appendChild(imageContainer);
        fullFor(divs2);
      }
      if(currentQuestion.hasOwnProperty("img3")){
        const divs3=document.createElement("img");
        divs3.src=currentQuestion.img3;
        imageContainer.appendChild(divs3);
        fullFors(divs3);
        questionText.appendChild(imageContainer);
      }
    //   questionText.appendChild(imageContainer);

    //   image.src=currentQuestion.img;
    //   questionText.appendChild(image);
    //   if(currentQuestion.hasOwnProperty("img2")){
    //   divs.addEventListener("click", function() {
    //     divs.src=currentQuestion.img2;
    //     divs.className="full-img";
    //     createSpan(divs);
    //   });
    // }
    
    //   image.addEventListener("dblclick",function(){
    //     image.src=currentQuestion.img;
    //   })
    
     const optionLen = currentQuestion.options.length;
     for(let i=0; i<optionLen; i++){
        availableOptions.push(i);
     }
    
      let animationDelay = 0.2;
    //  create options in HTML
     for(let i=0; i< optionLen; i++){
        // to make an option a random
        const optionindex=availableOptions[Math.floor(Math.random()*availableOptions.length)];
        const index2=availableOptions.indexOf(optionindex);
        availableOptions.splice(index2,1);
        const option=document.createElement("div");
        option.innerHTML=currentQuestion.options[optionindex];
        option.id=optionindex;
        option.className="option";
        option.style.animationDelay= animationDelay+ "s";
        animationDelay=animationDelay+0.2;
        optionContainer.appendChild(option);
        questionText.appendChild(optionContainer);
        questionText.appendChild(answersIndicatorContainer);
        nextB.classList.add("media");
        questionNumber.appendChild(nextB);
        console.log(nextB);
       
        option.setAttribute("onclick","getResult(this)");
     }
     if(currentQuestion.hasOwnProperty("music")){
        questionText.classList.add("backGround");
        toggleAnimation();
        const musicQ=document.createElement("div");
        musicQ.id="musicDiv";
        musicQ.innerHTML=`<audio id="myMusic" src="${currentQuestion.music}"></audio> <button class="music-btn">pause </button> <input type="text"
        id="musicCheck" maxLength="${currentQuestion.musicA[0].length}"> <button class="check-music" id="checkM" >check</button>`;
        questionText.appendChild(musicQ);
         setTimeout(musicQuestion,1000);
        //  nextB.classList.add("newNext");
         nextB.classList.add("media");
         questionNumber.appendChild(nextB);
         answersIndicatorContainer.classList.add("custdiv");
         questionText.appendChild(answersIndicatorContainer);
     }
     if(currentQuestion.hasOwnProperty("pics4")){
        console.log(true);
        // const game=document.createElement("div");
        // game.className="exp-class";
        // game.id="base-class";
        // game.innerHTML=`<button class="keyboard-button" id="button-a">A</button> <button class="keyboard-button" id="button-b">B</button> 
        // <button class="keyboard-button" id="button-c">C</button> <button class="keyboard-button" id="button-d">D</button>
        // <button class="keyboard-button" id="button-e">E</button> <button class="keyboard-button" id="button-f">F</button>`;
        // const hiddenGame=document.createElement("div");
        // hiddenGame.id="hidden-buttons-container";
        // hiddenGame.className="container-hidden";
       
        const divs2=document.createElement("img");
        divs2.className="img-gallery";
        divs2.id="first-img";
        divs2.src=currentQuestion.images[0];
        imageContainer.appendChild(divs2);
        questionText.appendChild(imageContainer);
        fullForz(divs2);
        const divs3=document.createElement("img");
        divs3.src=currentQuestion.images[2];
        imageContainer.appendChild(divs3);
        fullForz1(divs3);
        questionText.appendChild(imageContainer);
        const divs4=document.createElement("img");
        divs4.src=currentQuestion.images[4];
        imageContainer.appendChild(divs4);
        fullForz2(divs4);
        const divs5=document.createElement("img");
        divs5.src=currentQuestion.images[6];
        imageContainer.appendChild(divs5);
        fullForz3(divs5);
        questionText.appendChild(imageContainer);
        //  const input=document.createElement("input");
        //  input.type=currentQuestion.hard;
        //  input.id="myInput";
        //  input.maxLength=currentQuestion.answer[0].length;
        //  input.placeholder=currentQuestion.placehold;
        //  questionText.appendChild(input);
         const button=document.createElement("button");
        //  button.setAttribute("onclick","saveInputValue()");
         button.className="btns apps";
        //  button.setAttribute("type","reset");
         button.innerHTML="check";
         var charachters="ABCDEFGHIJKLMNOPQRSTUVWYZ";
         var randomIndex=Math.floor(Math.random()*charachters.length);
         console.log(randomIndex);
         var randomChar=charachters.charAt(randomIndex);
        
         var keyboard=document.createElement("div");
         keyboard.id="keyboard-container";
         keyboard.innerHTML=`<input type="text" id="input-field">
         <div class="keyboard-button" data-value="S">S</div>
         <div class="keyboard-button" data-value="A">A</div>
         <div class="keyboard-button" data-value="B">B</div>
         <div class="keyboard-button" data-value=""></div>
         <br>
         <div class="keyboard-button second" data-value=""></div>
         <div class="keyboard-button second" data-value=""></div>
         <div class="keyboard-button second" data-value=""></div>
         <div class="keyboard-button second" data-value=""></div>
        </div>
        `;
        questionText.appendChild(keyboard);
        questionText.appendChild(button);
        questionNumber.appendChild(nextB);
        questionText.appendChild(answersIndicatorContainer);
        var keyboardButtons=Array.from(document.getElementsByClassName("keyboard-button"));
        var inputField=document.getElementById("input-field");
        inputField.maxLength=6;
        var mustChar=["S","A","B","G","Z","H","T"];
        keyboardButtons.forEach(function(button){
            var charachters="ABCDEFGHIJKLMNOPQRSTUVVWXYZ";
            
            var randomIndex=Math.floor(Math.random()*charachters.length);
            var randomChar=charachters.charAt(randomIndex);
            var chan;
            // mustChar.push();

            // console.log(mustChar)
            // if(Math.random() <= 1){
            //     randomChar=mustChar.charAt(Math.floor(Math.random()*mustChar.length));
            // }if(randomChar ==="S" || randomChar==="G"){
            //     randomChar=charachters.charAt(randomIndex);
            // }
            chan=Math.floor(Math.random()*currentQuestion.dirq.length);
            var selectedIt=currentQuestion.dirq[chan];
            var indexx=currentQuestion.dirq.indexOf(selectedIt);
            console.log(randomChar);
            console.log(indexx);
            button.setAttribute("data-value",currentQuestion.dirq[chan]);
            // mustChar.splice(mustChar[chan]);
            button.innerHTML=selectedIt;
            currentQuestion.dirq.splice(indexx,1);
            if(currentQuestion.dirq.length === 0){
                currentQuestion.dirq.push(randomChar);
            }
            
            console.log(currentQuestion.dirq);
           
          
            button.addEventListener("click",function(){
                // var inputValues=inputField.value;
                // var btnFake=document.createElement("span");
                var buttonValue=button.getAttribute("data-value");
                // btnFake.textContent=inputValues;
                // keyboard.appendChild(btnFake);
                inputField.value+= buttonValue;
                // button.style.display="none";
            });
        });
        button.addEventListener("click",function(){
             if(inputField.value === currentQuestion.deebii.toUpperCase() ){
                updateAnswerIndicator("correct");
                correctAnswer++;
                attempt++;
                button.disabled=true;
                keyboardButtons.forEach(function(button){
                button.classList.add("finished");
                });
                button.classList.add("correct");
                inputField.classList.add("correct");
             }
             else{
                inputField.value="";
                inputField.classList.add("shake");
                inputField.classList.add("incorrect");
                setTimeout(function(){
                    inputField.classList.remove("shake");
                },1000);
             }
        })
        // console.log(keyboardButtons,inputField);
        //  questionText.appendChild(hiddenGame);
        //  questionText.appendChild(game);
        //  var buttons=Array.from(document.getElementsByClassName("keyboard-button")); 
        // var keyboardContainer=document.getElementById("base-class");
        //  var hiddenButtonsContainer=document.getElementById("hidden-buttons-container");
        //  keyboardContainer.addEventListener("click",function(event){
        //     var clickedButton=event.target;
        //      if(clickedButton.classList.contains("keyboard-button")){
        //         hiddenButtonsContainer.appendChild(clickedButton);
        //         clickedButton.addEventListener("click",function(){
        //             keyboardContainer.appendChild(clickedButton);
        //             clickedButton.removeEventListener("click",arguments.callee);
        //         })
        //      }
        //  })
        //  buttons.forEach(function(button){
        //     button.addEventListener("click",function(){
        //         hiddenButtonsContainer.appendChild(button);
        //         button.classList.add("h");
              
        //     })
        //  });
        //  var rebutton=Array.from(document.getElementsByClassName("keyboard-button"));
        //  console.log(rebutton);
        //  var exp=document.getElementById("base-class");
        //  rebutton.forEach(function(button){
        //     button.removeEventListener("click",arguments.callee);
              
        //  });
        //  buttons[0].addEventListener("click",handleButtonClick(buttons[0]));
        //  console.log(buttons);

        // function handleButtonClick(event){
           
        //     var clickedButton=event;
        //     console.log(clickedButton);
        //     hiddenButtonsContainer.appendChild(clickedButton);
        //     clickedButton.addEventListener("click",handleHiddenButtonClick);

        // }
         
    }
     if(currentQuestion.hasOwnProperty("hard")){
        const divs2=document.createElement("img");
        divs2.className="img-gallery";
        divs2.id="first-img";
        divs2.src=currentQuestion.images[0];
        imageContainer.appendChild(divs2);
        questionText.appendChild(imageContainer);
        fullForz(divs2);
        const divs3=document.createElement("img");
        divs3.src=currentQuestion.images[2];
        imageContainer.appendChild(divs3);
        fullForz1(divs3);
        questionText.appendChild(imageContainer);
        const divs4=document.createElement("img");
        divs4.src=currentQuestion.images[4];
        imageContainer.appendChild(divs4);
        fullForz2(divs4);
        const divs5=document.createElement("img");
        divs5.src=currentQuestion.images[6];
        imageContainer.appendChild(divs5);
        fullForz3(divs5);
        questionText.appendChild(imageContainer);
         const input=document.createElement("input");
         input.type=currentQuestion.hard;
         input.id="myInput";
         input.maxLength=currentQuestion.answer[0].length;
        //  input.placeholder=currentQuestion.placehold;
         questionText.appendChild(input);
         const button=document.createElement("button");
         button.setAttribute("onclick","saveInputValue()");
         button.className="btns";
        //  button.setAttribute("type","reset");
         button.innerHTML="check";
         questionText.appendChild(button);
        //  if(currentQuestion.hasOwnProperty("funny")){
        //     const span=document.createElement("span");
        //     span.id="mySpan";
        //     questionText.appendChild(span);
        //  }
        nextB.classList.add("media");
        questionNumber.appendChild(nextB);
        questionText.appendChild(answersIndicatorContainer);
         
     }

    
    questionCounter++;
    }
    function handleHiddenButtonClick(event){
        // var buttons=Array.from(document.getElementsByClassName("keyboard-button"));
        var hiddenButtonsContainer=document.getElementById("hidden-buttons-container");
        var hiddenButton=event.target;
        hiddenButtonsContainer.removeChild(hiddenButton);
        hiddenButton.addEventListener("click",handleButtonClick);
    }
    // function handleButtonClick(event)
    function  toggleAnimation(){
        var back=document.querySelector(".backGround");
        back.classList.toggle("animate");
    }
    function musicQuestion(){
        const sirba=document.getElementById("myMusic");
        sirba.addEventListener("ended", function(){
            sirba.currentTime=0;
            sirba.play();
        })
        const sirbaCheck=document.getElementById("checkM");
        var musicPlay=false;
        sirba.play();  
        sirbaCheck.addEventListener("click",function(){
           
        const inputs=document.getElementById("musicCheck");
          const inputValuee=inputs.value;
            console.log(inputValuee);
            const answerLen=currentQuestion.musicA.length;
            for(let i=0; i<answerLen; i++){
            if(inputValuee===currentQuestion.musicA[i]){
                updateAnswerIndicator("correct");
                inputs.classList.add("agree");
                inputs.disabled=true;
                sirbaCheck.disabled=true;
                correctAnswer++;
                attempt++;
            }
            if(inputValuee !== currentQuestion.musicA[0] && inputValuee !== currentQuestion.musicA[1]){
                if(inputValuee !== currentQuestion.musicA[2]){
                //     const span=document.createElement("span");
                //    questionText.appendChild(span);
                //     span.id="mySpan";
                //    questionText.appendChild(span);
                    inputs.value='';
                    inputs.placeholder=currentQuestion.placehold;
                    inputs.classList.add("shake-animation");
                    inputs.classList.add("error");
             
            setTimeout(function(){
                inputs.classList.remove("shake-animation");
                // inputs.classList.remove("error");
            }, 700)
            if(currentQuestion.hasOwnProperty("funny")){   
                span.classList.add("shake-animation");
                span.innerHTML=currentQuestion.funny;
                setTimeout(function(){
                    span.classList.remove("shake-animation");
                    span.remove();
                }, 5000)
               
                // remove(span);
               
             }
        }
          
        
    
    }

        }})
    
        const sirbaBtn=document.querySelector(".music-btn");
        sirbaBtn.addEventListener("click", function(){
          if(musicPlay){
            sirba.play();
            sirbaBtn.innerHTML="pause";
            musicPlay=false;
          }else{
            sirba.pause();
            musicPlay=true;
            sirbaBtn.innerHTML="play";
          }
          
        })
        
    }
    function  fullForz3(imns){
        imns.addEventListener("click", function(){
            imns.src=currentQuestion.images[7];
            imns.className="full-width";
            // createSpan(imagss);
            dblClickz3(imns);
        })
    }
    function dblClickz3(im){
        im.addEventListener("click",function(){
            im.src=currentQuestion.images[6];
            im.classList.remove("full-width");
            fullForz3(im);
        })
    }
    function fullForz2(imns){
        imns.addEventListener("click", function(){
            imns.src=currentQuestion.images[5];
            imns.className="full-width";
            // createSpan(imagss);
            dblClickz2(imns);
        })
    }
    function dblClickz2(im){
        im.addEventListener("click",function(){
            im.src=currentQuestion.images[4];
            im.classList.remove("full-width");
            fullForz2(im);
        })
    }
    function fullForz1(imns){
        imns.addEventListener("click", function(){
            imns.src=currentQuestion.images[3];
            imns.className="full-width";
            // createSpan(imagss);
            dblClickz(imns);
        })
    }
    function dblClickz(im){
        im.addEventListener("click",function(){
            im.src=currentQuestion.images[2];
            im.classList.remove("full-width");
            fullForz1(im);
        })
    }
    function fullForz(imms){
        imms.addEventListener("click", function(){
            imms.src=currentQuestion.images[1];
            imms.className="full-width";
            // createSpan(imags);
            dblClicks(imms);
        })
    }
    function dblClicks(imss){
        imss.addEventListener("click",function(){
            imss.src=currentQuestion.images[0];
            imss.classList.remove("full-width");
            fullForz(imss);
        })
    }
    function saveInputValue(){
        // inputEl.classList.remove("shake-animation");
        const inputEl=document.getElementById("myInput");
        const button=document.querySelector(".question-text button");
        const inputValue=inputEl.value;
        // if(inputValue !== currentQuestion.answer[0] && inputValue !== currentQuestion.answer[1]){
        //         if(inputValue !== currentQuestion.answer[2] && inputValue !== currentQuestion.answer[3]){
        // const span=document.createElement("span");
        // questionText.appendChild(span);
        // span.id="mySpan";
        // questionText.appendChild(span);
        //         }
        console.log(inputValue);
        const answerLen=currentQuestion.answer.length;
        for(let i=0; i<answerLen; i++){
        if(inputValue===currentQuestion.answer[i]){
            updateAnswerIndicator("correct");
            inputEl.classList.add("agree");
            inputEl.disabled=true;
            button.disabled=true;
            correctAnswer++;
            attempt++;
            if(currentQuestion.hasOwnProperty("audio")){
                playMusic();
                // setTimeout(makeButton,40000);
                const firstImg=document.getElementById("first-img");
                firstImg.style.animation="myAnimation 1s ease infinite";
                
                // setTimeout(function(){
                //     const firstImg=document.getElementById("first-img");
                //     firstImg.style.animationIterationCount="1";
                //     const buttonEl=document.getElementById("myButton");
                //     buttonEl.classList.remove("none");
                //     pauseAudio();
                // },20000)
               
                firstImg.addEventListener("click",function(){
                     pauseAudio();
                     const firstImg=document.getElementById("first-img");
                     firstImg.style.animationIterationCount="1";
                    
                });
            }
        }
    }  
            if(inputValue !== currentQuestion.answer[0] && inputValue !== currentQuestion.answer[1]){
                if(inputValue !== currentQuestion.answer[2] && inputValue !== currentQuestion.answer[3]){
                    const span=document.createElement("span");
                   questionText.appendChild(span);
                    span.id="mySpan";
                   questionText.appendChild(span);
                    inputEl.value='';
                   inputEl.placeholder=currentQuestion.placehold;
                    inputEl.classList.add("shake-animation");
                 inputEl.classList.add("error");
             
            setTimeout(function(){
                inputEl.classList.remove("shake-animation");
            }, 700)
            if(currentQuestion.hasOwnProperty("funny")){   
                span.classList.add("shake-animation");
                span.innerHTML=currentQuestion.funny;
                setTimeout(function(){
                    span.classList.remove("shake-animation");
                    span.remove();
                }, 5000)
               
                // remove(span);
               
             }
        }
          
        
    
    }
}
    // function cont(obj){
    //     obj.classList.remove("shake-animation");
    // }
    // function remove(span){
    //     setTimeout(function(){
    //         span.classList.remove("shake-animation");
    //     }, 700)
    // }
     function playMusic(){
        //  const audiodiv=document.createElement("div");
         const audio=document.createElement("audio");
        audio.setAttribute("src",currentQuestion.audio);
        audio.id="myAudio";
        audio.addEventListener("ended",function(){
            audio.currentTime=0;
            audio.play();
        })
        const button=document.createElement("button");
        button.id="myButton";
        button.innerHTML="celebrate";
        button.classList.add("hide");
        button.classList.add("none");
        // button.innerHTML="CELEBRATE";
        questionText.appendChild(audio);
        questionText.appendChild(button);
        // console.log(audio);
        //  audiodiv.className="audiodiv";
        //  audiodiv.innerHTML=`<audio src="${currentQuestion.audio}" id="myAudio" class="pl" controls></audio>`;
        // //  console.log(audiodiv);
        //  questionText.appendChild(audiodiv);
         realPlay();
        // next(musicObj);
     }
    //  function makeButton(){
    //     // const button=document.getElementById("myButton");
    //     // button.id="myButton";
    //     // questionText.appendChild(button);
    //     exebtn();
    //  }
    //  function exebtn(){
    //     const buttonEl=document.getElementById("myButton");
    //     const musicobj=document.getElementById("myAudio");
    //      buttonEl.innerHTML="celebrate";
    //     //  buttonEl.classList.add("hide");
    //     //  buttonEl.remove();
    //      buttonEl.addEventListener("click",function(){
    //          if(isPlaying){
    //              musicobj.play();
    //              buttonEl.classList.add("none");
    //             //  isPlaying=false;
    //             //  buttonEl.textContent="play";
    //              firstImgAnimation();

    //          }
    //         //  else{
    //         //      musicobj.play();
    //         //      isPlaying=true;
    //         //      buttonEl.textContent="pause";
    //         //  }
    //      })
    //  }

     function realPlay(){
        const musicobj=document.getElementById("myAudio");
        musicobj.play();
    //    musicobj.addEventListener("ended",function(){
    //     musicobj.currentTime=0;
    //     musicobj.play();
    //    });
       
     }
     function pauseAudio(){
        const musicobj=document.getElementById("myAudio");
         musicobj.pause();
         const buttonEl=document.getElementById("myButton");
         buttonEl.innerHTML="celebrate";
         buttonEl.classList.add("hide");
         buttonEl.classList.remove("none");
        //  buttonEl.remove();
         buttonEl.addEventListener("click",function(){
             if(isPlaying){
                 musicobj.play();
                 buttonEl.classList.add("none");
                //  isPlaying=false;
                //  buttonEl.textContent="play";
                 firstImgAnimation();
                 setTimeout(function(){
                    buttonEl.classList.remove("none");
                 },10000);

             }
            //  else{
            //      musicobj.play();
            //      isPlaying=true;
            //      buttonEl.textContent="pause";
            //  }
         })
     }
     function firstImgAnimation(){
        // playMusic();
        const firstImg=document.getElementById("first-img");
        const buttonEl=document.getElementById("myButton");
        firstImg.style.animation="myAnimation 1s ease infinite";
        setTimeout(function(){
            firstImg.style.animationIterationCount="1";
        },20000);
        firstImg.addEventListener("click",function(){
            
            // pauseAudio();
            buttonEl.classList.remove("none");
        });
     }
    function fullImg(imag){
        imag.addEventListener("click", function(){
            imag.src=currentQuestion.imgFull;
            imag.className="full-width";
            createSpan(imag);
        });
    }
    function fullFor(imags){
        imags.addEventListener("click", function(){
            imags.src=currentQuestion.img2;
            imags.className="full-width";
            // createSpan(imags);
            dblClickk(imags);
        })
    }
    function fullFors(imagss){
        imagss.addEventListener("click", function(){
            imagss.src=currentQuestion.img4;
            imagss.className="full-width";
            // imagss.style.animation="myAnimation 1s ease infinite";
            // createSpan(imagss);
            dblClick(imagss);
        })
    }
    function dblClickk(imss){
        imss.addEventListener("click",function(){
            imss.src=currentQuestion.img1;
            imss.classList.remove("full-width");
            fullFor(imss);
        })
    }
   function dblClick(im){
    im.addEventListener("click",function(){
        im.src=currentQuestion.img3;
        im.classList.remove("full-width");
        fullFors(im);
    })
   }
    
 function createSpan(imgg){
    var spani=document.createElement("span");
    spani.innerHTML="X";
    spani.className="spa";
    questionText.appendChild(spani);
    spani.addEventListener("click",function(){
    // imgg.src=currentQuestion.img;
    imgg.classList.remove("full-width");
   var spanM= document.querySelectorAll("span");
   for(let i=0; i<spanM.length; i++){
    spanM[i].innerHTML='';
   }
    })
    // spani.innerHTML=''
 }
function getResult(selectedBtn){
//    selectedBtn.innerHTML="maatuqxe";
  const id=parseInt(selectedBtn.id);
  if(id === currentQuestion.answer){
   selectedBtn.classList.add("correct");
   updateAnswerIndicator("correct");
   correctAnswer++;
  }
  else{
    // jokePlay();
    // const myJoke=document.getElementById("audij");
    // console.log(myJoke)
    if(currentQuestion.hasOwnProperty("jokes")){
        // const jokes=document.createElement("audio");
        // jokes.id="audij";
        // jokes.setAttribute("src",currentQuestion.jokes);
        const myJoke=document.getElementById("audij");
        myJoke.play();
        console.log(myJoke);
        
    }
    
   selectedBtn.classList.add("incorrect");
   updateAnswerIndicator("incorrect");
   const opti=optionContainer.children.length;
   for(let i=0; i<opti; i++){
    if(parseInt(optionContainer.children[i].id) === currentQuestion.answer){
        optionContainer.children[i].classList.add("correct");
    }
   }
  }
  attempt++;
  unclickable();
}
  
    
//   function jokePlay(){
//     const myJoke=document.getElementById("audij");
//     myJoke.play();
//   }
function unclickable(){
    const optionhundaa=optionContainer.children.length;
    for(let i=0; i<optionhundaa; i++){
        optionContainer.children[i].classList.add("unclick");
    }
}
function answerIndicator(){
    answersIndicatorContainer.innerHTML='';
    const totalQuestion=quizLimit;
    for(let i=0; i<totalQuestion; i++){
     const indicators=document.createElement("div");
    answersIndicatorContainer.appendChild(indicators); 
    questionText.appendChild(answersIndicatorContainer);
    }
  
}
function updateAnswerIndicator(mark){
    answersIndicatorContainer.children[questionCounter-1].classList.add(mark);
}


function next(){
    nextB.classList.remove("newNext");
    nextB.classList.remove("newNextimg");
    questionText.classList.remove("backGround");
    
    if(questionCounter === quizLimit){
       console.log("quiz is over");
    //    const musicobj=document.getElementById("myAudio");
    //    musicobj.pause();
       quizOver(); 
    }
    else{
        if(currentQuestion.hasOwnProperty("music")){
            const sirba=document.getElementById("myMusic");
            sirba.pause();
        }
        getNewQuestion();
    }
}
function quizOver(){
    
    quizBox.classList.add("hide");
    // resultBox.classList.remove("hide");
        quizResult();
    if(correctAnswer >= 8){
        createReaction();
    }else if(correctAnswer < 8 && attempt >0 ){
        // resultBox.classList.remove("hide");
        createReaction2();
    }
    else{
        resultBox.classList.remove("hide"); 
    }
    
}
 function createReaction2(){
    const selectedVideo=Math.floor(Math.random()*Videosrc2.length);
    const times=duration[selectedVideo];
    videos.innerHTML=`<video id="myVideo"><source src="${Videosrc2[selectedVideo]}" type="video/mp4"></video>`;
    videos.classList.remove("hide");
    playVideo2(times);
    console.log(videos);
 }
function createReaction(){
    const selectedVideo2=Math.floor(Math.random()*Videosrc.length);
    const yeroo=duration1[selectedVideo2];
    videos.innerHTML=`<video id="myVideo" ><source src="${Videosrc[selectedVideo2]}" type="video/mp4"></video>`;
    videos.classList.remove("hide");
    console.log(videos);
    playVideo(yeroo);
}
function playVideo(yeroo){  
    const reaction=document.getElementById("myVideo");
    videos.appendChild(reaction);
    reaction.play(); 
    setTimeout(function(){
        videos.classList.add("hide"); 
        resultBox.classList.remove("hide");
        quizResult();
    },yeroo);
   
}
function playVideo2(times){  
    const reaction=document.getElementById("myVideo");
    videos.appendChild(reaction);
    reaction.play(); 
    setTimeout(function(){
        videos.classList.add("hide"); 
        resultBox.classList.remove("hide");
        quizResult();
    },times);
   
}
function quizResult(){
     resultBox.querySelector(".total-question").innerHTML=quizLimit;
     resultBox.querySelector(".total-attempt").innerHTML=attempt;
     resultBox.querySelector(".total-correct").innerHTML=correctAnswer;
     resultBox.querySelector(".total-wrong").innerHTML=attempt-correctAnswer;
     const percent=(correctAnswer/quizLimit)*100;
     resultBox.querySelector(".percentage").innerHTML=percent.toFixed(2)+"%";
     resultBox.querySelector(".total-score").innerHTML=correctAnswer+" / "+ quizLimit;
}
function resetQuiz(){
 questionCounter= 0;
 correctAnswer=0;
 attempt=0;
 availableQuestions =[];
 
}
function tryAgain() {
    quizBox.classList.remove("hide");
    resultBox.classList.add("hide");
    resetQuiz();
    startQuiz();

}
function goHome(){
    resultBox.classList.add("hide");
    homeBox.classList.remove("hide");
    resetQuiz();
}
 function startQuiz(){
    quizBox.classList.remove("hide");
    homeBox.classList.add("hide"); 
    setAvailableQuestions();
    getNewQuestion();
    answerIndicator();
}
function setBody(){
    Body.style.backgroundImage=`url(${bodyImg[Math.floor(Math.random()*bodyImg.length)]})`;
    // Body.style.backgroundRepeat="no-repeat";
    // Body.style.backgroundSize="contain";
}
window.onload=function(){
    homeBox.querySelector(".total-question").innerHTML=quizLimit;
    setBody();
    // handleButtonClick(event);

}
