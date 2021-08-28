import React from 'react'

 function Alert(props) {
    // const capitalize= (word)=>{
    //     if(word.length>0){
    //     return (word.charAt(0).toUpperCase() +word.slice(1))
    //     }else{
    //     return "";
    //     }

        
    //     return (word.charAt(0).toUpperCase() + word.slice(1));
    // }
    return (
        
            props.alert &&  <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                 <strong>{props.alert.type}</strong> :{props.alert.msg}
                 
                
            </div>
            
        
    )
}

export default Alert
 