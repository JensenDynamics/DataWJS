# DataWJS

DataWJS is the Javascript browser based analog to the DataWS server library. Use this code to push and pull data from a DataWS server. Multiple servers/clients may be run at once using differing ports. 


## Example

```JS
ws = setupConnection("192.168.1.5","5598");   //sets up a connection to ip 192.168.1.5 on port 5598

sendData(ws,dataArray); //sends dataArray to the connection setup ws 

setupReceive(ws,callback);   //user defined callback function fires when server pushes data.
//can this work? 


```
