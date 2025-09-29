let users = [];

//task1
const basicServer = (req, res) => {
    res.send("Server is running");
};

//task2
const helloWorld = (req, res) => {
    res.json({ message: "Hello World!" });
};

//task3
const greet = (req, res) => {
    const { name } = req.body;
    res.json({ message: `Hello, ${name}` });
};

//task4
const addUser = (req, res) => {
    const { id, name } = req.body;
    users.push({ id, name });
    res.status(201).json({ message: "User added.", user: { id, name } });
};

//task5
const getAllUsers = (req, res) => {
    res.json(users);
};

//task6
const getUserById = (req, res) => {
    const { id } = req.params;
    const user = users.find(u => u.id === id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ error: "User not found." });
    }
};

//task7
const updateUserById = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const user = users.find(u => u.id === id);
    if (user) {
        user.name = name;
        res.json(user);
    } else {
        res.status(404).json({ error: "User not found." });
    }
};

//task8
const deleteUserById = (req, res) => {
    const { id } = req.params;
    const idx = users.findIndex(u => u.id === id);
    if (idx !== -1) {
        users.splice(idx, 1);
        res.json({ message: "User deleted." });
    } else {
        res.status(404).json({ error: "User not found." });
    }
};

//task9
const countUsers = (req, res) => {
    res.json({ count: users.length });
};

module.exports = { basicServer, helloWorld, greet, addUser, getAllUsers, getUserById, updateUserById, deleteUserById, countUsers};
