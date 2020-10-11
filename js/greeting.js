// Get the hour
var today = new Date();
var Hr = today.getHours();

// Here you can change your name
var name = 'Oluxmw';

// Here you can change your greetings
var gree1 = 'C\'est l\'heure de dormir! ';
var gree2 = 'Bonjour ';
var gree3 = 'Bonne après-midi ';
var gree4 = 'Bonsoir ';
var gree5 = 'Bonne soirée ';
var gree6 = 'BONNE SOIRÉE ';

// Define the hours of the greetings
if (Hr >= 23 && Hr < 5) {
    document.getElementById('greetings').innerText = gree1 + name;
} else if (Hr >= 6 && Hr < 12) {
    document.getElementById('greetings').innerText = gree2 + name;
} else if (Hr >= 12 && Hr < 17) {
    document.getElementById('greetings').innerText = gree3 + name;
} else if (Hr >= 17 && Hr < 23) {
    document.getElementById('greetings').innerText = gree4 + name;
}
