

//New Members Widget

var newMemberName = document.getElementById("new-member-list").querySelectorAll(".member-name");
var newMemberEmail = document.getElementById("new-member-list").querySelectorAll(".member-email");
var newMemberDate = document.getElementById("new-member-list").querySelectorAll("li .date");
var newMemberAvatar = document.getElementById("new-member-list").querySelectorAll("li .member-avatar");

    //Member Data

    var newMemberData = [
        {"name": "Vann Miles",
          "image": "https://randomuser.me/api/portraits/men/80.jpg",
          "icon": "icons/post.svg",
          "email": "van.miles@WEBxSolutions.com",
          "date": "10/6/16",
          "activity": " posted Blog: 'Cyber Security Solutions...'",
          "activity_time": "8 hours ago"},
        {"name": "Jasmine Dade",
          "image": "https://randomuser.me/api/portraits/women/36.jpg",
          "icon": "icons/like.svg",
          "email": "jasmine.dade@WEBxSolutions.com",
          "date": "10/8/16",
          "activity": " signed up for Google Alerts",
          "activity_time": "6 hours ago"},
        {"name": "Amaya Rene Lewis",
          "image": "https://randomuser.me/api/portraits/women/6.jpg",
          "icon": "icons/comment.svg",
          "email": "amaya.lewis@WEBxSolutions.com",
          "date": "10/16/16",
          "activity": " posted Blog: 'Women In Web Design...'",
          "activity_time": "5 hours ago"},
        {"name": "Greg Trout III",
          "image": "https://randomuser.me/api/portraits/men/25.jpg",
          "icon": "icons/like.svg",
          "email": "greg.trout3@WEBxSolutions.com",
          "date": "10/21/16",
          "activity": " Shared Facebook post",
          "activity_time": "3 hours ago"},
        {"name": "Kimberly Mack",
          "image": "https://randomuser.me/api/portraits/women/92.jpg",
          "icon": "icons/post.svg",
          "email": "kimberly.mack@WEBxSolutions.com",
          "date": "10/22/16",
          "activity": " posted on Twitter",
          "activity_time": "2 hours ago"}
        ];

// Replace placeholder text with member data from JSON
    //jQuery used to create forEach loops because the syntax is much easier to understand

$.each(newMemberData, function(i, item) {
    var fullName = newMemberData[i].name;
        $(newMemberName).each(function() {
            $(newMemberName[i]).text(fullName);
        });
    var email = newMemberData[i].email;
        $(newMemberEmail).each(function() {
            $(newMemberEmail[i]).text(email);
        });
    var date = newMemberData[i].date;
         $(newMemberDate).each(function() {
             $(newMemberDate[i]).text(date);
         });
     var avatar = newMemberData[i].image;
        $(newMemberAvatar).each(function() {
            $(newMemberAvatar[i]).attr('src', avatar);
        });
 });


// Member Activity Widget

var activityMemberName = document.getElementById("member-activity-list").querySelectorAll("li .member-name"); //holds both name and activity

var activityTime = document.getElementById("member-activity-list").querySelectorAll("li .activity-time");
var memberAvatar = document.getElementById("member-activity-list").querySelectorAll("li .member-avatar");
var activityIcon = document.getElementById("member-activity-list").querySelectorAll("li .activity-icon");

// Replace placeholder text with member activity data from JSON

$.each(newMemberData.reverse(), function(i, item) {
    var fullName = newMemberData[i].name;
    var activity = newMemberData[i].activity;
        $(activityMemberName).each(function() {
            $(activityMemberName[i]).text(fullName + " " + activity);
        });

    var time = newMemberData[i].activity_time;
        $(activityTime).each(function() {
            $(activityTime[i]).text(time);
        });

     var avatar = newMemberData[i].image;
        $(memberAvatar).each(function() {
            $(memberAvatar[i]).attr('src', avatar);
        });

 });


//Validate Message Form & Modals
function validateForm(event) {
    var messageUser = document.forms["messageForm"]["searchUser"].value;
    var messageContent = document.forms["messageForm"]["message"].value;
    if ( messageUser === null || messageUser === "" ) { //if the user field is empty
        $('#msg-whoops').fadeIn('slow').delay(2000).fadeOut('slow'); //show error message
        event.preventDefault(event); //stop page from reloading
    } else if ( messageContent === null || messageContent === "" ) { //if the message field is empty
        $('#msg-whoops').fadeIn('slow').delay(2000).fadeOut('slow'); //show error message
        event.preventDefault(event);
    } else {
        $('#msg-submit').fadeIn('slow').delay(2000).fadeOut('slow'); //otherwise, show sent message
         $("input[name='searchUser']").val(""); //clears text
         $("textarea").val(""); //clears text
         event.preventDefault(event);
    }
}

$(".send-button").click(function(event) {
    validateForm(event);
});
