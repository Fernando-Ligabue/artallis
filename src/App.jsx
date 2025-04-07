import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import ScrollToTop from './Layout/ScrollToTop'
import Home from './pages/Home'
import Presentation from './pages/Presentation'
import History from './pages/History'
import Mission from './pages/Mission'
import OrganizationalStructure from './pages/OrganizationalStructure'
import Team from './pages/Team'
import Protocol from './pages/Protocol'
import ArtallisPlus from './pages/ArtallisPlus'
import Aprende from './pages/Aprende'
import ArtallisEmPalco from './pages/ArtallisEmPalco'
import Comunnity from './pages/Comunnity'
import Juntate from './pages/Juntate'
import NotFound from './pages/NotFound'
import News from './pages/News'
import SinglePost from './pages/SinglePost'
import Events from './pages/Events'
import Schedule from './pages/Schedule'
import { Toaster } from 'react-hot-toast'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'

function App() {

  const basename = import.meta.env.VITE_BASENAME_URL;

  return (
    <>
      <BrowserRouter basename={basename}>
      {/* <BrowserRouter> */}
        <ScrollToTop />
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apresentacao" element={<Presentation />} />
            <Route path="/historia" element={<History />} />
            <Route path="/missao" element={<Mission />} />
            <Route path="/estruturaorganizacional" element={<OrganizationalStructure />} />
            <Route path="/equipa-artallis" element={<Team />} />
            <Route path="/protocolos-parcerias" element={<Protocol />} />
            <Route path="/artallismais" element={<ArtallisPlus />} />
            <Route path="/aprende" element={<Aprende />} />
            <Route path="/artallisempalco" element={<ArtallisEmPalco />} />
            <Route path="/comunidadecal" element={<Comunnity />} />
            <Route path="/juntate" element={<Juntate />} />
            <Route path="/noticias" element={<News />} />
            <Route path="/noticias/:slug" element={<SinglePost />} />
            <Route path="/eventos" element={<Events />} />
            <Route path="/agenda" element={<Schedule />} />
            <Route path="/termos" element={<Terms />} />
            <Route path="/privacidade" element={<Privacy />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </MainLayout>
        <Toaster
          position="bottom-right"
          reverseOrder={false}
        />
      </BrowserRouter>
    </>
  )
}

export default App
