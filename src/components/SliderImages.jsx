import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import PropTypes from "prop-types"

const SliderImages = ({ images }) => {
    return (
        <div className="flex flex-col gap-1">
        <h4 className="font-barlow uppercase text-xl text-artMidBlue-50 ml-2">Galeria</h4>
        <Carousel>
            <CarouselContent className="flex items-center">
                {images.map((imageObj, index) => (
                    <CarouselItem key={imageObj.id} className="md:basis-1/2 lg:basis-1/3">
                        <img
                            src={imageObj.img}
                            alt={`Imagem ${index + 1}`}
                            className="rounded-md object-cover w-full h-64 border border-artLightBlue-50"
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="text-white bg-artLime-50"/>
            <CarouselNext className="text-white bg-artLime-50"/>
        </Carousel>
        </div>
    )
}

SliderImages.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired,
    })).isRequired,
}

export default SliderImages
