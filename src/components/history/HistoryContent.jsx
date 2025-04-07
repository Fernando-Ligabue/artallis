import { historyTextInfo1, historyTitle, } from '@/lib/constants'

const HistoryContent = () => {
  return (
    <div className='p-8'>
    <h2 className="font-barlow text-5xl text-black font-bold mb-8">{historyTitle}</h2>
    <div className='font-barlow text-base text-black font-medium mb-8'>
        {historyTextInfo1.map((item, index) => (<p key={index} className='font-barlow text-base text-black font-medium mb-4'>{item}</p>))}
    </div>
</div>
  )
}

export default HistoryContent