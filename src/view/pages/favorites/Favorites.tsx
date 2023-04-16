import SoundBoard from '../../components/SoundBoard'
import { musics } from '../../../utils/musics'

export default function FavoritesPage () {
  return (
    <SoundBoard items={musics} />
  )
}