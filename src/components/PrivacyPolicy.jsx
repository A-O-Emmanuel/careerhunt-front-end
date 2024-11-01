import Header from "./Header";
import Footer from "./Footer";


function PrivacyPolicy() {
    return (
        <>
            <Header />
            <div className="privacy">
            <h5>
                Privacy Policy
            </h5>
            <h6>Effective Date: 2024</h6>

            <p>
            At CareerHunt, we respect your privacy and are committed to protecting your personal information. 
            This Privacy Policy outlines the types of data we collect, how we use it, 
            and the steps we take to safeguard your information. By using our website or services, you agree to the terms outlined in this policy.
            </p>

            <h6>
            1. Information We Collect
            </h6>

            <p>
            We collect information to enhance our services, improve your user experience, and connect job seekers with employers. 
            The types of information we may collect include:
            </p>

            <ul>
                <li>
                    <span> <b>Personal Information:</b> </span>Information you provide when registering, 
                    as your name, email address, phone number, and resume details.
                </li>
                <li>
                    <span><b>Profile and Career Information:</b></span> Details related to your job history, skills, and preferences, which help us personalize job matches.
                </li>
                <li>
                    <span><b>Usage Data:</b></span> Information collected automatically when you use our site, such as IP address, browser type, device information, and browsing behavior.
                </li>
                <li>
                    <span><b>Cookies and Tracking Technologies:</b></span> We use cookies, pixels, and similar technologies to track your usage and provide a customized experience. 
                You may disable cookies in your browser settings, though this may affect certain functionalities of our site.
                </li>
            </ul>
            </div>

            <Footer />
        </>
    )
}

export default PrivacyPolicy;