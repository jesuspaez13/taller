export const decodedValue = (two_colors) => {
  const COLORS = ['black','brown','red','orange','yellow','green','blue','violet','grey','white'];
  let indice_uno = COLORS.indexOf(two_colors[0]);
  let indice_dos = COLORS.indexOf(two_colors[1]);
  return +`${indice_uno}${indice_dos}`;
};


