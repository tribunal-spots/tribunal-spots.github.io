export default function addSwipeEventDispatcher(element) {
    const swipeLeftEvent = new Event('swipeleft');
    const swipeRightEvent = new Event('swiperight');
    
    let startCoords = {
        x: -1,
        y: -1
    };

    let coordDelta = {
        x: 0,
        y: 0
    };

    let direction;

    const minX = 30;
    const maxY = 30;

    const maxTime = 1000;
    let startTime = 0;
    let timeDelta = 0;

    addEventListeners(element, 'mousedown touchstart', swipeStart);
    addEventListeners(element, 'mousemove touchmove', swipeMove);
    addEventListeners(element, 'mouseup touchend', swipeEnd);


    function addEventListeners(element, events, handler) {
        events.split(' ').forEach((event) => {
            element.addEventListener(event, handler);
        });
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
        // event.preventDefault();
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
                        element.dispatchEvent(swipeLeftEvent);
                        break;
                    case 'right':
                        element.dispatchEvent(swipeRightEvent);
                        break;
                }
            }
        }
    }

}