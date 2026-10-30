import styles from './Toast.module.css';

function Toast({message, onClose}){
    if(!message){
        return null;
    }

    return(
        <div className ={`toast show ${styles.toast}`}>
            <div ></div>
        </div>
    )

}