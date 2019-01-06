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

        firstTrainTime = firstTrainTime.split(":");
        console.log("firsttraintime"+firstTrainTime);
        firstTrainTimeInMinutes = parseInt(firstTrainTime[0])*60+parseInt(firstTrainTime[1]);
        console.log("firstfTrainTimeInMinutes"+firstTrainTimeInMinutes);

 
        var currtime = moment().format('HH:mm:ss');
        console.log("NOW"+currtime)
        currtime = currtime.split(":")
        currtimeInMinutes = parseInt(currtime[0])*60+parseInt(currtime[1]);
        var nextTrain = firstTrainTimeInMinutes;

        console.log("CurrTime"+currtimeInMinutes)
        console.log("nexttrain"+nextTrain);

        while(nextTrain < currtimeInMinutes)
        {
            console.log(nextTrain)
            nextTrain = nextTrain+parseInt(frequency);
        }
    
        
        console.log("Next Train"+nextTrain)
        
        nextTrainTime = Math.floor(nextTrain / 60) + ':' + nextTrain % 60

        nextTrainFromNow = nextTrain - currtimeInMinutes;
        nextTrainFromNowHM =  Math.floor(nextTrainFromNow/ 60) + ':' + nextTrainFromNow % 60
       

        database.ref(trainName).set({
        Destination: destination,
        Frequency: frequency,
        NextArrival : nextTrainTime,
        zMinutesAway: nextTrainFromNowHM
      });

        var body = $("body");
        var table = body.find("#table");
        var tablestring = "<tr><td>"+ trainName 

        /*

        first train time: 5:15 mins


        frequency: 20 mins

        5:35, 5:55, 6:15, 

        next train time: ?

        In how many minutes: ?







        */


      
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