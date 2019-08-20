import React from 'react';

export default class CountDown extends React.Component {
    constructor(props) {
        super(...arguments);
        this.state = {
            count: props.startCount
        }
        console.log('11111111111111',props);
    }

    componentDidMount() {
        this.intervalHandle = setInterval(() => {
            const newCount = this.state.count - 1;
            if (newCount >= 0) {
                this.setState({count: newCount});
            } else {
                clearInterval(this.intervalHandle);
            }
        }, 1000)
    }

    render() {
        return this.props.children(this.state.count);
    }

    componentWillUnmount() {
        clearInterval(this.intervalHandle);
    }
}