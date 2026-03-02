//commons
import {PageMeta} from "../../../../components/common/seo/PageMeta";
//ui
import { Container } from "../../../../components/ui/containers/Container";

const DashboardHomePage = () => {
    return (
        <>
            <PageMeta 
                title="Dashboard" 
                canonicalPath="/app"
                noIndex 
            />
                <h1 className="text-xl font-semibold">Dashboard</h1>
                <p>Contenido principal</p>
            <Container>
            </Container>
        </>
    );
}
export default DashboardHomePage;