import { useRef } from 'react';
import { register } from 'swiper/element/bundle';
import style from './Slider.module.css';

register();

export const Slider = () => {
	const swiperElRef = useRef(null);

	return (
		<div className='bg-[#FEE0AE] min-h-1/2 p-3 mt-10'>
			<swiper-container
				ref={swiperElRef}
				slides-per-view='1'
				navigation='true'
				pagination='true'
				style={{
					height: '100%',
					width: '85%',
					' --swiper-pagination-color': '#fff',
					'--swiper-navigation-color': '#fff',
					'--swiper-navigation-size': '2rem',
					'--swiper-pagination-color': '#5D0607',
					'--swiper-pagination-bullet-inactive-color': '#999999'
				}}
				autoplay='true'
				className={style.swiper}
				loop='true'
				space-between='10'
				timeout='500'
			>
				<swiper-slide>
					<div className='w-full h-full flex justify-center'>
						<div className='w-full h-full p-2 flex gap-7 flex-wrap md:flex-nowrap'>
							<img src='BB.svg' alt='' className='' />
							<div className='h-full flex flex-col justify-start gap-10'>
								<h2 className='text-3xl font-thin'>
									Hotel + entradas Parque Warner
								</h2>
								<p className='w-full md:w-3/4'>
									Ven al Parque Warner Madrid y pasa un día inolvidable junto
									con tus personajes favoritos. Conviértete en protagonista de
									múltiples aventuras gracias a sus atracciones, animaciones,
									espectáculos musicales, que recrean el maravilloso mundo del
									cine y donde lo más inimaginable puede suceder en un auténtico
									“parque de película”. Únicamente a 2.5 Km del Hostal Avenidas
									(San Martin de la Vega). !Todo el Glamour de Hollywood en San
									Martin de la Vega!. Parque warner te presenta cinco áreas
									rebosantes de toda la magia del cine para que disfrutes de un
									día cargado de adrenalina.
								</p>
							</div>
						</div>
					</div>
				</swiper-slide>
				<swiper-slide>
					<div className='w-full h-full flex justify-center'>
						<div className='w-full h-full p-2 flex gap-7 flex-wrap md:flex-nowrap'>
							<img src='Chinchon.svg' alt='' className='' />
							<div className='h-full flex flex-col justify-start gap-10'>
								<h2 className='text-3xl font-thin'>Muy cerca de Chinchon</h2>
								<p className='w-full md:w-3/4'>
									El Hostal Avenidas, esta muy cerca de la histórica villa de
									Chinchón (Madrid) es un excelente punto de partida para
									visitar otros lugares interesantes de esta comunidad, como
									Aranjuez, a 20 kilómetros. La especial condición geográfica de
									la vega del Tajuña debió propiciar los asentamientos humanos
									desde tiempos muy antiguos. Los primeros vestigios
									prehistóricos se remontan al Neolítico. De esta época son las
									múltiples cuevas de la zona. La más conocida es la cueva de la
									Mora. En el denominado Cerro del Salitral se han descubierto
									restos de una ciudad íbera con su correspondiente necrópolis.
								</p>
							</div>
						</div>
					</div>
				</swiper-slide>
				<swiper-slide>
					<div className='w-full h-full flex justify-center'>
						<div className='w-full h-full p-2 flex gap-7 flex-wrap md:flex-nowrap'>
							<img src='desayuno.svg' alt='' className='' />
							<div className='h-full flex flex-col justify-start gap-10'>
								<h2 className='text-3xl font-thin'>Desayuno incluido</h2>
								<p className='w-full md:w-3/4'>
									Si buscas un hostal con desayuno incluido Cerca del Parque
									Warner , el Hostal Avenidas incluye en todas las habitaciones
									un buffet de desayuno con gran variedad de alimentos para
									elegir que te permitirán hacer múltiples combinaciones, tanto
									si te gusta desayunar dulce o salado.
								</p>
							</div>
						</div>
					</div>
				</swiper-slide>
				<swiper-slide>
					<div className='w-full h-full flex justify-center'>
						<div className='w-full h-full p-2 flex gap-7 flex-wrap md:flex-nowrap'>
							<img src='avion.svg' alt='' className='' />
							<div className='h-full flex flex-col justify-start gap-10'>
								<h2 className='text-3xl font-thin'>
									Traslados desde el aeropuerto{' '}
								</h2>
								<p className='w-full md:w-3/4'>
									No esperes llegar a Madrid, para conseguir tu traslado desde
									el aeropuerto o Renfe. Al hacer la reserva del hospedaje,
									solicita nuestro servicio de traslado personalizado y podrás
									relajarte al saber que nos ocuparemos de todo.
								</p>
							</div>
						</div>
					</div>
				</swiper-slide>
				<swiper-slide>
					<div className='w-full h-full flex justify-center'>
						<div className='w-full h-full p-2 flex gap-7 flex-wrap md:flex-nowrap'>
							<img src='room.svg' alt='' className='' />
							<div className='h-full flex flex-col justify-start gap-10'>
								<h2 className='text-3xl font-thin'>15 habitaciones</h2>
								<p className='w-full md:w-3/4'>
									Por sus instalaciones y su aspecto es perfecto para pasar unos
									días de diversión en los distintos parques de la Comunidad de
									Madrid o para disfrutar de unas vacaciones inolvidables.{' '}
								</p>
							</div>
						</div>
					</div>
				</swiper-slide>
			</swiper-container>
		</div>
	);
};
