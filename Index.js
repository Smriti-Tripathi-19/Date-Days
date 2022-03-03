let amount=2000000;
let tax=1;

if(amount>=0 && amount<=250000)
{
    tax=0;
}
else if(amount>250000 && amount<= 500000 )
{
    tax=(5*amount)/100.0;
}
else if(amount>500000 && amount<=750000 )
{
    tax=(10*amount)/100.0;
}
else if(amount>750000 && amount<= 1000000 )
{
    tax=(15*amount)/100.0;
}
else if(amount>1000000 && amount<=1250000 )
{
    tax=(20*amount)/100.0;
}
else if(amount>1250000 && amount<= 1500000 )
{
    tax=(25*amount)/100.0;
}
else if(amount>1500000)
{
    tax=(30*amount)/100.0;
}
else
{
    tax=-1;
}

if(tax==-1)
{
    console.log("Invalid Input")
}
else
{
    console.log(tax);
}
