import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";
import classes from "./ShippingFormDetails.module.css";
import SummaryShipping from "./SummaryShipping";

export default function ShippingFormDetails(props) {
  // console.log(props);
  const [invalidInput, setInvalidInput] = useState(false);
  const [blurfirstName, setBlurFirstName] = useState(false);
  const [invalidLastNameInput, setInvalidLastNameInput] = useState(false);
  const [blurlastName, setBlurLastName] = useState(false);
  const [invalidAddress, setInvalidAddress] = useState(false);
  const [blurAddress, setBlurAddress] = useState(false);
  const [invalidCity, setInvalidCity] = useState(false);
  const [blurCity, setBlurCity] = useState(false);
  const [invalidZipCode, setInvalidZipCode] = useState(false);
  const [blurZipCode, setBlurZipCode] = useState(false);
  const [invalidPhone, setInvalidPhone] = useState(false);
  const [blurPhone, setBlurPhone] = useState(false);
  const [selected, setSelected] = useState(0);
  const [shippingDetals, setShipppingDetails] = useState({
    firstName: "",
    lastName: "",
    address: "",
    additionalAddress: "",
    country: "",
    city: "",
    zipCode: "",
    phoneNumber: "",
    shippingFee: "",
  });
  const [disableButton, setDisableButton] = useState(true);
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const addressRef = useRef();
  const additionalAddress = useRef();
  const cityRef = useRef();
  const countryRef = useRef();
  const zipCodeRef = useRef();
  const phoneRef = useRef();
  const validityHandler = () => {
    if (firstNameRef.current.value.trim() === "") setInvalidInput(true);
    else setInvalidInput(false);
  };
  const blurHandler = () => {
    if (firstNameRef.current.value.trim() === "") setBlurFirstName(true);
    else setBlurFirstName(false);
  };
  const validityHandler2 = () => {
    if (lastNameRef.current.value.trim() === "") setInvalidLastNameInput(true);
    else setInvalidLastNameInput(false);
  };
  const blurHandler2 = () => {
    if (lastNameRef.current.value.trim() === "") setBlurLastName(true);
    else setBlurLastName(false);
  };
  const addressValidityhandler = () => {
    if (addressRef.current.value.length < 10) setInvalidAddress(true);
    else setInvalidAddress(false);
  };
  const addressblurHandler = () => {
    if (addressRef.current.value.trim() === "") setBlurAddress(true);
    else setBlurAddress(false);
  };
  const cityHandler = () => {
    if (cityRef.current.value.length < 4) setInvalidCity(true);
    else setInvalidCity(false);
  };
  const cityBlurHandler = () => {
    if (cityRef.current.value.trim() === "") setBlurCity(true);
    else setBlurCity(false);
  };
  const zipCodehandler = () => {
    console.log(isNaN(zipCodeRef.current.value));
    if (
      isNaN(zipCodeRef.current.value) ||
      zipCodeRef.current.value.length !== 6
    ) {
      setInvalidZipCode(true);
    } else {
      setInvalidZipCode(false);
    }
  };
  const zipCodeBlurHandler = () => {
    if (zipCodeRef.current.value.trim() === "") setBlurZipCode(true);
    else setBlurZipCode(false);
  };
  const phoneHandler = () => {
    // console.log(isNaN(zipCodeRef.current.value));
    if (isNaN(phoneRef.current.value) || phoneRef.current.value.length !== 10) {
      setInvalidPhone(true);
    } else {
      setInvalidPhone(false);
    }
  };
  const phoneBlurHandler = () => {
    if (phoneRef.current.value.trim() === "") setBlurPhone(true);
    else setBlurPhone(false);
  };
  const selectedHandler = (e) => {
    const { name, value } = e.target;
    setSelected({ [name]: value });
    // props.orderDetails.cost=props.orderDetails.cost+parseFloat(e.target.value);
  };
  const history = useHistory();
  const handleSubmit = () => {
    history.push({
      pathname: "/payment",
      state: { items: props.orderDetails, shippingDetails: shippingDetals,shippingFee:selected },
    });
  };
  useEffect(() => {
    setShipppingDetails({
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      address: addressRef.current.value,
      additionalAddress: additionalAddress.current.value,
      country: countryRef.current.value,
      city: cityRef.current.value,
      zipCode: zipCodeRef.current.value,
      phoneNumber: phoneRef.current.value,
      shippingFee: selected.shipping,
    });
    const x = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      address: addressRef.current.value,
      additionalAddress: additionalAddress.current.value,
      country: countryRef.current.value,
      city: cityRef.current.value,
      zipCode: zipCodeRef.current.value,
      phoneNumber: phoneRef.current.value,
      shippingFee: selected.shipping,
    };
    // console.log(x);
    for (var key in x) {
      if (x[key] === null || x[key] === "") {
        setDisableButton(true);
        return;
      } else if (
        invalidCity ||
        invalidAddress ||
        invalidInput ||
        invalidLastNameInput ||
        invalidPhone ||
        invalidZipCode
      ) {
        setDisableButton(true);
        return;
      } else {
        setDisableButton(false);
        // console.log("here");
      }
    }
    props.orderDetails.shippingCost = parseFloat(selected);
  }, [
    props.orderDetails,
    selected,
    invalidInput,
    invalidLastNameInput,
    invalidAddress,
    invalidCity,
    invalidPhone,
    invalidZipCode,
  ]);
  return (
    <div className="row w-100">
      <form className="col-lg-7  ms-2 ms-lg-4">
        <h3>Shipping Details</h3>
        <div className="pt-4 border-top d-flex flex-row ">
          <input
            className={
              blurfirstName || invalidInput
                ? classes.inputFieldBlur
                : classes.inputField
            }
            type="text"
            placeholder="First Name"
            onChange={validityHandler}
            onBlur={blurHandler}
            ref={firstNameRef}
          />
          <input
            className={
              blurlastName || invalidLastNameInput
                ? classes.inputFieldBlur
                : classes.inputField
            }
            type="text"
            placeholder="Last Name"
            onChange={validityHandler2}
            onBlur={blurHandler2}
            ref={lastNameRef}
          />
        </div>
        <input
          className={
            invalidAddress || blurAddress
              ? classes.inputFieldBlur
              : classes.inputField
          }
          type="text"
          placeholder="Address"
          onChange={addressValidityhandler}
          onBlur={addressblurHandler}
          ref={addressRef}
        />
        <input
          className={classes.inputFieldFull}
          type="text"
          placeholder="Address 2"
          ref={additionalAddress}
        />
        <div>
          <div className="d-flex flex-row">
            <select
              ref={countryRef}
              className={classes.inputField}
              id="country"
              name="country"
            >
              <option value="Afganistan">Afghanistan</option>
              <option value="Albania">Albania</option>
              <option value="Algeria">Algeria</option>
              <option value="American Samoa">American Samoa</option>
              <option value="Andorra">Andorra</option>
              <option value="Angola">Angola</option>
              <option value="Anguilla">Anguilla</option>
              <option value="Antigua & Barbuda">Antigua & Barbuda</option>
              <option value="Argentina">Argentina</option>
              <option value="Armenia">Armenia</option>
              <option value="Aruba">Aruba</option>
              <option value="Australia">Australia</option>
              <option value="Austria">Austria</option>
              <option value="Azerbaijan">Azerbaijan</option>
              <option value="Bahamas">Bahamas</option>
              <option value="Bahrain">Bahrain</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Barbados">Barbados</option>
              <option value="Belarus">Belarus</option>
              <option value="Belgium">Belgium</option>
              <option value="Belize">Belize</option>
              <option value="Benin">Benin</option>
              <option value="Bermuda">Bermuda</option>
              <option value="Bhutan">Bhutan</option>
              <option value="Bolivia">Bolivia</option>
              <option value="Bonaire">Bonaire</option>
              <option value="Bosnia & Herzegovina">Bosnia & Herzegovina</option>
              <option value="Botswana">Botswana</option>
              <option value="Brazil">Brazil</option>
              <option value="British Indian Ocean Ter">
                British Indian Ocean Ter
              </option>
              <option value="Brunei">Brunei</option>
              <option value="Bulgaria">Bulgaria</option>
              <option value="Burkina Faso">Burkina Faso</option>
              <option value="Burundi">Burundi</option>
              <option value="Cambodia">Cambodia</option>
              <option value="Cameroon">Cameroon</option>
              <option value="Canada">Canada</option>
              <option value="Canary Islands">Canary Islands</option>
              <option value="Cape Verde">Cape Verde</option>
              <option value="Cayman Islands">Cayman Islands</option>
              <option value="Central African Republic">
                Central African Republic
              </option>
              <option value="Chad">Chad</option>
              <option value="Channel Islands">Channel Islands</option>
              <option value="Chile">Chile</option>
              <option value="China">China</option>
              <option value="Christmas Island">Christmas Island</option>
              <option value="Cocos Island">Cocos Island</option>
              <option value="Colombia">Colombia</option>
              <option value="Comoros">Comoros</option>
              <option value="Congo">Congo</option>
              <option value="Cook Islands">Cook Islands</option>
              <option value="Costa Rica">Costa Rica</option>
              <option value="Cote DIvoire">Cote DIvoire</option>
              <option value="Croatia">Croatia</option>
              <option value="Cuba">Cuba</option>
              <option value="Curaco">Curacao</option>
              <option value="Cyprus">Cyprus</option>
              <option value="Czech Republic">Czech Republic</option>
              <option value="Denmark">Denmark</option>
              <option value="Djibouti">Djibouti</option>
              <option value="Dominica">Dominica</option>
              <option value="Dominican Republic">Dominican Republic</option>
              <option value="East Timor">East Timor</option>
              <option value="Ecuador">Ecuador</option>
              <option value="Egypt">Egypt</option>
              <option value="El Salvador">El Salvador</option>
              <option value="Equatorial Guinea">Equatorial Guinea</option>
              <option value="Eritrea">Eritrea</option>
              <option value="Estonia">Estonia</option>
              <option value="Ethiopia">Ethiopia</option>
              <option value="Falkland Islands">Falkland Islands</option>
              <option value="Faroe Islands">Faroe Islands</option>
              <option value="Fiji">Fiji</option>
              <option value="Finland">Finland</option>
              <option value="France">France</option>
              <option value="French Guiana">French Guiana</option>
              <option value="French Polynesia">French Polynesia</option>
              <option value="French Southern Ter">French Southern Ter</option>
              <option value="Gabon">Gabon</option>
              <option value="Gambia">Gambia</option>
              <option value="Georgia">Georgia</option>
              <option value="Germany">Germany</option>
              <option value="Ghana">Ghana</option>
              <option value="Gibraltar">Gibraltar</option>
              <option value="Great Britain">Great Britain</option>
              <option value="Greece">Greece</option>
              <option value="Greenland">Greenland</option>
              <option value="Grenada">Grenada</option>
              <option value="Guadeloupe">Guadeloupe</option>
              <option value="Guam">Guam</option>
              <option value="Guatemala">Guatemala</option>
              <option value="Guinea">Guinea</option>
              <option value="Guyana">Guyana</option>
              <option value="Haiti">Haiti</option>
              <option value="Hawaii">Hawaii</option>
              <option value="Honduras">Honduras</option>
              <option value="Hong Kong">Hong Kong</option>
              <option value="Hungary">Hungary</option>
              <option value="Iceland">Iceland</option>
              <option value="Indonesia">Indonesia</option>
              <option value="India">India</option>
              <option value="Iran">Iran</option>
              <option value="Iraq">Iraq</option>
              <option value="Ireland">Ireland</option>
              <option value="Isle of Man">Isle of Man</option>
              <option value="Israel">Israel</option>
              <option value="Italy">Italy</option>
              <option value="Jamaica">Jamaica</option>
              <option value="Japan">Japan</option>
              <option value="Jordan">Jordan</option>
              <option value="Kazakhstan">Kazakhstan</option>
              <option value="Kenya">Kenya</option>
              <option value="Kiribati">Kiribati</option>
              <option value="Korea North">Korea North</option>
              <option value="Korea Sout">Korea South</option>
              <option value="Kuwait">Kuwait</option>
              <option value="Kyrgyzstan">Kyrgyzstan</option>
              <option value="Laos">Laos</option>
              <option value="Latvia">Latvia</option>
              <option value="Lebanon">Lebanon</option>
              <option value="Lesotho">Lesotho</option>
              <option value="Liberia">Liberia</option>
              <option value="Libya">Libya</option>
              <option value="Liechtenstein">Liechtenstein</option>
              <option value="Lithuania">Lithuania</option>
              <option value="Luxembourg">Luxembourg</option>
              <option value="Macau">Macau</option>
              <option value="Macedonia">Macedonia</option>
              <option value="Madagascar">Madagascar</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Malawi">Malawi</option>
              <option value="Maldives">Maldives</option>
              <option value="Mali">Mali</option>
              <option value="Malta">Malta</option>
              <option value="Marshall Islands">Marshall Islands</option>
              <option value="Martinique">Martinique</option>
              <option value="Mauritania">Mauritania</option>
              <option value="Mauritius">Mauritius</option>
              <option value="Mayotte">Mayotte</option>
              <option value="Mexico">Mexico</option>
              <option value="Midway Islands">Midway Islands</option>
              <option value="Moldova">Moldova</option>
              <option value="Monaco">Monaco</option>
              <option value="Mongolia">Mongolia</option>
              <option value="Montserrat">Montserrat</option>
              <option value="Morocco">Morocco</option>
              <option value="Mozambique">Mozambique</option>
              <option value="Myanmar">Myanmar</option>
              <option value="Nambia">Nambia</option>
              <option value="Nauru">Nauru</option>
              <option value="Nepal">Nepal</option>
              <option value="Netherland Antilles">Netherland Antilles</option>
              <option value="Netherlands">Netherlands (Holland, Europe)</option>
              <option value="Nevis">Nevis</option>
              <option value="New Caledonia">New Caledonia</option>
              <option value="New Zealand">New Zealand</option>
              <option value="Nicaragua">Nicaragua</option>
              <option value="Niger">Niger</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Niue">Niue</option>
              <option value="Norfolk Island">Norfolk Island</option>
              <option value="Norway">Norway</option>
              <option value="Oman">Oman</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Palau Island">Palau Island</option>
              <option value="Palestine">Palestine</option>
              <option value="Panama">Panama</option>
              <option value="Papua New Guinea">Papua New Guinea</option>
              <option value="Paraguay">Paraguay</option>
              <option value="Peru">Peru</option>
              <option value="Phillipines">Philippines</option>
              <option value="Pitcairn Island">Pitcairn Island</option>
              <option value="Poland">Poland</option>
              <option value="Portugal">Portugal</option>
              <option value="Puerto Rico">Puerto Rico</option>
              <option value="Qatar">Qatar</option>
              <option value="Republic of Montenegro">
                Republic of Montenegro
              </option>
              <option value="Republic of Serbia">Republic of Serbia</option>
              <option value="Reunion">Reunion</option>
              <option value="Romania">Romania</option>
              <option value="Russia">Russia</option>
              <option value="Rwanda">Rwanda</option>
              <option value="St Barthelemy">St Barthelemy</option>
              <option value="St Eustatius">St Eustatius</option>
              <option value="St Helena">St Helena</option>
              <option value="St Kitts-Nevis">St Kitts-Nevis</option>
              <option value="St Lucia">St Lucia</option>
              <option value="St Maarten">St Maarten</option>
              <option value="St Pierre & Miquelon">St Pierre & Miquelon</option>
              <option value="St Vincent & Grenadines">
                St Vincent & Grenadines
              </option>
              <option value="Saipan">Saipan</option>
              <option value="Samoa">Samoa</option>
              <option value="Samoa American">Samoa American</option>
              <option value="San Marino">San Marino</option>
              <option value="Sao Tome & Principe">Sao Tome & Principe</option>
              <option value="Saudi Arabia">Saudi Arabia</option>
              <option value="Senegal">Senegal</option>
              <option value="Seychelles">Seychelles</option>
              <option value="Sierra Leone">Sierra Leone</option>
              <option value="Singapore">Singapore</option>
              <option value="Slovakia">Slovakia</option>
              <option value="Slovenia">Slovenia</option>
              <option value="Solomon Islands">Solomon Islands</option>
              <option value="Somalia">Somalia</option>
              <option value="South Africa">South Africa</option>
              <option value="Spain">Spain</option>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="Sudan">Sudan</option>
              <option value="Suriname">Suriname</option>
              <option value="Swaziland">Swaziland</option>
              <option value="Sweden">Sweden</option>
              <option value="Switzerland">Switzerland</option>
              <option value="Syria">Syria</option>
              <option value="Tahiti">Tahiti</option>
              <option value="Taiwan">Taiwan</option>
              <option value="Tajikistan">Tajikistan</option>
              <option value="Tanzania">Tanzania</option>
              <option value="Thailand">Thailand</option>
              <option value="Togo">Togo</option>
              <option value="Tokelau">Tokelau</option>
              <option value="Tonga">Tonga</option>
              <option value="Trinidad & Tobago">Trinidad & Tobago</option>
              <option value="Tunisia">Tunisia</option>
              <option value="Turkey">Turkey</option>
              <option value="Turkmenistan">Turkmenistan</option>
              <option value="Turks & Caicos Is">Turks & Caicos Is</option>
              <option value="Tuvalu">Tuvalu</option>
              <option value="Uganda">Uganda</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Ukraine">Ukraine</option>
              <option value="United Arab Erimates">United Arab Emirates</option>
              <option value="United States of America">
                United States of America
              </option>
              <option value="Uraguay">Uruguay</option>
              <option value="Uzbekistan">Uzbekistan</option>
              <option value="Vanuatu">Vanuatu</option>
              <option value="Vatican City State">Vatican City State</option>
              <option value="Venezuela">Venezuela</option>
              <option value="Vietnam">Vietnam</option>
              <option value="Virgin Islands (Brit)">
                Virgin Islands (Brit)
              </option>
              <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
              <option value="Wake Island">Wake Island</option>
              <option value="Wallis & Futana Is">Wallis & Futana Is</option>
              <option value="Yemen">Yemen</option>
              <option value="Zaire">Zaire</option>
              <option value="Zambia">Zambia</option>
              <option value="Zimbabwe">Zimbabwe</option>
            </select>
            <input
              className={
                invalidCity || blurCity
                  ? classes.inputFieldBlur
                  : classes.inputField
              }
              type="text"
              placeholder="City"
              onChange={cityHandler}
              onBlur={cityBlurHandler}
              ref={cityRef}
            />
          </div>
          <div className="d-flex flex-row">
            <input
              className={
                invalidZipCode || blurZipCode
                  ? classes.inputFieldBlur
                  : classes.inputField
              }
              type="text"
              pattern="[1-9][0-9]{5}"
              placeholder="Zip/Postal Code"
              ref={zipCodeRef}
              onChange={zipCodehandler}
              onBlur={zipCodeBlurHandler}
            />
            <input
              className={
                invalidPhone || blurPhone
                  ? classes.inputFieldBlur
                  : classes.inputField
              }
              type="tel"
              placeholder="Phone Number"
              pattern="[789][0-9]{9}"
              ref={phoneRef}
              onChange={phoneHandler}
              onBlur={phoneBlurHandler}
            />
          </div>
          <div className="d-flex ">
            <div className={`w-50 ${classes.selectedRadio}`}>
              <input
                type="radio"
                value="0"
                checked={selected.shipping === "0"}
                name="shipping"
                id="freeShipping"
                onChange={selectedHandler}
              />
              <label htmlFor="freeShipping">Free Shipping</label>
              <p>Between 2-5 working days</p>
            </div>
            <div className={classes.selectedRadio}>
              <input
                type="radio"
                value="20"
                name="shipping"
                id="nextDay"
                checked={selected.shipping=== "20"}
                onChange={selectedHandler}
              />
              <label htmlFor="nextDay">Next day delivery- $20</label>
              
            </div>
          </div>
        </div>
        <div className="pt-4 border-top">
          <button
            disabled={disableButton}
            className="btn btn-primary w-25 me-2"
            type="button"
            onClick={handleSubmit}
          >
            Next
          </button>
          <button
            className="btn btn-danger w-25"
            type="button"
            onClick={() => history.goBack()}
          >
            Back
          </button>
        </div>
      </form>

      <div className="col-lg-4">
        <SummaryShipping
          orderDetails={props.orderDetails}
          shippingFee={selected}
        />
      </div>
    </div>
  );
}
