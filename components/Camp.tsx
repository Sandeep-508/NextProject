"use client"
import Image from 'next/image';
import FoldedMap from '../public/folded-map.svg'
import { PEOPLE_URL } from '@/constants';

type CampSiteProps = {
    title: string;
    subtitle: string;
    peopleJoined: string;
    backgroundImage: string;
}

const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }: CampSiteProps) => {
    return (
        <div className={`w-full h-full ${backgroundImage} min-w-[1100px] rounded-3xl p-10 bg-center bg-full`} style={{ backgroundAttachment: 'fixed' }}>
            <div className="flex flex-col items-start justify-between h-full min-h-[640px]">
                <div className="flex items-center justify-center gap-4">
                    {<Image src={FoldedMap} alt="folder map image" width={24} height={24} />}
                    <div className='flex flex-col items-start justify-start'>
                        <h3 className='bold-18 text-white mb-1'>{title}</h3>
                        <p className='regular-14 text-white'>{subtitle}</p>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-4'>
                    <div className='flex items-center -space-x-4'>
                        {PEOPLE_URL.map((obj, index) =>
                            <Image src={obj} alt='people images' width={52} height={52} />
                        )}
                    </div>
                    <p className='bold-20 text-white'>{peopleJoined}</p>
                </div>
            </div>
        </div>
    )
}

const Camp = () => {
    return (
        <div className="max-container padding-container relative z-50 overflow-scroll flex items-center gap-8 hide-scrollbar">
            <CampSite title='Putuk Truno Camp' subtitle='Prigen, Pasuruan' backgroundImage="bg-bg-img-1" peopleJoined='50+ Joined' />
            <CampSite title='Mountain View Camp' subtitle='Somwhere In the Wilderness' backgroundImage="bg-bg-img-2" peopleJoined='50+ Joined' />
        </div>
    )

}

export default Camp
