var movies = [
    {
        id:1,
        title:'Harry Potter i kamień filozoficzny',
        pic:'img/harry.jpg',
        desc:'W dniu jedenastych urodzin Harry dowiaduje się, że jest czarodziejem. Czeka na niego szkoła magii pełna tajemnic.'
    },
    {
        id:2,
        title:'Avengers: Wojna bez granic ',
        pic:'img/avengers.jpg',
        desc:'Potężny Thanos zbiera Kamienie Nieskończoności w celu narzucenia swojej woli wszystkim istnieniom we wszechświecie. Tylko drużyna superbohaterów znanych jako Avengers może go powstrzymać.'
    },
    {
        id:3,
        title:'Dunkierka',
        pic:'img/dunkierka.jpg',
        desc:'Alianccy żołnierze z Belgii, Wielkiej Brytanii, Kanady oraz Francji zostają otoczeni przez niemiecką armię i ewakuowani podczas najbardziej zaciekłej bitwy II Wojny Światowej.'
    },
    {
        id:4,
        title:'Więzień labiryntu: Lek na śmierć',
        pic:'img/labirynt.jpg',
        desc:'Thomas wyrusza na misję w celu znalezienia lekarstwa zwalczającego śmiertelną chorobę.'
    },
    {
        id:5,
        title:'Thor: Ragnarok',
        pic:'img/thor.jpg',
        desc:'Thor mierzy się w walce bogów, podczas gdy Asgard jest zagrożony Ragnarokiem, nordycką apokalipsą.'
    }
];

var moviesElaments = movies.map(function (movie) {
    return React.createElement('li', {key:movie.id},
        React.createElement('div', {},
            React.createElement('h2', {}, movie.title),
            React.createElement('p', {},
                React.createElement('img', {src:movie.pic}), movie.desc))
    );
});

var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElaments)
    );

ReactDOM.render(element, document.getElementById('app'));