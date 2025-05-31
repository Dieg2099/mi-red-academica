import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Slider() {
  return (
    <Swiper spaceBetween={30} slidesPerView={1} loop={true}>
      <SwiperSlide>
        <div className="bg-blue-600 text-white p-10 text-center">
          <h2 className="text-3xl font-bold">Bienvenidos a nuestra Red Académica</h2>
          <p>Conectamos talento, investigación y tecnología.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-indigo-600 text-white p-10 text-center">
          <h2 className="text-3xl font-bold">Proyectos Destacados</h2>
          <p>Descubre lo último en innovación científica.</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}