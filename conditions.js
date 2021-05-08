function addNums(num1 ,num2 )

{
     console.log(num1+num2);
}

addNums(5,2);


function addNums2(num1,num2)
{
	return num1+num2;

}
console.log(addNums2(5,4));

const addNums3 = (num1=1,num2=2) =>
{
	return num1+num2;

}
console.log(addNums3(10,10));

const addNums4 = (num1,num2)=> num1+num2;

console.log(addNums4(20,20));