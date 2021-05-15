import React from 'react';
import UnitInformationPage from './UnitInformationPage'
import mappedData from './AliceLaneMappedData.json'
import ReactToPrint from "react-to-print";



class App1 extends React.Component{


    render() {
        return (
            <div className={'paper'}>
                <UnitInformationPage data={mappedData} ref={(el)=> (this.componentRef = el)}/>
                <div className={'print'}>
                    <ReactToPrint trigger={()=> <button className="print_Button">Print</button>}
                                  content={() => this.componentRef}
                    />
                </div>

            </div>
        );
    }


}

export default App1;