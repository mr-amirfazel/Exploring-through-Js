const holder = document.querySelector("input");

function add(value)
{
    if(value === '')
        clear();
        else{ 
    holder.value+=value;
    console.log("el called");
        }
}
function clear()
{
    console.log("clear called");
    holder.value ="";
    console.log(holder.value);
}
function result()
{
    if(holder.value.length==0 || holder.vale == "")
    {
        alert("fill the input");
        return;
    }
    try{
        let ans = eval(holder.value);
        holder.value = ans;
    }
    catch(err)
    {
        alert("invalid input");
        clear();
    }

}