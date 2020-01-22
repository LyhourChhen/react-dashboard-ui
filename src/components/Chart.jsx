import React, { useState, useEffect } from 'react';
import { Chart, Geom, Axis, Tooltip } from 'bizcharts';
import styled from 'styled-components';
import { DatePicker } from 'antd';

const WrapChart = styled.div`
    width: '100%';
    height: 404px;
    background: #ffffff 0% 0% no-repeat padding-box;
    border-radius: 2px;
    opacity: 1;
`;
const ChartHeader = styled.div`
    height: 53px;
    min-height: 53px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const TreatmentButton = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 12.5px;
    opacity: 1;
`;

// List
const PatientsList = props => {
    const [background, setBackgound] = useState(``);
    const [fontColor, setFontColor] = useState(``);
    useEffect(() => {
        if (props.color === `#63D2EF`) {
            setBackgound(`#63D2EF`);
            setFontColor(`white`);
        } else if (props.color === `#f1f2f5`) {
            setBackgound(`#f1f2f5`);
            setFontColor(`#3D4F6A`);
        }
    }, []);

    return (
        <div
            style={{
                display: 'flex',
                width: 188
            }}
        >
            <div style={{ width: '20%' }}>
                <TreatmentButton
                    style={{ backgroundColor: `${background}`, marginTop: 1 }}
                >
                    <div
                        style={{
                            display: 'flex',
                            // minHeight: 25,
                            minWidth: 25,
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontWeight: 'bold',
                            color: `${fontColor}`
                        }}
                    >
                        <div style={{ marginBottom: 5 }}>2</div>
                    </div>
                </TreatmentButton>
            </div>
            <div style={{ marginRight: 5 }}></div>
            <div style={{ width: '70%' }}>
                <p>Janet Griffin</p>
            </div>
            <div style={{ width: '20%' }}>
                <p>45</p>
            </div>
        </div>
    );
};

const ChartComponent = () => {
    const data = [
        {
            year: '1951 年',
            sales: 38
        },
        {
            year: '1952 年',
            sales: 52
        },
        {
            year: '1956 年',
            sales: 61
        },
        {
            year: '1957 年',
            sales: 145
        },
        {
            year: '1958 年',
            sales: 48
        },
        {
            year: '1959 年',
            sales: 38
        },
        {
            year: '1960 年',
            sales: 38
        },
        {
            year: '1962 年',
            sales: 38
        }
    ];
    const cols = {
        sales: {
            tickInterval: 20
        }
    };
    // Date picker
    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };
    // DESIGN COLOR
    const [isHover, setIsHover] = useState(false);
    const [isHover1, setIsHover1] = useState(false);
    return (
        <WrapChart>
            <ChartHeader>
                <div>
                    <div
                        style={{
                            display: 'flex',
                            lineHeight: 2.8
                        }}
                    >
                        <div>
                            <h2
                                onMouseOut={() => setIsHover(false)}
                                onMouseOver={() => setIsHover(true)}
                                onClick={() => alert('Hi')}
                                style={{
                                    marginLeft: 38,
                                    marginTop: 20,
                                    cursor: 'pointer',
                                    position: 'relative'
                                }}
                            >
                                Chart
                                {isHover ? (
                                    <div
                                        style={{
                                            position: 'absolute',
                                            width: '100%',
                                            height: 2,
                                            backgroundColor: '#63D2EF'
                                        }}
                                    ></div>
                                ) : null}
                            </h2>
                        </div>
                        <div>
                            <h2
                                onMouseOut={() => setIsHover1(false)}
                                onMouseOver={() => setIsHover1(true)}
                                onClick={() => alert('Hi')}
                                style={{
                                    marginLeft: 55,
                                    marginTop: 20,
                                    cursor: 'pointer',
                                    position: 'relative'
                                }}
                            >
                                Patients
                                {isHover1 ? (
                                    <div
                                        style={{
                                            position: 'absolute',
                                            width: '100%',
                                            height: 2,
                                            backgroundColor: '#63D2EF'
                                        }}
                                    ></div>
                                ) : null}
                            </h2>
                        </div>
                    </div>
                </div>
                <div style={{ marginRight: 32, marginTop: 10 }}>
                    <DatePicker onChange={onChange} />
                </div>
            </ChartHeader>
            <hr color="#E8E8E8" />
            <div style={{ display: 'flex' }}>
                <div style={{ width: '80%' }}>
                    <Chart height={400} data={data} scale={cols} forceFit>
                        <Axis name="year" />
                        <Axis name="sales" />
                        <Tooltip
                            crosshairs={{
                                type: 'y'
                            }}
                        />
                        <Geom
                            color="#63D2EF"
                            type="interval"
                            position="year*sales"
                        />
                    </Chart>
                </div>
                <div style={{ width: '20%' }}>
                    <p
                        style={{
                            fontSize: 16,
                            color: '#000000D9',
                            marginTop: 13
                        }}
                    >
                        Treatment History
                    </p>
                    <div style={{ lineHeight: 2 }}>
                        <PatientsList color={'#63D2EF'} />
                        <PatientsList color={'#f1f2f5'} />
                        <PatientsList color={'#63D2EF'} />
                        <PatientsList color={'#f1f2f5'} />
                    </div>
                </div>
            </div>
        </WrapChart>
    );
};
export default ChartComponent;
