//DataWJS Main Code Repository

//defines the DWJS main class:
var DWJS = {}

//sets up a connection to a particular ip and port.
// returns the socket handle
//. type refers to datatype transmitted. pass a string containing the type name
// types may be the following:
// "float" "double" "int"
DWJS.setupConnection = function(ip,port,type)
{
	var ip_address = 'ws://' + ip + ":"+port+"/";
	var ws = new WebSocket(ip_address);
	ws.binaryType="arraybuffer";

	return ws;
}

//send data to the server:
DWJS.sendData = function(ws,DataArray)
{
	ws.send(DataArray);
}

//user must define a callback function and setup the function here:
// the function must take in an array of the same datatype as its input
DWJS.setupReceive = function(ws,userCallback)
{
	ws.onmessage = function(event) {
		if(event.data instanceof ArrayBuffer)
		{
		buffer  = event.data;
		var z = new Float32Array(buffer);
		if(hasUserCallback)
		{
		userCallback(z);
		}

		}
	};

}

//send data
