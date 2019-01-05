//Get Train info from firebase
//print to page

addTrainToFirebase();

//getInfoFromFirebase();
/*
function getInfoFromFirebase(){
    var config = {
        apiKey: "AIzaSyCb5CmRoCFPMgGcNKOx4ULoxw_k6ljjyg0",
        authDomain: "newtest-329d1.firebaseapp.com",
        databaseURL: "https://newtest-329d1.firebaseio.com",
        projectId: "newtest-329d1",
        storageBucket: "newtest-329d1.appspot.com",
        messagingSenderId: "102202319156"
      };
      firebase.initializeApp(config);

      var database = firebase.database();
    
      console.log(database);


      var leadsRef = database.ref('Oregon Trail');
      //console.log(leadsRef);
      leadsRef.on('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
       // console.log(childSnapshot.val());
      var childData = childSnapshot.val(); 
      console.log(childData);
    });
  
});

      /*firebase.database().ref('Oregon Trail').set({
        Destination: "Salem, Oregon",
        Frequency: "3600",
        NextArrival : "01:39 PM",
        MinutesAway: "1154"
      });

}

*/
//add train, click submit then push the info to firebase
//print to page

function addTrainToFirebase(){
    
    var config = {
        apiKey: "AIzaSyCb5CmRoCFPMgGcNKOx4ULoxw_k6ljjyg0",
        authDomain: "newtest-329d1.firebaseapp.com",
        databaseURL: "https://newtest-329d1.firebaseio.com",
        projectId: "newtest-329d1",
        storageBucket: "newtest-329d1.appspot.com",
        messagingSenderId: "102202319156"
      };
      firebase.initializeApp(config);

      var database = firebase.database();

      //click submit button 
      
      $('#submitbutton').on("click", function (page) {
        page.preventDefault();
        var trainName = $("#trainName").val()
        var destination = $("#destination").val()
        var firstTrainTime = $("#firstTrainTime").val()
        var frequency = $("#frequency").val()

        console.log(trainName)
        console.log(destination)
        console.log(firstTrainTime)
        console.log(frequency)

        database.ref(trainName).set({
        Destination: destination,
        Frequency: frequency,
        NextArrival : "01:39 PM",
        MinutesAway: "1154"
      });

      }); 



}