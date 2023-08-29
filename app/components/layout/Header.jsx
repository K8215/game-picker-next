import Image from "next/image"
import keyboard from '../../keyboard.jpeg'

export default function Header() {
    return  (
        <header>
            <Image 
                src={keyboard} 
                alt="keyboard texture"
                height={900}
                width={1000}
                quality={80}
                priority={true} 
                className="header-bg"
            />
            <div className="container">                
                <h1>Game Picker Next</h1>
            </div>           
        </header>
    )
}