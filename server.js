
import express from 'express'
import { students } from './data/students-data.js'

// Create Express app



const app = express()
app.set('view engine', 'ejs')

app.listen(3000, function() {
    console.log('Listening on port 3000')
})

// Mount routes
app.get('/', function(req, res) {
    res.redirect('/students')
})

app.get('/students', function(req, res){
    res.render('students/index',{
        students: students

    })
    
})

