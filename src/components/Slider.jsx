import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './InvestigadorCard'; // Asegura que los estilos se apliquen

export default function Slider() {
  return (
    <Swiper spaceBetween={30} slidesPerView={1} loop={true}>
      <SwiperSlide>
        <div className="relative">
          <img
            src="/images/slide1.jpg"
            alt="Fondo 1"
            className="w-full h-[60vh] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-center p-4">
            <div>
              <h2 className="text-3xl font-bold">Bienvenidos a nuestra Red Académica</h2>
              <p>Conectamos talento, investigación y tecnología.</p>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative">
          <img
            src="/images/slide2.jpg"
            alt="Fondo 2"
            className="w-full h-[60vh] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-center p-4">
            <div>
              <h2 className="text-3xl font-bold">Proyectos Destacados</h2>
              <p>Descubre lo último en innovación científica.</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}