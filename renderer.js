// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var app = require('electron').remote;
const { clipboard } = require('electron')
clipboard.writeText('Example String')

var dialog = app.dialog;
var fs = require('fs');
var $ = require("jquery");

var blub="";
var allDebugMessages = [];

var PORT = 80;
var HOST = '127.0.0.1';
var dgram = require('dgram');
var server = dgram.createSocket('udp4');

server.on('listening', function() {
  var address = server.address();
 console.log('UDP Server listening on ' + address.address + ':' + address.port);
});

server.on('message', function(message, remote) {
 console.log(remote.address + ':' + remote.port +' - ' + message);

 try { fs.writeFileSync('myfile.txt', message, 'utf-8'); }
catch(e) { alert('Failed to save the file !'); }

     var scope = angular.element($("#app")).scope();
     scope.$apply(function(){
          var rawJson = JSON.parse(message);
 console.log(rawJson);
          for(var i = 0; i < rawJson.length; i++){
               switch (rawJson[i].type) {
                   case 'array':
                         rawJson[i].formattedMessage = JSON.stringify(rawJson[i].message, undefined, 4);
                         break;
                    case 'string':
                          rawJson[i].formattedMessage = rawJson[i].message;
                          break;
                   default:
                        rawJson[i].formattedMessage = rawJson[i].message;
                        break;

              }
              }
              scope.allDebugMessages = rawJson;
              console.log(allDebugMessages);
              document.querySelectorAll('pre code').forEach((block) => {
             });
          });






     });

server.bind(PORT, HOST);


  var data = fs.readFile('myfile.txt', 'utf-8', (err, data) => {
  });
