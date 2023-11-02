import React from 'react'
import styles from './style.module.scss'
import Image from 'next/image'

const ClientSection = () => {
  return (
    <div className={styles['main-conatiner']}>
        <div className={styles['container']}>
            <div className={styles['client-title']}>
                <h5>Over 25k+ software businesses growing with Solvero</h5>
            </div>
            <div className={styles['client-logo']}>
                <Image src="/assets/client/c1.png" alt='logo' width={100} height={40} />
                <Image src="/assets/client/c2.png" alt='logo' width={100} height={40} />
                <Image src="/assets/client/c3.png" alt='logo' width={100} height={40} />
                <Image src="/assets/client/c4.png" alt='logo' width={100} height={40} />
                <Image src="/assets/client/c5.png" alt='logo' width={100} height={40} />
            </div>
        </div>
    </div>
  )
}

export default ClientSection