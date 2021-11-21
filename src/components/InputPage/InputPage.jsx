import React from 'react';
import Header from "../header";
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import {useState, useEffect} from 'react';


const InputPage = () =>{
    const [loading, setLoading] = useState(false);
    const [valueThousand, setValueThousand] = useState(1000);
    const [ThousandMin, setThousandMin] = useState(1000);
    const [ThousandMax, setThousandMax] = useState(20000);
    const [valueUnit, setValueUnit] = useState(3);
    const [UnitMin, setUnitMin] = useState(3);
    const [UnitMax, setUnitMax] = useState(70);
    const [isLessTenThousand, setIsLessTenThousand] = useState(70);

    // const constructor(props) => {
    //     super(props);
    //     this.state = {
    //         loading: false,
    //         valueThousand: 1000,
    //         ThousandMin: 1000,
    //         ThousandMax: 20000,
    //         valueUnit: 3,
    //         UnitMin: 3,
    //         UnitMax: 70,
    //         isLessTenThousand: true
    //     }
    //     console.log(this.props);
    // }
    const InputRangeThousand = (value) => {
        //console.log(value);
        if(value > 10000){
            //this.setState({ valueUnit: 54 });
            setValueUnit(54);
            //this.setState({ isLessTenThousand: false });
            setIsLessTenThousand(false);
        }else if(value < 10000){
            //this.setState({ valueUnit: 14 })
            setValueUnit(14);
            //this.setState({ isLessTenThousand: true })
            setIsLessTenThousand(true);
        }
        //this.setState({ valueThousand: value });
        setValueThousand(value);
    }
    const InputRangeUnit = (value) => {
        //console.log(value);
        if(value <= 3){
            isLessTenThousand ? setValueUnit( 3 )  : setValueUnit( 54 );
        }else if(value > 3 && value <= 7){
            isLessTenThousand ? setValueUnit( 7 )  : setValueUnit( 54 );
        }else if(value > 7 && value <= 14){
            isLessTenThousand ? setValueUnit( 14 )  : setValueUnit( 54 );
        }else if(value > 14 && value <= 54){
            isLessTenThousand ? setValueUnit( 14 )  : setValueUnit( 54 );
        }else if(value > 54 && value <= 70){
            isLessTenThousand ? setValueUnit( 14 )  : setValueUnit( 70 );
        }
    }

    const dependencyCondition = (valueThousand, valueUnit) => {
        if(valueThousand > 10000){
            //this.setState({ valueUnit: 54 })
            setValueUnit( 54 )
        }else if(valueThousand < 10000){
            //this.setState({ valueUnit: 14 })
            setValueUnit( 14 )
        }
    }


    return (
        <div className="inputPage">
            <Header/>
            <div className="inputsBlock">
                <InputRange
                    step={1000}
                    maxValue={ThousandMax}
                    minValue={ThousandMin}
                    value={valueThousand}
                    onChange={ InputRangeThousand }
                />
                <InputRange
                    step={1}
                    maxValue={UnitMax}
                    minValue={UnitMin}
                    value={valueUnit}
                    onChange={InputRangeUnit }
                />
            </div>
        </div>
    )

}


export default InputPage;