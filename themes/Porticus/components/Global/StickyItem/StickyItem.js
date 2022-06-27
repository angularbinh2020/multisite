import React from 'react';
import { Sticky } from 'react-sticky';
import { useSystemContext } from '../../../../../Core/Contexts';

const StickyItem = ({
    children,
    snapTo,
    topOffset
}) => {
    const [{ pageData }] = useSystemContext();
    let snapToPosition = 0;
    let snapToDomElement;
    if(snapTo){
        snapToDomElement = document.querySelector('.' + snapTo)

        if(snapToDomElement){
            snapToPosition = snapToDomElement.scrollHeight
        }
    }

	return (
        <div style={{height: snapToPosition}}>
            <Sticky >
                {({
                    style,
                    isSticky,
                    distanceFromTop,
                    distanceFromBottom,
                    calculatedHeight
                }) => {

                    const parentStyle = {...style, ...{zIndex: 10}}
                    let childStyle = {};
                    const backgroundColor = pageData.primaryColour.length > 1 ? pageData.primaryColour : '#f4f0e9'

                    if (snapTo && distanceFromTop < snapToPosition) {

                        const top = distanceFromTop > 0 ? snapToPosition - distanceFromTop : snapToPosition

                        childStyle = {
                            background: backgroundColor,
                            position: "absolute",
                            top: top + "px",
                            width: "100%"
                        };

                    }

                    return (
                        <div
                            style={parentStyle}
                        >
                            <div style={childStyle}>
                                {children}
                            </div>
                        </div>
                    )
                }
            }
            </Sticky>
        </div>
    )
};

export default StickyItem;
