const sendAllUsers = (req, res) => {

  res.setHeader('Content-Type', 'application/json');

  res.end(JSON.stringify(req.userArray));
};

const sendCreatedUsers = (req, res) =>{
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(req.user));
};

const sendUserById = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.user));
};

const sendUserUpdated = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200).send(JSON.stringify({ message: "Пользователь обновлен" }));
};

const sendUserDeleted = (req, res) => {
  // Объект игры отправляем в формате JSON 
res.setHeader("Content-Type", "application/json");
// Отправляем на клиент найденный и удалённый элемент из базы данных
res.end(JSON.stringify(req.user));
}; 

const sendMe = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.user));
}; 

module.exports = {sendAllUsers, sendCreatedUsers, sendUserById, sendUserUpdated, sendUserDeleted, sendMe};
