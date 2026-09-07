interface Perfume {
    id: number,
    perfume: string,
    perfil: string,
    notas_de_salida: string,
    notas_de_corazon_cuerpo: string,
    notas_de_fondo_secado: string,
    duracion: string,
    uso: string,
    comentario: string
};

const fragance : Perfume[] = [
    {
        id: 1,
        perfume: "Bade’e Al Oud – Oud for Glory Lattafa",
        perfil: "Oriental · amaderado · especiado · dulce",
        notas_de_salida: "Azafrán, nuez moscada y lavanda; también aparecen matices cítricos y especiados.",
        notas_de_corazon_cuerpo: "Oud (madera de agar) y pachulí, con un carácter oscuro y profundo.",
        notas_de_fondo_secado: "Oud, pachulí, almizcle y acordes ambarados.",
        duracion: "8–12 horas aprox.; puede permanecer más tiempo en ropa.",
        uso: "Ideal para noche, eventos y clima fresco/frío. Conviene moderar los sprays porque tiene bastante presencia.",
        comentario: "Oscuro, cálido, especiado y con oud protagonista. Una opción para quien busca un perfume intenso y llamativo."
    },
    {
        id: 2,
        perfume: "Your Touch Amber Maison Alhambra",
        perfil: "Ámbar · vainilla · cálido · dulce",
        notas_de_salida: "Lavanda, con una apertura suave y aromática.",
        notas_de_corazon_cuerpo: "Acorde de ámbar cálido y envolvente.",
        notas_de_fondo_secado: "Acorde de ámbar cálido y envolvente.",
        duracion: "6–9 horas aprox.",
        uso: "Muy apropiado para tardes/noches, otoño e invierno. Funciona especialmente bien en salidas informales y citas.",
        comentario: "Cálido, dulce y confortable. Una alternativa fácil de usar para quienes disfrutan los perfumes ambarados y avainillados."
    },
    {
        id: 3,
        perfume: "Club de Nuit Intense Man Armaf",
        perfil: "Cítrico · frutal · ahumado · amaderado",
        notas_de_salida: "Limón, bergamota, piña, grosella negra y manzana.",
        notas_de_corazon_cuerpo: "Abedul, jazmín y rosa, dando paso a un carácter más ahumado y amaderado.",
        notas_de_fondo_secado: "Almizcle, ámbar gris, pachulí y vainilla.",
        duracion: "7–10 horas aprox.; algunas referencias comerciales sitúan su rendimiento alrededor de 10–12 horas.",
        uso: "Muy versátil: oficina, uso diario, reuniones, citas y salidas. Se adapta bien a casi todo el año.",
        comentario: "Apertura cítrica y frutal muy marcada, seguida por un secado ahumado-amaderado. Es uno de los más versátiles de la selección."
    },
    {
        id: 4,
        perfume: "Yara, Lattafa",
        perfil: "Dulce · frutal · floral · vainilla",
        notas_de_salida: "Mandarina, heliotropo y orquídea.",
        notas_de_corazon_cuerpo: "Frutas tropicales y un acorde gourmand, suave y cremoso.",
        notas_de_fondo_secado: "Vainilla, sándalo y almizcle.",
        duracion: "5–7 horas aprox.",
        uso: "Ideal para día, primavera/verano y uso cotidiano. Su perfil es más suave que el de Oud for Glory o Khamrah.",
        comentario: "Dulce, cremoso y femenino, con una sensación tropical/gourmand. Una opción sencilla para uso diario."
    },
    {
        id: 5,
        perfume: "Khamrah Lattafa",
        perfil: "Gourmand · dulce · especiado · cálido",
        notas_de_salida: "Canela, nuez moscada y bergamota.",
        notas_de_corazon_cuerpo: "Dátiles, praliné, nardos y mahonial.",
        notas_de_fondo_secado: "Vainilla, haba tonka, ámbar, mirra y benjuí.",
        duracion: "8–12 horas aprox.; destaca especialmente en ropa.",
        uso: "Principalmente noche y clima fresco/frío. Excelente para citas, cenas, fiestas y ocasiones especiales.",
        comentario: "Muy dulce, cálido y gourmand, con una sensación de postre especiado. Si alguien busca estela y presencia, es uno de los protagonistas."
    },
    {
        id: 6,
        perfume: "La Bomba, Carolina Herrera",
        perfil: "Floral · tropical · frutal · avainillado",
        notas_de_salida: "Pitaya (fruta del dragón), con una apertura frutal y luminosa.",
        notas_de_corazon_cuerpo: "Peonía roja y frangipani.",
        notas_de_fondo_secado: "Vainilla y pachulí, aportando calidez al secado.",
        duracion: "7–9 horas aprox.",
        uso: "Especialmente indicada para primavera/verano, día, salidas y ocasiones sociales.",
        comentario: "Femenina, alegre y tropical. La combinación de fruta, flores y vainilla la hace dulce pero luminosa, sin resultar tan pesada como un gourmand oscuro."
    },
    {
        id: 7,
        perfume: "Odyssey Mandarin Sky, Armaf",
        perfil: "Cítrico · dulce · gourmand · amaderado",
        notas_de_salida: "Mandarina, naranja y notas cítricas.",
        notas_de_corazon_cuerpo: "Azafrán, caramelo y acordes frutales/aromáticos.",
        notas_de_fondo_secado: "Haba tonka, ambroxán, vetiver y maderas.",
        duracion: "7–10 horas aprox., dependiendo de piel y clima.",
        uso: "Muy bueno para tardes/noches, salidas y clima templado o fresco. En días muy calurosos conviene no sobreaplicar.",
        comentario: "Dulce, moderno y llamativo, con una salida cítrica que evoluciona hacia un corazón caramelizado y un fondo cálido."
    },
    {
        id: 8,
        perfume: "Le Beau, Jean Paul Gaultier",
        perfil: "Ámbar · amaderado · especiado · avainillado",
        notas_de_salida: "Cardamomo.",
        notas_de_corazon_cuerpo: "Lavanda e iris.",
        notas_de_fondo_secado: "Vainilla y maderas.",
        duracion: "7–10 horas aprox.; puede permanecer bastante tiempo en ropa.",
        uso: "Excelente para noche, citas, cenas, eventos y clima fresco/frío.",
        comentario: "Elegante, masculino y sensual. Cardamomo, lavanda e iris sobre una base avainillada le dan un carácter dulce pero sofisticado."
    }
];

export default fragance;