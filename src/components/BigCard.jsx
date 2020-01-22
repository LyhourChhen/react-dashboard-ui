import React from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';
const Wrap = styled.div`
    width: 229px;
    height: 193px;
    min-height: 193px;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 0px 10px #e6e6e6;
    border-radius: 10px;
    opacity: 1;
`;

function BigCard(props) {
    return (
        <Wrap>
            <div
                style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}
            >
                <div style={{ lineHeight: 0.7 }}>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-around',
                            marginTop: 20
                        }}
                    >
                        <div>
                            <img
                                style={{
                                    width: 47,
                                    height: 47,
                                    borderRadius: 23.5,
                                    marginLeft: 10
                                }}
                                src={props.picture}
                                alt="profile picture"
                            />
                        </div>
                        <div
                            style={{
                                textAlign: 'left',
                                marginTop: 5,
                                marginRight: 50
                            }}
                        >
                            <p style={{ fontWeight: 'bold' }}>
                                {props.userName}
                            </p>
                            <p>{props.sex}</p>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'center'
                    }}
                >
                    <div>
                        <p style={{ textAlign: 'left', marginLeft: 18 }}>
                            <span>
                                <Icon
                                    style={{
                                        height: 17,
                                        width: 17,
                                        marginRight: 3,
                                        color: '#63D2EF'
                                    }}
                                    type="compass"
                                />
                            </span>
                            {props.location}
                        </p>
                        <p>
                            <span>
                                <Icon
                                    type="calendar"
                                    style={{
                                        height: 17,
                                        width: 17,
                                        marginRight: 3,
                                        color: '#63D2EF'
                                    }}
                                />
                            </span>
                            {props.date}
                            <span style={{ marginLeft: 10 }} />
                            <span>
                                <span>
                                    <Icon
                                        type="clock-circle"
                                        style={{
                                            height: 17,
                                            width: 17,
                                            marginRight: 3,
                                            color: '#63D2EF'
                                        }}
                                    />
                                </span>
                                {props.time}
                            </span>
                        </p>
                    </div>
                    <div>
                        <p style={{ fontWeight: 'bold' }}>
                            <a style={{ color: '#63D2EF' }}>View Details</a>
                        </p>
                    </div>
                </div>
            </div>
        </Wrap>
    );
}

export default BigCard;
