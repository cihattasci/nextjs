import Navbar from "../../components/Navbar";
import TopHeader from "../../components/TopHeader";
import Button from "../../components/Button";
import styles from "../../styles/Journey.module.css";
import { useState } from "react";
import Footer from "../../components/Footer";

export default function Step2() {
    const [info, setInfo] = useState('');

    return (
        <div className={styles.mainContainer}>
            <Navbar/>
            <TopHeader text={'Yolculuğa Başla'} />
            <div className={styles.formContainer}>
               <div className={styles.insideDiv}>
                    <span  className={styles.subTitle}>Adım 2</span>
                    <span  className={styles.subTitleHeader}>Bize biraz kendinden bahseder misin?</span>
                    <input
                        value={info}
                        onChange={(e) => setInfo(e.target.value)}
                        multiline={true}
                        className={styles.bigInput}
                        placeholder={'Birkaç cümle yeterli'}
                    />
                    <Button
                        page={'/Journey/Step3'}
                    />
               </div>
            </div>
            <Footer/>
        </div>
    )
}
