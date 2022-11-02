(()=>{"use strict";var n,A={756:(n,A,e)=>{e.d(A,{Z:()=>l});var i=e(537),t=e.n(i),a=e(645),r=e.n(a),o=e(667),p=e.n(o),B=new URL(e(541),e.b),E=r()(t()),d=p()(B);E.push([n.id,"* {\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: 'Source Sans Pro', sans-serif;\n  padding: 0;\n  margin: 0;\n  background-color: #FFECEF;\n}\n\nimg {\n  display: block;\n}\n\n/* header dan hamburger button */\nheader{\n  background-color:#251B37;\n  display: flex;\n  justify-content: space-between;\n  padding-left: 20px;\n  padding-top: 5px;\n  position: fixed;\n  width: 100%;\n  display: none;\n}\n\nheader h1 {\n  font-size: 1.5em;\n  margin: 0;\n  padding: 5px;\n  display: flex;\n  justify-content: center;\n  color: #FFECEF;\n}\n\nheader a{\n  font-size: 30px;\n  text-decoration: none;\n  color: #FFECEF;\n  display: block;\n  width: 44px;\n  height: 44px;\n}\n\n/* Navbar */\n\n.nav {\n  display: flex;\n  background-color: #251B37;\n  color: #FFECEF;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0px 20px 0px 20px;\n  overflow: hidden;\n  position: fixed;\n  width: 100%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  ;\n}\n\n.nav .brand {\n  font-size: 1em;\n}\n\n.nav ul {\n  list-style: none;\n  display: flex;\n  width: 30%;\n  justify-content: space-around;\n}\n\n.nav ul li a {\n  text-decoration: none;\n  color: #FFECEF;\n  padding: 22px;\n  cursor: pointer;\n}\n\n/* Hero */\n\n.hero {\n  display: flex;\n  align-items: center;\n  min-height: 400px;\n  width: 100%;\n  text-align: center;\n  background-image: url("+d+");\n  background-position: center;\n  background-size: cover;\n  background-color: green;\n}\n\n.heroInner {\n  margin: 0 auto;\n  max-width: 800px;\n}\n\n.heroTitle {\n  font-family: 'Lora', serif;\n  color: #fff;\n  font-weight: 500;\n  font-size: 54px;\n}\n\n.heroTagline {\n  color: #fff;\n  margin-top: 16px;\n  font-size: 18px;\n  font-weight: 300;\n}\n\n/* Main */\nmain {\n  width: 100%;\n  margin: 0 auto;\n}\n\n/* skip to content */\n.skip-link {\n  text-decoration: none;\n  position: absolute;\n  top: -40px;\n  background-color: red;\n  color: white;\n  padding: 8px;\n  z-index: 100;\n}\n\n.skip-link:focus {\n   top: 80px;\n}\n\n/*\n  Like\n*/\n.like {\n  width: 55px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #db0000;\n\n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  border-radius: 50%;\n  border: 0;\n\n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n}\n\n/* details */\n.detail-container{\n  margin-right: 10px;\n}\n\n.detail-img{\n  justify-content: center;\n  width: 100%;\n  border-radius: 10px;\n}\n\n.detail-info{\n  margin-right: 10px;\n  margin-left: 5px;\n}\n\n.menu {\n  display: flex;\n}\n\n.menu-label {\n  text-align: center;\n  font-weight: lighter;\n  font-size: 20px;\n}\n\n.makanan .minuman {\n  margin-left: 5px;\n}\n\n.menu h4{\n  text-align: center;\n}\n\n.review{\n  display: grid;\n  grid-template-areas: 'a';\n  grid-gap: 5px;\n  justify-content: center;\n  width: 100%;\n  border-radius: 20px;\n  margin: 10px auto;\n  box-shadow: #251B37;\n}\n\n.detail-review-item{\n  display: grid;\n  border-radius: 7px;\n  padding: 5px;\n  color: #FFECEF;\n  background-color: #251B37;\n  font-size: 15px;\n  box-shadow: #251B37;\n}\n\n.review-name{\n  text-align: center;\n}\n\n#container{\n  display: grid;\n  grid-template-areas: 'myArea';\n  grid-gap: 30px;\n  margin-left: 20px;\n  margin-right: 20px;\n  text-align: left;\n}\n.post {\n    width: 100%;\n    margin: 60px auto;\n    text-align: center;\n  }\n\n.post-label {\n  text-align: center;\n  font-weight: lighter;\n}\n\n/* searchfavorite */\n.query {\n  padding: 50px;\n}\n\n.query-wrapper {\n  display: flex;\n  margin-top: 30px;\n  margin-left: 70px;\n  margin-bottom: 10px;\n  justify-content: start;\n  align-items: center ;\n}\n\n@media screen and (min-width: 450px) {\n  #container{\n    grid-template-areas: 'myArea';\n    grid-gap: 20px;\n    margin-left: 50px;\n    margin-right: 50px;\n  }\n}\n\n@media screen and (min-width: 650px) {\n  #container{\n    grid-template-areas: 'myArea myArea';\n    grid-gap: 20px;\n    margin-left: 20px;\n    margin-right: 20px;\n  }\n}\n\n@media screen and (min-width: 780px) {\n  #container{\n    grid-template-areas: 'myArea myArea';\n    grid-gap: 30px;\n    margin-left: 60px;\n    margin-right: 60px;\n  }\n}\n\n@media screen and (min-width: 1000px) {\n  #container{\n    grid-template-areas: 'myArea myArea myArea';\n    grid-gap: 20px;\n    margin-left: 60px;\n    margin-right: 60px;\n  }\n}\n\n@media screen and (max-width: 500px) {\n  header{\n    display: flex;\n    z-index: 1;\n  }\n\n  .nav .brand{\n    display: none;\n  }\n\n  .nav ul{\n    right: 0;\n    top: 0;\n    height: 100vh;\n    justify-content: space-evenly;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .nav ul li a{\n    padding: 90px 155px 90px 155px;\n    text-transform: uppercase;\n  }\n\n  .nav .navItem{\n    cursor: pointer;\n  }\n  /* drawer */\n\n  #drawer {\n    width: 250px;\n    height: 100vh;\n\n    transform: translate(-250px, 0);\n    transition: transform 0.3s ease-in-out;\n  }\n\n  #drawer.open {\n    transform: translate(0, 0);\n  }\n\n  .hero {\n    display: flex;\n    align-items: center;\n    min-height: 320px;\n  }\n\n  .heroInner {\n    max-width: 1000px;\n  }\n\n  .heroTitle {\n    font-size: 28px;\n  }\n\n  .heroTagline {\n    margin-top: 8px;\n    font-size: 8px;\n  }\n}\n\n\n@media screen and (min-width: 500px) {\n  .nav ul {\n    width: 50%;\n  }\n\n  .hero {\n    display: flex;\n    align-items: center;\n    min-height: 320px;\n  }\n\n  .heroInner {\n    max-width: 1000px;\n  }\n\n  .heroTitle {\n    font-size: 36px;\n  }\n\n  .heroTagline {\n    margin-top: 10px;\n    font-size: 12px;\n  }\n\n  .detail-container{\n    margin-right: 20px;\n    margin-left:  20px;\n  }\n\n  .detail-img{\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    border-radius: 10px;\n  }\n\n  .detail-info{\n    margin-left: 20px;\n  }\n\n  .menu-label {\n    text-align: center;\n    font-weight: lighter;\n    font-size: 20px;\n  }\n\n  .menu{\n    margin-left: 20px;\n    display: grid;\n    text-decoration: none;\n  }\n\n\n}\n\n\n@media screen and (min-width: 620px) {\n  .hero {\n    display: flex;\n    align-items: center;\n    min-height: 450px;\n  }\n\n  .heroInner {\n    max-width: 1000px;\n  }\n\n  .heroTitle {\n    font-size: 38px;\n  }\n\n  .heroTagline {\n    margin-top: 12px;\n    font-size: 14px;\n  }\n\n  .detail-container{\n    margin-right: 20px;\n    margin-left:  20px;\n  }\n\n  .detail-img{\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    border-radius: 10px;\n  }\n\n  .detail-info{\n    margin-left: 20px;\n  }\n\n  .menu-label {\n    text-align: center;\n    font-weight: lighter;\n    font-size: 20px;\n  }\n\n  .menu{\n    margin-left: 20px;\n    display: grid;\n    grid-template-areas:\n    \"a a a\"\n    \"b c c\"\n    \"b c c\";\n    justify-content: space-evenly;\n  }\n  .review{\n    display: grid;\n    grid-template-areas: 'a a';\n  }\n  .detail-review-item{\n    width: 350px;\n  }\n\n\n}\n\n@media screen and (min-width: 920px) {\n  .hero{\n    min-height: 450px;\n  }\n\n  .heroInner {\n    max-width: 1000px;\n  }\n\n  .heroTitle {\n    font-size: 45px;\n  }\n\n  .heroTagline {\n    margin-top: 14px;\n    font-size: 16px;\n  }\n\n  .detail-container{\n    margin-right: 20px;\n    margin-left:  20px;\n  }\n\n  .detail-img{\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    border-radius: 10px;\n  }\n\n  .detail-info{\n    align-items: center;\n    margin-left: 20px;\n  }\n\n  .menu-label {\n    text-align: center;\n    font-weight: lighter;\n    font-size: 20px;\n  }\n\n  .menu{\n    margin-left: 20px;\n    display: grid;\n    grid-template-areas:\n    \"a a a\"\n    \"b c c\"\n    \"b c c\";\n    justify-content: space-evenly;\n  }\n  .review{\n    display: grid;\n    grid-template-areas: 'a a a';\n  }\n  .detail-review-item{\n    width: 300px;\n  }\n\n}\n\n@media screen and (min-width: 1100px) {\n  .detail-container{\n    display: flex;\n    margin-right: 20px;\n    margin-left:  20px;\n  }\n  .detail-img{\n    position: relative;\n    justify-content: space-between;\n    align-items: center;\n    width: 700px;\n    border-radius: 10px;\n  }\n\n  .menu-label {\n    text-align: center;\n    font-weight: lighter;\n    font-size: 25px;\n  }\n\n  .menu{\n    display: grid;\n    grid-template-areas:\n    \"a a a\"\n    \"b c c\"\n    \"b c c\";\n    justify-content: space-evenly;\n  }\n\n  .review{\n    display: grid;\n    grid-template-areas: 'a a a';\n  }\n  .detail-review-item{\n    width: 350px;\n  }\n\n}","",{version:3,sources:["webpack://./src/styles/main.css"],names:[],mappings:"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",sourcesContent:["* {\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: 'Source Sans Pro', sans-serif;\n  padding: 0;\n  margin: 0;\n  background-color: #FFECEF;\n}\n\nimg {\n  display: block;\n}\n\n/* header dan hamburger button */\nheader{\n  background-color:#251B37;\n  display: flex;\n  justify-content: space-between;\n  padding-left: 20px;\n  padding-top: 5px;\n  position: fixed;\n  width: 100%;\n  display: none;\n}\n\nheader h1 {\n  font-size: 1.5em;\n  margin: 0;\n  padding: 5px;\n  display: flex;\n  justify-content: center;\n  color: #FFECEF;\n}\n\nheader a{\n  font-size: 30px;\n  text-decoration: none;\n  color: #FFECEF;\n  display: block;\n  width: 44px;\n  height: 44px;\n}\n\n/* Navbar */\n\n.nav {\n  display: flex;\n  background-color: #251B37;\n  color: #FFECEF;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0px 20px 0px 20px;\n  overflow: hidden;\n  position: fixed;\n  width: 100%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  ;\n}\n\n.nav .brand {\n  font-size: 1em;\n}\n\n.nav ul {\n  list-style: none;\n  display: flex;\n  width: 30%;\n  justify-content: space-around;\n}\n\n.nav ul li a {\n  text-decoration: none;\n  color: #FFECEF;\n  padding: 22px;\n  cursor: pointer;\n}\n\n/* Hero */\n\n.hero {\n  display: flex;\n  align-items: center;\n  min-height: 400px;\n  width: 100%;\n  text-align: center;\n  background-image: url(\"../public/images/heros/hero-image_2.jpg\");\n  background-position: center;\n  background-size: cover;\n  background-color: green;\n}\n\n.heroInner {\n  margin: 0 auto;\n  max-width: 800px;\n}\n\n.heroTitle {\n  font-family: 'Lora', serif;\n  color: #fff;\n  font-weight: 500;\n  font-size: 54px;\n}\n\n.heroTagline {\n  color: #fff;\n  margin-top: 16px;\n  font-size: 18px;\n  font-weight: 300;\n}\n\n/* Main */\nmain {\n  width: 100%;\n  margin: 0 auto;\n}\n\n/* skip to content */\n.skip-link {\n  text-decoration: none;\n  position: absolute;\n  top: -40px;\n  background-color: red;\n  color: white;\n  padding: 8px;\n  z-index: 100;\n}\n\n.skip-link:focus {\n   top: 80px;\n}\n\n/*\n  Like\n*/\n.like {\n  width: 55px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #db0000;\n\n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  border-radius: 50%;\n  border: 0;\n\n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n}\n\n/* details */\n.detail-container{\n  margin-right: 10px;\n}\n\n.detail-img{\n  justify-content: center;\n  width: 100%;\n  border-radius: 10px;\n}\n\n.detail-info{\n  margin-right: 10px;\n  margin-left: 5px;\n}\n\n.menu {\n  display: flex;\n}\n\n.menu-label {\n  text-align: center;\n  font-weight: lighter;\n  font-size: 20px;\n}\n\n.makanan .minuman {\n  margin-left: 5px;\n}\n\n.menu h4{\n  text-align: center;\n}\n\n.review{\n  display: grid;\n  grid-template-areas: 'a';\n  grid-gap: 5px;\n  justify-content: center;\n  width: 100%;\n  border-radius: 20px;\n  margin: 10px auto;\n  box-shadow: #251B37;\n}\n\n.detail-review-item{\n  display: grid;\n  border-radius: 7px;\n  padding: 5px;\n  color: #FFECEF;\n  background-color: #251B37;\n  font-size: 15px;\n  box-shadow: #251B37;\n}\n\n.review-name{\n  text-align: center;\n}\n\n#container{\n  display: grid;\n  grid-template-areas: 'myArea';\n  grid-gap: 30px;\n  margin-left: 20px;\n  margin-right: 20px;\n  text-align: left;\n}\n.post {\n    width: 100%;\n    margin: 60px auto;\n    text-align: center;\n  }\n\n.post-label {\n  text-align: center;\n  font-weight: lighter;\n}\n\n/* searchfavorite */\n.query {\n  padding: 50px;\n}\n\n.query-wrapper {\n  display: flex;\n  margin-top: 30px;\n  margin-left: 70px;\n  margin-bottom: 10px;\n  justify-content: start;\n  align-items: center ;\n}\n\n@media screen and (min-width: 450px) {\n  #container{\n    grid-template-areas: 'myArea';\n    grid-gap: 20px;\n    margin-left: 50px;\n    margin-right: 50px;\n  }\n}\n\n@media screen and (min-width: 650px) {\n  #container{\n    grid-template-areas: 'myArea myArea';\n    grid-gap: 20px;\n    margin-left: 20px;\n    margin-right: 20px;\n  }\n}\n\n@media screen and (min-width: 780px) {\n  #container{\n    grid-template-areas: 'myArea myArea';\n    grid-gap: 30px;\n    margin-left: 60px;\n    margin-right: 60px;\n  }\n}\n\n@media screen and (min-width: 1000px) {\n  #container{\n    grid-template-areas: 'myArea myArea myArea';\n    grid-gap: 20px;\n    margin-left: 60px;\n    margin-right: 60px;\n  }\n}\n\n@media screen and (max-width: 500px) {\n  header{\n    display: flex;\n    z-index: 1;\n  }\n\n  .nav .brand{\n    display: none;\n  }\n\n  .nav ul{\n    right: 0;\n    top: 0;\n    height: 100vh;\n    justify-content: space-evenly;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .nav ul li a{\n    padding: 90px 155px 90px 155px;\n    text-transform: uppercase;\n  }\n\n  .nav .navItem{\n    cursor: pointer;\n  }\n  /* drawer */\n\n  #drawer {\n    width: 250px;\n    height: 100vh;\n\n    transform: translate(-250px, 0);\n    transition: transform 0.3s ease-in-out;\n  }\n\n  #drawer.open {\n    transform: translate(0, 0);\n  }\n\n  .hero {\n    display: flex;\n    align-items: center;\n    min-height: 320px;\n  }\n\n  .heroInner {\n    max-width: 1000px;\n  }\n\n  .heroTitle {\n    font-size: 28px;\n  }\n\n  .heroTagline {\n    margin-top: 8px;\n    font-size: 8px;\n  }\n}\n\n\n@media screen and (min-width: 500px) {\n  .nav ul {\n    width: 50%;\n  }\n\n  .hero {\n    display: flex;\n    align-items: center;\n    min-height: 320px;\n  }\n\n  .heroInner {\n    max-width: 1000px;\n  }\n\n  .heroTitle {\n    font-size: 36px;\n  }\n\n  .heroTagline {\n    margin-top: 10px;\n    font-size: 12px;\n  }\n\n  .detail-container{\n    margin-right: 20px;\n    margin-left:  20px;\n  }\n\n  .detail-img{\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    border-radius: 10px;\n  }\n\n  .detail-info{\n    margin-left: 20px;\n  }\n\n  .menu-label {\n    text-align: center;\n    font-weight: lighter;\n    font-size: 20px;\n  }\n\n  .menu{\n    margin-left: 20px;\n    display: grid;\n    text-decoration: none;\n  }\n\n\n}\n\n\n@media screen and (min-width: 620px) {\n  .hero {\n    display: flex;\n    align-items: center;\n    min-height: 450px;\n  }\n\n  .heroInner {\n    max-width: 1000px;\n  }\n\n  .heroTitle {\n    font-size: 38px;\n  }\n\n  .heroTagline {\n    margin-top: 12px;\n    font-size: 14px;\n  }\n\n  .detail-container{\n    margin-right: 20px;\n    margin-left:  20px;\n  }\n\n  .detail-img{\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    border-radius: 10px;\n  }\n\n  .detail-info{\n    margin-left: 20px;\n  }\n\n  .menu-label {\n    text-align: center;\n    font-weight: lighter;\n    font-size: 20px;\n  }\n\n  .menu{\n    margin-left: 20px;\n    display: grid;\n    grid-template-areas:\n    \"a a a\"\n    \"b c c\"\n    \"b c c\";\n    justify-content: space-evenly;\n  }\n  .review{\n    display: grid;\n    grid-template-areas: 'a a';\n  }\n  .detail-review-item{\n    width: 350px;\n  }\n\n\n}\n\n@media screen and (min-width: 920px) {\n  .hero{\n    min-height: 450px;\n  }\n\n  .heroInner {\n    max-width: 1000px;\n  }\n\n  .heroTitle {\n    font-size: 45px;\n  }\n\n  .heroTagline {\n    margin-top: 14px;\n    font-size: 16px;\n  }\n\n  .detail-container{\n    margin-right: 20px;\n    margin-left:  20px;\n  }\n\n  .detail-img{\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    border-radius: 10px;\n  }\n\n  .detail-info{\n    align-items: center;\n    margin-left: 20px;\n  }\n\n  .menu-label {\n    text-align: center;\n    font-weight: lighter;\n    font-size: 20px;\n  }\n\n  .menu{\n    margin-left: 20px;\n    display: grid;\n    grid-template-areas:\n    \"a a a\"\n    \"b c c\"\n    \"b c c\";\n    justify-content: space-evenly;\n  }\n  .review{\n    display: grid;\n    grid-template-areas: 'a a a';\n  }\n  .detail-review-item{\n    width: 300px;\n  }\n\n}\n\n@media screen and (min-width: 1100px) {\n  .detail-container{\n    display: flex;\n    margin-right: 20px;\n    margin-left:  20px;\n  }\n  .detail-img{\n    position: relative;\n    justify-content: space-between;\n    align-items: center;\n    width: 700px;\n    border-radius: 10px;\n  }\n\n  .menu-label {\n    text-align: center;\n    font-weight: lighter;\n    font-size: 25px;\n  }\n\n  .menu{\n    display: grid;\n    grid-template-areas:\n    \"a a a\"\n    \"b c c\"\n    \"b c c\";\n    justify-content: space-evenly;\n  }\n\n  .review{\n    display: grid;\n    grid-template-areas: 'a a a';\n  }\n  .detail-review-item{\n    width: 350px;\n  }\n\n}"],sourceRoot:""}]);const l=E},46:(n,A,e)=>{var i=e(379),t=e.n(i),a=e(795),r=e.n(a),o=e(569),p=e.n(o),B=e(565),E=e.n(B),d=e(216),l=e.n(d),C=e(589),g=e.n(C),s=e(756),m={};m.styleTagTransform=g(),m.setAttributes=E(),m.insert=p().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=l(),t()(s.Z,m),s.Z&&s.Z.locals&&s.Z.locals}},e={};function i(n){var t=e[n];if(void 0!==t)return t.exports;var a=e[n]={id:n,exports:{}};return A[n](a,a.exports,i),a.exports}i.m=A,n=[],i.O=(A,e,t,a)=>{if(!e){var r=1/0;for(E=0;E<n.length;E++){for(var[e,t,a]=n[E],o=!0,p=0;p<e.length;p++)(!1&a||r>=a)&&Object.keys(i.O).every((n=>i.O[n](e[p])))?e.splice(p--,1):(o=!1,a<r&&(r=a));if(o){n.splice(E--,1);var B=t();void 0!==B&&(A=B)}}return A}a=a||0;for(var E=n.length;E>0&&n[E-1][2]>a;E--)n[E]=n[E-1];n[E]=[e,t,a]},i.n=n=>{var A=n&&n.__esModule?()=>n.default:()=>n;return i.d(A,{a:A}),A},i.d=(n,A)=>{for(var e in A)i.o(A,e)&&!i.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:A[e]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),i.o=(n,A)=>Object.prototype.hasOwnProperty.call(n,A),(()=>{var n;i.g.importScripts&&(n=i.g.location+"");var A=i.g.document;if(!n&&A&&(A.currentScript&&(n=A.currentScript.src),!n)){var e=A.getElementsByTagName("script");e.length&&(n=e[e.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=n})(),(()=>{i.b=document.baseURI||self.location.href;var n={209:0};i.O.j=A=>0===n[A];var A=(A,e)=>{var t,a,[r,o,p]=e,B=0;if(r.some((A=>0!==n[A]))){for(t in o)i.o(o,t)&&(i.m[t]=o[t]);if(p)var E=p(i)}for(A&&A(e);B<r.length;B++)a=r[B],i.o(n,a)&&n[a]&&n[a][0](),n[a]=0;return i.O(E)},e=self.webpackChunkrestaurant_apps=self.webpackChunkrestaurant_apps||[];e.forEach(A.bind(null,0)),e.push=A.bind(null,e.push.bind(e))})(),i.nc=void 0;var t=i.O(void 0,[192,2,193,337,268,924],(()=>i(253)));t=i.O(t)})();
//# sourceMappingURL=app~04e4ec69.bundle.js.map