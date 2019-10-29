//Imported the Express module
var express = require('express')


//Initialized the Express object
var app = express()

//Create proper API authentican later
const secret_key ='d8e7147d4964d67cc668c920da31d9ac';

app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.post('/notes', function(request, response){
  let data = request.body;
    console.log(request.body);
    console.log('---------------');
  //  console.log(request.body.auth_key);
    // if(request.body.auth_key && request.body.auth_key === secret_key){
    //   console.log("Step-1");
    //   console.log(request.body.auth_key);
    //       if(data.user_name && data.phone_number && data.discount_code ){
    //         console.log(data.user_name,'ABCD',data.phone_number);
    //
    //       }else{
    //         console.log('SOME FIELD MISSING IN JSON');
    //       }
    //
    // }else{
    //   console.log('KEY NOT MATCHED')// XXX:;
    // }


      console.log("Step-1");
      console.log(data[0][0].a.a1);
          if(data[0][0].a.a1 === data[1][0].a.a1){
            console.log(data[1][1].d);

          }



});

// app.post(){
//   //check if post request has auth key present it in and is equal to secret_key
//   //if true
//     // check if the POST request has "discount_code" & "user_name" & "phone_number"
//       // If true
//         //log them  - https://stackoverflow.com/questions/40880094/create-log-file-in-nodejs/40880386
//         // call Shopify API to create "Discount code" using https://help.shopify.com/en/api/reference/discounts/discountcode
//
//}

//Added a handler for GET /notes which responds to the request with a JSON object with sample notes
app.get('/notes', function(req, res) {
  res.json({notes: "This is your notebook. Edit this to start saving your notes!"})
})

//Told express to listen to HTTP requests on port 3000
app.listen(3000)
    // console.log(key);

