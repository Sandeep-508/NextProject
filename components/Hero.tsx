"use client"
import Image from 'next/image'
import Camp from '../public/camp.svg'
import Star from '../public/star.svg'
import PrimaryButton from './common/PrimaryButton'
const Hero = () => {
    const stars = [];
    for (let i = 0; i < 6; i++) {
        stars.push(
            <Image src={Star} alt='star image' width={24} height={24} />
        )
    }
    return (
        <section className="max-container padding-container flex flex-col gap-20 py-10 md:gap-28 lg:py-20 xl:flex-row" style={{ backgroundAttachment: 'fixed' }}>
            <div className="hero-map pointer-events-none z-[-1]" />
            <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
                <Image src={Camp} alt="camp image" width={50} height={50} />
                <h1 className='bold-88 max-w-[576px]'>Putuk Truno Camp Area</h1>
                <p className='max-w-[520px] mt-4'>We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app</p>
                <div className='flex items-center justify-start gap-2 mt-4'>
                    {
                        stars.map((obj) => obj)
                    }
                    <h4 className='bold-20'>198K</h4>
                    <p className=''>Excellent Reviews</p>
                </div>
                <div className='flex items-center justify-start gap-4 mt-4'>
                    <PrimaryButton text='Download App' type='button' variant='btn_green' />
                    <PrimaryButton text='How We Work ?' icon='/play.svg' type='button' variant='btn_white' />
                </div>
            </div>
            <div className='w-1/2 px-5 flex items-start justify-start'>
                <div className='bg-green-90 max-w-[268px] min-h-[200px] py-8 px-7 rounded-3xl'>
                    <div>
                        <p className='regular-16 text-gray-20'>Location</p>
                        <p className='bold-20 text-white'>Aguas Calientes</p>
                    </div>
                    <div className='flexBetween gap-6 mt-8'>
                        <div>
                            <p className='regular-16 text-gray-20'>Distance</p>
                            <p className='bold-20 text-white'>178.21mi</p>
                        </div>
                        <div>
                            <p className='regular-16 text-gray-20'>Elevation</p>
                            <p className='bold-20 text-white'>2.040km</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
