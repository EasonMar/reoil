"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getComputedAlignItems = exports.getComputedJustifyContent = void 0;
exports.getComputedJustifyContent = function (position, direction) {
    if (direction === 'row') {
        return (position.left ? 'flex-start' :
            position.right ? 'flex-end' :
                position.rowBetween ? 'space-between' :
                    position.rowAround ? 'space-around' :
                        position.rowEvenly ? 'space-evenly' :
                            position.center ? 'center' :
                                'flex-start');
    }
    if (direction === 'column') {
        return (position.top ? 'flex-start' :
            position.bottom ? 'flex-end' :
                position.colBetween ? 'space-between' :
                    position.colAround ? 'space-around' :
                        position.colEvenly ? 'space-evenly' :
                            position.center ? 'center' :
                                'flex-start');
    }
    return 'flex-start';
};
exports.getComputedAlignItems = function (position, direction) {
    if (direction === 'column') {
        return (position.left ? 'flex-start' :
            position.right ? 'flex-end' :
                position.rowBetween ? 'space-between' :
                    position.rowAround ? 'space-around' :
                        position.rowEvenly ? 'space-evenly' :
                            position.center ? 'center' :
                                'flex-start');
    }
    if (direction === 'row') {
        return (position.top ? 'flex-start' :
            position.bottom ? 'flex-end' :
                position.colBetween ? 'space-between' :
                    position.colAround ? 'space-around' :
                        position.colEvenly ? 'space-evenly' :
                            position.center ? 'center' :
                                'flex-start');
    }
    return 'flex-start';
};
//# sourceMappingURL=flex.js.map