var Counter = React.createClass({
	getDefaultProps: function() {
		console.log('Definujemy domyślne wartości własciwości(propsów), które nie zostały przekazane do komponentu');
	},
	
    getInitialState: function() {
        return {
            counter: 0
        };
    },
	
	componentWillMount: function() {
		console.log('Metoda jest wywoływana przed renderowaniem');
	},
	
	increment: function() {
		this.setState({
			counter: this.state.counter + 1
		});
	},
	
	decrement: function() {
		this.setState({
			counter: this.state.counter - 1
		});
	},
	
	render: function() {
        return React.createElement('div', {},
			React.createElement('button', {onClick: this.increment}, 'add +1'),
			React.createElement('button', {onClick: this.decrement}, 'subtract -1'),
			React.createElement('span', {}, 'Counter ' + this.state.counter),
        )
    },
	
	componentDidMount: function() {
        console.log('Metoda wywolywana natychmiast po zamontowaniu komponentu');
    },
	
	componentWillReceiveProps: function() {
        console.log('Wykorzystujemy tą metodę do zaktualizowania właściowości komponentu');
    },
	
	shouldComponentUpdate: function() {
        console.log('Metoda jest wywoływana przed renderowaniem, sprawdza czy trzeba jeszcze raz przerysować komponent');
        return true;
    },
	
	componentWillUpdate: function() {
        console.log('Metoda jest wywolywana przed renderowaniem elementu gdy mamy już nowe propsy lub stan. Przygotowuję do aktualizacji');
    },
	
	componentDidUpdate: function() {
        console.log('Metoda wywolywana po dokonaniu aktualizacji');
    },
	
	componentWillUnmount: function() {
        console.log('Metoda wywolywana przed usunięciem komponentu, służy do czyszczenia pamięci');
    },
});


var Counters = React.createClass({
	render: function() {
		return React.createElement('div', {className: 'counters'},
			React.createElement(Counter, {}),
			React.createElement(Counter, {}),
			React.createElement(Counter, {})
		)
	}
});




var element = React.createElement(Counters);
ReactDOM.render(element, document.getElementById('app'));

