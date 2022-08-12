const { request } = require('express');
const express = require('express');
const router = express.Router();

router.get('/students/:name', function (req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get("/random", function (req, res) {
    res.send("hi there")
})


router.get("/test-api", function (req, res) {
    res.send("hi FunctionUp")
})


router.get("/test-api-2", function (req, res) {
    res.send("hi FunctionUp. This is another cool API")
})


router.get("/test-api-3", function (req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
})


router.get("/test-api-4", function (req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})



router.get("/test-api-5", function (req, res) {
    res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})

router.get("/test-api-6", function (req, res) {
    res.send({ a: 56, b: 45 })
})

router.post("/test-post", function (req, res) {
    res.send([23, 45, 6])
})


router.post("/test-post-2", function (req, res) {
    res.send({ msg: "hi", status: true })
})

router.post("/test-post-3", function (req, res) {
    // let id = req.body.user
    // let pwd= req.body.password

    // console.log( id , pwd)

    console.log(req.body)

    res.send({ msg: "hi", status: true })
})



router.post("/test-post-4", function (req, res) {
    let arr = [12, "functionup"]
    let ele = req.body.element
    arr.push(ele)
    res.send({ msg: arr, status: true })
})


let players =
    [
        {
            "name": "manish",
            "dob": "1/1/1995",
            "gender": "male",
            "city": "jalandhar",
            "sports": [
                "swimming"
            ]
        },
        {
            "name": "gopal",
            "dob": "1/09/1995",
            "gender": "male",
            "city": "delhi",
            "sports": [
                "soccer"
            ],
        },
        {
            "name": "lokesh",
            "dob": "1/1/1990",
            "gender": "male",
            "city": "mumbai",
            "sports": [
                "soccer"
            ],
        },
    ]

// let Booking =[
//     {
//         "bookingNumber": 1,
//          "sportId": 4588512 ,
//         "centerId": 24587511,
//         "type": "private",
//         "slot": "16286598000000",
//         "bookedOn": "31/08/2021",
//         "bookedFor": "01/09/2021"
//        }

// ]

// router.post('/players', function (req, res) {

//     let newPlayer = req.body
//     let newPlayersName = newPlayer.name
//     let isNameRepeated = false

//     //let player = players.find(p => p.name == newPlayersName)

//     for(let i = 0; i < players.length; i++) {
//         if(players[i].name == newPlayersName) {
//             isNameRepeated = true;
//             break;
//         }
//     }

//     //undefined is same as false/ a falsy value
//     if (isNameRepeated) {
//         //Player exists
//         res.send("This player was already added!")
//     } else {
//         //New entry
//         players.push(newPlayer)
//         res.send(players)
//     }
// });


// router.post('/players/:playerName/bookings/:bookingId', function (req, res) {

//     let newPlayer = req.params.playerName
//     let newBookingId = req.params.bookingId
//     // let isNameRepeated = false

//     //let player = players.find(p => p.name == newPlayersName)

//     for(let i = 0; i < players.length; i++) {
//         if(players[i].name == newPlayersName) {
//             isNameRepeated = true;
//             break;
//         }
//     }

//     //undefined is same as false/ a falsy value
//     if (isNameRepeated) {
//         //Player exists
//         res.send("This player was already added!")
//     } else {
//         //New entry
//         players.push(newPlayer)
//         res.send(players)
//     }
// });

let persons = [
    {
        name: "PK",
        age: 10,
        votingStatus: false,
    },
    {
        name: "SK",
        age: 20,
        votingStatus: false,

    }, {
        name: "AA",
        age: 70,
        votingStatus: false,
    }, {
        name: "SC",
        age: 5,
        votingStatus: false,
    },
    {
        name: "HO",
        age: 40,
        votingStatus: false,
    }
]

router.post("/solution1", function (req, res) {
    let input = req.query.age
    let final = persons.filter(a => a.age > input);
    let final1 = final.map(x => x.voting = true)
    let final2 = persons
    res.send({ persons })
})



router.post('/players', function (req, res) {

    let newPlayer = req.body
    let newPlayersName = newPlayer.name
    let availabel = false


    for (let i = 0; i < players.length; i++) {
        if (players[i].name === newPlayersName) {
            availabel = true
            break;
        }
    }
        if (availabel) {
            res.send({ data: "Player Name Already Exist", staus: false })
        } else {
            players.push(newPlayer)
            res.send({ data: players, status: true })
        }

});

let person=[
    {
        name:"pk",
        age:10,
        votingStatus:false
    },{
        name:"sk",
        age:10,
        votingStatus:false
    },{
        name:"AA",
        age:70,
        votingStatus:false
    },{
        name:"SC",
        age:5,
        votingStatus:false
    },{
        name:"HO",
        age:40,
        votingStatus:false
    }
]

router.post("/votingStatus" , function(req, res) {
    const votingAge=req.query.votingAge;
    const votingPerson=person.filter(ele=>ele.age>votingAge? ele.votingStatus=true : ele.votingStatus=false)
    res.send(votingPerson)
})

router.post("/test-api-9", function (req, res) {
   let data = req.body
console.log(data)
    res.send({ data})
})




module.exports = router;