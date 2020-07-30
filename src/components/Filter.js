import React, { useContext } from 'react';

import { CTX } from '../context/Store';

const Filter = () => {
  const [appState, updateState] = useContext(CTX);
  const { frequency, detune, Q, gain, type } = appState.filterSettings;

  const change = (e) => {
    let { id, value } = e.target;
    updateState({ type: 'CHANGE_FILTER', payload: { id, value } });
  };

  const changeType = (e) => {
    let { id } = e.target;
    updateState({ type: 'CHANGE_FILTER_TYPE', payload: { id } });
  };
  return (
    <div className='control'>
      <h2>filter</h2>
      <div className='params'>
        <h3>frequency</h3>
        <input
          value={frequency}
          type='range'
          onChange={change}
          id='frequency'
          max='10000'
        />
      </div>
      <div className='params'>
        <h3>detune</h3>
        <input value={detune} type='range' onChange={change} id='detune' />
      </div>
      <div className='params'>
        <h3>Q</h3>
        <input
          value={Q}
          type='range'
          onChange={change}
          id='Q'
          max='10'
          step='0.1'
        />
      </div>
      <div className='params'>
        <h3>gain</h3>
        <input
          value={gain}
          type='range'
          onChange={change}
          id='gain'
          max='10'
          step='0.1'
        />
      </div>

      <div className='param'>
        <h3>type</h3>
        <button
          onClick={changeType}
          id='lowpass'
          className={`${type === 'lowpass' && 'active'}`}
        >
          lowpass
        </button>
        <button
          onClick={changeType}
          id='highpass'
          className={`${type === 'highpass' && 'active'}`}
        >
          highpass
        </button>
        <button
          onClick={changeType}
          id='notch'
          className={`${type === 'notch' && 'active'}`}
        >
          notch
        </button>
        <button
          onClick={changeType}
          id='lowshelf'
          className={`${type === 'lowshelf' && 'active'}`}
        >
          lowshelf
        </button>
        <button
          onClick={changeType}
          id='highshelf'
          className={`${type === 'highshelf' && 'active'}`}
        >
          highshelf
        </button>
      </div>
    </div>
  );
};

export default Filter;
