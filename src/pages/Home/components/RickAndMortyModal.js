import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table'
import { useTranslation } from 'react-i18next';

export default function RickAndMortyModal({
    show,
    setShow,
    char
}) {

    const [t] = useTranslation('global')

    return (
        <>
            <Modal show={show} onHide={() => setShow(false)} className="rick_morty_modal">
                <Modal.Header closeButton>
                    <Modal.Title>
                        {char.name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={char.image} alt="" className='mx-auto w-25 d-block mb-4 rounded' />
                    <Table striped bordered size="sm" className='text-center'>
                        <tbody>
                            <tr>
                                <th>{t('rickMorty.modal.species')}</th>
                                <td>{char.species}</td>
                            </tr>
                            <tr>
                                <th>{t('rickMorty.modal.gender')}</th>
                                <td>{char.gender}</td>
                            </tr>
                            <tr>
                                <th>{t('rickMorty.modal.status')}</th>
                                <td>{char.status}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Modal.Body>
            </Modal>
        </>
    );
}