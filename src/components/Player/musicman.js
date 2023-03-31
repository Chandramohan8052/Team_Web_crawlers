import React from 'react'
import Mantras from './mantras';

export default function Musicman() {
    const [songs] = useState([
        {
          title: "Hare Krishna Mantra",
          artist: "HDG A C Bhaktivedant Swami Prabhupada",
          img_src: "http://www.founderacharya.com/wp-content/uploads/2014/08/prabhupada-804x1024.jpg",
          src: "https://audio.iskcondesiretree.com/01_-_Srila_Prabhupada/02_-_Bhajans/Vol-01/02_-_Hare_Krsna_Classics_and_Originals/SP_Bhajans_04_-_Hare_Krsna_Maha_Mantra.mp3",
        },
        {
          title: "Govindam Adi Pursam",
          artist: "Yamuna Mata ji",
          img_src: "https://i1.sndcdn.com/avatars-000058210493-53jsg3-t500x500.jpg",
          src: "https://audio.iskcondesiretree.com/04_-_ISKCON_Matajis/Her_Grace_Yamuna_Mataji/Bhajans/YM_Bhajans_-_Govindam_Adi_Purusam-Original.mp3",
        },
        {
          title: "Govind Jai Jai",
          artist: "Yamuna Mata ji",
          img_src: "https://w0.peakpx.com/wallpaper/480/995/HD-wallpaper-lord-krishna-bhagwan-krishna-lord-shree-thumbnail.jpg",
          src: "https://audio.iskcondesiretree.com/04_-_ISKCON_Matajis/Her_Grace_Yamuna_Mataji/Bhajans/YM_Bhajans_-_Govinda_Jai_Jai.mp3",
        },
        
      ]);


      const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex, songs.length]);
  return (
    <div className='player-a'>
      <Mantras 
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      
      />
    </div>
  )
}
