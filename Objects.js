const person=
{
	firstName:'Saket', lastName:'B',age:30,hobbies:['music','movies','sports'], address:
	{
		street: 'Saketham',city:'Trivandrum',state:'Kerala'
	}
	
}
console.log(person);

console.log(person.firstName);
console.log(person.hobbies[1]);
console.log(person.firstName,person.lastName);
  
console.log(person.address.city);

const { firstName,lastName, address: {city}}=person;

console.log(city);

person.email='saketb2703@gmail.com';
console.log(person);


const todos=
[
{
	id:1,text:'Take out trash',isCompleted: false
},
{
	id:1,text:'Meeting with Virat', isCompleted:true
},
{
	id:1,text:'Match watch',isCompleted:true
}
];

console.log(todos[1].text);

for(let i=0;i<3;i++)
{
	console.log(todos[i]);
}

for(let todo of todos)
{
	console.log(todos);
}

//forEach,map,filter(35-45 mins)









