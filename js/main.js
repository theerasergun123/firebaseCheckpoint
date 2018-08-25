var config = {
    apiKey: "AIzaSyBjGqOFN_tHx16IDn63dmDURB2JK62EYyw",
    authDomain: "fir-form-9b8d5.firebaseapp.com",
    databaseURL: "https://fir-form-9b8d5.firebaseio.com",
    projectId: "fir-form-9b8d5",
    storageBucket: "fir-form-9b8d5.appspot.com",
    messagingSenderId: "1077064394697"
  };
  firebase.initializeApp(config);

  var ratingRef = firebase.database().ref("Ratings")



  function saveRatings (name, lastName, email, role, note){
    var newRatingRef = ratingRef.push();
    newRatingRef.set({
      Name:name, LastName:lastName, Email:email, Role:role, Rating:note 
    })


  }

  document.getElementById("theform").addEventListener("submit", submitForm);
  
  function submitForm(e){
    e.preventDefault()
    
    var name = getInputValue("fn");
    var lastName = getInputValue("ln");
    var email = getInputValue("whichOne");
    var role = getInputValue("role");
    var note = getInputValue("feedback");
    saveRatings(name, lastName, email,role, note );
    

  }



  function getInputValue(id){
   return document.getElementById(id).value;
};











var gamePics = [
    
    "res/codww2.jpg",
    "res/gow.jpg",
    "res/sly3.jpg",
    
  ];
  
  var size = gamePics.length
  var x = Math.floor(size*Math.random())
  document.getElementById('gameImg').src=gamePics[x];

  
