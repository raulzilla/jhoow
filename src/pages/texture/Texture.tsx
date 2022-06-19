import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import CardsDownload from '../../components/cardsDownload/CardsDownload'
import api from '../../services'
import cardsDownloadTypes from '../../types/cardsDownload.types'

const Texture = () => {
  const param = useParams()
  const [texture, setTexture] = useState<cardsDownloadTypes.Data[]>([])

  useEffect(() => {
    api.get('/texture')
      .then(res => {
        setTexture(res.data)
      })
      .catch((err) => {
        console.error(err);
      });
  }, [])

  return <CardsDownload title={'TEXTURA'} data={texture} id={param.id}/>
}

export default Texture