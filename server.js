var http = require('http');

var messages = [{
	msg: "This is Ryans first Node sever!"

}];
var onRequest = function(req, res){

	if (req.method == 'POST') {
       var postData = '';
       req.on('data', function(chunk) {
           postData += chunk.toString();
        });    
        req.on('end', function() {
            console.log("I got it!");
            console.log(postData);
            messages.push(JSON.parse(postData));
            res.end(JSON.stringify(messages));
       });
    } else if(req.method == 'GET'){
    	res.writeHead(200, {
		'Connection': 'close',
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*'
	});
	res.end(JSON.stringify(messages));
    }


	
}
http.createServer(onRequest).listen(3000);

