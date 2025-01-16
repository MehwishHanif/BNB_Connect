import { useModal } from '../../context/Modal';
import { useDispatch } from 'react-redux';
import { deleteReview } from '../../store/reviews';

function DeleteReviewModal({ reviewId, spotId }){
    const { closeModal } = useModal();
    const dispatch = useDispatch();

    const handleNo = (e) => {
        e.preventDefault();
        closeModal();
    }

    const handleDelete = async (e) => {
            e.preventDefault();
            await dispatch(deleteReview( reviewId, spotId));
            closeModal();
    }

    return (
        <div className="delete-review-modal" >
            <h1>Confirm Delete</h1>
            <p>Are you sure you want to delete this review?</p>
            <button className="delete-review" 
                onClick={handleDelete}
             >Yes (Delete Review)</button>
            <button className="delete-no" 
                onClick={handleNo}
             >No (Keep Review)</button>
        </div>
    );
}

export default DeleteReviewModal;