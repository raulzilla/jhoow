import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import CardsDownload from '../../components/cardsDownload/CardsDownload'
import api from '../../services'
import cardsDownloadTypes from '../../types/cardsDownload.types'

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