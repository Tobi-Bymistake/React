import React from 'react'

function Alert(props) {
        const capitalize = (word)=>{

            const lower = word.toLowerCase();
            return lower.charAt(0).toUpperCase() + lower.slice(1);
        }
  
    return (

      <div style={{height:'50px'}}>

    {props.alert &&    //if props.alert is getting wrong then coz of && after next statment of && like div doesn't execute
        <div className={`alert alert - ${props.alert.type} alert-dismissible fade show`} role="alert">
                            
                             {/* <strong>Holy guacamole!</strong> You should check in on some of those fields below. */}
                           <strong> {capitalize(props.alert.type)}</strong>: {props.alert.msg}
                             {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
         </div>}
     </div>
  )
}

export default Alert
