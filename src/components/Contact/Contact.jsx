import PropTypes from "prop-types";
import { FaUser, FaPhone } from "react-icons/fa";

import css from "./Contact.module.css";

const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <div className={css.contactCard}>
      <div className={css.contactData}>
        <div className={css.contactInfo}>
          <FaUser />
          <span className={css.contactValue}>{name}</span>
        </div>
        <div className={css.contactInfo}>
          <FaPhone />
          <span className={css.contactValue}>{number}</span>
        </div>
      </div>
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </div>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
