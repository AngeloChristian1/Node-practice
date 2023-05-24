const getName = (req, res) => {
  res.send("exercises check");
};
const putName = (req, res) => {
  const data = req.body;
  const nbr = req.query.id;
  res.send([data]);
};
const postName = (req, res) => {
  let name = req.params.name;
  res.send(name);
};

const deleteName = (req, res) => {
  const gotId = req.params.id;
  // const ids = [12, 45, 25, 32, 40];
  // let nameExit = ids.includes(gotId);
  const data = req.body;
  res.send([gotId, data]);
};

export { getName, postName, putName, deleteName };
