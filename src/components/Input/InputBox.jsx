import React from 'react';
import Airplane from "../../assets/img/airplane.svg";
import Bed from "../../assets/img/bed.svg";
import Select from 'react-select';


const InputBox = () => {
    return (
        <>
            <div className="container">
                <div className="InputBox">
                    {/* Flight and Stays Navigation  */}
                    <div className="input-navigation">
                        <div className='input-navigation--sub'>
                            <img src={Airplane} alt="Airplane" />
                            Flights
                        </div>
                        <div class="vl"></div>
                        <div className='input-navigation--sub'>
                            <img src={Bed} alt="Airplane" />
                            Stays
                        </div>
                    </div>
                    {/* Horizontal Line  */}
                    <div className="hl"></div>

                    {/* Input Fields */}
                    <div className="input-area">
                        <div className="input-area--tag">
                            <input type="text" name="fromTo" required />
                            <label htmlFor="fromTo">From - To</label>
                        </div>
                        <div className="input-area--tag">
                            <Select
                                options={[
                                    { value: 1, label: 'Single' },
                                    { value: 2, label: 'Return' },
                                ]}
                                className='react-select'
                                classNamePrefix='select'
                                placeholder={'Trip'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InputBox
