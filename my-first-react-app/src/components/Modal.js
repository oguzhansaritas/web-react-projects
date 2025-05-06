import './Modal.css'
import ReactDOM from 'react-dom';

export default function Modal({children, isSalesModal}) {
  
  return ReactDOM.createPortal((
    <div className='modal-backdrop'>
        <div className='modal' style ={{
          border:"4px solid", 
          borderColor: isSalesModal ? "#ff4500" : "#555", //dynmic inline styles
          textAlign: "center"
          }}>
            {children}
                   
        </div>
    </div>
  ), document.body)
  
}
 