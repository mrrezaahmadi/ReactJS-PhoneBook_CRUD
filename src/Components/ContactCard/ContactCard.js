import React from 'react'
import { Link } from 'react-router-dom'
import './ContactCard.scss'


function ContactCard(props) {
    const { contact } = props

    return (
        <td>
            <Link to={`/contact/${contact.id}`}>
                <div className='ContactCard'>
                    <div className='ContactCard-image'>
                        <img src={'https://api.adorable.io/avatars/256/Ali@adorable.png' + contact.id} alt='profile' />
                    </div>
                    <div className='ContactCard-name'>
                        <div className='ContactCard-name--title'>{contact.name}</div>
                        <div className='ContactCard-name--subtitle'>{contact.phone}</div>
                    </div>
                    <div></div>
                </div>
            </Link>
        </td >
    )
}

export default ContactCard
