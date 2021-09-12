let myImage = document.querySelector('img');

/*here we create a nameless function. The conditional takes the src attribute 
of our image and changes it to another src value. This means it retrieves a 
different image. The image on our page will cycle between two images. All of
this can only occur when we click the image (as a result of the ".onclick" 
function)*/
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/groggu.jpg') {
      myImage.setAttribute('src','images/mandalorian.jpeg');
      myImage.setAttribute('alt','Picture of the Mandalorian from the Mandalorian TV series');
    } else {
      myImage.setAttribute('src','images/groggu.jpg');
      myImage.setAttribute('alt','Picture of Grogu from the Mandalorian TV series');
    }
}

/*We set some variables to be called in functions below*/
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    /*the prompt function is similar to alert() 
    but asks the user to enter some data into a field*/
    let myName = prompt('Please enter your name.');
    /*the below conditional checks whether the myName field is left blank (null)
    after hitting 'OK', if it is, the prompt appears again to enter name.
    If it isn't blank then we change the heading according to this variable*/
    if (!myName) {
        setUserName();
    } 
    else {
        /*In the line below we call an API called localStorage, this allows
        us to store data in the browser and retrieve it later (e.g. if website is
        refreshed)*/
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Hello, ' + myName + ' welcome to the website!';   
    }
}

/*Initialisation code - Code that structures the app as it loads
This checks whether the name data exists, if not then we run our function,
if there is existing data then we set the heading according to the same
rule we have in the above function*/
if(!localStorage.getItem('name')) {
    setUserName();
} 
else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hello, ' + storedName + ' welcome to the website!';
}

/*This code says that once our button is clicked run the setUserName function,
this gives the user an option to change the username*/
myButton.onclick = function() {
    setUserName();
}