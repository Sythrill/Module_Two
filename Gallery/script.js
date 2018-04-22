var movies = [
    {
        id: 1,
        title: 'Harry Potter i kamień filozoficzny',
        pic: 'img/harry.jpg',
        desc: 'W dniu jedenastych urodzin Harry dowiaduje się, że jest czarodziejem. Czeka na niego szkoła magii pełna tajemnic.'
    },
    {
        id: 2,
        title: 'Avengers: Wojna bez granic ',
        pic: 'img/avengers.jpg',
        desc: 'Potężny Thanos zbiera Kamienie Nieskończoności w celu narzucenia swojej woli wszystkim istnieniom we wszechświecie. Tylko drużyna superbohaterów znanych jako Avengers może go powstrzymać.'
    },
    {
        id: 3,
        title: 'Dunkierka',
        pic: 'img/dunkierka.jpg',
        desc: 'Alianccy żołnierze z Belgii, Wielkiej Brytanii, Kanady oraz Francji zostają otoczeni przez niemiecką armię i ewakuowani podczas najbardziej zaciekłej bitwy II Wojny Światowej.'
    },
    {
        id: 4,
        title: 'Więzień labiryntu: Lek na śmierć',
        pic: 'img/labirynt.jpg',
        desc: 'Thomas wyrusza na misję w celu znalezienia lekarstwa zwalczającego śmiertelną chorobę.'
    },
    {
        id: 5,
        title: 'Thor: Ragnarok',
        pic: 'img/thor.jpg',
        desc: 'Thor mierzy się w walce bogów, podczas gdy Asgard jest zagrożony Ragnarokiem, nordycką apokalipsą.'
    }
];

var MovieDescription = React.createClass({
    propTypes: {
        desc: React.PropTypes.string.isRequired,
    },

    render: function () {
        return (
            React.createElement('p', {}, this.props.desc)
        )
    }
});

var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
    },

    render: function () {
        return (
            React.createElement('h2', {}, this.props.title)
        )
    }
});


var MovieImg = React.createClass({
    propTypes: {
        image: React.PropTypes.object.isRequired,
    },

    render: function () {
        return (
            React.createElement('img', {src: this.props.image.pic, alt: this.props.image.title})
        )
    }
});

var Movie = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired,
    },

    render: function () {
        return (
            React.createElement('ul', {},
                React.createElement(MovieTitle, {title: this.props.item.title}),
                React.createElement(MovieImg, {image: this.props.item}),
                React.createElement(MovieDescription, {desc: this.props.item.desc})
            )
        );
    },
});

var MovieList = React.createClass({
    propTypes: {
        items: React.PropTypes.array.isRequired,
    },

    render: function () {
        var moviesList = this.props.items.map(function (movie) {
            return React.createElement(Movie, {item: movie, key: movie.id});
        });

        return (
            React.createElement('ul', {}, moviesList)
        );
    }
});


var App = React.createClass({
    render: function () {
        return (
            React.createElement('div', {className: 'app'},
                React.createElement(MovieList, {items: movies}, {})
            )
        );
    }
});

var app = React.createElement(App);
ReactDOM.render(app, document.getElementById('app'));