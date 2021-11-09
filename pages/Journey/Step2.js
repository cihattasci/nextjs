import Navbar from "../../components/Navbar";
import TopHeader from "../../components/TopHeader";
import Button from "../../components/Button";
import styles from "../../styles/Journey.module.css";
import Footer from "../../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { SET_FORM_DATA } from "../../redux/types";

export default function Step2() {
    const {formData} = useSelector(state => state.main);
    let dispatch = useDispatch();
    const onChangeAction = (e) => {
        let value = e.target.value;
        let name = e.target.name
        let data = formData
        data[name] = value
        dispatch({type: SET_FORM_DATA, data: data})
    }
    return (
        <div className={styles.mainContainer}>
            <Navbar/>
            <TopHeader text={'Yolculuğa Başla'} />
            <div className={styles.formContainer}>
               <div className={styles.insideDiv}>
                    <span  className={styles.subTitle}>Adım 2</span>
                    <span  className={styles.subTitleHeader}>Bize biraz kendinden bahseder misin?</span>
                    <input
                        value={formData.info}
                        onChange={onChangeAction}
                        multiline={true}
                        className={styles.bigInput}
                        placeholder={'Birkaç cümle yeterli'}
                        name={'info'}
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
