export class Lancamento {
    constructor(
        public data: string,
        public tipo: string,
        public localizacao: string,
        public funcionario: string,
        public id?: string,
 
    ) { }
}