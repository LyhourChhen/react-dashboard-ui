import React from 'react';
import styled from 'styled-components';
import { AiOutlineExclamationCircle } from 'react-icons/ai';

const SmallCard = styled.div`
    top: 88px;
    left: 280px;
    width: 264px;
    min-height: 122px;
    background: #ffffff 0% 0% no-repeat padding-box;
    border-radius: 2px;
    opacity: 1;
`;
const Icon = styled.div`
    top: 124px;
    left: 588px;
    width: 50px;
    height: 50px;
    /* background: black; */
    opacity: 1;
`;

function NewDashboard(props) {
    return (
        <SmallCard>
            <div
                style={{
                    display: 'flex',
                    minHeight: 122,
                    justifyContent: 'space-around',
                    alignItems: 'center'
                }}
            >
                <Icon>
                    <img src={props.picture} alt="icon" />
                </Icon>
                <div
                    style={{
                        marginTop: 10,
                        textAlign: 'left',
                        lineHeight: 1
                    }}
                >
                    <h2 style={{ fontWeight: 'bold' }}>{props.amount}</h2>
                    <p style={{ width: 99 }}>{props.name}</p>
                </div>
                <AiOutlineExclamationCircle
                    style={{ marginBottom: 60, width: 14, height: 14 }}
                />
            </div>
        </SmallCard>
    );
}

export default NewDashboard;
