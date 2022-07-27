const buscarPorRaridade = ({ target }, cartas) => {
  if (target.value !== 'todas') {
    const filtrar = cartas.filter((carta) => carta.raridadeCarta === target.value);
    return filtrar;
  }
  return cartas;
};
export default buscarPorRaridade;
