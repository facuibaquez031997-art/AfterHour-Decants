import fragance from "../data/mockData"
import { FloatingWhatsApp } from 'react-floating-whatsapp'

const Catalogo = () => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-3  m-3">
      {
        fragance.map((item) => {
            return (
            <div className="flex flex-col justify-baseline items-baseline bg-white/50 gap-3 p-4 m-3 rounded-4xl" key = {item.id}>
                <h1 className="font-extrabold items-center text-white bg-gray-600 rounded-2xl p-2 cursor-pointer hover:bg-gray-500 hover:text-black ">{item.perfume}</h1>
                <img className="rounded-2xl items-center" src={`/perfumes/${item.id}.jpeg`} alt={item.perfume} />
                <div className="bg-black/80 text-white p-4 rounded-2xl ">
                  <p><strong className="text-gray-400">Perfil:</strong> {item.perfil}</p>
                  <p><strong className="text-gray-400">Notas de Salida:</strong> {item.notas_de_salida}</p>
                  <p><strong className="text-gray-400">Notas de Cuerpo:</strong> {item.notas_de_corazon_cuerpo}</p>
                  <p><strong className="text-gray-400">Notas de Secado:</strong> {item.notas_de_fondo_secado}</p>
                  <p><strong className="text-gray-400">Duración:</strong> {item.duracion}</p>
                  <p><strong className="text-gray-400">¿Cuando usuarlo?:</strong> {item.uso}</p>
                  <p><strong className="text-gray-400">Reseña:</strong> {item.comentario}</p>
                </div>
                <FloatingWhatsApp
                    avatar="logo.jpeg"
                    phoneNumber = "+541135956611"
                    accountName = "AfterHours"
                    statusMessage= "Conectado"
                    chatMessage="Hola, decime el nombre del perfume que te interesa y te doy info ;)"
                    onClick={() => window.open("https://wa.me/541135956611?text=Hola%20quiero%20info:", "_blank")}
                    allowEsc
                    allowClickAway
                    notification
                  />
            </div>)
          })
        }
      </div>
    )
  }

export default Catalogo
          
    