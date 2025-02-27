import React, {useState} from 'react';
import './Header.scss';
import './HeaderMedia.scss';
import Logo from '../../assets/Logo.ico';
import { MdHelpCenter } from "react-icons/md";
import { MdOutlineLocalGroceryStore, MdOutlineRateReview } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { LiaSignalSolid } from "react-icons/lia";
import SearchBlock from '../../components/SearhBlock/SearchBlock'
import { Link, useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import { RiCustomerService2Line } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import {logOut} from "../../store/reducers/user";

const Header = () => {
    const user = useSelector(s => s.user)
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogOut = () => {
        dispatch(logOut()); // Очищаем данные пользователя в Redux
        navigate('/'); // Перенаправляем на главную страницу или другую
    };

    return (
        <header className='header'>
            <div className="container">
                <div className="header__block">
                    <div className="header__left">
                        <Link to="/">
                            <img src={Logo} className='header__logo' alt=""/>
                        </Link>
                        <Link to="/Catalog" role='button' className="header__catalog">
                            <span>Каталог</span>
                        </Link>
                        <SearchBlock/>
                    </div>

                    <div className='header__list'>
                        <Link to="/reviews" className="header__link">
                            <MdOutlineRateReview className='header__link-icons'/>
                            <p>Отзывы</p>
                        </Link>
                        <Link to="/favorites" className="header__link">
                            <AiFillHeart className='header__link-icons'/>
                            <p>Избранное</p>
                        </Link>
                        <Link to="/Cart" className="header__link">
                            <MdOutlineLocalGroceryStore className='header__link-icons'/>
                            <p>Корзина</p>
                        </Link>
                        {
                            user.status === 'success' ?
                                <div role='btn' onClick={handleLogOut}  className='header__link'>
                                    <CiUser className='header__link-icons'/>
                                    <p>Выйти</p>
                                </div> :
                                <Link to='/Login' className='header__link'>
                                    <CiUser className='header__link-icons'/>
                                    <p>Войти</p>
                                </Link>
                        }
                        <button className="header__search-btn">
                            <IoIosSearch className='header__search-icons'/>
                        </button>
                    </div>
                    <div className="number">
                        <div className="number__block">
                            <div className="number__order">
                                <a href="tel:88001008899">
                                    8 (800) 100-88-99
                                </a>
                                <p>Оформить заказ</p>
                            </div>
                            <div className="number__support">
                                <a href="tel:88001005588">
                                    8 (800) 100-55-88
                                </a>
                                <p>Служба поддержки</p>
                            </div>
                        </div>
                    </div>
                    <div className='header__right'>
                        <button className="number__button" onClick={togglePopup}>
                            <RiCustomerService2Line className='number__button-icons'/>
                        </button>
                        <div role='button' className="header__info">
                            <MdHelpCenter className='header__help'/>
                        </div>
                    </div>


                </div>
            </div>
        </header>
    );
};

export default Header;
