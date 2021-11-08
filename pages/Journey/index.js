import Input from "../../components/Input";
import Navbar from "../../components/Navbar";
import TopHeader from "../../components/TopHeader";
import Button from "../../components/Button";
import styles from "../../styles/Journey.module.css";
import { useState } from "react";
import Footer from "../../components/Footer";
import * as actions from '../../redux/actions/main'
import { connect } from "react-redux";

function Journey(props) {
    /*const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [phone, setPhone] = useState('');
    const [instagram, setInstagram] = useState('');
    const [country, setCountry] = useState('');
    const [body, setBody] = useState('');
    const [isProductUse, setIsProductUse] = useState(false);
    const [isProductUseNo, setIsProductUseNo] = useState(false);
    const [isSigned, setIsSigned] = useState(false);
    const [isSignedNo, setIsSignedNo] = useState(false);*/

    const {initialState} = props;

    const countries = ['Turkey', 'Canada', 'United States', 'Germany', 'United Kingdom']

    const handleBody = (e) => {
        props.setBody(e.target.value)
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
                            value={initialState.name}
                            onChange={props.setName}
                        />
                        <Input
                            placeholder={"E-Posta Adresi"}
                            value={initialState.mail}
                            onChange={props.setMail}
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <Input
                            placeholder={"Telefon"}
                            value={initialState.phone}
                            onChange={props.setPhone}
                        />
                        <Input
                            placeholder={"Instagram Kullanıcı Adınız"}
                            value={initialState.instagram}
                            onChange={props.setInstagram}
                        />
                    </div>
                    <span  className={styles.subTitleHeader}>Hangi Ülkede Yaşıyorsun?</span>
                    <select className={styles.select}>
                        {
                            countries.map(item => {
                                return (
                                    // eslint-disable-next-line react/jsx-key
                                    <option selected={initialState.country === 'Turkey' ? true : false} value={`${item}`}>{item}</option>
                                )
                            })
                        }
                    </select>
                    <span  className={styles.subTitleHeader}>Daha önce Herbalife ürünü kulandın mı?</span>
                    <div className={styles.inputContainer2}>
                        <input
                            checked={initialState.isProductUse}
                            onClick={(e) => {
                                props.setIsProductUse(e.target.checked);
                                props.setIsProductUseNo(false)
                            }}
                            type="checkbox"
                        />
                        <span className={styles.checkboxText}>Evet</span>

                        <input
                            checked={initialState.isProductUseNo}
                            onClick={(e) => {
                                props.setIsProductUse(false);
                                props.setIsProductUseNo(e.target.checked)
                            }}
                            type="checkbox"
                        />
                        <span className={styles.checkboxText}>Hayır</span>
                    </div>
                    <span className={styles.subTitleHeader}>Daha önce Herbalife üyesi oldun mu?</span>
                    <div className={styles.inputContainer2}>
                        <input
                            checked={initialState.isSigned}
                            onClick={(e) => {
                                props.setIsSigned(e.target.checked);
                                props.setIsSignedNo(false)
                            }}
                            type="checkbox"
                        />
                        <span className={styles.checkboxText}>Evet</span>

                        <input
                            checked={initialState.isSignedNo}
                            onClick={(e) => {
                                props.setIsSigned(false);
                                props.setIsSignedNo(e.target.checked)
                            }}
                            type="checkbox"
                        />
                        <span className={styles.checkboxText}>Hayır</span>
                    </div>
                    <span className={styles.subTitleHeader}>İdeal vücut ölçün nedir?</span>
                    <input
                        placeholder={'Ölçünüzü Yazınız'}
                        value={initialState.body}
                        onChange={handleBody}
                        className={styles.bodyInput}
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

const mapStateToProps = (state) => {
    return {
        initialState: state,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setName: () => dispatch(actions.setName),
        setMail: () => dispatch(actions.setMail),
        setPhone: () => dispatch(actions.setPhone),
        setCountry: () => dispatch(actions.setCountry),
        setBody: () => dispatch(actions.setBody),
        setIsProductUse: () => dispatch(actions.setIsProductUse),
        setIsProductUseNo: () => dispatch(actions.setIsProductUseNo),
        setIsSigned: () => dispatch(actions.setIsSigned),
        setIsSignedNo: () => dispatch(actions.setIsSignedNo),
        setInstagram: () => dispatch(actions.setInstagram)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Journey)