import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import Value from './Value';
import Flex from './Flex';
import Value2 from './Value2';
import Tech1 from './Tech1';

const GasSupply = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container-fluid">
            <Value />
            <Value2 />
            <Flex />
            <Tech1 />
            <div className="row mb-5">

                <div className="text-center mt-5 mb-5">
                    <NavLink className="btn btn-lg text-center btn-primary m-2" to="../gastar-overview"><h2 className="text-center">GASTAR Overview</h2></NavLink>
                    <NavLink className="btn btn-lg text-center btn-primary m-2" to="../gastar-risk"><h2 className="text-center">Risk Management</h2></NavLink>
                </div>
            </div>
        </div>


    )
}

export default GasSupply;