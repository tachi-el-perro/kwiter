var firebaseConfig = {
  apiKey: "AIzaSyCo9ZoxXz6Z7YNKaSTftVxtvaiQg51Nook",
  authDomain: "gabykwitter.firebaseapp.com",
  databaseURL: "https://gabykwitter-default-rtdb.firebaseio.com",
  projectId: "gabykwitter",
  storageBucket: "gabykwitter.appspot.com",
  messagingSenderId: "375494562676",
  appId: "1:375494562676:web:cce71e5e00a8c1f4b4d221",
  measurementId: "G-QF2EYB16JZ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "¡Bienvenido " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "Agregar nombre de sala"
  });
  localStorage.setItem("room_name", room_name);
  //Agregar después de probar que funciona la firebase:
  window.location = "kwitter_page.html";
}

function getData() {
  firebase.database().ref("/").on('value', function(snapshot) 
  {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) 
  {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
      console.log("Nombres de salas -" + Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //Final del código
      }); }); }
  getData();

  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name" , name);
    window.location ="kwitter_page.html";
  }

  function logOut()
  {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = ("index.html")
  }



      
