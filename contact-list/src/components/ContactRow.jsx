import React from 'react'

function ContactRow({ contact }) {
  return (
    <tr>
        <td className="getMoreInfo">{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
    </tr>
  )
}

export default ContactRow