//DataWJS Main Code Repository 

function get_current_ip_address() // returns the ip address of the current device
{
	console.log(window.location.hostname);
	return window.location.hostname;
}


var ip_address = 'ws://' + get_current_ip_address() + ":4567/";
