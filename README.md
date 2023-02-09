# README
This project contains 2 main folders: client and server.
## STRUCTURE OF PROJECT
First, cd to folder server and run command line: ```npm start``` to start the server at localhost 3001.
After that, cd out and cd to the folder client and run command line: ```npm start``` to start the frontend.
## TECHNOLOGY
This project implements both server side and client side. 
In terms of client side, I use ReactJS and a CSS framework - Tailwind CSS to design the user interface, Axios - a HTTP Client library to call API, Sweetalert2 - a library for popup windows. In the mean time, in server side, I use ExpressJS - a backend framework, Twilio to implement sending SMS function, Realtime Firebase as Database. I also store Environment Variables in .env file for security.
## HOW TO USE
This is the homepage of the project.
![image](https://user-images.githubusercontent.com/48018773/217746077-23a35740-e83a-405c-b969-75029e0da6f7.png)
As you can see in the image above, there are 2 input fields, the first one is where you type your phone number (in this case it is my phone number: 0971144787 - string type). By default, the second input field is disabled until your phone number is checked by system.
![image](https://user-images.githubusercontent.com/48018773/217746538-6a3c0b73-d083-4a7d-af3a-4531ee8ebdbc.png)

As you can see in the image above, the system has checked your phone number and found it in the database, the access code is then sent to your phone number; meanwhile, the second input field is enabled so that you can type the access code you have received recently.
![image](https://user-images.githubusercontent.com/48018773/217746987-6ed35945-44ef-4fb1-b3a9-b14727435b70.png)
As you can see in the image above, this is the message from Twilio containing the access code.
![image](https://user-images.githubusercontent.com/48018773/217747131-6867a39e-e1ca-4b0d-9b17-34af8eb5d5d7.png)
![image](https://user-images.githubusercontent.com/48018773/217747189-d14413d9-0792-4405-88f2-b8fb712abd4b.png)
As you can see from the two images above, your access code has been accepted and a success popup shows up.
In case you type wrong access code, the failure popup shows up like this below.
![image](https://user-images.githubusercontent.com/48018773/217747425-e4f634ea-0d22-4b26-8e0d-326dce7ff11c.png)
In case you type wrong phone number (system cannot find it in database), the failure popup shows up like this below.
![image](https://user-images.githubusercontent.com/48018773/217747620-652ba8d7-c9ac-420b-b4c6-bcf5a0b23369.png)
## THE END
