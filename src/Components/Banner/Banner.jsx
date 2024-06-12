import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (
        <div className='container mx-auto'>
            <Carousel>
                <div>
                    <img src='https://i.ibb.co/9HBGp3d/b3bf47ab39c2c964632c255768f1f8a1af0074d9-1024x392.webp' />
                </div>
                <div>
                    <img src='https://i.ibb.co/N3KytB8/Citizens-Invited-to-Help-Clear-the-Shelters-in-August.webp' />
                </div>
                <div>
                    <img src='https://i.ibb.co/LpJn2YK/unnamed.jpg' />
                </div>
                <div>
                    <img src='https://i.ibb.co/m4WbyX1/button-pets.webp' />
                </div>
                <div>
                    <img src='https://i.ibb.co/tBKFYr2/img-requirements-to-adopt-a-pet.jpg' />
                </div>
                <div>
                    <img src='https://i.ibb.co/zZ7t3hf/1-rkt-QHz1u-FDk-DGa9c04-ZBLw.jpg' />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;