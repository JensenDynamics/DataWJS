# DataWJS

DataWJS is the Javascript browser based analog to the DataWS server library. Use this code to push and pull data from a DataWS server. Multiple servers/clients may be run at once using differing ports.


## Example

```JS
ws = DWJS.setupConnection("192.168.1.5","5598","float");   //sets up a float type connection to ip 192.168.1.5 on port 5598

DWJS.sendData(ws,dataArray); //sends dataArray to the connection setup ws

DWJS.setupReceive(ws,myCallback);   //user defined callback function fires when server pushes data.


```

The user defined callback function should take a single argument. This is used to transfer the data to the function.

for example:
```JS

myCallback(dataArray)
{
  //do something with the data array here
  plot(dataArray);
}
```

In this example a dataArray of the same type that was setup in "setupConnection" is loaded into the callback function
and used to pass that data to the user defined function "plot"
