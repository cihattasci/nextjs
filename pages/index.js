import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className={styles.subDiv}>
        <div className={styles.imageDiv}>
          <img
            src="/images/ferhan.png"
            alt="Picture of the author"
            width={500}
            height={500}
            layout={"responsive"}
            className={styles.image}
          />
        </div>
        <div className={styles.textDiv}>
          <span className={styles.textOne}>Merhaba,</span>
          <span className={styles.textOne}>Dünyama Hoş Geldin</span>
          <span className={styles.textTwo}>Herkese Selam</span>
          <span className={styles.textThree}>Ben Ferhan Cihaner,</span>
          <span className={styles.textTwo}>Sporu çok seviyorum ve bir Triathletim! İnsanların da daha sağlıklı ve aktif bir yaşam biçimi benimsemeleri için elimden gelen her şeyi yapmaya hazırım.</span>
          <span className={styles.textTwo}>Sağlıklı ve daha iyi bir dünya için benim seçtiğim yol bu! Mutlu, huzurlu ve kendini seven bireyler dünyayı daha güzel bir yere çevirir. En büyük motivasyonum da bu amaç doğrultusunda sizinle birlikte hareket edebilmek. Web sitemi gezerken umarım istediklerini karşılarım!</span>
          <span className={styles.textTwo}>Benimle gel ve motive ol!</span>
        </div>
      </div>
    </div>
  )
}
