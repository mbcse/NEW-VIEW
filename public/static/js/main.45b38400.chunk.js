(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[0],{10:function(e,t,n){e.exports={ContainerInner:"Movies_ContainerInner__2rZ3g"}},21:function(e,t,n){e.exports=n(45)},3:function(e,t,n){e.exports={Container:"Movie_Container__12nF-",VoteContainer:"Movie_VoteContainer__1N2D5",Bottom:"Movie_Bottom__LTSZD",Title:"Movie_Title___hNeH"}},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(20),c=n.n(o),i=n(2),s=n.n(i),l=n(4),u=n(5),m=n(6),v=n(8),d=n(7),p=n(9),h=n.n(p),g={},f=function(){var e;return function(){var t=Object(l.a)(s.a.mark((function t(n){var a,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e&&e.cancel(),e=h.a.CancelToken.source(),t.prev=2,!g[n]){t.next=5;break}return t.abrupt("return",g[n]);case 5:return t.next=7,h()(n,{cancelToken:e.token});case 7:return a=t.sent,r=a.data.results,g[n]=r,t.abrupt("return",r);case 13:t.prev=13,t.t0=t.catch(2),h.a.isCancel(t.t0)?console.log("Request is cancelled. ",t.t0.message):console.log("Something went wrong. ",t.t0.message);case 16:case"end":return t.stop()}}),t,null,[[2,13]])})));return function(e){return t.apply(this,arguments)}}()}(),b=n(3),_=n.n(b),k=function(e){Object(v.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={getting:e.item,selected:{}},a}return Object(m.a)(n,[{key:"render",value:function(){var e,t,n=this.state.getting,a=n.poster_path,o="http://image.tmdb.org/t/p/w185"+a,c=n.vote_average,i=n.title;return null==a&&(o=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSols5HZxlQWyS9JY5d3_L9imbk0LiziHiyDtMZLHt_UNzoYUXs2g"),0===c&&(c=""),r.a.createElement("div",{className:_.a.Container,style:{backgroundImage:"url(".concat(o,")")}},console.log(this.state.getting),r.a.createElement("div",{className:_.a.VoteContainer},r.a.createElement("span",{className:_.a.Vote},c)),r.a.createElement("div",{className:_.a.Bottom},r.a.createElement("h3",{className:_.a.Title},(t=20,(e=i).length>t?e.trim().substring(0,t-3).trim()+"...":e))))}}]),n}(r.a.Component),E=n(10),w=n.n(E);var y=function(e){var t=e.list,n=r.a.createElement("h1",null,"Loading");return t&&(n=t.map((function(e,t){return r.a.createElement("div",null," ",r.a.createElement(k,{key:t,item:e}))}))),r.a.createElement("div",{className:w.a.Container},r.a.createElement("div",{className:w.a.ContainerInner},n))},C=(n(44),function(e){Object(v.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).search=function(){var t=Object(l.a)(s.a.mark((function t(n){var a,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0}),t.next=3,f("https://api.themoviedb.org/3/search/movie?query=".concat(n,"&api_key=dbc0a6d62448554c27b6167ef7dabb1b"));case 3:a=t.sent,r=a,e.setState({movies:r,loading:!1});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onChangeHandler=function(){var t=Object(l.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.search(n.target.value),e.setState({value:n.target.value});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={movies:null,loading:!1,value:"",selected:{}},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"search-bar"},r.a.createElement("input",{style:{background:"transparant",border:"none",color:"White ",marginTop:"10px",borderBottom:"2px solid yellowgreen",paddingBottom:"10px"},label:"search Bar",onChange:function(t){return e.onChangeHandler(t)},placeholder:"Type something to search"}),this.renderMovies))}},{key:"renderMovies",get:function(){var e="";return this.state.movies&&(e=r.a.createElement(y,{list:this.state.movies})),e}}]),n}(r.a.Component));var x=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.45b38400.chunk.js.map