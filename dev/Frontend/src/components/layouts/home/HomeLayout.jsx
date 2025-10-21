import {Header} from "../../common/header/HeaderHome";

export const HomeLayout = ({children}) => {
    return(
        <>
            <Header />
            <main>{children}</main>
        </>

    );
}