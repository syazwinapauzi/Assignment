const express = require('express')
const app = express()
const port = 3000

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://NorSyazwina:jtxGHWf4CPgi6FGI@cluster0.juze51h.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

//collection
const db = client.db("ApartmentVisitorManagement");
//const collectionadmin = db.collection('Admin');
const dbVisitor = db.collection('Visitor');

app.use(express.json())

app.post('/login', (req, res) => {
    console.log(req.body)
    let result = login(req.body.username, req.body.password)
    //let token = generateToken(result)
    res.send(result)
  })
  
  app.get('/', (req, res) => {
    res.send('Welcome!')
  })
  
//   app.get('/bye', verifyToken, (req, res) => {
//     res.send('Bye Bye UTeM!')
//   })
  
  app.post('/register', (req, res) => {
    console.log(req.body)
    register.insertOne(Visitor)
    let result1 = register
    (
      req.body.Visitor_id,
      req.body.Name,
      req.body.Phone_Number,
      req.body.Address,
      req.body.Floor_Wing,
      req.body.Whom_to_meet,
      req.body.Reason_to_meet

    )
    res.send(result1)
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

//database for admin
let collectionadmin = [
    {
        admin_id: "Awin11",
        username: "syazwinapauzi",
        password: "123456"
    },
    {
        admin_id: "Aida22",
        username: "nuraida",
        password: "789100"
    },
    {
        admin_id: "Farah33",
        username: "farahizzati",
        password: "456789"
    },
    {
        admin_id: "Mini44",
        username: "Hashmini",
        password: "567890"
    }
]

//database for visitor
/*dbVisitor = [

    {
        Visitor_id:"0002",
        Name: "Syazwani Nizam",
        Phone_Number: "0192838424",
        Address: "Norndjandasidasd",
        Apartment_No: "B000",
        Floor_Wing: "2_j",
        Whom_to_meet:"Risa",
        Reason_to_meet:"Kenduri"
    }

]*/

//function login admin
function login(a,b)
{
    let matchadmin = collectionadmin.find
    (
     N => N.username==a   
    )

    if(!matchadmin) return "User not found!"
    if(matchadmin.password == b){
         return matchadmin
    }
    else
    {
        return "Invalid password"
    }     
}

//view visitor
function view(o,g)
{
    let matchVisitor = dbVisitor.find
    (
     N => N.Visitor_id==o   
    )

    if(!matchVisitor) return "Visitor not found!"
    if(matchVisitor.Name == g){
         return matchVisitor
    }
    else
    {
        return "Invalid Data"
    }     
}

//to create new visitor
// function register(o,g,d,i,j,k,l,m)
// {
//     dbVisitor.push
//     (
//         {
//             Visitor_id: o,
//             Name: g,
//             Phone_Number: d,
//             Address: i,
//             Apartment_No: j,
//             Floor_Wing: k,
//             Whom_to_meet:l,
//             Reason_to_meet:m
//         }
//     )
// }


//register("0001","Siti Sarah Salehuddin","0182184725","No 17, Jalan ST permai 4,sdsadnsan",
//"A107","2_3","Muhamed Ali","Family Gathering")

console.log(view("0001","Siti Sarah Salehuddin"))
console.log(view("0003","Kamelia"))