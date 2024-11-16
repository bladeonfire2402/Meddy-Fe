import './About.css'

const AboutPages = () => {
    return(
        <div className="AboutPage-page">
            <div className='bg-primary  w-full h-700 relative'>
                <div className='hexagon-l absolute  top-24 left-96 bg-pastel-blue rotate-90 opacity-65 z-50'></div>
                <div className='absolute top-16 left-48'>
                    <div className='hexagon bg-pastel-blue rotate-90 opacity-65'></div>
                    <div className='hexagon absolute top-2 left-2 bg-pastel-blue rotate-90 opacity-65'></div>
                </div>
                <div className='absolute bottom-72 left-80 z-0'>
                    <div className="hexagon-s bg-pastel-blue rotate-90 opacity-65 absolute right-10 -top-7 z-20"></div>
                    <div className='hexagon absolute top-16 -left-24 bg-pastel-blue rotate-90 opacity-65 z-10'></div>
                </div>
            </div>
        </div>
    )

}
export default AboutPages
