import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import styles from './sideNavLayout.module.css';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import PerfectScrollbar from 'perfect-scrollbar';

const Nav = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () =>{
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const ps = new PerfectScrollbar(`#${styles.sidebar}` , {
            wheelSpeed: 2,
            wheelPropagation: true,
            minScrollbarLength: 20
          });
        return(
            () =>{
                ps.destroy();
            }
        )
    }, [isOpen])

    return(
    <>
     <div className={styles.wrapper}>
     {/* Sidebar */}
        <nav id={`${styles.sidebar}`} className = {` ${isOpen ? styles.active : "" }`}>
            <div id={`${styles.dismiss}`} onClick = {handleToggle}>
                <i className="fas fa-arrow-left"></i>
            </div>

            <ul className="list-unstyled components">
                <p>Dummy Heading</p>
                <li className="active">
                    <Link to='/' onClick={handleToggle}>回到首頁</Link>
                </li>
                <li>
                    <Link to='/inStockSection' onClick={handleToggle}>現貨專區</Link>
                </li>
                <li>
                    <Link to='/heatTransferSection' onClick={handleToggle}>熱轉印</Link>
                </li>
                <li>
                    <Link to='/experienceSection' onClick={handleToggle}>體驗專區</Link>
                </li>
            </ul>
        </nav>

        { /* page contant */}
        <div id={`${styles.content}`}>

            <nav className={`${styles.bg_primary_transparent} navbar navbar-expand-lg navbar-light bg-white flex-row justify-content-between`}>
                <div className="container-fluid d-flex">

                    <button type="button" id="sidebarCollapse" className={`${styles.bg_primary_transparent} btn m-0 p-0 d-flex`} onClick = {handleToggle}>
                         <i className="fas fa-bars fa-2x"></i>
                    </button>
                    
                    <div className="font-weight-bold d-flex">
                        input
                    </div>

                    <div className="d-flex" id="navbarSupportedContent">
                        <ul className="nav navbar-nav my-auto">
                            <li className="nav-item">
                                <Link to='/ParchaceCart'><i class="fas fa-shopping-cart fa-2x"></i></Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/Login'><i class="far fa-user-circle fa-2x"></i></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {props.children}
        </div>
    </div>

    <div className={`${styles.overlay} ${isOpen ? styles.active : "" }`}></div>
    </>
    )
}

export default Nav;