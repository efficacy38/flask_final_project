import React, {useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';

import styles from './sideNavLayout.module.css';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import PerfectScrollbar from 'perfect-scrollbar';
import Footer from './footer';
import Icons from '../icons/Icons';

const Nav = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const sideNavPS = useRef();
    const content = useRef();

    const handleToggle = () =>{
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const ps = new PerfectScrollbar(sideNavPS.current , {
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

    useEffect(() => {
        const ps = new PerfectScrollbar(content.current , {
            wheelSpeed: 2,
            wheelPropagation: true,
            minScrollbarLength: 20
          });
        return () => {
            ps.destroy();
        }
    }, [])

    return(
    <>
     <div className={styles.wrapper}>
     {/* Sidebar */}
        <nav id={`${styles.sidebar}`} className = {` ${isOpen ? styles.active : "" }`} ref={sideNavPS}>
            <div id={`${styles.dismiss}`} onClick = {handleToggle}>
                <i className="fas fa-arrow-left"></i>
            </div>

            <ul className={`${styles.components} list-unstyled`}>
                <p className='mt-1 mb-2'>Input</p>
                <li className="active">
                    <Link to='/' onClick={handleToggle}><i class="fas fa-home fa-2x"></i><span>回到首頁</span></Link>
                </li>
                <li>
                    <Link to='/inStockSection' onClick={handleToggle}><i class="fas fa-truck-moving fa-2x"></i><span>現貨專區</span></Link>
                </li>
                <li>
                    <Link to='/heatTransferSection' onClick={handleToggle}><Icons.Iron /><span>熱轉印</span></Link>
                </li>
                <li>
                    <Link to='/experienceSection' onClick={handleToggle}><i class="fas fa-hand-sparkles fa-2x"></i><span>體驗專區</span></Link>
                </li>
            </ul>
        </nav>

        { /* page contant */}
        <div id={`${styles.content}`} ref={content} className = 'vh-100'>

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
            <div className = 'vh-100'>
            {props.children}
            </div>
            <Footer />
        </div>
    </div>

    <div className={`${styles.overlay} ${isOpen ? styles.active : "" }`} onClick = {()=>{if(isOpen) handleToggle();}}></div>
    </>
    )
}

export default Nav;