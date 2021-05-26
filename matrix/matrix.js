const desmembra = (str) => {
 
  str = str.split("\n").map((elem) => elem.split(" ").map((elem) => Number(elem)));
  return str;
};

const transposta = (matrix) => matrix[0].map((x, i) => matrix.map((x) => x[i])); 

export class Matrix {
  constructor(str) {
      this.matrix = desmembra(str);
      this.transposta = transposta(this.matrix);
  }

  get rows() {
      return this.matrix;
  }
  get columns() {
      return this.transposta;
  }
  get all() {
      return this.matrix;
  }
}
