import Usuario from "../contenedores/modelUsuario.js";

const getUsuarioService = async (email) => {
  const usuarioEnviar = await Usuario.findOne({ email });
  return usuarioEnviar;
};

const postUsuarioService = async (newUser) => {
  const usuarioEnviar = await Usuario.create(newUser);
  return usuarioEnviar;
};

const updateUsuario = async (userEmail, id) => {
  const usuarioEnviar = await Usuario.updateOne(
    { email: userEmail },
    { carrito: id }
  );
  return usuarioEnviar;
};

export {
  getUsuarioService,
  postUsuarioService,
  updateUsuario,
};
