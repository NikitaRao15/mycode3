console.log('lets start ');

//object create
const rectangle1 ={
    length:1,
    breadth:2,
    //behaviour
    draw:function()
     {
        console.log('drawing rectangle');
    }
};
//factory function
function createRectangle(){
return rectangle=
{
    length:1,
    breadth:2,
    //behaviour
    draw()
     {
        console.log('drawing rectangle');
    }
}
}
let rectangleobj1=createRectangle();

function createRectangle(len,bre){
    return rectangle=
    {
        length:len,
        breadth:bre,
        //behaviour
        draw()
         {
            console.log('drawing rectangle');
        }
    }
    }
    let rectangleobj2=createRectangle(44,32);


    //constructor function......pascalnotation...first letter is always capital,
    function CreateRectangle()
    {
        this.length=1;
        this.breadth=2;
        this.draw=function(){
            console.log('drawing');
        }
    }

    //obj creation
    let Rectangle=new CreateRectangle();