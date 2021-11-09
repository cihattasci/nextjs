import Input from "../../components/Input";
import Navbar from "../../components/Navbar";
import TopHeader from "../../components/TopHeader";
import Button from "../../components/Button";
import styles from "../../styles/Journey.module.css";
import Footer from "../../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { SET_FORM_DATA } from "../../redux/types";

function Journey(props) {

    const {formData} = useSelector(state => state.main);
    let dispatch = useDispatch();
    const countries = ['Turkey', 'Canada', 'United States', 'Germany', 'United Kingdom']
    const onChangeAction = (e) => {
        let value = e.target.value;
        let checked = e.target.checked;
        let name = e.target.name
        let data = formData
        data[name] = value
        dispatch({type: SET_FORM_DATA, data: data})
    }
    const onChangeActionChecbox = (e) => {
        let checked = e.target.checked;
        let name = e.target.name
        let data = formData
        if (name === 'isProductUse') {
            data[name] = checked;
            data['isProductUseNo'] = false;
        } else if (name === 'isProductUseNo') {
            data[name] = checked;
            data['isProductUse'] = false;
        } else if (name === 'isSigned') {
            data[name] = checked;
            data['isSignedNo'] = false;
        } else {
            data[name] = checked;
            data['isSigned'] = false;
        }
        dispatch({type: SET_FORM_DATA, data: data})
    }
    return (
        <div className={styles.mainContainer}>
            <Navbar/>
            <TopHeader text={'Yolculuğa Başla'} />
            <div className={styles.formContainer}>
               <div className={styles.insideDiv}>
                    <span  className={styles.subTitle}>Adım 1</span>
                    <span  className={styles.subTitleHeader}>Kişisel Bilgiler</span>
                    <div className={styles.inputContainer}>
                        <Input
                            placeholder={"isim"}
                            value={formData.name}
                            onChange={onChangeAction}
                            name={'name'}
                        />
                        <Input
                            placeholder={"E-Posta Adresi"}
                            value={formData.mail}
                            onChange={onChangeAction}
                            name={'mail'}
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <Input
                            placeholder={"Telefon"}
                            value={formData.phone}
                            onChange={onChangeAction}
                            name={'phone'}
                        />
                        <Input
                            placeholder={"Instagram Kullanıcı Adınız"}
                            value={formData.instagram}
                            onChange={onChangeAction}
                            name={'instagram'}
                        />
                    </div>
                    <span  className={styles.subTitleHeader}>Hangi Ülkede Yaşıyorsun?</span>
                    <select name={'country'} value={formData.country} onChange={onChangeAction} className={styles.select}>
                        {
                            countries.map(item => {
                                return (
                                    // eslint-disable-next-line react/jsx-key
                                    <option selected={formData.country === 'Turkey' ? true : false} value={`${item}`}>{item}</option>
                                )
                            })
                        }
                    </select>
                    <span  className={styles.subTitleHeader}>Daha önce Herbalife ürünü kulandın mı?</span>
                    <div className={styles.inputContainer2}>
                        <input
                            checked={formData.isProductUse}
                            onClick={onChangeActionChecbox}
                            type="checkbox"
                            name={'isProductUse'}
                        />
                        <span className={styles.checkboxText}>Evet</span>

                        <input
                            checked={formData.isProductUseNo}
                            onClick={onChangeActionChecbox}
                            type="checkbox"
                            name={'isProductUseNo'}
                        />
                        <span className={styles.checkboxText}>Hayır</span>
                    </div>
                    <span className={styles.subTitleHeader}>Daha önce Herbalife üyesi oldun mu?</span>
                    <div className={styles.inputContainer2}>
                        <input
                            checked={formData.isSigned}
                            onClick={onChangeActionChecbox}
                            type="checkbox"
                            name={'isSigned'}
                        />
                        <span className={styles.checkboxText}>Evet</span>

                        <input
                            checked={formData.isSignedNo}
                            onClick={onChangeActionChecbox}
                            type="checkbox"
                            name={'isSignedNo'}
                        />
                        <span className={styles.checkboxText}>Hayır</span>
                    </div>
                    <span className={styles.subTitleHeader}>İdeal vücut ölçün nedir?</span>
                    <input
                        placeholder={'Ölçünüzü Yazınız'}
                        value={formData.body}
                        onChange={onChangeAction}
                        className={styles.bodyInput}
                        name={'body'}
                    />
                    <Button
                        page={'/Journey/Step2'}
                    />
               </div>
            </div>
            <div className={styles.footer}>
                <Footer/>
            </div>
        </div>
    )
}

export default Journey