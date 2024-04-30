interface DirectorInterface{
	workFromHome():string
	getCoffeeBreak():string
	workDirectorTasks():string

}


interface TeacherInterface{
	workFromHome():string
	getCoffeeBreak():string
	workTeacherTasks():string

}

class Director implements DirectorInterface{
	workFromHome(): string {
		return `Working from home`;
	}

	getCoffeeBreak(): string {
		return `Getting a coffee break`;
	}

	workDirectorTasks(): string {
		return `Getting to director tasks`;
	}
}


class Teacher  implements TeacherInterface{
	workFromHome(): string {
		return `Cannot work from home`;
	}

	getCoffeeBreak(): string {
		return `Cannot have a break`;
	}

	workTeacherTasks(): string {
		return `Getting to work`;
	}
}

const createEmployee = (salary: number | string): Director | Teacher => {
	if(Number(salary) < 500){
		return new Teacher()
	}else{
		return new Director()
	}
}

/*
Write a function isDirector:

it accepts employee as an argument
it will be used as a type predicate and if the employee is a director
*/



