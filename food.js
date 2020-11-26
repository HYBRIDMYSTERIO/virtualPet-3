class Food
{
    constructor(){
        
        
        this.image = loadImage("Milk.png");
    }

    getFoodStock(){
        var FoodStockRef = database.ref("foodStoke");
        FoodStockRef.on("value", function(data){
            foodStock = data.val();
        });
    }

    updateFoodStock(stock){
        database.ref('/').update({
            foodStock:stock
        })
    }
    display(){
        var x= 80, y=100;

        imageMode();
        image(this.image, 120, 220, 70,70);

       if(this.foodStock != 0){
           for(var i=0; i<this.foodStock; i++){
               if(i%10){
                   x= 80;
                   y = y+50
               }
               image(this.image,x,y,50,50);
               x= x+30;
           }
       }
    }
}