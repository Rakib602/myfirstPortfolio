import React from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import './Contact.css'
import{ init } from 'emailjs-com';
import { Button, Form, Input, TextArea } from 'semantic-ui-react';
init("user_5LNozvvNqJPrcZXVDSXqp");



const SERVICE_ID = 'service_rsxwzpd';
const TEMPLATE_ID = "template_os9ccfo";
const USER_ID = "user_5LNozvvNqJPrcZXVDSXqp";

const Contact = () => {
    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    icon: 'success}',
                    title: 'Message Sent Successfully'
                })
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: 'error',
                    title: 'Ooops, something went wrong',
                    text: error.text,
                })
            });
        e.target.reset()
    };
    return (
        <div className="contact-form " id="contact">
            <h2>Contact with me</h2>
            <div className="fw-bold"> <hr /> </div>
            <Form className="bg-secondary" onSubmit={handleOnSubmit}>
                <Form.Field
                    id='form-input-control-email'
                    control={Input}
                    label='Email'
                    name='user_email'
                    placeholder='Email…'
                    required
                    icon='mail'
                    iconPosition='left'
                />
                <Form.Field
                    id='form-input-control-last-name'
                    control={Input}
                    label='Name'
                    name='user_name'
                    placeholder='Name…'
                    required
                    icon='user circle'
                    iconPosition='left'
                />
                <Form.Field
                    id='form-textarea-control-opinion'
                    control={TextArea}
                    label='Message'
                    name='user_message'
                    placeholder='Message…'
                    required
                />
                <Button type='submit' color='green'>Submit</Button>
            </Form>
        </div>
    );
};

export default Contact;