import { Routes, Route } from 'react-router-dom'
import { LayoutContainer } from '../theme';
import { Footer } from './Footer';
import Header from './Header';

export const Layout = (props) => {
    return <LayoutContainer>
        <nav>
            <Routes>
                <Route path="/videos" element={ <nav></nav> } />
                <Route path="/usuario/signin" element={ <nav></nav> } />
                <Route path="/usuario/signup" element={ <nav></nav> } />
                <Route path="/" element={ <nav></nav> } />
                <Route path="*" element={ <Header></Header> } />
            </Routes>
        </nav>
        <main>
            { props.children }
        </main>
        <footer>
            <Footer />
        </footer>
    </LayoutContainer>
}