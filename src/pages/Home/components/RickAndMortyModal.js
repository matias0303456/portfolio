import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table'

export default function RickAndMortyModal({
    show,
    setShow,
    char
}) {
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
                                <th>Especie</th>
                                <td>{char.species}</td>
                            </tr>
                            <tr>
                                <th>Género</th>
                                <td>{char.gender}</td>
                            </tr>
                            <tr>
                                <th>Estado</th>
                                <td>{char.status}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}