var express = require('express')
var bodyParser = require("body-parser")
var app = express()

app.use(bodyParser.json())

//..Chatty! ...
var messages = [{
	msg: "Lets  put another shrimp on the Barbee!!"

}];
//get / - list all the messages
app.get('/', function(req, res){
	res.status(200).json(messages)
})
//post / -update the messages on request
app.post('/', function (req, res){
	var newMessage = req.body
	messages.push(newMessage)
	res.status(201).json(newMessage)
})
app.listen(3000);
// var onRequest = function(req, res){

// 	if (req.method == 'POST') {
//        var postData = '';
//        req.on('data', function(chunk) {
//            postData += chunk.toString();
//         });    
//         req.on('end', function() {
//             console.log("I got it!");
//             console.log(postData);
//             messages.push(JSON.parse(postData));
//             res.end(JSON.stringify(messages));
//        });
//     } else if(req.method == 'GET'){
//     	res.writeHead(200, {
// 		'Connection': 'close',
// 		'Content-Type': 'application/json',
// 		'Access-Control-Allow-Origin': '*'
// 	});
// 	res.end(JSON.stringify(messages));
//     }


	
// }


