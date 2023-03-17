const apuesta = require("../models/apuesta");

const apuestaGet = async (req, res) => {
  const apuestas = await apuesta.findAll();

  res.json(apuestas);
};

const apuestaGetName = async (req, res) => {
  let { name } = req.query;
  const apuestatodas = await apuesta.findAll();
  console.log(apuestatodas);

  const apuestas = apuestatodas.filter((e) =>
    e.name.toLowerCase().includes(name.toLowerCase())
  );

  res.json(apuestas);
};

const apuestaPost = async (req, res) => {
  let { name, value1, value2, value3, value4,nameVendedor } = req.body;

  try {
    const apuestas = new apuesta({ name, value1, value2, value3, value4,nameVendedor });

    await apuestas.save();

    res.send("transaction created");
  } catch (error) {
    console.log(error);
    res.send({ msg: error });
  }
};



const apuestaDelete = async (req, res) => {
  let { uid } = req.query;

  await apuesta.destroy({
    where: {
      uid: uid,
    },
  });
  res.send("transaction destroy");
};

module.exports = {
  apuestaGet,
  apuestaPost,
  apuestaDelete,
  apuestaGetName,
};
