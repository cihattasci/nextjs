import styles from '../../styles/Photos.module.css'
import Navbar from '../../components/Navbar'
import TopHeader from '../../components/TopHeader'
import Footer from '../../components/Footer';
import { useRouter } from 'next/router'
export default function index(props) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter()
    const images = [
        'https://picsum.photos/200/300',
        'https://picsum.photos/200',
        'https://picsum.photos/id/237/200/300',
        'https://picsum.photos/seed/picsum/200/300',
        'https://picsum.photos/200/300?grayscale',
        'https://picsum.photos/200/300/?blur',
        'https://picsum.photos/200/300/?blur=2',
        'https://picsum.photos/id/870/200/300?grayscale&blur=2',
        'https://picsum.photos/200/300.jpg',
    ]
    return (
        <div className={styles.main}>
            <Navbar/>
            <TopHeader text="Fotoğraf Detay"/>
            <div className={styles.mainContainer}>
                <img
                    width={500}
                    height={500}
                    src={router.query.image}
                    className={styles.image}
                />
            </div>
            <div className={styles.footer}>
                <Footer/>
            </div>
        </div>
    )
}
