import{_ as t,a as n,b as e,c as r,i as a,s as o,d as s,S as i,e as c,r as f,h as l,j as u,u as m,k as p,n as $,o as g,v as d,w as h,x as v,y as w,g as x,l as y,p as S,A as R,Q as j,R as b,q as P}from"./client.5bc3439b.js";import"./defineProperty.b786bad4.js";import{S as D}from"./SvelteSeo.815fde3d.js";import{S as E,p as I}from"./Sidebar.38cac63d.js";import{P as z,p as B,L as N,B as V}from"./Bloghero.d60f1284.js";function A(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,o=n(t);if(r){var s=n(this).constructor;a=Reflect.construct(o,arguments,s)}else a=o.apply(this,arguments);return e(this,a)}}function L(t){var n,e,r;return(e=new N({props:{totalItems:t[2].length,pageSize:k,currentPage:t[0],limit:1,showStepOptions:!0}})).$on("setPage",t[3]),{c:function(){n=c("div"),f(e.$$.fragment),this.h()},l:function(t){n=l(t,"DIV",{class:!0});var r=u(n);m(e.$$.fragment,r),r.forEach(p),this.h()},h:function(){$(n,"class","my-8")},m:function(t,a){g(t,n,a),d(e,n,null),r=!0},p:function(t,n){var r={};1&n&&(r.currentPage=t[0]),e.$set(r)},i:function(t){r||(h(e.$$.fragment,t),r=!0)},o:function(t){v(e.$$.fragment,t),r=!1},d:function(t){t&&p(n),w(e)}}}function O(t){var n,e,r,a,o,s,i,P;r=new z({props:{posts:t[1]}});var D=t[1].pageSize>6&&L(t);return i=new E({}),{c:function(){n=c("section"),e=c("div"),f(r.$$.fragment),a=x(),D&&D.c(),o=x(),s=c("div"),f(i.$$.fragment),this.h()},l:function(t){n=l(t,"SECTION",{class:!0});var c=u(n);e=l(c,"DIV",{class:!0});var f=u(e);m(r.$$.fragment,f),a=y(f),D&&D.l(f),f.forEach(p),o=y(c),s=l(c,"DIV",{class:!0});var $=u(s);m(i.$$.fragment,$),$.forEach(p),c.forEach(p),this.h()},h:function(){$(e,"class","lg:px-16 px-6 flex flex-wrap justify-center my-1 w-full overflow-hidden sm:my-2 sm:px-2 sm:w-full md:my-2 md:px-2 md:w-2/3 lg:my-2 lg:w-2/3 xl:my-2 xl:px-2 xl:w-2/3"),$(s,"class","container my-8 px-6 w-full overflow-hidden sm:my-8 sm:px-8 sm:w-full md:my-2 md:px-2 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:my-2 xl:px-2 xl:w-1/3"),$(n,"class","flex flex-wrap mx-2 overflow-hidden sm:mx-2 md:mx-2 lg:mx-2 xl:mx-2")},m:function(t,c){g(t,n,c),S(n,e),d(r,e,null),S(e,a),D&&D.m(e,null),S(n,o),S(n,s),d(i,s,null),P=!0},p:function(t,n){var a=R(n,1)[0],o={};2&a&&(o.posts=t[1]),r.$set(o),t[1].pageSize>6?D?(D.p(t,a),2&a&&h(D,1)):((D=L(t)).c(),h(D,1),D.m(e,null)):D&&(j(),v(D,1,1,(function(){D=null})),b())},i:function(t){P||(h(r.$$.fragment,t),h(D),h(i.$$.fragment,t),P=!0)},o:function(t){v(r.$$.fragment,t),v(D),v(i.$$.fragment,t),P=!1},d:function(t){t&&p(n),w(r),D&&D.d(),w(i)}}}var k=6;function q(t,n,e){var r,a=I,o=1;return t.$$.update=function(){1&t.$$.dirty&&e(1,r=B({items:a,pageSize:k,currentPage:o}))},[o,r,a,function(t){return e(0,o=t.detail.page)}]}var C=function(n){t(c,i);var e=A(c);function c(t){var n;return r(this,c),n=e.call(this),a(s(n),t,q,O,o,{}),n}return c}();function G(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,o=n(t);if(r){var s=n(this).constructor;a=Reflect.construct(o,arguments,s)}else a=o.apply(this,arguments);return e(this,a)}}function Q(t){var n,e,r,a,o,s;return n=new D({props:{title:"Blog",description:"Ninja articles, technology overview and usage, how-tos",openGraph:{title:"Blog",description:"Ninja articles, technology overview and usage, how-tos",url:"https://www.webdesign-ninjas.com/blog",type:"website"}}}),r=new V({props:{title1:"Latest",title2:"Articles..."}}),o=new C({}),{c:function(){f(n.$$.fragment),e=x(),f(r.$$.fragment),a=x(),f(o.$$.fragment)},l:function(t){m(n.$$.fragment,t),e=y(t),m(r.$$.fragment,t),a=y(t),m(o.$$.fragment,t)},m:function(t,i){d(n,t,i),g(t,e,i),d(r,t,i),g(t,a,i),d(o,t,i),s=!0},p:P,i:function(t){s||(h(n.$$.fragment,t),h(r.$$.fragment,t),h(o.$$.fragment,t),s=!0)},o:function(t){v(n.$$.fragment,t),v(r.$$.fragment,t),v(o.$$.fragment,t),s=!1},d:function(t){w(n,t),t&&p(e),w(r,t),t&&p(a),w(o,t)}}}var T=function(n){t(c,i);var e=G(c);function c(t){var n;return r(this,c),n=e.call(this),a(s(n),t,null,Q,o,{}),n}return c}();export default T;
