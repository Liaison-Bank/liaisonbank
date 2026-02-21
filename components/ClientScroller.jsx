import Slider from 'react-infinite-logo-slider'
import Image from "next/image";
import { clientImageName } from "@/static/clientImageList";

const ClientScroller = () => {
    // const loopClients = [...clientImageName, ...clientImageName];
    return (
        <div className="slider-container py-10 bg-white">
            <Slider
                width="250px"
                duration={400}
                pauseOnHover={true}
                blurBorders={false}
                blurBorderColor="#fff"
            >
                {clientImageName.map((name, index) => (
                    <Slider.Slide key={index}>
                        <Image
                            src={`/clients/${name}.jpg`}
                            width={175}
                            height={75}
                            alt={name}
                            loading="lazy"
                        />
                    </Slider.Slide>
                ))}
            </Slider>
        </div>
    );
};

export default ClientScroller;