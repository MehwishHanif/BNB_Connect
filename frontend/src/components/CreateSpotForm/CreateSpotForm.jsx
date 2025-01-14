import SpotForm from "../SpotForm";

function CreateSpotForm(){
    const spot = {
        address: '', 
        city: '', 
        state: '', 
        country: '', 
        name: '', 
        description: '', 
        price: ''
    };

    const spotImage = {
        previewImage: '', 
        image1: '', 
        image2: '', 
        image3: '', 
        image4: ''
    }



    return(
        <SpotForm spot={spot} spotImage={spotImage} formType='Create Spot'/>
    )
}

export default CreateSpotForm;