import fragance from "../data/mockData"

const Catalogo = () => {

  return (
    <div className="flex flex-col justify-center items-center bg-gray-400 rounded-4xl ">
      {
        fragance.map((item) => {
            return (
            <div key = {item.id}>
                <h2>{item.perfume}</h2>
                <img src={`/perfumes/${item.id}.jpeg`} alt={item.perfume} />
                <p>{item.perfil}</p>
                <p>{item.notas_de_salida}</p>
                <p>{item.notas_de_corazon_cuerpo}</p>
                <p>{item.notas_de_fondo_secado}</p>
                <p>{item.duracion}</p>
                <p>{item.uso}</p>
                <p>{item.comentario}</p>
            </div>)
        })
      }
    </div>
  )
}

export default Catalogo
