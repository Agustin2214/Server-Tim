const numero = require("../models/numeroganadores");

const numeroGet = async (req, res) => {
  const numeros = await numero.findAll();

  res.json(numeros);
};

const numeroGetName = async (req, res) => {
  let { name } = req.query;
  const numerotodas = await numero.findAll();
  console.log(numerotodas);

  const numeros = numerotodas.filter((e) =>
    e.name.toLowerCase().includes(name.toLowerCase())
  );

  res.json(numeros);
};

const numeroPost = async (req, res) => {
  let { value1, value2, value3, value4, value5, value6, value7, value8, value9, value10, value11, value12, value13, value14, value15, value16, value17, value18, value19, value20} = req.body;

  try {
    const numeros = new numero({value1, value2, value3, value4, value5, value6, value7, value8, value9, value10, value11, value12, value13, value14, value15, value16, value17, value18, value19, value20 });

    await numeros.save();

    res.send("transaction created");
  } catch (error) {
    console.log(error);
    res.send({ msg: error });
  }
};

const numeroPut = async (req, res) => {
  let { uid, name, value, date } = req.body;
  const numero = await numero.findOne({ where: { uid: uid } });

  await numero.update({
    name: name,
    value1: value,
    value2: value,
    value3: value,
    value4: value,
    nameVendedor,
  });
  res.send("transaction edited");
};

const numeroDelete = async (req, res) => {
  let { uid } = req.query;

  await numero.destroy({
    where: {
      uid: uid,
    },
  });
  res.send("transaction destroy");
};

module.exports = {
  numeroGet,
  numeroPost,
  numeroPut,
  numeroDelete,
  numeroGetName,
};
