
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDsKbXAP8Zxv3L0Ab0XViw4BqloOqSIYLY",
      authDomain: "kwitter-b5734.firebaseapp.com",
      databaseURL: "https://kwitter-b5734-default-rtdb.firebaseio.com",
      projectId: "kwitter-b5734",
      storageBucket: "kwitter-b5734.appspot.com",
      messagingSenderId: "676934614307",
      appId: "1:676934614307:web:c1c06a1d5ef05bb9ec6096"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

function addRoom(){
      room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html"
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row ="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" +Room_names + "</div><hr>";
      document.getElementById("output").innerHTML+= row;

      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";

}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";

}