
/*----example1
let person={
    name:'john',
    birthyear:2000,
    place:'hyd',
    Age()
    {
        return 2020
    }
}
console.log(person.name)
console.log(person.Age())
-----*/

/*----example for class and object
class person{
    setDetails(name,birthyear,place,gender)
    {
        this.name=name
        this.birthyear=birthyear
        this.place=place
        this.gender=gender
    }
    Age()
    {
        console.log(`my name is ${this.name} and iam born in the year ${this.birthyear} located at ${this.place}`)
    }
}
   
let p1=new person()
p1.setDetails('john',2000,'hyd','male')
console.log(p1)
p1.Age()

let p2=new person()
p2.setDetails('merry',2001,'goa','female')
console.log(p2)
p2.Age()
-----*/

/*---constructor example----*/
class person
{
    constructor(name,birthyear,place,gender)
    {
        this.name=name
        this.birthyear=birthyear
        this.place=place
        this.gender=gender
    }
    Age()
    {
        console.log(`my name is ${this.name} and iam born in the year ${this.birthyear} located at ${this.place}`)
    }
}
let p1=new person('john',2000,'hyd','male')
console.log(p1)
p1.Age()

let p2=new person('merry',2001,'goa','female')
p2.Age()