import { introTextCom, subtitleCom, subtitleSlideCom } from '@/lib/constants'

const CommunityText = () => {
  return (
    <div className='w-full flex-col-center space-y-14 py-14 max-w-6xl'>
        <h2 className='text-4xl text-center text-artMidBlue-50 font-medium font-barlow'>{introTextCom}</h2>
        <h3 className='text-2xl text-center text-artMidBlue-50 font-black font-barlow'>{subtitleCom}</h3>
        <p className='text-xl text-center text-black font-normal font-barlow max-w-3xl leading-5'>{subtitleSlideCom}</p>
    </div>
  )
}

export default CommunityText