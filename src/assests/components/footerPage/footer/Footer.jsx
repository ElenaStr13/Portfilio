import './footer.scss';
import FooterMain from '../footerMain/FooterMain';
import FooterMobile from '../footerMobile/FooterMobile';
import Media from 'react-media';

function Footer({ onOpen }) {

   return (<>
    <Media query="(max-width: 1000px)">
{footer => {
    return footer ? <FooterMobile/> : <FooterMain />
}
}
        {/* {isDesktop && <FooterMobile />} */}
        {/* {!isDesktop && <FooterMain />} */}
       </Media>
   </>);

}

export default Footer;