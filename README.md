# todo-react a.k.a Bartodos
My take on Todos using ReactJS. Additionally list is sortable using jquery-ui

#Dependencies
- React@0.13.3
- React-tools
- jQuery
- jQuery-ui@1.11.4
- httpster@1.0.1
To install it run following NPM command
$ npm install


#JSX compile
Before starting a server compile jsx file to js by running
- $ jsx js/ build/

JSX transformer will take source files located in js folder, compile them to JS file and output to 'build' folder.
Every time new changes are made to files in 'js' folder run above command

#Local Server
To run local server I use httpster.
Navigate to folder where project is installed and run following command
$ npm start

It will start start localhost at port 4321 and open a new browser window to display TODO list
