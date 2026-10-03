// import fragance from "../data/mockData"
// import { FloatingWhatsApp } from 'react-floating-whatsapp'

// const Productos = () => {

//   interface fragancias {
//     id : Number,
//     perfume : String
//   }

//   const fragancias : fragancias [] = [
//     {id: 1, perfume: "Bade’e Al Oud – Oud for Glory Lattafa"},
//     {id: 2, perfume: "Your Touch Amber Maison Alhambra"},
//     {id: 3, perfume: "Club de Nuit Intense Man Armaf"},
//     {id: 4, perfume: "Yara, Lattafa"},
//     {id: 5, perfume: "Khamrah Lattafa"},
//     {id: 6, perfume: "La Bomba, Carolina Herrera"},
//     {id: 7, perfume: "Odyssey Mandarin Sky, Armaf"},
//     {id: 8, perfume: "Le Beau, Jean Paul Gaultier"}
//   ]

//   const perfumes = fragancias.filter(p => p.perfume === p.perfume).map(fragancias => {
//     return {
//       id: `Perfume_${fragancias.id}`,
//       title: fragancias.perfume.substring(0, 72)
//     }
//   })
// }

// const Catalogo = () => {

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-3  m-3">
//       {
//         fragance.map((item) => {
//             return (
//             <div className="flex flex-col justify-baseline items-baseline bg-white/50 gap-3 p-4 m-3 rounded-4xl" key = {item.id}>
//                 <h1 className="font-extrabold items-center text-white bg-gray-600 rounded-2xl p-2 cursor-pointer hover:bg-gray-500 hover:text-black ">{item.perfume}</h1>
//                 <img className="rounded-2xl items-center" src={`/perfumes/${item.id}.jpeg`} alt={item.perfume} />
//                 <div className="bg-black/80 text-white p-4 rounded-2xl ">
//                   <p><strong className="text-gray-400">Perfil:</strong> {item.perfil}</p>
//                   <p><strong className="text-gray-400">Notas de Salida:</strong> {item.notas_de_salida}</p>
//                   <p><strong className="text-gray-400">Notas de Cuerpo:</strong> {item.notas_de_corazon_cuerpo}</p>
//                   <p><strong className="text-gray-400">Notas de Secado:</strong> {item.notas_de_fondo_secado}</p>
//                   <p><strong className="text-gray-400">Duración:</strong> {item.duracion}</p>
//                   <p><strong className="text-gray-400">¿Cuando usuarlo?:</strong> {item.uso}</p>
//                   <p><strong className="text-gray-400">Reseña:</strong> {item.comentario}</p>
//                 </div>
//                 <FloatingWhatsApp
//                     avatar="logo.jpeg"
//                     phoneNumber = "+541135956611"
//                     accountName = "AfterHours"
//                     statusMessage= "Conectado"
//                     chatMessage="Hola, decime el nombre del perfume que te interesa y te doy info ;)"
//                     onClick={() => window.open("https://wa.me/541135956611?text=Hola%20quiero%20info:", "_blank")}
//                     allowEsc
//                     allowClickAway
//                     notification
//                   />
//             </div>)
//           })
//         }
//       </div>
//     )
//   }

// export default Catalogo
          
import fragance from "../data/mockData";
import { FloatingWhatsApp } from 'react-floating-whatsapp';

// 1. Definimos la interfaz por fuera del componente para seguir buenas prácticas
interface Fragancia {
  id: number;
  perfume: string;
  perfil?: string;
  notas_de_salida?: string;
  notas_de_corazon_cuerpo?: string;
  notas_de_fondo_secado?: string;
  duracion?: string;
  uso?: string;
  comentario?: string;
}

const Catalogo = () => {
  
  // Función para generar el link de WhatsApp personalizado por producto
  const handleOrder = (nombrePerfume: string) => {
  
  const mensaje = ` *${nombrePerfume}*`;
  
  // Creamos la URL usando el constructor nativo para evitar fallos de formato
  const urlApi = new URL("https://wa.me/541135956611?text=Hola%20quiero%20info:");
  urlApi.searchParams.append("text", mensaje);

  // urlApi.href generará exactamente: https://wa.me!...
  window.open(urlApi.href, "_blank");
};

  return (
    <>
      {/* Grilla de productos */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-3 m-3">
        {fragance.map((item: Fragancia) => {
          return (
            <div className="flex flex-col justify-between bg-white/50 gap-3 p-4 m-3 rounded-4xl shadow-md" key={item.id}>
              <div className="flex flex-col gap-3">
                <h1 className="font-extrabold items-center text-white bg-gray-600 rounded-2xl p-2 cursor-pointer hover:bg-gray-500 hover:text-black">
                  {item.perfume}
                </h1>
                <img className="rounded-2xl items-center w-full object-cover" src={`/perfumes/${item.id}.jpeg`} alt={item.perfume} />
                <div className="bg-black/80 text-white p-4 rounded-2xl text-sm">
                  <p><strong className="text-gray-400">Perfil:</strong> {item.perfil}</p>
                  <p><strong className="text-gray-400">Notas de Salida:</strong> {item.notas_de_salida}</p>
                  <p><strong className="text-gray-400">Notas de Cuerpo:</strong> {item.notas_de_corazon_cuerpo}</p>
                  <p><strong className="text-gray-400">Notas de Secado:</strong> {item.notas_de_fondo_secado}</p>
                  <p><strong className="text-gray-400">Duración:</strong> {item.duracion}</p>
                  <p><strong className="text-gray-400">¿Cuándo usarlo?:</strong> {item.uso}</p>
                  <p><strong className="text-gray-400">Reseña:</strong> {item.comentario}</p>
                </div>
              </div>

              {/* Botón de acción individual por tarjeta */}
              <button 
                onClick={() => handleOrder(item.perfume)}
                className="w-full mt-2 bg-green-600 text-white font-bold py-3 px-4 rounded-2xl hover:bg-green-500 transition-colors flex items-center justify-center gap-2"
              >
                💬 Consultar por WhatsApp
              </button>
            </div>
          );
        })}
      </div>

      {/* Botón Flotante General (Se renderiza una sola vez al final del componente) */}
      <FloatingWhatsApp
        avatar="logo.jpeg" // Recuerda la barra inicial si está en la carpeta public
        phoneNumber="541135956611"
        accountName="AfterHours"
        statusMessage="Conectado"
        chatMessage="Hola, decime el nombre del perfume que te interesa y te doy info ;)"
        allowEsc
        allowClickAway
        notification
      />
    </>
  );
};

export default Catalogo;

    