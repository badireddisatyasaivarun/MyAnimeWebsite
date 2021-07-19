const express = require('express');
const hbs = require('hbs');
const path = require('path');
const retrieve = require('./utils/retrieve');
const port = process.env.PORT||3000;

const app = express();

const public_path = path.join(__dirname,'../public');
const views_path = path.join(__dirname,'../template/views');
const partials_path = path.join(__dirname,'../template/partials');

//console.log(public_path);
app.set('view engine','hbs');
app.set('views',views_path);

hbs.registerPartials(partials_path);
app.use(express.static(public_path));

app.get('/',(req,res)=>{
res.render('index',{
  title: 'My Anime Website',
  name: 'Badireddi Satya Sai Varun'
});
})

app.get('/src',(req,res)=>{

 // 'https://kitsu.io/api/edge/anime?filter[text]=cowboy%20bebop'
 if(req.query.name=="")
 {
   return res.send({error:'Please enter a valid Anime name !!'});
 }

 const name = req.query.name;

  retrieve(name,(data)=>{
    res.send(data);
  })

})

app.get('/*',(req,res)=>{
  res.render('error',{
      title:'Error',
      name: 'Badireddi Satya Sai Varun',
      message: 'Page not found',
      url: 'home'
  });  
})

app.get('/home/*',(req,res)=>{
  res.render('error',{
      title:'Error',
      name: 'Badireddi Satya Sai Varun',
      message: 'Page not found',
      url: 'home'
  });  
})
 

app.listen(port,()=>{
  console.log('server started');
})
