// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}


const users = [
    new User(12, 'Jon', 'Matias', 'Matis@gmail.com', '+380054535443'),
    new User(1, 'Mon', 'Pavlov', 'pavlov@gmail.com', '+38348743834873'),
    new User(16, 'Bob', 'Panasov', 'panasov@gmail.com', '+3800832483238'),
    new User(15, 'Jake', 'Junov', 'junov@gmail.com', '+3804838438843238'),
    new User(11, 'Jana', 'Lenova', 'lenova@gmail.com', '+380348438848238'),
    new User(71, 'Marina', 'Panasov', 'kojo@gmail.com', '+3800328848238'),
    new User(123, 'Boromir', 'Novoselov', 'novoselov@gmail.com', '+380435344438'),
    new User(19, 'Polina', 'Ivanova', 'ivanova@gmail.com', '+3800934834238'),
    new User(10, 'Melon', 'Rybak', 'rybak@gmail.com', '+3803458838484388'),
    new User(31, 'Tomas', 'Tomasov', 'tomasov@gmail.com', '+380344383478338'),
    new User(18, 'Jerry', 'Personov', 'jerry@gmail.com', '+38034349834238'),
];

console.log(users);


//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

const filterUsers = users.filter((user) => user.id % 2 === 0);
console.log(filterUsers);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

const sortUsers = filterUsers.sort((a, b) => a.id - b.id);
console.log(sortUsers);
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    id;
    name;
    surname;
    email;
    phone;
    order;

    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

const clients = [
    new Client(12, 'Jon', 'Matias', 'Matis@gmail.com', '+380054535443', ['butter', 'bear', 'bread', 'oil']),
    new Client(1, 'Mon', 'Pavlov', 'pavlov@gmail.com', '+38348743834873', ['butter', 'bread', 'oil']),
    new Client(16, 'Bob', 'Panasov', 'panasov@gmail.com', '+3800832483238', ['butter', 'bear', 'bread',]),
    new Client(15, 'Jake', 'Junov', 'junov@gmail.com', '+3804838438843238', ['butter', 'bread', 'oil']),
    new Client(11, 'Jana', 'Lenova', 'lenova@gmail.com', '+380348438848238', ['butter', 'bread', 'oil']),
    new Client(71, 'Marina', 'Panasov', 'kojo@gmail.com', '+3800328848238', ['butter', 'bear', 'oil']),
    new Client(123, 'Boromir', 'Novoselov', 'novoselov@gmail.com', '+380435344438', ['butter', 'bear', 'oil']),
    new Client(19, 'Polina', 'Ivanova', 'ivanova@gmail.com', '+3800934834238', ['bear', 'oil']),
    new Client(10, 'Melon', 'Rybak', 'rybak@gmail.com', '+3803458838484388', ['butter', 'bear', 'bread', 'oil']),
    new Client(31, 'Tomas', 'Tomasov', 'tomasov@gmail.com', '+380344383478338', ['butter', 'oil']),
    new Client(18, 'Jerry', 'Personov', 'jerry@gmail.com', '+38034349834238', ['butter', 'bear', 'oil']),
]

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

const sortClients = clients.sort((a, b) => a.order.length - b.order.length);
console.log(sortClients);