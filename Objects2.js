function Person(firstName,lastName,dob)
{
	this.firstName=firstName;
	this.lastName=lastName;
	this.dob=new Date(dob);
	this.getBirthYear=function()
	{
		return this.dob.getFullYear();

	}
}

const person1=new Person('Saket','B','03-27-2002');

console.log(person1.dob.getFullYear() );
console.log(person1.getBirthYear());