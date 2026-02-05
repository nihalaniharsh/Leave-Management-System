function Footer(){

    return(
        <footer className="bg-primary text-light py-3 fixed-bottom">
            <div className="container text-center ">
                <small>
                    &copy; {new Date().getFullYear()} Leave Management System |  Built with ♥ by Harsh
                </small>

            </div>
            
        </footer>
    )
}

export default Footer;