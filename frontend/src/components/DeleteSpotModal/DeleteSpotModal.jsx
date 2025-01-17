import { useModal } from '../../context/Modal';
import { useDispatch } from 'react-redux';
import { deleteUserSpot } from '../../store/session';
import './DeleteSpotModal.css';

function DeleteSpotModal({spotId}){

    
    const { closeModal } = useModal();
    const dispatch = useDispatch();

    const handleNo = (e) => {
        e.preventDefault();
        closeModal();
    }

    const handleDelete = async (e) => {
        e.preventDefault();
        await dispatch(deleteUserSpot(spotId))
        .then(closeModal)
        .catch(async (res) => {
            const data = await res.json();
            if (data && data.message) { 
                return <h2>Oops, the spot does not exist</h2>
            }
          }); 
        
    }

    return (
        <div className="delete-spot-modal">
            <h1>Confirm Delete</h1>
            <p>Are you sure you want to remove this spot from the listings?</p>
            <button className="delete-yes-button" onClick={handleDelete} >Yes (Delete Spot)</button>
            <button className="delete-no-button" onClick={handleNo} >No (Keep Spot)</button>
        </div>
    );
}

export default DeleteSpotModal;