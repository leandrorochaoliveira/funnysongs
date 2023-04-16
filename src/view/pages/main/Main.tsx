import SoundBoard from '../../components/SoundBoard'
import { musics } from '../../../utils/musics'

export default function MainPage () {
  return (
    <SoundBoard items={musics} />
  )
}