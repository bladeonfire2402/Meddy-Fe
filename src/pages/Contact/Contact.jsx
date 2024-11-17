import { useState } from "react";
import { DrugStore } from "../../../public/meddy-assets/drugStore";
import StoreBlock from "../../components/StoreBlock/StoreBlock";

const ContactPage = ({ map }) => {
    const [mapSrc, setMapSrc] = useState(
        map ||
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d501725.41843254614!2d106.36555703781772!3d10.755292870470326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529292e8d3dd1%3A0xf15f5aad773c112b!2zVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1731748690821!5m2!1svi!2s"
    );

    const handleSetMapSrc = (location) => {
        setMapSrc(location);
    };

    const cities = ["Hồ Chí Minh", "Cần Thơ", "Hà Nội", "Đà Nẵng", "Bình Dương"];

    return (
        <div className="contact-page-wrapper flex flex-col items-center justify-center pb-10">
            {/* Map Embed */}
            <div className="iframe-map w-full" id="iframemap">
                <iframe
                    title="Google Maps Embed"
                    src={mapSrc}
                    width="100%"
                    height="400"
                    style={{ border: "0" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    aria-label="Map of selected location"
                ></iframe>
            </div>

            {/* Content Wrapper */}
            <div className="content-wrapper wrapper py-5">
                {/* Page Header */}
                <div className="flex items-center justify-between">
                    <h1 className="contact-title text-primary text-xl">
                        Bạn có thể liên hệ trực tiếp qua cửa hàng chúng tôi
                    </h1>
                    <div className="flex gap-2 items-center">
                        {cities.map((city, index) => (
                            <button
                                key={index}
                                className="rounded-3xl px-3 py-1 bg-primary text-white"
                            >
                                {city}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Store List */}
                <div className="grid grid-cols-2 gap-4 mt-7">
                    {DrugStore?.length > 0 ? (
                        DrugStore.map((store) => (
                            <StoreBlock
                                key={store.id}
                                store={store}
                                func={() => handleSetMapSrc(store.iframesrc)}
                            />
                        ))
                    ) : (
                        <p>No stores available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
