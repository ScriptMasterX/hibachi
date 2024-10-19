import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const BookForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        address: '',
        guests: '',
        allergies: '',
        date: '',
        time: '',
        phoneAddressConfirm: false,
        termsAgree: false,
        cancelPolicyAgree: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.phoneAddressConfirm && formData.termsAgree && formData.cancelPolicyAgree) {
            // Prepare the EmailJS template parameters
            const templateParams = {
                fullName: formData.fullName,
                phone: formData.phone,
                email: formData.email,
                address: formData.address,
                guests: formData.guests,
                allergies: formData.allergies,
                date: formData.date,
                time: formData.time,
            };

            // Send email using EmailJS
            emailjs.send('service_4c5fuyp', 'template_d8s6tdr', templateParams, 'n01DShPYNCerX1NkE')
                .then((response) => {
                    alert('Appointment Completed! Email Sent Successfully!');
                    console.log('Email successfully sent!', response.status, response.text);
                }, (error) => {
                    console.error('Failed to send email:', error);
                    alert('Failed to send email. Please try again.');
                });
        } else {
            alert('Please agree to all terms and confirm your phone and address.');
        }
    };

    return (
        <form className="bookForm" id="contact" onSubmit={handleSubmit}>
            <h1 className="section-header">Let&apos;s Hibachi Booking Form</h1>
                
            <input 
                type="text" 
                name="fullName" 
                value={formData.fullName} 
                onChange={handleChange} 
                required
                className="bookFormControl bookDefaultInput fullName"
                placeholder="Enter Your Full Name"
            />
            
            <div className="secondBookWrapper">
                <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    required
                    className="bookFormControl bookDefaultInput bookSecondSection"
                    placeholder="Phone Number"
                />
                    
                <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required
                    className="bookFormControl bookDefaultInput bookSecondSection"
                    placeholder="Email"
                />
            </div>
            <input 
                type="text" 
                name="address" 
                value={formData.address} 
                onChange={handleChange} 
                required
                className="bookFormControl bookDefaultInput bookAddress"
                placeholder="FULL ADDRESS OF PARTY (House #, Street, Town, ZIP Code)"
            />
        
            
            <input 
                type="number" 
                name="guests" 
                value={formData.guests} 
                onChange={handleChange} 
                min="1"
                required
                className="bookFormControl bookDefaultInput fullName"
                placeholder="# OF GUESTS (30+ guests requires 2 chefs, Book 2 Appointments)"
            />
            <input 
                type="text" 
                name="allergies" 
                value={formData.allergies} 
                onChange={handleChange} 
                required
                className="bookFormControl bookDefaultInput bookAddress"
                placeholder="Allergies"
            />
            <div className="secondBookWrapper">
                <input 
                    type="date" 
                    name="date" 
                    value={formData.date} 
                    onChange={handleChange} 
                    required
                    className="bookFormControl bookDefaultInput bookSecondSection"
                    placeholder='Date'
                />
                <input 
                    type="time" 
                    name="time" 
                    value={formData.time} 
                    onChange={handleChange} 
                    required
                    className="bookFormControl bookDefaultInput bookSecondSection"
                    placeholder="Time"
                />
            </div>
            <label className="checkboxWrapper bookTextStyle longCheckBoxWrapper">
                <input 
                    type="checkbox" 
                    name="phoneAddressConfirm" 
                    checked={formData.phoneAddressConfirm} 
                    onChange={handleChange} 
                    required
                />
                PLEASE DOUBLE CHECK CELL PHONE # IS CORRECT AND FULL ADDRESS IS CORRECT ( #, STREET, TOWN, ZIP)*
            </label>
            <h2 className="bookTextStyle bookHeader">Reminders</h2>
            <div className="bookTextStyle conditions reminders" style={{marginLeft: "20px"}}>
                <p>📲 Please make sure contact number is a CELL PHONE.</p> 
                <p>💰 $25.00 per kid 12 and under</p>
                <p>💰 All fees included except gratuity and travel fee</p>
                <p>💰 A suggested gratuity of 20% is appreciated</p>
                <p>💰 Parties of 60 or more require a 20% credit card deposit</p>
                <p>💰 Cash or Credit Card (with a 4% admin fee) are the accepted payment methods. If paying with credit card must be done 72 hours prior to the event! You can not pay at the end of the party with credit card- must be done 72 hours prior.</p>
                <p>🧑‍🍳🧑‍🍳Parties over 30 require 2 chefs</p>
                <p>🧑‍🍳Chef will arrive 5-10 minutes prior to the scheduled start time</p>
                <p>🍱 Please note: a booking manager will reach out prior to your event to collect food orders.</p>
                <p>✌️Each person gets 2 proteins choices: Chicken · Steak · Shrimp · Scallops · Salmon · Tofu · Substitute Protein · Filet Mignon +$5 · Lobster Tail +$10 ·</p>
                <p>📲Food order and headcount can be confirmed week of event Via text.</p>
                <p>📲You will receive our phone number in your email confirmation.</p>

            </div>
            <h2 className="bookTextStyle bookHeader">Terms and Conditions</h2>
            <p className="bookTextStyle conditions" >
                PLEASE TAKE NOTICE: Let&apos;s Hibachi, Inc., or any agent, employee, director, or representative of Let&apos;s Hibachi, Inc., will NOT be liable to any Licensee (Host) or Licensee&apos;s guests for property damage caused as a result of any party held on the Licensee&apos;s (Hosts) premises. For the purpose of this paragraph “property damage” is defined as: injury to any real or personal property on the premises of where the Let&apos;s Hibachi event is taking place. Furthermore, Licensee (Host), individually and for Licensee&apos;s guests, waives any claim against Let&apos;s Hibachi, Inc. for any loss of, or damage or destruction to, property of Licensee (Host) or Licensee&apos;s guests, arising from any cause. This waiver is intended to be a complete release of any responsibility for property loss or damage or destruction to the property sustained by the Licensee or Licensee&apos;s guests before, during, or after the Let&apos;s Hibachi Inc. event has taken place.
            </p>
            
            <label className="checkboxWrapper bookTextStyle">
                <input 
                    type="checkbox" 
                    name="termsAgree" 
                    checked={formData.termsAgree} 
                    onChange={handleChange} 
                    required
                />
                I have read and agree to the terms above*
            </label>
            
            <h2 className="bookTextStyle bookHeader">Cancelation Policy & Weather Policy</h2>
            <p className="bookTextStyle conditions">
                48 hours notice for all cancellations and rescheduled parties or guest will be charged a fee of $200.00. If it rains, customer is required to provide some type of covering for the chef to cook under so they can stay dry. We can cook under tents, and patios. Customer is responsible for canceling due to inclement weather within 48 hours of your party.
            </p> 
            
            <label className="checkboxWrapper bookTextStyle">
                <input 
                    type="checkbox" 
                    name="cancelPolicyAgree" 
                    checked={formData.cancelPolicyAgree} 
                    onChange={handleChange} 
                    required
                />
                I have read and agree to the terms above*
            </label>
            
            
            <button className="btn btn-primary send-button book-button" id="submit" type="submit">
                <div className="alt-send-button">
                    <i className="fa fa-paper-plane"></i>
                    <span className="send-text">SEND</span>
                </div>
            </button>
        </form>
    );
};

export default BookForm;
