# node-verify-ethereum-sig-example
Example of signing a message and verifying on your node.js backend the user who sent it. 


<br>

## Goal

We want the frontend to be able to send messages to the backend in a way that is not vulnerable to one user impersonating another.

Blockchain gives us the ability to do this (and solidity does it automtically in a way with `msg.sender`), but you need to manually ensure the check is happening in a hypothetical backend node.js server that works with your app. 

<br/>

## Express Project

- 2 endpoints: save favorite number, read favorite number

- Each endpoint unpacks the "signed" message which contains the number, and stores it (in local memory, but that could easily be extracted out to a database or some other data store).

