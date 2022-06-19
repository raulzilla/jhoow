import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import CardsDownload from '../../components/cardsDownload/CardsDownload'
import api from '../../services'
import cardsDownloadTypes from '../../types/cardsDownload.types'

const data = [
  {
    id: "1",
    titulo: "Red textura",
    subtitulo: "Melhor textura para pvp",
    linkImagem: "https://i.imgur.com/jmFhXFF.png",
    linkDownload: "https://4br.me/JqidCb262"
  },
  {
    id: "2",
    titulo: "Pvp textura",
    subtitulo: "Essa é a melhor textura para pvp",
    linkImagem: "https://i.imgur.com/EV0C4pL.png",
    linkDownload: "https://4br.me/mtJGLC"
  },
  {
    id: "3",
    titulo: "Fps textura",
    subtitulo: "Essa textura vai aumentar seus fps",
    linkImagem: "https://i.imgur.com/4AN2GJO.png",
    linkDownload: "https://4br.me/iAIZKt8"
  }
]

const Clients = () => {
  const param = useParams()
  const [client, setClient] = useState<cardsDownloadTypes.Data[]>([])

  useEffect(() => {
    api.get('/client')
      .then(res => {
        setClient(res.data)
      })
      .catch((err) => {
        console.error(err);
      });
  }, [])
  
  return <CardsDownload title={'CLIENTS'} data={client} id={param.id} />
}

export default Clients