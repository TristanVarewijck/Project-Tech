// Met de require() method kan je javascript modules in laden. 
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

// settings
app.use(bodyParser.urlencoded({​​​​​​​​
  extended:true
  }​​​​​​​​));

// Komt later in een data base zodat je deze Data makelijk kan ophalen 
let groups = [
  {
    "activity": "all",
    "distance": 10,
    "members": "0-10",
    "duration": "2hours"
  },
  {
    "activity": "all",
    "distance": 15,
    "members": "0-10",
    "duration": "2hours"
  },
  {
    "activity": "all",
    "distance": 20,
    "members": "0-10",
    "duration": "2hours"
  },
  {
    "activity": "all",
    "distance": 25,
    "members": "0-10",
    "duration": "2hours"
  }
];


app.post('/', (req,res) => {​​​​​​​​
  const filteredGroups = groups.filter(function(group){​​​​​​​​
    return group.distance >= Number(req.body.distance)
  }​​​​​​​​)

  res.render('index',{​​​​​​​​
    title: 'ActiveTogether',
    results: filteredGroups.length,
    activitys: ['cycling','walking','jogging','fishing'],
    saved: 0,
    groupMembers: "6/20",
    data: filteredGroups
  }​​​​​​​​)
}​​​​​​​​)



// statische pagina's
app.use(express.static('public'));

// pug setup
app.set("view engine", "pug");
// app.set("views", path.join(__dirname, "views"));


// pug files 
app.get('/',  (req, res) => {
  res.render('index', { 
    title:'ActiveTogether',
    results:126,
    activitys:['cycling', 'walking', 'jogging', 'fishing'],
    saved:0,
    groupMembers:"6/20"
  })
})

app.post('/test',  (req, res) => {
  console.log(req.body);
})


// 404 pagina 
 app.use(function (req, res, next) {
 res.status(404).send("404 error")
})


// server 
app.listen(port, () => {
console.log(`Example app listening on port ${port}!`)
});












