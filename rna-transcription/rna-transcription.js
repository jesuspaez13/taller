export const toRna = (rna) => {

  if (rna.length==1) {
    return mapping[rna]
  } else {
    let string = '';
    for (var key in rna) {
      var value = rna[key];
      string += mapping[value];
    }
    return string
  }
};

let mapping = { "G": "C", "C": "G", "T": "A", "A": "U" };