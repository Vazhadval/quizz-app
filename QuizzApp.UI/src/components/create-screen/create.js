import React, { useContext } from 'react';
import { AppContext } from '../../appContext';

export const Create = () => {


    return (
        <div className='col-lg-6'>

            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Quote</label>
                <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter Quote" />
            </div>

            <button type="submit" className="btn btn-primary" style={{ marginTop: 5 }}>Create Quote</button>
        </div>

    )
}
