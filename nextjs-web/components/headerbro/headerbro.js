import styles from './header.module.css'

export default function HeaderBro({ children, home }) {
    return (<>
    <div className={styles.headerbros}>
    <p className={styles.left}>Todo App</p>
    <p className={styles.right} >login/logout/account</p>
    </div>
     </>);}