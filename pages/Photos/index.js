/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
import styles from '../../styles/Photos.module.css'
import Navbar from '../../components/Navbar'
import TopHeader from '../../components/TopHeader'
import Footer from '../../components/Footer';
import { useRouter } from 'next/router'
export default function index() {
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
    const goToDetail = (index) => {
        router.push({
            pathname: '/Photos/Detail',
            query: {
                image: images[index]
            }
        })
    }
    return (
        <div className={styles.main}>
            <Navbar/>
            <TopHeader text="Fotoğraflar"/>
            <div className={styles.mainContainer}>
                <div className={styles.imageDiv}>
                    {
                        images.map((val, index) => {
                            return (
                                <a onClick={() => goToDetail(index)}>
                                    <img
                                        width={200}
                                        height={200}
                                        src={val}
                                        className={styles.image}
                                    />
                                </a>
                            )
                        })
                    }
                </div>
            </div>
            <div className={styles.footer}>
                <Footer/>
            </div>
        </div>
    )
}
