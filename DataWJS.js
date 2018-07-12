//DataWJS Main Code Repository 

function get_current_ip_address() // returns the ip address of the current device
{
	console.log(window.location.hostname);
	return window.location.hostname;
}




//sets up a connection to a particular ip and port. 
function setupConnection(ip,port)
{	
	var ip_address = 'ws://' + ip + ":"+port+"/";
	var ws = new WebSocket(ip_address);
	ws.binaryType="arraybuffer";
	

}
