
const mongoose=require('mongoose')

const foodSchema=new mongoose.Schema({
    name:String,
    category:String,
    calories:Number,
    protein_g:Number,
    carbohydrates_g:Number,
    sugar_g:Number,
    fiber_g:Number,
    vitamin_c_mg:Number
})

const FoodNutrition=new mongoose.model('foodnutrition',foodSchema);
module.exports=FoodNutrition;