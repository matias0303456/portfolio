import { useEffect, useState } from "react"
import RickAndMortyModal from "./RickAndMortyModal";

export default function RickAndMortyApi() {

    const [chars, setChars] = useState([])
    const [show, setShow] = useState(false);
    const [selectedChar, setSelectedChar] = useState({
        image: '',
        name: '',
        species: '',
        gender: '',
        status: ''
    })

    useEffect(() => {
        (async () => {
            const URL = 'https://rickandmortyapi.com/api/character'
            const res = await fetch(URL)
            const data = await res.json()
            setChars(data.results)
        })()
    }, [])

    return (
        <>
            <div className="chars_container">
                {chars.map(c => {
                    return (
                        <div key={c.id} className="char_item" onClick={() => {
                            setSelectedChar(chars.find(char => char.id === c.id))
                            setShow(true)
                        }}>
                            <img src={c.image} alt="" />
                            <p>{c.name}</p>
                        </div>
                    )
                })}
            </div>
            <RickAndMortyModal
                show={show}
                setShow={setShow}
                char={selectedChar}
            />
        </>
    )
}