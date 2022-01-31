function Teacher(education, experience){
    this.Education = education;
    this.Experience = experience;
}

function Person1(name, subject, education, experience){
    this.Name = name;
    this.Subject = subject;
    Teacher.call(this, education, experience)
}

function Person2(name, subject, education, experience){
    this.Name = name;
    this.Subject = subject;
    Teacher.apply(this, arguments)
}

function Person3(name, subject, education, experience){
    this.Name = name;
    this.Subject = subject;
    Teacher.bind(this, education, experience)()
}



let person1 = new Person1("Vaibhav Jarwekar", "Biology", "Nagpur University", "4 year" );
console.log(person1);

let person2 = new Person2("Ratnesh Singh", "Chemistry", "Delhi University", "2 year" );
console.log(person2);

let person3 = new Person3("Shalom Sonekar", "Physics", "Mumbai University", "3 year" );
console.log(person3);