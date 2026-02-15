import {Header} from "../../common/header/HeaderHome";
import {Footer} from "../../common/footer/FooterHome";

export const HomeLayout = ({children}) => {
    return(
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>

    );
}