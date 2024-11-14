const SplashScreen = () => {
    return (
        <div className="splashscreen-wrapper absolute top-0 w-full left-0 bg-primary h-full flex flex-col items-center">
            <div className="size-48 circle overflow-hidden mt-44">
            <iframe 
                src="https://giphy.com/embed/SVNj1XrCTzafoQwQai" 
                width="195" 
                height="195" 
                style={{ border: "none" }} 
                frameBorder="0" 
                className="giphy-embed" 
                allowFullScreen
            ></iframe>
            </div>
            <div className="mt-8 text-3xl font-semibold text-white">Đổi giao diện...</div>
        </div>
    );
};

export default SplashScreen;
