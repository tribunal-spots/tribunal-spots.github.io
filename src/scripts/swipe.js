export default function addSwipeHandlers(element, leftHandler, rightHandler) {
    let startCoords = {
        x: -1,
        y: -1
    };

    let coordDelta = {
        x: 0,
        y: 0
    };

    let direction = 'undefined';

    let minX = 30;
    let maxY = 30;

    let maxTime = 1000;
    let startTime = 0;
    let timeDelta = 0;

    let startActions = ['mousedown', 'touchstart'];
    let moveActions = ['mousemove', 'touchmove'];
    let endActions = ['mouseup', 'touchend'];

    for(let i = 0; i < startActions.length; i++) {
        element.addEventListener(startActions[i], swipeStart);
    }

    for(let i = 0; i < moveActions.length; i++) {
        element.addEventListener(moveActions[i], swipeMove);
    }

    for(let i = 0; i < endActions.length; i++) {
        element.addEventListener(endActions[i], swipeEnd);
    }

    function swipeStart(event) {
        event = event ? event : window.event;
        event = ('changedTouches' in event) ? event.changedTouches[0] : event;
        
        startCoords = {
            x: event.pageX,
            y: event.pageY
        };

        startTime = new Date().getTime();
    }

    function swipeMove(event) {
        event = event ? event : window.event;
        event.preventDefault();
    }

    function swipeEnd(event) {
        event = event ? event : window.event;
        event = ('changedTouches' in event) ? event.changedTouches[0] : event;

        coordDelta = {
            x: event.pageX - startCoords.x,
            y: event.pageY - startCoords.y
        };

        timeDelta = new Date().getTime() - startTime;

        if(timeDelta <= maxTime) {
            if(Math.abs(coordDelta.x) >= minX && Math.abs(coordDelta.y) <= maxY) {
                direction = (coordDelta.x < 0) ? 'left' : 'right';

                switch(direction) {
                    case 'left':
                        leftHandler();
                        break;
                    case 'right':
                        rightHandler();
                        break;
                }
            }
        }
    }

}