var time = require('time'); 
exports.handler = (event, context, callback) => { 
    var currentTime = new time.Date();  
    currentTime.setTimezone("America/New Work"); 
    callback(null, { 
        statusCode: '200', 
        body: 'The time in New York is: ' + currentTime.toString(), 
    }); 
}; 
