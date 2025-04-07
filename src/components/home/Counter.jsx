import PropTypes from 'prop-types';
import CountUp from 'react-countup';

const Counter = ({text, value}) => {
    return (
        <div className='flex flex-col justify-start items-center text-white text-center w-full max-w-36 h-32'>
          <CountUp className='font-barlow font-bold text-5xl lg:text-6xl' start={0} end={value} duration={16} delay={3}/>
          <h4 className='font-barlow font-bold text-2xl lg:text-3xl'>{text}</h4>
        </div>
      );
}

Counter.propTypes = {
    text: PropTypes.string,
    value: PropTypes.number
}

export default Counter