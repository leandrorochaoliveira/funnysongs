import SoundBoard from '../../components/SoundBoard'
import { musics } from '../../utils/musics'

export default function MainPage () {
  const items = [
    {
      name: 'manoel gomes',
      sound: musics['manoel-gomes']
    },
    
  ]
  return (
    <SoundBoard items={items} />
  )
}