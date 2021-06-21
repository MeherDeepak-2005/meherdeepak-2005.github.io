// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCMuoY19qSGbDZnbWAKUXq_eDSMgU0PF5o",
    authDomain: "alan-317202.firebaseapp.com",
    databaseURL: "https://alan-317202-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "alan-317202",
    storageBucket: "alan-317202.appspot.com",
    messagingSenderId: "381217737278",
    appId: "1:381217737278:web:88cbf7c330e4ba99fddf6f",
    measurementId: "G-15Q6G8NXEK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var stdNo = 0;
function addItemsToList(name,titles){
    var ul = document.getElementById('list');
    var title = document.createElement('li');
    var names = document.createElement('li');
    names.className = 'list-name'
    title.className = 'list-title'
    names.innerHTML =  name;
    title.innerHTML =  titles;
    ul.appendChild(names)
    ul.appendChild(title)

}

function FetchAllData(){
    firebase.database().ref('Titles').once('value',function(snapshot){
        snapshot.forEach(
            function(ChildSnapshot){
                let name = ChildSnapshot.val().Name;
                let titles = ChildSnapshot.val().Title;
                addItemsToList(name,titles);
            }
        );
    });

}

FetchAllData();