import { Link } from 'react-router-dom';
import { discover } from '@/lib/constants'

const Descobre = () => {
    return (
        <div className="main-container min-h-screen flex-col-center p-4">
            {discover.map((item, index) => (
                <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-between md:py-10 gap-24" key={index}>
                    <div className="w-full space-y-10">
                        <div className='space-y-2'>
                            <h6 className='font-barlow font-normal text-base'>{item.subtitle}</h6>
                            <h2 className='text-4xl font-bold'>{item.title}</h2>
                        </div>

                        <p className='font-barlow font-normal text-base'>
                            {item.content}
                        </p>

                        <div className="flex flex-col justify-star gap-4 sm:flex-row sm:gap-14 p-4">
                            <div className='w-full sm:w-1/2'>
                                <ul className='list-disc marker:text-artMidBlue-50'>
                                    {item.list1.map((listItem, index) => (
                                        <li key={index} className='text-black font-barlow'>{listItem}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className='w-full sm:w-1/2'>
                                <ul className='list-disc marker:text-artMidBlue-50'>
                                    {item.list2.map((listItem, index) => (
                                        <li key={index} className='text-black font-barlow'>{listItem}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className='w-full flex flex-col sm:flex-row gap-4 justify-between items-center'>
                            <Link to="/apresentacao" className="w-full max-w-48 flex rounded-full px-8 py-3 bg-artYellow-50 hover:bg-artYellow-50 hover:shadow-md text-black font-barlow font-semibold text-md transition-all ease-in-out duration-300">DESCOBRE MAIS</Link>
                        </div>

                    </div>
                    <div className="w-full rounded-lg">
                        <img className="rounded-lg" src={item.img} alt="foto alunos" />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Descobre

{/* <div className='flex items-center gap-4 cursor-pointer'>
                                <h4 className='font-barlow font-semibold text-xl text-artMidBlue-50'>Agenda</h4>
                                <NotebookTabs size={32} className='text-artMidBlue-50' />
                            </div> */}