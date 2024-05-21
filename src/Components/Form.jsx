import React, { useState, useEffect } from 'react';
import $ from 'jquery';
const Form = () => {
    // State to store form values
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone: ''
    });

    // State to track form validation errors
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    // Function to handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate form fields
        const validationErrors = {};
        if (!formData.username.trim()) {
            validationErrors.username = 'Username is required';
        }
        if (!formData.email.trim()) {
            validationErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.email = 'Email is invalid';
        }
        if (!formData.phone.trim()) {
            validationErrors.phone = 'Phone is required';
        } else if (formData.phone.length < 10) {
            validationErrors.phone = 'Phone must be at least 10 characters long';
        }

        // Set validation errors
        setErrors(validationErrors);

        // If there are no validation errors, submit the form
        if (Object.keys(validationErrors).length === 0) {
            const formData = { username: username, email: email, phone: phone };
        
            // Log the formData to check for any cyclic references
            console.log('Form Data:', formData);
        
            // Verify that formData does not contain cyclic references
            try {
                JSON.stringify(formData);
            } catch (error) {
                console.error('Cyclic reference in formData:', error);
                return; // Exit if cyclic reference is detected
            }
        
            $.ajax({
                url: "http://localhost/CODESEED/Backend/public/shadap",
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(formData),
                success: function (response) {
                    if (response.status_code === 1) {
                        setFormData({
                            username: '',
                            email: '',
                            phone: ''
                        });
                        console.log('Form submitted successfully!');
                    } else {
                        console.log('Form submission failed with status code:', response.status_code);
                    }
                },
                error: function (xhr, status, error) {
                    console.error('There was an error submitting the form:', error);
                }
            });
        }
        
    };

    return (
        <div className='bg-black'>
            <div className="bg-black text-black p-5 md:max-w-md md:mx-auto">
                <form onSubmit={handleSubmit} className="border border-gray-400 p-4 rounded-xl">
                    <div className="mb-4">
                        <label htmlFor="username" className="block mb-1 font-bold text-white">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        />
                        {errors.username && <span className="text-red-500">{errors.username}</span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-1 font-bold text-white">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        />
                        {errors.email && <span className="text-red-500">{errors.email}</span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block mb-1 font-bold text-white">Phone:</label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        />
                        {errors.phone && <span className="text-red-500">{errors.phone}</span>}
                    </div>
                    <div className="mt-8">
                        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
                    </div>
                </form>
            </div>
            <hr />
        </div>
    );
};

export default Form;
