import { BsArrowUpSquareFill } from 'react-icons/bs'

import { scroll } from '../utilities/scroll'

export default function UpButton() {
    return (
        <div
            id='up_button'
            className='d-none'
            onClick={() => scroll('body')}
        >
            <BsArrowUpSquareFill />
        </div>
    )
}