import React from 'react';
import {Box, Link} from '@mui/material';
import Styles from './Navigation.module.css';

function Navigation(){
    return(
        <Box id={Styles.BottomNav} className={`fadeIn`}>
            <h1 id={Styles.myNameTextLogo}>Steve Drees</h1>

            <Box id={Styles.navHolder}>
                <Link className={Styles.link} href="/contact" color="inherit">
                    Hire |
                </Link>
                <Link className={Styles.link} href="/my-work" color="inherit">
                    Case Studies |
                </Link>
                {/*<Link className={Styles.link} href="/contact" color="inherit">*/}
                {/*    Hire Me |*/}
                {/*</Link>*/}
                <Link className={Styles.link} href="/assets/William_Drees_Resume.pdf" color="inherit">
                    Resume |
                </Link>
                <Link className={Styles.link} href="/contact" color="inherit">
                    Contact
                </Link>

            </Box>
        </Box>
    )
}

export default Navigation;