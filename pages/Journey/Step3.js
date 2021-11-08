import Navbar from "../../components/Navbar";
import TopHeader from "../../components/TopHeader";
import styles from "../../styles/Journey.module.css";
import Footer from "../../components/Footer";

export default function Step2() {
    return (
        <div className={styles.mainContainer}>
            <Navbar/>
            <TopHeader text={'Yolculuğa Başla'} />
            <div className={styles.formContainerLast}>
                <span  className={styles.subTitle}>Tamamlandı</span>
            </div>
            <div className={styles.stepThreeFooterDiv}>
                <Footer/>
            </div>
        </div>
    )
}
