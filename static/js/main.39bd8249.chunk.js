(this.webpackJsonphashlips_nft_minting_dapp_fazelpejmanfar=this.webpackJsonphashlips_nft_minting_dapp_fazelpejmanfar||[]).push([[0],{366:function(n,e){},372:function(n,e){},373:function(n,e){},399:function(n,e){},401:function(n,e){},415:function(n,e){},417:function(n,e){},447:function(n,e){},449:function(n,e){},532:function(n,e){},534:function(n,e){},540:function(n,e){},552:function(n,e){},555:function(n,e){},560:function(n,e){},794:function(n,e,t){},795:function(n,e,t){"use strict";t.r(e);var i,r,a,o,c,s,x,d,l,p,b,h,j,u,g,f,m,O,w,y,v,E,S,_,C,A,k,T,F,N,M,R,z,P,D,L,I,U,K,X,Y,W,B,H,q,G=t(0),Q=t.n(G),J=t(34),V=t.n(J),Z=t(21),$=t(46),nn=t(22),en=t(5),tn=t(41),rn=t(82),an=t.n(rn),on=t(97),cn=t.n(on),sn=t(101),xn=t(328),dn=t(18),ln={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},pn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ln,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CONNECTION_REQUEST":return Object(dn.a)(Object(dn.a)({},ln),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(dn.a)(Object(dn.a)({},n),{},{loading:!1,account:e.payload.account,smartContract:e.payload.smartContract,web3:e.payload.web3});case"CONNECTION_FAILED":return Object(dn.a)(Object(dn.a)({},ln),{},{loading:!1,errorMsg:e.payload});case"UPDATE_ACCOUNT":return Object(dn.a)(Object(dn.a)({},n),{},{account:e.payload.account});default:return n}},bn={loading:!1,totalSupply:0,error:!1,errorMsg:""},hn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CHECK_DATA_REQUEST":return Object(dn.a)(Object(dn.a)({},n),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(dn.a)(Object(dn.a)({},n),{},{loading:!1,totalSupply:e.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(dn.a)(Object(dn.a)({},bn),{},{loading:!1,error:!0,errorMsg:e.payload});default:return n}},jn=Object(sn.b)({blockchain:pn,data:hn}),un=[xn.a],gn=Object(sn.c)(sn.a.apply(void 0,un)),fn=Object(sn.d)(jn,gn),mn=function(n){return{type:"CHECK_DATA_FAILED",payload:n}},On=function(){return function(){var n=Object($.a)(Object(Z.a)().mark((function n(e){var t;return Object(Z.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e({type:"CHECK_DATA_REQUEST"}),n.prev=1,n.next=4,fn.getState().blockchain.smartContract.methods.totalSupply().call();case 4:t=n.sent,e({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:t}}),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0),e(mn("Could not load data from contract."));case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}()},wn=function(n){return{type:"CONNECTION_FAILED",payload:n}},yn=function(){return function(){var n=Object($.a)(Object(Z.a)().mark((function n(e){var t,i,r,a,o,c,s,x,d,l,p,b;return Object(Z.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e({type:"CONNECTION_REQUEST"}),n.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return t=n.sent,n.next=6,t.json();case 6:return i=n.sent,n.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return r=n.sent,n.next=12,r.json();case 12:if(a=n.sent,o=window,c=o.ethereum,!(c&&c.isMetaMask)){n.next=50;break}return an.a.setProvider(c),s=new cn.a(c),n.prev=18,n.next=21,c.request({method:"eth_requestAccounts"});case 21:return x=n.sent,n.next=24,c.request({method:"net_version"});case 24:if(n.sent!=a.NETWORK.ID){n.next=33;break}d=new an.a(i,a.CONTRACT_ADDRESS),l=new an.a(i,a.TOKEN),e({type:"CONNECTION_SUCCESS",payload:{account:x[0],smartContract:d,smartToken:l,web3:s}}),c.on("accountsChanged",(function(n){e(vn(n[0]))})),c.on("chainChanged",(function(){window.location.reload()})),n.next=43;break;case 33:return p=a.NETWORK.ID,b=cn.a.utils.toHex(p.toString()),n.prev=35,n.next=38,c.request({method:"wallet_switchEthereumChain",params:[{chainId:b}]});case 38:n.next=43;break;case 40:n.prev=40,n.t0=n.catch(35),4902===n.t0.code&&e(wn("Please Add ".concat(a.NETWORK.NAME," Network to your Metamask.")));case 43:n.next=48;break;case 45:n.prev=45,n.t1=n.catch(18),e(wn("Something went wrong."));case 48:n.next=51;break;case 50:e(wn("Install Metamask."));case 51:case"end":return n.stop()}}),n,null,[[18,45],[35,40]])})));return function(e){return n.apply(this,arguments)}}()},vn=function(n){return function(){var e=Object($.a)(Object(Z.a)().mark((function e(t){return Object(Z.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"UPDATE_ACCOUNT",payload:{account:n}}),t(On());case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},En=t(6),Sn=En.b.div(i||(i=Object(en.a)(["\n  background-color: #fff;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(n){var e=n.image;return e?"url(".concat(e,")"):"none"})),_n=En.b.div(r||(r=Object(en.a)(["\n  height: 8px;\n  width: 8px;\n"]))),Cn=En.b.div(a||(a=Object(en.a)(["\n  height: 16px;\n  width: 16px;\n"]))),An=En.b.div(o||(o=Object(en.a)(["\n  height: 24px;\n  width: 24px;\n"]))),kn=En.b.div(c||(c=Object(en.a)(["\n  height: 32px;\n  width: 32px;\n"]))),Tn=En.b.div(s||(s=Object(en.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(n){var e=n.flex;return e||0}),(function(n){var e=n.fd;return e||"column"}),(function(n){var e=n.jc;return e||"flex-start"}),(function(n){var e=n.ai;return e||"flex-start"}),(function(n){return n.test?"pink":"none"}),(function(n){var e=n.image;return e?"url(".concat(e,")"):"none"})),Fn=En.b.div(x||(x=Object(en.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: center;\n  justify-content: center;\n  align-items: center;\n  //border: 2px solid #A673EF;\n  border-radius: 10px;\n  //box-shadow: 0px 0px 3px 0px #A673EF;\n"])),(function(n){var e=n.flex;return e||0})),Nn=En.b.p(d||(d=Object(en.a)(["\n  font-family: 'Upheaval';\n  color: var(--primary-text);\n  font-size: 60px;\n  font-weight: 400;\n  letter-spacing: 8px;\n  line-height: 1.6;\n  text-align: center;\n  @media (max-width: 565px) {\n    font-size: 25px;\n    text-align: center;\n    letter-spacing: 2px;\n  }\n"]))),Mn=En.b.p(l||(l=Object(en.a)(["\n  font-family: 'Upheaval';\n  color: var(--primary-text);\n  font-size: 24px;\n  font-weight: 400;\n  letter-spacing: 8px;\n  line-height: 1.6;\n  @media (max-width: 565px) {\n    font-size: 20px;\n    letter-spacing: 2px;\n  }\n"]))),Rn=En.b.p(p||(p=Object(en.a)(["\n  font-family: 'Upheaval';\n  color: var(--primary-text);\n  font-size: 1rem;\n  font-weight: 400;\n  letter-spacing: 2px;\n  line-height: 1.6;\n  @media (max-width: 565px) {\n    font-size: 0.75rem;\n    letter-spacing: 2px;\n  }\n"]))),zn=(En.b.p(b||(b=Object(en.a)(["\n  font-family: 'Upheaval';\n  color: white;\n  font-size: 3rem;\n  font-weight: bold;\n  letter-spacing: 8px;\n  line-height: 1.6;\n  border: 2px solid midnightblue;\n  width: 400px;\n  background: #9DC5F0;\n  text-align: center;\n  @media (max-width: 565px) {\n    font-size: 20px;\n    letter-spacing: 2px;\n    width: 200px;\n  }\n"]))),En.b.p(h||(h=Object(en.a)(["\n  font-family: 'Renomono';\n  color: var(--primary-text);\n  font-size: 20px;\n  font-weight: 400;\n  line-height: 1.6;\n  @media (max-width: 565px) {\n    font-size: 0.75rem;\n    letter-spacing: 2px;\n    text-align: center;\n  }\n"])))),Pn=En.b.p(j||(j=Object(en.a)(["\n  color: var(--primary-text);\n  font-size: 60px;\n  line-height: 1.6;\n"]))),Dn=En.b.p(u||(u=Object(en.a)(["\n  color: var(--primary-text);\n  font-size: 30px;\n  line-height: 1.6;\n  @media (max-width: 565px) {\n    font-size: 20px;\n    line-height: 0;\n  }\n"]))),Ln=(En.b.div(g||(g=Object(en.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),En.b.hr(f||(f=Object(en.a)(["\n  border: 2px solid white;  \n  background-color: white;\n  border-radius: 2px;\n  width: 450px;\n  @media (max-width: 565px) {\n    width: 350px;\n  }\n"]))),En.b.a(m||(m=Object(en.a)(["\n  color: var(--primary-text);\n  text-decoration: none;\n  margin-right: 5rem;\n  cursor: pointer;\n  :hover {\n    color: #FF8938;\n  }\n  @media (max-width: 565px) {\n    margin-right: 0.75rem;\n    margin-top: 1rem;\n  }\n"])))),In=En.b.img(O||(O=Object(en.a)(["\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    margin-right: 1.2rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    :hover {\n      transform: scale(1.5);\n      transition: transform 0.5s;\n    }\n"]))),Un=En.b.div(w||(w=Object(en.a)(["\ndisplay: flex;\nalign-items: center;\nmargin-right: 3.5rem;\n@media (max-width: 565px) {\n  margin-right: 0;\n  margin-top: 10px;\n  margin-bottom: 20px;\n  flex-direction: column;\n}\n"]))),Kn=En.b.div(y||(y=Object(en.a)(["\ndisplay: flex;\nalign-items: center;\n@media (max-width: 565px) {\n  margin-right: 0;\n  margin-top: 20px;\n  flex-direction: row;\n}\n"]))),Xn=En.b.div(v||(v=Object(en.a)(["\n    display: flex;\n    align-items: center;\n    @media (max-width: 565px) {\n      margin-top: 10px;\n      margin-bottom: 10px;\n    }\n"]))),Yn=En.b.div(E||(E=Object(en.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: center;;\n  align-items: center;\n  background-color: ",";\n  width: 100%;\n  margin-top: 5%;\n"])),(function(n){var e=n.flex;return e||0}),(function(n){var e=n.fd;return e||"column"}),(function(n){return n.test?"pink":"none"})),Wn=En.b.p(S||(S=Object(en.a)(["\ntext-align: center;\nfont-size: 1rem;\nletter-spacing: 1px;\nline-height: 2;\nwidth: 70%;\n"]))),Bn=(En.b.button(_||(_=Object(en.a)(["\n  font-family: 'coder';\n  padding: 10px;\n  font-size: 1rem;\n  border-radius: 40px;\n  border: none;\n  background: linear-gradient(86.57deg, #D8AE43 6.92%, rgba(255, 92, 0, 0.79) 100.73%);\n  padding: 10px;\n  letter-spacing: 2px;\n  font-weight: bold;\n  color: white;\n  width: 270px;\n  height: 50px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n  :hover {\n    color: black;\n  }\n  @media (max-width: 565px) {\n    width: 200px;\n    height: 50px;\n    font-size: 0.75rem;\n  }\n"]))),En.b.div(C||(C=Object(en.a)(["\n  display: flex;\n  background: #171717;\n  border-radius: 40px;\n  width: max-content;\n  margin-top: 5%;\n  align-items: center;\n    justify-content: center;\n    @media (max-width: 565px) {\n      width: 100%;\n    }\n"]))),En.b.div(A||(A=Object(en.a)(["\n  display: flex;\n  margin-top: 5%;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  gap: 5%;\n  @media (max-width: 565px) {\n    flex-direction: column;\n  }\n"]))),En.b.div(k||(k=Object(en.a)(["\nheight: 120px;\nwidth: 250px;\nborder-radius: 20px;\nbackground: #171717;\npadding: 10px;\n@media (max-width: 565px) {\n  margin-top: 10px;\n}\n:hover {\n  transform: scale(1.2);\n}\n\n"]))),En.b.div(T||(T=Object(en.a)(["\n    flex-direction: row;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    align-content: center;\n    padding: 10px;\n"]))),En.b.img(F||(F=Object(en.a)(["\n    width: 45px;\n    height: 45px;\n    border-radius: 50%;\n    margin-right: 1.2rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n"]))),En.b.p(N||(N=Object(en.a)(["\ntext-align: left;\nwidth: 125px;\nfont-size: 1rem;\n"]))),En.b.p(M||(M=Object(en.a)(["\ntext-align: left;\nfont-size: 0.75rem;\n"]))),En.b.div(R||(R=Object(en.a)(["\nwidth: 30%;\n@media (max-width: 565px) {\n  width: 80%;\n}\n"]))),t(648),t(649),t(785)),Hn=t(805),qn=t(804),Gn=t(807),Qn=t(806),Jn=t(808),Vn=t(1),Zn=En.b.button(z||(z=Object(en.a)(["\n  font-family: 'coder';\n  padding: 10px;\n  font-size: 1rem;\n  border-radius: 6px;\n  border: none;\n  background-color: black;\n  padding: 10px;\n  letter-spacing: 2px;\n  font-weight: bold;\n  color: white;\n  width: 270px;\n  height: 50px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px black;\n  -webkit-box-shadow: 0px 6px 0px -2px black;\n  -moz-box-shadow: 0px 6px 0px -2px black;\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n  :hover {\n    color: silver;\n  }\n  @media (max-width: 565px) {\n    width: 200px;\n    height: 50px;\n    font-size: 0.75rem;\n  }\n"]))),$n=En.b.button(P||(P=Object(en.a)(["\n  font-family: 'coder';\n  padding: 10px;\n  font-size: 1rem;\n  border-radius: 6px;\n  border: none;\n  background-color: black;\n  padding: 10px;\n  letter-spacing: 2px;\n  font-weight: bold;\n  color: white;\n  width: 270px;\n  height: 50px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px black;\n  -webkit-box-shadow: 0px 6px 0px -2px black;\n  -moz-box-shadow: 0px 6px 0px -2px black;\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n  :hover {\n    color: silver;\n  }\n  @media (max-width: 565px) {\n    width: 200px;\n    height: 50px;\n    font-size: 0.75rem;\n  }\n"]))),ne=En.b.button(D||(D=Object(en.a)(["\n  font-family: 'coder';\n  font-size: 0.75rem;\n  border-radius: 10px;\n  background-color: #F48C2C;\n  font-weight: bold;\n  color: white;\n  width: 80px;\n  height: 30px;\n  cursor: pointer;\n  letter-spacing: 2px;\n  :hover {\n    color: black;\n  }\n  @media (max-width: 565px) {\n    width: 200px;\n    height: 50px;\n    font-size: 0.75rem;\n  }\n"]))),ee=En.b.button(L||(L=Object(en.a)(["\n  padding: 10px;\n  border-radius: 10px;\n  border: none;\n  background-color: transparent;\n  padding: 10px;\n  font-weight: bold;\n  font-size: 30px;\n  color: white;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n  :hover {\n    color: silver;\n  }\n"]))),te=En.b.div(I||(I=Object(en.a)(["\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nalign-content: center;\ngap: 10%;\nwidth: 300px;\n"]))),ie=En.b.div(U||(U=Object(en.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: center;\n  margin: auto;\n  width: 70%;\n  border: 2px solid white;\n  border-radius: 40px;\n  background: linear-gradient(90deg, rgba(214, 40, 40, 1) 10%, rgba(247, 127, 0, 1) 93%);\n    @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),re=En.b.div(K||(K=Object(en.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  max-height: 80px;\n  padding: 10px;\n  background-color : #C83E4D;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n  @media (max-width: 565px) {\n    max-height: 220px;\n  }\n"]))),ae=En.b.img(X||(X=Object(en.a)(["\n  display: inline;\n  width: 200px;\n  @media (max-width: 767px) {\n    width: 150px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),oe=En.b.img(Y||(Y=Object(en.a)(["\n  width: 450px;\n  border-radius: 30px;\n  @media (min-width: 900px) {\n    width: 450px;\n  }\n  @media (min-width: 1000px) {\n    width: 450px;\n  }\n  transition: width 0.5s;\n  @media (max-width: 565px) {\n    width: 200px;\n  }\n"]))),ce=(En.b.img(W||(W=Object(en.a)(["\n  width: 100%;\n  border-radius: 5px;\n  transition: width 0.5s;\n"]))),En.b.img(B||(B=Object(en.a)(["\n  width: 220px;\n  height: 220px;\n  border-radius: 5px;\n  @media (min-width: 900px) {\n    width: 220px;\n    height: 220px;\n  }\n  @media (min-width: 1000px) {\n    width: 220px;\n    height: 220px;\n  }\n  transition: width 0.5s;\n  @media (max-width: 565px) {\n    width: 200px;\n  }\n"]))),En.b.a(H||(H=Object(en.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"])))),se=En.b.div(q||(q=Object(en.a)(["\n  text-decoration: none;\n  border-radius: 10px;\n  border: 2px solid white;\n  background-color: transparent;\n  //padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  width: 180px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px white;\n  -webkit-box-shadow: 0px 4px 0px -2px white;\n  -moz-box-shadow: 0px 4px 0px -2px white;\n  @media (max-width: 565px) {\n    margin-top: 20px;\n  \n"])));var xe,de,le,pe,be,he,je,ue,ge=function(){var n=Object(tn.b)(),e=Object(tn.c)((function(n){return n.blockchain})),t=Object(tn.c)((function(n){return n.data})),i=Object(G.useState)("Not Connected"),r=Object(nn.a)(i,2),a=r[0],o=r[1],c=Object(G.useState)(!1),s=Object(nn.a)(c,2),x=s[0],d=s[1],l=Object(G.useState)(""),p=Object(nn.a)(l,2),b=p[0],h=p[1],j=Object(G.useState)(1),u=Object(nn.a)(j,2),g=u[0],f=u[1],m=Object(G.useState)("2px solid #FFFFFF"),O=Object(nn.a)(m,2),w=O[0],y=O[1],v=Object(G.useState)("0px 0px 3px 0px #FFFFFF"),E=Object(nn.a)(v,2),S=E[0],_=E[1],C=Object(G.useState)("red"),A=Object(nn.a)(C,2),k=A[0],T=A[1],F=Q.a.useState("info"),N=Object(nn.a)(F,2),M=(N[0],N[1],Q.a.useState("topStart")),R=Object(nn.a)(M,2),z=R[0],P=(R[1],Object(Vn.jsx)(qn.a,{type:"error",header:"error",closable:!0,children:"Sorry, something went wrong please try again later."})),D=Object(Vn.jsx)(qn.a,{type:"success",header:"success",closable:!0,children:"Congrats, Mint Was successfull."}),L=Object(Vn.jsxs)(qn.a,{type:"info",header:"success",closable:!0,children:[Object(Vn.jsx)(Qn.a,{})," Minting in Progress...."]}),I=Object(G.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"Bitcoin Beanz",SYMBOL:"BB",MAX_SUPPLY:5555,FREE_SUPPLY:1500,DISPLAY_COST:.0015,GAS_LIMIT:0,MAX_PER_TX:20,MAX_PER_TX_FREE:5,MARKETPLACE:"",MARKETPLACE_LINK:"",Telegram:"",Discord:"",Twitter:"",SHOW_BACKGROUND:!1}),U=Object(nn.a)(I,2),K=U[0],X=U[1],Y=function(){""!==e.account&&null!==e.smartContract&&(n(On(e.account)),o(e.account.substring(0,4)+"..."+e.account.substring(38,42)),T("green"))},W=function(){var n=Object($.a)(Object(Z.a)().mark((function n(){var e,t;return Object(Z.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return e=n.sent,n.next=5,e.json();case 5:t=n.sent,X(t);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(G.useEffect)((function(){W()}),[]),Object(G.useEffect)((function(){Y()}),[e.account]),Object(Vn.jsx)(Sn,{children:Object(Vn.jsxs)(Tn,{flex:1,style:{backgroundColor:"var(--primary)"},image:K.SHOW_BACKGROUND?"/config/images/bg.png":null,children:[Object(Vn.jsxs)(re,{children:[Object(Vn.jsx)(te,{children:Object(Vn.jsx)("a",{href:"#",target:"_blank",children:Object(Vn.jsx)(ae,{alt:"logo",src:"/config/images/logo.png"})})}),Object(Vn.jsx)(Xn,{children:Object(Vn.jsx)(Ln,{href:"#faq",children:"FAQ"})}),Object(Vn.jsxs)(Un,{children:[Object(Vn.jsx)(Kn,{children:Object(Vn.jsx)("a",{href:K.MARKETPLACE_LINK,target:"_blank",children:Object(Vn.jsx)(In,{src:"/config/images/opensea.svg",alt:"opensea"})})}),Object(Vn.jsx)(se,{children:""!==e.account?Object(Vn.jsx)(Vn.Fragment,{children:Object(Vn.jsxs)(zn,{style:{fontSize:"1rem",color:"white"},children:[Object(Vn.jsx)(Jn.a,{color:k})," ",a]})}):null})]})]}),Object(Vn.jsx)(kn,{}),Object(Vn.jsxs)(Tn,{flex:1,jc:"center",ai:"center",children:[Object(Vn.jsxs)(Nn,{children:["Mint Your ",K.NFT_NAME]}),Object(Vn.jsx)(Wn,{style:{textAlign:"center"},children:"First 1500 Free"}),Object(Vn.jsx)(Wn,{style:{textAlign:"center"},children:"Rest 0.0015 each"})]}),Object(Vn.jsx)(Cn,{}),Object(Vn.jsxs)(ie,{flex:1,style:{padding:24},test:!0,children:[Object(Vn.jsx)(oe,{src:"/config/images/11.gif",alt:"image"}),Object(Vn.jsx)(Cn,{}),Object(Vn.jsxs)(Tn,{flex:1,jc:"center",ai:"center",children:[Number(t.totalSupply)>=K.MAX_SUPPLY?Object(Vn.jsxs)(Vn.Fragment,{children:[Object(Vn.jsx)(Mn,{style:{textAlign:"center",color:"var(--accent-text)",fontFamily:"coder"},children:"The sale has ended."}),Object(Vn.jsxs)(Pn,{style:{textAlign:"center",color:"var(--accent-text)",fontFamily:"coder"},children:["You can still find ",K.NFT_NAME," on"]}),Object(Vn.jsx)(Cn,{}),Object(Vn.jsx)(ce,{target:"_blank",href:K.MARKETPLACE_LINK,children:K.MARKETPLACE})]}):Object(Vn.jsxs)(Vn.Fragment,{children:[Number(t.totalSupply)+g<=K.FREE_SUPPLY?Object(Vn.jsxs)(Vn.Fragment,{children:[Object(Vn.jsxs)(Mn,{style:{textAlign:"center",color:"var(--accent-text)",fontFamily:"coder"},children:[t.totalSupply," | ",K.FREE_SUPPLY]}),Object(Vn.jsx)(Cn,{}),Object(Vn.jsx)(Rn,{style:{background:"white",borderRadius:5,padding:8,color:"black"},children:"Free MINT"}),Object(Vn.jsx)(An,{})]}):Object(Vn.jsxs)(Vn.Fragment,{children:[Object(Vn.jsxs)(Mn,{style:{textAlign:"center",color:"var(--accent-text)",fontFamily:"coder"},children:[t.totalSupply," | ",K.MAX_SUPPLY]}),Object(Vn.jsx)(Cn,{}),Object(Vn.jsxs)(Rn,{style:{background:"white",borderRadius:5,padding:8,color:"black"},children:["Price\u2003\u2003\u2003\u2003\u2003",K.DISPLAY_COST," ",K.NETWORK.SYMBOL]}),Object(Vn.jsx)(An,{})]}),""===e.account||null===e.smartContract?Object(Vn.jsx)(Vn.Fragment,{children:Object(Vn.jsxs)(Tn,{ai:"center",jc:"center",children:[Object(Vn.jsx)(Cn,{}),Object(Vn.jsxs)($n,{onClick:function(e){e.preventDefault(),n(yn()),Y()},children:["CONNECT Wallet",Object(Vn.jsx)("img",{style:{width:30,paddingLeft:10},src:"/config/images/mm.svg"})]}),""!==e.errorMsg?Object(Vn.jsxs)(Vn.Fragment,{children:[Object(Vn.jsx)(Cn,{}),Object(Vn.jsx)(Pn,{style:{textAlign:"center",color:"var(--accent-text)",fontFamily:"coder",fontSize:20},children:e.errorMsg})]}):null]})}):Object(Vn.jsxs)(Vn.Fragment,{children:[Object(Vn.jsxs)(Fn,{style:{border:w,boxShadow:S},children:[Object(Vn.jsx)(ee,{style:{lineHeight:.4},disabled:x?1:0,onClick:function(n){n.preventDefault(),function(){var n=g-1;n<1&&(n=1),f(n)}()},children:"-"}),Object(Vn.jsxs)(Dn,{children:["\u2002\u2002\u2002\u2002",g,"\u2002\u2002\u2002\u2002"]}),Object(Vn.jsx)(An,{}),Object(Vn.jsx)(ee,{disabled:x?1:0,onClick:function(n){n.preventDefault(),function(){var n=g+1;Number(t.totalSupply)+g<=K.FREE_SUPPLY?n>K.MAX_PER_TX_FREE&&(n=K.MAX_PER_TX_FREE):n>K.MAX_PER_TX&&(n=K.MAX_PER_TX),f(n)}()},children:"+"})]}),Object(Vn.jsx)(Cn,{}),Object(Vn.jsx)(ne,{onClick:function(n){n.preventDefault(),Number(t.totalSupply)+g<=K.FREE_SUPPLY?f(K.MAX_PER_TX_FREE):f(K.MAX_PER_TX)},children:"SetMax"}),Object(Vn.jsx)(Cn,{}),Object(Vn.jsx)(Cn,{}),Number(t.totalSupply)+g<=K.FREE_SUPPLY?Object(Vn.jsxs)(Vn.Fragment,{children:[Object(Vn.jsx)(Rn,{style:{color:"black"},children:"FREE"}),Object(Vn.jsx)(Cn,{}),Object(Vn.jsx)(_n,{})]}):Object(Vn.jsxs)(Vn.Fragment,{children:[Object(Vn.jsxs)(Rn,{style:{color:"black"},children:["Total\u2003\u2003\u2003\u2003\u2003",(K.DISPLAY_COST*g).toString().substring(0,6)," ",K.NETWORK.SYMBOL]}),Object(Vn.jsx)(Cn,{}),Object(Vn.jsx)(_n,{})]}),Object(Vn.jsx)(Tn,{ai:"center",jc:"center",fd:"column",children:Number(t.totalSupply)+g<=K.FREE_SUPPLY?Object(Vn.jsx)(Vn.Fragment,{children:Object(Vn.jsx)(Zn,{disabled:x?1:0,onClick:function(t){t.preventDefault(),function(){var t=K.GAS_LIMIT,i=String(t);console.log("Gas limit: ",i),h("Minting your ".concat(K.NFT_NAME,"...")),d(!0),y("2px solid yellow"),_("0px 0px 3px 0px yellow"),Gn.a.push(L,{placement:z}),e.smartContract.methods.freemint(g).send({gasLimit:String(i),to:K.CONTRACT_ADDRESS,from:e.account,value:0}).once("error",(function(n){console.log(n),h("Sorry, something went wrong please try again later."),d(!1),Gn.a.push(P,{placement:z}),y("2px solid red"),_("0px 0px 3px 0px red")})).then((function(t){console.log(t),h("WOW, the ".concat(K.NFT_NAME," is yours! go visit Opensea.io to view it.")),Gn.a.push(D,{placement:z}),y("2px solid green"),_("0px 0px 3px 0px green"),d(!1),n(On(e.account))}))}(),Y()},children:x?Object(Vn.jsx)(Qn.a,{speed:"fast",content:"Minting..."}):"Free MINT"})}):Object(Vn.jsx)(Vn.Fragment,{children:Object(Vn.jsx)(Zn,{disabled:x?1:0,onClick:function(t){t.preventDefault(),function(){var t=K.DISPLAY_COST*g,i=cn.a.utils.toWei(t.toString(),"ether"),r=K.GAS_LIMIT,a=String(r);console.log("Cost: ",i),console.log("Gas limit: ",a),h("Minting your ".concat(K.NFT_NAME,"...")),d(!0),y("2px solid yellow"),_("0px 0px 3px 0px yellow"),Gn.a.push(L,{placement:z}),e.smartContract.methods.mint(g).send({gasLimit:String(a),to:K.CONTRACT_ADDRESS,from:e.account,value:i}).once("error",(function(n){console.log(n),h("Sorry, something went wrong please try again later."),d(!1),Gn.a.push(P,{placement:z}),y("2px solid red"),_("0px 0px 3px 0px red")})).then((function(t){console.log(t),h("WOW, the ".concat(K.NFT_NAME," is yours! go visit Opensea.io to view it.")),Gn.a.push(D,{placement:z}),y("2px solid green"),_("0px 0px 3px 0px green"),d(!1),n(On(e.account))}))}(),Y()},children:x?Object(Vn.jsx)(Qn.a,{speed:"fast",content:"Minting..."}):"MINT"})})}),Object(Vn.jsx)(_n,{}),Number(t.totalSupply)+g<=K.FREE_SUPPLY?Object(Vn.jsxs)(Vn.Fragment,{children:[Object(Vn.jsxs)(zn,{style:{fontSize:15},children:["Max ",K.MAX_PER_TX_FREE," Per Wallet Free"]}),Object(Vn.jsx)(_n,{})]}):Object(Vn.jsxs)(Vn.Fragment,{children:[Object(Vn.jsxs)(zn,{style:{fontSize:15},children:["Max ",K.MAX_PER_TX," Per Tx"]}),Object(Vn.jsx)(_n,{})]}),Object(Vn.jsx)(zn,{style:{textAlign:"center",fontSize:"1rem"},children:b})]})]}),Object(Vn.jsx)(An,{})]}),Object(Vn.jsx)(kn,{})]}),Object(Vn.jsx)(kn,{}),Object(Vn.jsxs)(Yn,{id:"faq",children:[Object(Vn.jsx)(Nn,{children:"FAQ"}),Object(Vn.jsx)(kn,{}),Object(Vn.jsxs)(Bn.a,{style:{width:"80%",borderColor:"fb8500"},accordion:!0,bordered:!0,children:[Object(Vn.jsx)(Hn.a,{header:"What is BitcoinBeanz?",defaultExpanded:!0,children:Object(Vn.jsx)(Wn,{style:{textAlign:"left"},children:"BitcoinBeanz is a pioneering collection of 2222 unique art pieces whose ultimate goal is to be reborn on the Bitcoin blockchain (after being born on the Ethereum blockchain). Isn't that legendary? Don't worry, you haven't seen anything yet."})}),Object(Vn.jsx)(Hn.a,{header:"What is the supply?",children:Object(Vn.jsx)(Wn,{style:{textAlign:"left"},children:"Supply is 2222."})}),Object(Vn.jsx)(Hn.a,{header:"What is the mint price?",children:Object(Vn.jsx)(Wn,{style:{textAlign:"left"},children:"First 666 are free then for 0.0015 each. Max free per wallet - 5 Max per wallet - 20"})})]})]})]})})};En.b.button(xe||(xe=Object(en.a)(["\n  font-family: 'Upheaval';\n  padding: 10px;\n  font-size: 24px;\n  border-radius: 6px;\n  border: none;\n  background-color: #fff;\n  padding: 10px;\n  letter-spacing: 6px;\n  // font-weight: bold;\n  color: #7167E3;\n  width: 450px;\n  height: 50px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),En.b.button(de||(de=Object(en.a)(["\n  padding: 10px;\n  border-radius: 10px;\n  border: none;\n  background-color: #fff;\n  padding: 10px;\n  // font-weight: bold;\n  font-size: 50px;\n  color: #7167E3;\n  width: 60px;\n  height: 60px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),En.b.div(le||(le=Object(en.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  // margin: auto;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),En.b.div(pe||(pe=Object(en.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),En.b.img(be||(be=Object(en.a)(["\n  display: inline;\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),En.b.img(he||(he=Object(en.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  // border: 4px dashed var(--secondary);\n  // background-color: var(--accent);\n  // border-radius: 100%;\n  width: 300px;\n  @media (min-width: 900px) {\n    width: 350px;\n  }\n  @media (min-width: 1000px) {\n    width: 400px;\n  }\n  transition: width 0.5s;\n"]))),En.b.a(je||(je=Object(en.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"]))),En.b.div(ue||(ue=Object(en.a)(["\n  text-decoration: none;\n  border-radius: 10px;\n  border: 2px solid white;\n  background-color: #7167E3;\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  width: 250px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n"])));var fe,me=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,809)).then((function(e){var t=e.getCLS,i=e.getFID,r=e.getFCP,a=e.getLCP,o=e.getTTFB;t(n),i(n),r(n),a(n),o(n)}))},Oe=(t(794),t.p+"static/media/RenoMono.8b239c68.otf"),we=t.p+"static/media/upheavtt.e3d365ba.ttf",ye=Object(En.a)(fe||(fe=Object(en.a)(["\n    @font-face {\n        font-family: 'Upheaval';\n        src: url(",") format('truetype');\n    }\n\n    @font-face {\n        font-family: 'Renomono';\n        src: url(",") format('opentype');\n    }\n"])),we,Oe);V.a.render(Object(Vn.jsxs)(tn.a,{store:fn,children:[Object(Vn.jsx)(ye,{}),Object(Vn.jsx)(ge,{})]}),document.getElementById("root")),me()}},[[795,1,2]]]);
//# sourceMappingURL=main.39bd8249.chunk.js.map