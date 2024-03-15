const express=require('express');
const app=express();
const port=3200;
const foodnutrition=require('./models/foodinfo');
const FoodNutrition = require('./models/foodinfo');
require('./db/conn')
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('<h1>Welcome To API Creation</h1>')
})

app.get('/getfooddata',async(req,res)=>{
    try{
        const getfood=await foodnutrition.find({});
        res.status(201).send(getfood)
    }
    catch(e){
        console.log(e)

    }

})



app.post('/foodnutrition',async (req,res)=>{
    try{
        console.log('req.body',req.body);
        const addingfoodRecord=new foodnutrition(req.body);
        console.log('addingfoodRecord',addingfoodRecord);
        const insertData=await addingfoodRecord.save();
        console.log(insertData);
        res.status(201).send(insertData)
    }
    catch(e){
        console.log(e);
    }
})

app.delete('/food/calories',async(req,res)=>{
    const ranking=req.params.calories;
    try{
        const deleteRecord=await FoodNutrition.findOneAndDelete({calories});
        if(!deleteRecord){
            return res.status(400).json({error:'Player Not Found'});

        }
        res.status(200).json(deleteRecord)
    }
    catch(e){
        console.log(e)
    }
})

app.delete('/food/:calories',async(req,res)=>{
    const calories=req.params.calories;
})


app.listen(port,()=>{
    console.log('Server is listening at port number ${port}');
})
