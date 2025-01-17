import { useParams } from 'react-router-dom';
import {  useSelector, useDispatch } from 'react-redux';
import {  useEffect } from 'react';
import { selectSpotById , getSpotDetails} from '../../store/spotsDetails';
import SpotForm from '../SpotForm';

function EditSpotForm(){
    const dispatch = useDispatch();
    const { spotId } = useParams();
    const spot = useSelector(selectSpotById(parseInt(spotId)));

    const spotImage = {
        previewImage:'', 
        image1: '', 
        image2: '', 
        image3: '', 
        image4: ''
    };

    useEffect(() => {
        dispatch(getSpotDetails(spotId));
    }, [dispatch, spotId]);

    if (!spot) return <h3>Loading...</h3>;    

    return (
        Object.keys(spot).length > 1 && (
            <>
              <SpotForm
                spot={spot} 
                spotImage={spotImage}
                formType="Update Spot"
              />
            </>
        )
    );
}

export default EditSpotForm;