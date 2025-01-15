import './SpotForm.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { createSpot } from '../../store/spots';
import { useDispatch } from 'react-redux';

function SpotForm( {spot, spotImage,formType}){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [address, setAddress] = useState(spot?.address);
    const [city, setCity] = useState(spot?.city);
    const [state, setState] = useState(spot?.state);
    const [country, setCountry] = useState(spot?.country);
    const [name, setName] = useState(spot?.name);
    const [description, setDescription] = useState(spot?.description);
    const [price, setPrice] = useState(spot?.price);
    const [errors, setErrors] = useState({});

    const [previewImage, setPreviewImage] = useState(spotImage?.previewImage);
    const [image1, setimage1] = useState(spotImage?.image1);
    const [image2, setimage2] = useState(spotImage?.image2);
    const [image3, setimage3] = useState(spotImage?.image3);
    const [image4, setimage4] = useState(spotImage?.image4);

    useEffect(() => {
         setErrors({});
    }, []);
   
    function prefillDummyData(e) {
        e.preventDefault();
        setAddress('');
        setCity('');
        setState('');
        setCountry('');
        setName('');
        setDescription('');
        setPrice('');
        //setPreviewImage();

        // console.log("Prefill dummy data triggered!");
    }
    const reset = () => {
      setAddress('');
      setCity('');
       setState('');
       setCountry('');
        setName('');
        setDescription('');
        setPrice('');
        setPreviewImage('');
        setimage1('');
        setimage2('');
        setimage3('');
        setimage4('');
    };
    
    function isValidURL(string) {
      const urlPattern = new RegExp(
        "^(https?:\\/\\/)" + // Protocol
        "((([a-zA-Z0-9\\-]+\\.)+[a-zA-Z]{2,})|" + // Domain name
        "localhost|" + // Localhost
        "\\d{1,3}(\\.\\d{1,3}){3})" + // OR IPv4
        "(\\:\\d+)?(\\/.*)?$", // Optional port and path
        "i"
      );
      return urlPattern.test(string);
    }
      // { address,  city,  state,  country, name, description,  price , previewImage, image1, image2, image3, image4 };

    const handleSubmit = async (e) => {
      e.preventDefault();
      const formErrors = {};
      let isFormValid = true;

      if(!address.length){
        isFormValid=false;
        formErrors.address = "Address is required";
      }
      if(!city.length){
        isFormValid=false;
        formErrors.city = "City is required";
      }
      if(!state.length){
        isFormValid=false;
        formErrors.state = "State is required";
      }
      if(!country.length){
        formErrors.country = "Country is required";
        isFormValid=false;
      }
      if(!name.length){
        formErrors.name = "Name is required";
        isFormValid=false;
      }
      if(!description.length){
        formErrors.description = "Description is required";
        isFormValid=false;
      }
      if(!price.length){
        formErrors.price = "Price is required";
        isFormValid=false;
      }
      if(!previewImage.length){
        formErrors.previewImage = "Preview image is required";
        isFormValid=false;
      }
      if(description.length && description.length < 30){
        formErrors.description = "Description needs 30 or more characters";
        isFormValid=false;
      }
      if(previewImage.length && !isValidURL(previewImage)){
        formErrors.previewImage = "Image URL must be a valid URL";
        isFormValid=false;
      }
      if(image1.length && !isValidURL(image1)){
        formErrors.image1 = "Image URL must be a valid URL";
        isFormValid=false;
      }
      if(image2.length && !isValidURL(image2)){
        formErrors.image2 = "Image URL must be a valid URL";
        isFormValid=false;
      }
      if(image3.length && !isValidURL(image3)){
        formErrors.image3 = "Image URL must be a valid URL";
        isFormValid=false;
      }
      if(image4.length && !isValidURL(image4)){
        formErrors.image4 = "Image URL must be a valid URL";
        isFormValid=false;
      }

      if(!isFormValid) setErrors(formErrors);
      else{ 
        spot = { ...spot, address,  city,  state,  country, name, description,  price };

        const spotImageArr = [
          { url: previewImage, preview: true },
          { url: image1, preview: false },
          { url: image2, preview: false },
          { url: image3, preview: false },
          { url: image4, preview: false },
        ].filter(image => image.url);
        //formType === "Create Spot" ? createSpot(spot, spotImageArr) : updateSpot(spot, spotImageArr)
        const data = await dispatch(createSpot(spot, spotImageArr));
        if(data && data.id){
          setErrors({});
          navigate(`/spots/${data.id}`);
          reset();
        }
        if(data && data.errors) {
          setErrors(data.errors);
        }
        // .then(data => ).catch(async (res) => {
        //   const data = await res.json();
        //   console.log("data :", data);
        //   if (data && data.errors) {
        //     setErrors(data.errors);
        //   }
        // });        
      }
    };
    
    return (
      <form className="spot-form" onSubmit={handleSubmit}>
        <h1 className="form-title">Create a New Spot</h1>
        <a href="#" onClick={prefillDummyData}>
          * Click here to fill dummy data
        </a>
        <div className="form-section">
          <div className="form-section-header">
            <h3>Where&apos;s your place located?</h3>
            <p >
              Guests will only get your exact address once they booked a
              reservation.
            </p>
          </div>
          <label htmlFor="country">Country</label><span className='errors'>{errors.country && `  ${errors.country}`}</span>
          <input
            type="text"
            id="country"
            name="country"
            placeholder="Country" 
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
          <label htmlFor="address">Street Address</label><span className='errors'>{errors.address && `  ${errors.address}`}</span>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Street Address" 
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <div>
            <label htmlFor="city">City</label><span className='errors'>{errors.city && `  ${errors.city}`}</span>
            <input type="text" id="city" name="city" placeholder="City" 
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
             />
            <span>,</span>
            <label htmlFor="state">State</label><span className='errors'>{errors.state && `  ${errors.state}`}</span>
            <input type="text" id="state" name="state" placeholder="State" 
            value={state}
            onChange={(e) => setState(e.target.value)} 
            required />
          </div>
        </div>
        <div className="form-section">
          <div className="form-section-header">
            <h3>Describe your place to guests</h3>
            <p>
              Mention the best features of your space, any special amenities
              like fast wifi or parking, and what you love about the
              neighborhood.
            </p>
          </div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            placeholder="Please write at least 30 characters"
            className="description-input" 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          /> 
          <div className='errors'>{errors.description && `  ${errors.description}`}</div>
        </div>
        <div className="form-section">
          <div className="form-section-header">
            <h3>Create a title for your spot</h3>
            <p>
              Catch guests&apos; attention with a spot title that highlights what
              makes your place special.
            </p>
          </div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Name of your spot" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <div className='errors'>{errors.name && `  ${errors.name}`}</div>
        </div>
        <div className="form-section">
          <div className="form-section-header">
            <h3>Set a base price for your spot</h3>
            <p>
              Competitive pricing can help your listing stand out and rank
              higher in search results.
            </p>
          </div>
          <div className="form-price">
            <label htmlFor="price">$</label>
            <input
              type="number"
              id="price"
              name="price"
              placeholder="Price per night (USD)" 
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
            <div className='errors'>{errors.price && `  ${errors.price}`}</div>
          </div>
        </div>
        <div className="form-section">
          <div className="form-section-header">
            <h3>Liven up your spot with photos</h3>
            <p>Submit a link to at least one photo to publish your spot.</p>
          </div>
          <input type="url" name="previewImage" placeholder="Preview Image URL" 
            value={previewImage}
            onChange={(e) => setPreviewImage(e.target.value)}
            required
            />
          <div className='errors'>{errors.previewImage && `  ${errors.previewImage}`}</div>
          <input type="url" name="image1" placeholder="Image URL" 
            value={image1}
            onChange={(e) => setimage1(e.target.value)} />
          <div className='errors'>{errors.image1 && `  ${errors.image1}`}</div>
          <input type="url" name="image2" placeholder="Image URL" 
            value={image2}
            onChange={(e) => setimage2(e.target.value)}
          />
          <div className='errors'>{errors.image2 && `  ${errors.image2}`}</div>
          <input type="url" name="image3" placeholder="Image URL" 
            value={image3}
            onChange={(e) => setimage3(e.target.value)}
          />
          <div className='errors'>{errors.image3 && `  ${errors.image3}`}</div>
          <input type="url" name="image4" placeholder="Image URL" 
            value={image4}
            onChange={(e) => setimage4(e.target.value)}
          />
          <div className='errors'>{errors.image4 && `  ${errors.image4}`}</div>
        </div>
        <button type="submit" className="create-spot-button" 
         disabled={Object.values(errors).length}
          >
          {formType === 'Create Spot'? "Create Spot": "Update Spot"}
        </button>
      </form>
    );
}

export default SpotForm;