import FooterCard from "../../Components/Footer/FooterCard"

const Footer = () => {
    return(
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-top">
                    <FooterCard 
                        title='Contact' 
                        body1='CALL +234 703 2999 583' 
                        body2='info@facibushousing.com' 
                        body3='Road 2,Shop C253 Ikota shopping complex,Victoria Garden City,Lagos, Nigeria'
                     />
                    <FooterCard
                        title='Projects'
                        body1='PENTAGON COURT PHASE 1'
                        body2='PENTAGON COURT PHASE 2'
                        body3='PENTAGON COURT PHASE 2'
                         />
                    <FooterCard
                        title='Head office'
                        body1='Road 2,Shop C253 Ikota shopping complex,Victoria Garden City,Lagos, Nigeria Monday - Friday 9AM - 6PMSaturday 11AM - 5PM'
                        body2=''
                        body3=''
                         />
                </div>
            <div className="bottom">Facibushousing</div>
            </div>
        </div>
    )
}

export default Footer