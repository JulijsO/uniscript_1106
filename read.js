// $(document).ready(function () {
  
//     $("p").mouseenter(
//     function () {
//       $(this).find("span").each(function (i,e){
//             $("p span").removeClass("hover");
//             $(e).addClass("hover");
//             var msg = new SpeechSynthesisUtterance();
//             msg.text = $(e).text();
//             speechSynthesis.speak(msg);

//       });
      
//     }
    
//   );
// });













$(document).ready(function () {
  
    $("span").click(
    function () {
      var msg = new SpeechSynthesisUtterance();
      msg.text = $(this).text();
      speechSynthesis.speak(msg);
    }
  );
  $("p").click(
    function () {
      var msg = new SpeechSynthesisUtterance();
      msg.text = $(this).text();
      speechSynthesis.speak(msg);
    }
  );
  $(".number").click(
    function () {
      var msg = new SpeechSynthesisUtterance();
      msg.text = $(this).text();
      speechSynthesis.speak(msg);
    }
  );
  $("textPath").click(
    function () {
      var msg = new SpeechSynthesisUtterance();
      msg.text = $(this).text();
      speechSynthesis.speak(msg);
    }
  );
});