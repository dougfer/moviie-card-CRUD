(this["webpackJsonpsd-0x-block14-project-movie-card-library-crud"]=this["webpackJsonpsd-0x-block14-project-movie-card-library-crud"]||[]).push([[0],{24:function(e,t,a){e.exports=a(36)},29:function(e,t,a){},30:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(21),o=a.n(r),l=(a(29),a(10)),c=a(1),u=(a(30),a(3)),s=a(4),m=a(6),d=a(5),h=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.movie,t=e.title,a=e.storyline,n=e.id,r=e.imagePath;return i.a.createElement("div",{className:"movie-card movie-card-body","data-testid":"movie-card"},i.a.createElement("p",{className:"movie-card-title"},t),i.a.createElement("img",{src:r,alt:"title"}),i.a.createElement("p",{className:"movie-card-storyline"},a),i.a.createElement(l.b,{to:"/movies/".concat(n)},i.a.createElement("button",{type:"button"},"VER DETALHES")))}}]),a}(i.a.Component),v=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,"Carregando...")}}]),a}(n.Component),p=a(23),b=a(13),g=[{id:1,title:"Kingsglaive",subtitle:"Final Fantasy XV",storyline:"King Regis, who oversees the land of Lucis, commands his army of soldiers to protect the kingdom from the Niflheim empire's plans to steal the sacred crystal.",rating:4.5,imagePath:"images/Kingsglaive_Final_Fantasy_XV.jpg",bookmarked:!0,genre:"action"},{id:2,title:"Final Fantasy",subtitle:"Spirits Within",storyline:"A scientist makes a last stand on Earth with the help of a ragtag team of soldiers against an invasion of alien phantoms.",rating:4.5,imagePath:"images/Final_Fantasy_Spirits_Within.jpg",bookmarked:!1,genre:"fantasy"},{id:3,title:"Ghost In The Shell",subtitle:"Ghost In The Shell",storyline:"A hacker known as the Puppet Master is hunted by a female cyborg cop and her partner. This film is a revised version of Ghost in the Shell (1995).",rating:5,imagePath:"images/Ghost_In_The_Shell_2_0.jpg",bookmarked:!1,genre:"comedy"},{id:4,title:"Appleseed Alpha",subtitle:"Appleseed Alpha",storyline:"A young female soldier Deunan and her cyborg partner Briareos survive through the post World War 3 apocalyptic New York in search of human's future hope, the legendary city of Olympus.",rating:3.8,imagePath:"images/Appleseed_Alpha.jpg",bookmarked:!0,genre:"action"},{id:5,title:"Resident Evil",subtitle:"Vendetta",storyline:"Chris Redfield enlists the help of Leon S. Kennedy and Rebecca Chambers to stop a death merchant, with a vengeance, from spreading a deadly virus in New York.",rating:4.2,imagePath:"images/Resident_Evil_Vendetta.jpg",bookmarked:!0,genre:"fantasy"}];localStorage.setItem("movies",JSON.stringify(g));var f=function(){return JSON.parse(localStorage.getItem("movies"))},y=function(e){return localStorage.setItem("movies",JSON.stringify(e))},E=function(e){return function(t){setTimeout((function(){t(e)}),2e3)}},O=function(e){var t=f().find((function(t){return t.id===parseInt(e,10)}));return new Promise((function(e){E(t)(e)}))},j=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).state={movies:[],loading:!0},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;new Promise((function(e){var t=f();E(t)(e)})).then((function(t){return e.setState({movies:t,loading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.movies;return e.loading?i.a.createElement(v,null):i.a.createElement("div",{className:"movie-list","data-testid":"movie-list"},t.map((function(e){return i.a.createElement(h,{key:e.title,movie:e})})))}}]),a}(n.Component),S=a(15),k=a(11),I=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state=Object(b.a)({},e.movie),n.handleSubmit=n.handleSubmit.bind(Object(k.a)(n)),n}return Object(s.a)(a,[{key:"handleSubmit",value:function(){(0,this.props.onSubmit)(this.state)}},{key:"updateMovie",value:function(e,t){this.setState(Object(S.a)({},e,t))}},{key:"renderTitleInput",value:function(){var e=this,t=this.state.title;return i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"movie_title"},"T\xedtulo",i.a.createElement("input",{placeholder:"Insira o t\xedtulo",id:"movie_title",type:"text",className:"validate",value:t,onChange:function(t){return e.updateMovie("title",t.target.value)}})))}},{key:"renderSubtitleInput",value:function(){var e=this,t=this.state.subtitle;return i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"movie_subtitle"},i.a.createElement("input",{placeholder:"Insira o subt\xedtulo",id:"movie_subtitle",type:"text",value:t,onChange:function(t){return e.updateMovie("subtitle",t.target.value)}}),"Subt\xedtulo"))}},{key:"renderImagePathInput",value:function(){var e=this,t=this.state.imagePath;return i.a.createElement("div",{className:"row"},i.a.createElement("label",{htmlFor:"movie_image"},i.a.createElement("input",{placeholder:"Insira o caminho da imagem",id:"movie_image",type:"text",value:t,onChange:function(t){return e.updateMovie("imagePath",t.target.value)}}),"Imagem"))}},{key:"renderStorylineInput",value:function(){var e=this,t=this.state.storyline;return i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"movie_storyline"},i.a.createElement("textarea",{id:"movie_storyline",value:t,onChange:function(t){return e.updateMovie("storyline",t.target.value)}}),"Sinopse"))}},{key:"renderGenreSelection",value:function(){var e=this,t=this.state.genre;return i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"movie_genre"},"G\xeanero",i.a.createElement("select",{id:"movie_genre",value:t,onChange:function(t){return e.updateMovie("genre",t.target.value)}},i.a.createElement("option",{value:"action"},"A\xe7\xe3o"),i.a.createElement("option",{value:"comedy"},"Com\xe9dia"),i.a.createElement("option",{value:"thriller"},"Suspense"),i.a.createElement("option",{value:"fantasy"},"Fantasia"))))}},{key:"renderRatingInput",value:function(){var e=this,t=this.state.rating;return i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"movie_rating"},i.a.createElement("input",{placeholder:"D\xea a avalia\xe7\xe3o do filme",id:"movie_rating",type:"number",step:.1,min:0,max:5,value:t,onChange:function(t){return e.updateMovie("rating",t.target.value)}}),"Avalia\xe7\xe3o"))}},{key:"renderSubmitButton",value:function(){return i.a.createElement("div",null,i.a.createElement("button",{type:"button",onClick:this.handleSubmit},"Submit"))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("form",null,this.renderTitleInput(),this.renderSubtitleInput(),this.renderImagePathInput(),this.renderStorylineInput(),this.renderGenreSelection(),this.renderRatingInput(),this.renderSubmitButton()))}}]),a}(i.a.Component),_=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).state={movie:{},loading:!0},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;O(t).then((function(t){return e.setState({movie:t,loading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.movie,a=t.title,n=t.storyline,r=t.imagePath,o=t.genre,c=t.rating,u=t.subtitle,s=t.id;return e.loading?i.a.createElement(v,null):i.a.createElement("div",{"data-testid":"movie-details"},i.a.createElement("img",{alt:"Movie Cover",src:"../".concat(r)}),i.a.createElement("p",null,"Title: ".concat(a)),i.a.createElement("p",null,"Subtitle: ".concat(u)),i.a.createElement("p",null,"Storyline: ".concat(n)),i.a.createElement("p",null,"Genre: ".concat(o)),i.a.createElement("p",null,"Rating: ".concat(c)),i.a.createElement(l.b,{to:"/movies/".concat(s,"/edit")},"EDITAR"),i.a.createElement(l.b,{to:"/"},"VOLTAR"))}}]),a}(n.Component),C=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={shouldRedirect:!1},n.handleSubmit=n.handleSubmit.bind(Object(k.a)(n)),n}return Object(s.a)(a,[{key:"handleSubmit",value:function(e){var t,a=this;(t=e,new Promise((function(e){var a=f(),n=a[a.length-1].id+1,i=Object(b.a)(Object(b.a)({},t),{},{id:n});a=[].concat(Object(p.a)(a),[i]),y(a),E("OK")(e)}))).then((function(){a.setState({shouldRedirect:!0})}))}},{key:"render",value:function(){return this.state.shouldRedirect?i.a.createElement(c.a,{to:"/"}):i.a.createElement("div",{"data-testid":"new-movie"},i.a.createElement(I,{onSubmit:this.handleSubmit}))}}]),a}(n.Component),w=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={loading:!0,movie:null,shouldRedirect:!1},n.handleSubmit=n.handleSubmit.bind(Object(k.a)(n)),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;O(t).then((function(t){return e.setState({movie:t,loading:!1})}))}},{key:"handleSubmit",value:function(e){(function(e){return new Promise((function(t){var a=f().map((function(t){return t.id===parseInt(e.id,10)?Object(b.a)(Object(b.a)({},t),e):t}));y(a),E("OK")(t)}))})(e).then(this.setState({shouldRedirect:!0}))}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.shouldRedirect,n=e.movie;return a?i.a.createElement(c.a,{to:"/"}):t?i.a.createElement(v,null):i.a.createElement("div",{"data-testid":"edit-movie"},i.a.createElement(I,{movie:n,onSubmit:this.handleSubmit}))}}]),a}(n.Component),R=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{"data-testid":"404-error"},"P\xe1gina n\xe3o encontrada")}}]),a}(n.Component);var A=function(){return i.a.createElement(l.a,null,i.a.createElement("div",{className:"page-title movie-card-header "},"Movie Card Library CRUD"),i.a.createElement(c.d,null,i.a.createElement(c.b,{path:"/movies/new",component:C}),i.a.createElement(c.b,{path:"/movies/:id/edit",component:w}),i.a.createElement(c.b,{path:"/movies/:id",component:_}),i.a.createElement(c.b,{exact:!0,path:"/",component:j}),i.a.createElement(c.b,{path:"*",component:R})),i.a.createElement(l.b,{to:"/movies/new"},"ADICIONAR CART\xc3O"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.7cdca7aa.chunk.js.map