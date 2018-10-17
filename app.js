// get the url
var url = window.location.href;

//getting the access token from url
var access_token = url.split("#")[1].split("=")[1].split("&")[0];

// get the userid
var userId = url.split("#")[1].split("=")[2].split("&")[0];

//data past a week until today

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.fitbit.com/1/user/'+ userId +'/activities/steps/date/today/1w.json');
//if you only want one day, change 1w to 1d
xhr.setRequestHeader("Authorization", 'Bearer ' + access_token);
xhr.onload = function() {
   if (xhr.status === 200) {
      console.log(xhr.responseText);
      document.write(xhr.responseText);
	  document.write("<br><br><br><br>");
	  
	  
	  var fbdata = xhr.responseText; //raw response json 
	  var fbarray = JSON.parse(fbdata); //now it's an array or object or whatever

	  document.write(fbarray['activities-steps'][6].value); //actually prints out steps for 7th day (today)
	  
	  /*
	  for an example, this is what the raw json response was:
	  
	  {"activities-steps":[{"dateTime":"2018-10-10","value":"19"},{"dateTime":"2018-10-11","value":"0"},{"dateTime":"2018-10-12","value":"0"},{"dateTime":"2018-10-13","value":"0"},{"dateTime":"2018-10-14","value":"0"},{"dateTime":"2018-10-15","value":"117"},{"dateTime":"2018-10-16","value":"7195"}]}
	  
	  so since the element in the json we want to parse (activities-steps) has a hyphen (thanks a lot fitbit), we have to put it in the quote notation
	  
	  then we say "give me the first object in the json array", which is the data for a specific date
	  
	  in our case above, we're pulling a week so this will pull the first day in the week of data we pulled back
	  
	  lastly the .value says "in the day of data you're looking at, pull back the value for the label "value"" 
	  
	  so it pulls back step value for the first day. 
	  
	  */
	  
 
	  
	  document.write("<br><br><br><br>");
	  document.write("Script completed. Congrats!");
	  
   }
};
xhr.send()

