export interface Carta {
    pregunta: string;
    respuesta: string;
}

export interface Mazo {
    nombre: string;
    cartas: Carta[];
}