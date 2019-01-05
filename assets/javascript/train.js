//Get Train info from firebase
//print to page

var trainNames =[];

addTrainToFirebase();


//add train, click submit then push the info to firebase
//print to page

function addTrainToFirebase(){
    
    var config = {
        apiKey: "AIzaSyCb5CmRoCFPMgGcNKOx4ULoxw_k6ljjyg0",
        authDomain: "newtest-329d1.firebaseap p.com",
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

        trainNames.push(trainName);

        database.ref(trainName).set({
        Destination: destination,
        Frequency: frequency,
        NextArrival : "01:39 PM",
        MinutesAway: "1154"
      });

        var body = $("body");
        var table = body.find("#table");
        var tablestring = "<tr><td>"+ trainName 


      
        var leadsRef = database.ref(trainName);
        //console.log(leadsRef);
        leadsRef.on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
        var childData = childSnapshot.val(); 

        tablestring = tablestring + "</td><td>"+childData 
        console.log("database"+childData);
      });

      tablestring = tablestring + "</td></tr>"
      console.log(tablestring)
      renderHTML(tablestring)
    })
      
    })
}

function renderHTML(htmlstring){
    var body = $("body");
    var table = body.find("#table");

    table.append(htmlstring);
                
}