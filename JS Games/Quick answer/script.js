const btn = document.getElementById("answerMe");
const questionBox = document.getElementById("questBox");
btn.addEventListener("click",Answer);
questionBox.addEventListener("keyup",(event) => {
    var code = event.code;
        if(code == "Enter")
        {
            Answer();
        }
  });
function Answer()
{
    const responseArray =['hi','yes','no','ok','bye','I agree','I dont feel good'
            ,'Im happy','Im young','You are new in town'];
    const question = questionBox.value;
    var answerIndex = Math.floor(Math.random()*responseArray.length);
    var answer = question +" : "+responseArray[answerIndex];
    document.getElementById('answerLabel').innerHTML = answer;
    document.getElementById("questBox").value = ""; 
}