import './App.css'
import { motion } from "framer-motion"
import Nav from './component/nav'
import Front from './component/front'
import Skill from './component/skill'
import Project from './component/project'
import Social from './component/social'
import Footer from './component/footer'
import BgImage from './component/bg2.jpeg'; 

function App() {
    return (
        <div className="bg-black w-full min-h-screen">

            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 3, ease: "easeOut" }}
                className="min-h-screen bg-cover bg-top bg-no-repeat bg-fixed"
                style={{ backgroundImage: `url(${BgImage})` }}
            >
                <div className="bg-black/40 min-h-screen w-full">
                    <Nav />
                    <Front />
                    <Skill />
                    <Project />
                    <Social />
                    <Footer />
                </div>
            </motion.div>
            
        </div>
    )
}


export default App