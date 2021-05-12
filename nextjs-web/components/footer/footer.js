import './footer.module.css'
import styles from './footer.module.css'
import Link from 'next/link'
import Layout from '../layout/layout'

export default function Footer({ children, home }) {
    return (<div className="footer">
<header className={styles.footer}>
    {!home && (
          <div >
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
        </header>
        </div>
    );}