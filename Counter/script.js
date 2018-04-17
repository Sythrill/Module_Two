var Counter = React.createClass({

    getDefaultProps: function () {
        console.log('Ustawiam poczatkowe wartości propsów.');

    },

    getInitialState: function () {
        console.log('Ustawiam początkowy stan licznika.');
        return {
            counter: 0
        };
    },

    componentWillMount: function() {
        console.log('To jest wywoływane przed render.');
    },

    componentDidMount: function() {
        console.log('Stan początkowy:');
        console.log(this.state)
    },

    componentWillReceiveProps: function(nextProps) {
        if (nextProps.reset) {
            this.setState({counter: this.state.counter = 5});
        }
        console.log(state);
    },

    componentWillUpdate: function(nextProps, nextState) {
        console.log('To jest wywoływane przed re-render');
    },

    shouldComponentUpdate: function(nextProps, nextState) {
        console.log('Czy re-renderować ?');
        console.log(nextProps, nextState);
        return true;
    },

    componentDidUpdate: function(prevProps, prevState) {
        console.log('Pokaż stare wartości:');
        console.log(prevProps, prevState);
    },

    componentWillUnmount: function () {
        console.log('Sprzątanie')
    },
    increment: function () {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function () {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function () {
        return React.createElement('div', {},
            React.createElement('span',{}, 'Licznik ' + this.state.counter),
            React.createElement('button', {onClick: this.increment}, 'Dodaj'),
            React.createElement('button', {onClick:this.decrement}, 'Odejmij')
        );
    }
});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));
