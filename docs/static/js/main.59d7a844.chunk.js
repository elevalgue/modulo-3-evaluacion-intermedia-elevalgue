(this.webpackJsonpevaluacion=this.webpackJsonpevaluacion||[]).push([[0],[,,function(e,t,n){},,function(e){e.exports=JSON.parse('[{"id":1,"name":"bulbasaur","types":["poison","grass"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"},{"id":2,"name":"ivysaur","types":["poison","grass"],"evolution":"bulbasaur","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"},{"id":3,"name":"venusaur","types":["poison","grass"],"evolution":"ivysaur","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"},{"id":4,"name":"charmander","types":["fire"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"},{"id":5,"name":"charmeleon","types":["fire"],"evolution":"charmander","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"},{"id":6,"name":"charizard","types":["flying","fire"],"evolution":"charmeleon","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"},{"id":7,"name":"squirtle","types":["water"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"},{"id":8,"name":"wartortle","types":["water"],"evolution":"squirtle","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"},{"id":9,"name":"blastoise","types":["water"],"evolution":"wartortle","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"},{"id":10,"name":"caterpie","types":["bug"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"}]')},,function(e,t,n){e.exports=n(12)},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),s=n.n(r),a=n(3),o=n.n(a),i=(n(11),n(2),n(5)),p=n(4),u=function(e){var t=e.types.map((function(e,t){return s.a.createElement("li",{key:t,className:"pokemon__type"},e)}));return s.a.createElement("div",{className:"poke__image__container"},s.a.createElement("div",null,s.a.createElement("img",{alt:e.name,src:e.url})),s.a.createElement("div",{className:"pokemon__name"},s.a.createElement("h2",null,e.name)),s.a.createElement("ul",{className:"pokemon__type__list"},t))},m=function(e){var t=e.pokemons.map((function(e){return s.a.createElement("li",{key:e.id,className:"pokemon-card"},s.a.createElement(u,{name:e.name,url:e.url,types:e.types}))}));return s.a.createElement("ul",{className:"pokemon-list"},t)},l=function(){var e=Object(r.useState)(p),t=Object(i.a)(e,2),n=t[0];t[1];return s.a.createElement("div",{className:"App"},s.a.createElement("h1",null,"Pokedex"),s.a.createElement(m,{pokemons:n}))};o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(l,null)),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.59d7a844.chunk.js.map