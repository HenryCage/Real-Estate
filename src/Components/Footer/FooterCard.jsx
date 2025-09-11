const FooterCard = ({ title, body1, body2, body3 }) => {
    return(
        <>
            <div className="footer">
                <div className="heading">{title}</div>
                <ul>
                    <li>{body1}</li>
                    <li>{body2}</li>
                    <li>{body3}</li>
                </ul>
            </div>
        </>
    )
}

export default FooterCard