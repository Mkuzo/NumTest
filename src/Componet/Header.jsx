import { useNavigate } from "react-router-dom"

export default function Header(){
    const navigate = useNavigate()
    function handleHome(){
        navigate('/')
    }
    function handleAbout(){
        navigate('/about')
    }
    function handleContact(){
        navigate('/contact')
    }
    return(
        <div>
            <div className="header-container">
                <div className="header">
                    <ul>
                        <li onClick={handleHome}>Home</li>
                        <li onClick={handleAbout}>About Us</li>
                        <li onClick={handleContact}>Contact Us</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}