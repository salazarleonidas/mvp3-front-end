export class Processo {
    numeroRegistro!: string;
    data: Date;
    cpf!: string;

    constructor(model?: Processo){
        this.numeroRegistro = model?.numeroRegistro ?? '';
        this.data = model?.data ?? new Date();
        this.cpf = model?.cpf ?? '';
    }
}