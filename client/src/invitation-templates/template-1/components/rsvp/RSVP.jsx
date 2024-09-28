import './rsvp.css';
import { useState } from 'react';

const RSVP = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    return (
        <div className='rsvp-cont'>
            <div className='rsvp-cont-header'>
                <h2>Vashe prisutstvie</h2>
                <p>Budem rady vas videt! Prosim podverdit svoe prisutstvie na torjestve do 12 july 2024</p>
            </div>
            <div className='rsvp-cont-form'>
                <div className='rsvp-cont-form-inner'>
                    <span>name surname</span>
                    <input type='text' placeholder='Ivan Anna '/>
                </div>
                <div className='rsvp-cont-checkbox'>
                    <h3>Karox eq masnakcel?</h3>
                    <div>
                        <input type='radio' id='yes'/>
                        <label htmlFor="yes">Karox em/karox enq</label>
                    </div>
                    <div>
                        <input type='radio' id='undefined'/>
                        <label htmlFor="undefined">chgitem </label>
                    </div>
                    <div>
                        <input type='radio' id='no'/>
                        <label htmlFor='no'>Voch, chenq karox</label>
                    </div>
                </div>
                <div className='rsvp-cont-form-inner'>
                    <span>name surname</span>
                    <input type='text' placeholder='Ivan Anna '/>
                </div>

                {/* <div className='rsvp-cont-checkbox'>
                    <h3>predpochtenie po napitkam</h3>
                    <div>
                        <input type='checkbox' id='shampayn' name='shampayn'/>
                        <label htmlFor='shampayn'>shampayn</label>
                    </div>
                    <div>
                        <input type='checkbox' id='gini' name='gini'/>
                        <label htmlFor='gini'>gini</label>
                    </div>
                    <div>
                        <input type='checkbox' id='sev gini' name='sev gini'/>
                        <label htmlFor='sev gini'>sev gini</label>
                    </div>
                    <div>
                        <input type='checkbox' id='whisky' name='whisky'/>
                        <label htmlFor='whisky'>whisky</label>
                    </div>
                    <div>
                        <input type='checkbox' id='oxi' name='oxi'/>
                        <label htmlFor='oxi'>oxi</label>
                    </div>
                </div> */}
                <button type='submit'> submit</button>
            </div>
        </div>
    )
};

export default RSVP;
