/* decimal.js v10.0.1 https://github.com/MikeMcl/decimal.js/LICENCE */
!function(n){"use strict";function e(n){var e,i,t,r=n.length-1,s="",o=n[0];if(r>0){for(s+=o,e=1;r>e;e++)t=n[e]+"",i=Un-t.length,i&&(s+=d(i)),s+=t;o=n[e],t=o+"",i=Un-t.length,i&&(s+=d(i))}else if(0===o)return"0";for(;o%10===0;)o/=10;return s+o}function i(n,e,i){if(n!==~~n||e>n||n>i)throw Error(yn+n)}function t(n,e,i,t){var r,s,o,u;for(s=n[0];s>=10;s/=10)--e;return--e<0?(e+=Un,r=0):(r=Math.ceil((e+1)/Un),e%=Un),s=Fn(10,Un-e),u=n[r]%s|0,null==t?3>e?(0==e?u=u/100|0:1==e&&(u=u/10|0),o=4>i&&99999==u||i>3&&49999==u||5e4==u||0==u):o=(4>i&&u+1==s||i>3&&u+1==s/2)&&(n[r+1]/s/100|0)==Fn(10,e-2)-1||(u==s/2||0==u)&&0==(n[r+1]/s/100|0):4>e?(0==e?u=u/1e3|0:1==e?u=u/100|0:2==e&&(u=u/10|0),o=(t||4>i)&&9999==u||!t&&i>3&&4999==u):o=((t||4>i)&&u+1==s||!t&&i>3&&u+1==s/2)&&(n[r+1]/s/1e3|0)==Fn(10,e-3)-1,o}function r(n,e,i){for(var t,r,s=[0],o=0,u=n.length;u>o;){for(r=s.length;r--;)s[r]*=e;for(s[0]+=vn.indexOf(n.charAt(o++)),t=0;t<s.length;t++)s[t]>i-1&&(void 0===s[t+1]&&(s[t+1]=0),s[t+1]+=s[t]/i|0,s[t]%=i)}return s.reverse()}function s(n,e){var i,t,r=e.d.length;32>r?(i=Math.ceil(r/3),t=Math.pow(4,-i).toString()):(i=16,t="2.3283064365386962890625e-10"),n.precision+=i,e=E(n,1,e.times(t),new n(1));for(var s=i;s--;){var o=e.times(e);e=o.times(o).minus(o).times(8).plus(1)}return n.precision-=i,e}function o(n,e,i,t){var r,s,o,u,c,f,a,h,d,l=n.constructor;n:if(null!=e){if(h=n.d,!h)return n;for(r=1,u=h[0];u>=10;u/=10)r++;if(s=e-r,0>s)s+=Un,o=e,a=h[d=0],c=a/Fn(10,r-o-1)%10|0;else if(d=Math.ceil((s+1)/Un),u=h.length,d>=u){if(!t)break n;for(;u++<=d;)h.push(0);a=c=0,r=1,s%=Un,o=s-Un+1}else{for(a=u=h[d],r=1;u>=10;u/=10)r++;s%=Un,o=s-Un+r,c=0>o?0:a/Fn(10,r-o-1)%10|0}if(t=t||0>e||void 0!==h[d+1]||(0>o?a:a%Fn(10,r-o-1)),f=4>i?(c||t)&&(0==i||i==(n.s<0?3:2)):c>5||5==c&&(4==i||t||6==i&&(s>0?o>0?a/Fn(10,r-o):0:h[d-1])%10&1||i==(n.s<0?8:7)),1>e||!h[0])return h.length=0,f?(e-=n.e+1,h[0]=Fn(10,(Un-e%Un)%Un),n.e=-e||0):h[0]=n.e=0,n;if(0==s?(h.length=d,u=1,d--):(h.length=d+1,u=Fn(10,Un-s),h[d]=o>0?(a/Fn(10,r-o)%Fn(10,o)|0)*u:0),f)for(;;){if(0==d){for(s=1,o=h[0];o>=10;o/=10)s++;for(o=h[0]+=u,u=1;o>=10;o/=10)u++;s!=u&&(n.e++,h[0]==Ln&&(h[0]=1));break}if(h[d]+=u,h[d]!=Ln)break;h[d--]=0,u=1}for(s=h.length;0===h[--s];)h.pop()}return En&&(n.e>l.maxE?(n.d=null,n.e=NaN):n.e<l.minE&&(n.e=0,n.d=[0])),n}function u(n,i,t){if(!n.isFinite())return v(n);var r,s=n.e,o=e(n.d),u=o.length;return i?(t&&(r=t-u)>0?o=o.charAt(0)+"."+o.slice(1)+d(r):u>1&&(o=o.charAt(0)+"."+o.slice(1)),o=o+(n.e<0?"e":"e+")+n.e):0>s?(o="0."+d(-s-1)+o,t&&(r=t-u)>0&&(o+=d(r))):s>=u?(o+=d(s+1-u),t&&(r=t-s-1)>0&&(o=o+"."+d(r))):((r=s+1)<u&&(o=o.slice(0,r)+"."+o.slice(r)),t&&(r=t-u)>0&&(s+1===u&&(o+="."),o+=d(r))),o}function c(n,e){var i=n[0];for(e*=Un;i>=10;i/=10)e++;return e}function f(n,e,i){if(e>kn)throw En=!0,i&&(n.precision=i),Error(qn);return o(new n(Nn),e,1,!0)}function a(n,e,i){if(e>Sn)throw Error(qn);return o(new n(bn),e,i,!0)}function h(n){var e=n.length-1,i=e*Un+1;if(e=n[e]){for(;e%10==0;e/=10)i--;for(e=n[0];e>=10;e/=10)i++}return i}function d(n){for(var e="";n--;)e+="0";return e}function l(n,e,i,t){var r,s=new n(1),o=Math.ceil(t/Un+4);for(En=!1;;){if(i%2&&(s=s.times(e),q(s.d,o)&&(r=!0)),i=Dn(i/2),0===i){i=s.d.length-1,r&&0===s.d[i]&&++s.d[i];break}e=e.times(e),q(e.d,o)}return En=!0,s}function p(n){return 1&n.d[n.d.length-1]}function g(n,e,i){for(var t,r=new n(e[0]),s=0;++s<e.length;){if(t=new n(e[s]),!t.s){r=t;break}r[i](t)&&(r=t)}return r}function w(n,i){var r,s,u,c,f,a,h,d=0,l=0,p=0,g=n.constructor,w=g.rounding,m=g.precision;if(!n.d||!n.d[0]||n.e>17)return new g(n.d?n.d[0]?n.s<0?0:1/0:1:n.s?n.s<0?0:n:NaN);for(null==i?(En=!1,h=m):h=i,a=new g(.03125);n.e>-2;)n=n.times(a),p+=5;for(s=Math.log(Fn(2,p))/Math.LN10*2+5|0,h+=s,r=c=f=new g(1),g.precision=h;;){if(c=o(c.times(n),h,1),r=r.times(++l),a=f.plus(Cn(c,r,h,1)),e(a.d).slice(0,h)===e(f.d).slice(0,h)){for(u=p;u--;)f=o(f.times(f),h,1);if(null!=i)return g.precision=m,f;if(!(3>d&&t(f.d,h-s,w,d)))return o(f,g.precision=m,w,En=!0);g.precision=h+=10,r=c=a=new g(1),l=0,d++}f=a}}function m(n,i){var r,s,u,c,a,h,d,l,p,g,w,v=1,N=10,b=n,x=b.d,E=b.constructor,M=E.rounding,y=E.precision;if(b.s<0||!x||!x[0]||!b.e&&1==x[0]&&1==x.length)return new E(x&&!x[0]?-1/0:1!=b.s?NaN:x?0:b);if(null==i?(En=!1,p=y):p=i,E.precision=p+=N,r=e(x),s=r.charAt(0),!(Math.abs(c=b.e)<15e14))return l=f(E,p+2,y).times(c+""),b=m(new E(s+"."+r.slice(1)),p-N).plus(l),E.precision=y,null==i?o(b,y,M,En=!0):b;for(;7>s&&1!=s||1==s&&r.charAt(1)>3;)b=b.times(n),r=e(b.d),s=r.charAt(0),v++;for(c=b.e,s>1?(b=new E("0."+r),c++):b=new E(s+"."+r.slice(1)),g=b,d=a=b=Cn(b.minus(1),b.plus(1),p,1),w=o(b.times(b),p,1),u=3;;){if(a=o(a.times(w),p,1),l=d.plus(Cn(a,new E(u),p,1)),e(l.d).slice(0,p)===e(d.d).slice(0,p)){if(d=d.times(2),0!==c&&(d=d.plus(f(E,p+2,y).times(c+""))),d=Cn(d,new E(v),p,1),null!=i)return E.precision=y,d;if(!t(d.d,p-N,M,h))return o(d,E.precision=y,M,En=!0);E.precision=p+=N,l=a=b=Cn(g.minus(1),g.plus(1),p,1),w=o(b.times(b),p,1),u=h=1}d=l,u+=2}}function v(n){return String(n.s*n.s/0)}function N(n,e){var i,t,r;for((i=e.indexOf("."))>-1&&(e=e.replace(".","")),(t=e.search(/e/i))>0?(0>i&&(i=t),i+=+e.slice(t+1),e=e.substring(0,t)):0>i&&(i=e.length),t=0;48===e.charCodeAt(t);t++);for(r=e.length;48===e.charCodeAt(r-1);--r);if(e=e.slice(t,r)){if(r-=t,n.e=i=i-t-1,n.d=[],t=(i+1)%Un,0>i&&(t+=Un),r>t){for(t&&n.d.push(+e.slice(0,t)),r-=Un;r>t;)n.d.push(+e.slice(t,t+=Un));e=e.slice(t),t=Un-e.length}else t-=r;for(;t--;)e+="0";n.d.push(+e),En&&(n.e>n.constructor.maxE?(n.d=null,n.e=NaN):n.e<n.constructor.minE&&(n.e=0,n.d=[0]))}else n.e=0,n.d=[0];return n}function b(n,e){var i,t,s,o,u,f,a,h,d;if("Infinity"===e||"NaN"===e)return+e||(n.s=NaN),n.e=NaN,n.d=null,n;if(Zn.test(e))i=16,e=e.toLowerCase();else if(An.test(e))i=2;else{if(!Pn.test(e))throw Error(yn+e);i=8}for(o=e.search(/p/i),o>0?(a=+e.slice(o+1),e=e.substring(2,o)):e=e.slice(2),o=e.indexOf("."),u=o>=0,t=n.constructor,u&&(e=e.replace(".",""),f=e.length,o=f-o,s=l(t,new t(i),o,2*o)),h=r(e,i,Ln),d=h.length-1,o=d;0===h[o];--o)h.pop();return 0>o?new t(0*n.s):(n.e=c(h,d),n.d=h,En=!1,u&&(n=Cn(n,s,4*f)),a&&(n=n.times(Math.abs(a)<54?Math.pow(2,a):dn.pow(2,a))),En=!0,n)}function x(n,e){var i,t=e.d.length;if(3>t)return E(n,2,e,e);i=1.4*Math.sqrt(t),i=i>16?16:0|i,e=e.times(Math.pow(5,-i)),e=E(n,2,e,e);for(var r,s=new n(5),o=new n(16),u=new n(20);i--;)r=e.times(e),e=e.times(s.plus(r.times(o.times(r).minus(u))));return e}function E(n,e,i,t,r){var s,o,u,c,f=1,a=n.precision,h=Math.ceil(a/Un);for(En=!1,c=i.times(i),u=new n(t);;){if(o=Cn(u.times(c),new n(e++*e++),a,1),u=r?t.plus(o):t.minus(o),t=Cn(o.times(c),new n(e++*e++),a,1),o=u.plus(t),void 0!==o.d[h]){for(s=h;o.d[s]===u.d[s]&&s--;);if(-1==s)break}s=u,u=t,t=o,o=s,f++}return En=!0,o.d.length=h+1,o}function M(n,e){var i,t=e.s<0,r=a(n,n.precision,1),s=r.times(.5);if(e=e.abs(),e.lte(s))return gn=t?4:1,e;if(i=e.divToInt(r),i.isZero())gn=t?3:2;else{if(e=e.minus(i.times(r)),e.lte(s))return gn=p(i)?t?2:3:t?4:1,e;gn=p(i)?t?1:4:t?3:2}return e.minus(r).abs()}function y(n,e,t,s){var o,c,f,a,h,d,l,p,g,w=n.constructor,m=void 0!==t;if(m?(i(t,1,mn),void 0===s?s=w.rounding:i(s,0,8)):(t=w.precision,s=w.rounding),n.isFinite()){for(l=u(n),f=l.indexOf("."),m?(o=2,16==e?t=4*t-3:8==e&&(t=3*t-2)):o=e,f>=0&&(l=l.replace(".",""),g=new w(1),g.e=l.length-f,g.d=r(u(g),10,o),g.e=g.d.length),p=r(l,10,o),c=h=p.length;0==p[--h];)p.pop();if(p[0]){if(0>f?c--:(n=new w(n),n.d=p,n.e=c,n=Cn(n,g,t,s,0,o),p=n.d,c=n.e,d=ln),f=p[t],a=o/2,d=d||void 0!==p[t+1],d=4>s?(void 0!==f||d)&&(0===s||s===(n.s<0?3:2)):f>a||f===a&&(4===s||d||6===s&&1&p[t-1]||s===(n.s<0?8:7)),p.length=t,d)for(;++p[--t]>o-1;)p[t]=0,t||(++c,p.unshift(1));for(h=p.length;!p[h-1];--h);for(f=0,l="";h>f;f++)l+=vn.charAt(p[f]);if(m){if(h>1)if(16==e||8==e){for(f=16==e?4:3,--h;h%f;h++)l+="0";for(p=r(l,o,e),h=p.length;!p[h-1];--h);for(f=1,l="1.";h>f;f++)l+=vn.charAt(p[f])}else l=l.charAt(0)+"."+l.slice(1);l=l+(0>c?"p":"p+")+c}else if(0>c){for(;++c;)l="0"+l;l="0."+l}else if(++c>h)for(c-=h;c--;)l+="0";else h>c&&(l=l.slice(0,c)+"."+l.slice(c))}else l=m?"0p+0":"0";l=(16==e?"0x":2==e?"0b":8==e?"0o":"")+l}else l=v(n);return n.s<0?"-"+l:l}function q(n,e){return n.length>e?(n.length=e,!0):void 0}function O(n){return new this(n).abs()}function D(n){return new this(n).acos()}function F(n){return new this(n).acosh()}function A(n,e){return new this(n).plus(e)}function Z(n){return new this(n).asin()}function P(n){return new this(n).asinh()}function R(n){return new this(n).atan()}function L(n){return new this(n).atanh()}function U(n,e){n=new this(n),e=new this(e);var i,t=this.precision,r=this.rounding,s=t+4;return n.s&&e.s?n.d||e.d?!e.d||n.isZero()?(i=e.s<0?a(this,t,r):new this(0),i.s=n.s):!n.d||e.isZero()?(i=a(this,s,1).times(.5),i.s=n.s):e.s<0?(this.precision=s,this.rounding=1,i=this.atan(Cn(n,e,s,1)),e=a(this,s,1),this.precision=t,this.rounding=r,i=n.s<0?i.minus(e):i.plus(e)):i=this.atan(Cn(n,e,s,1)):(i=a(this,s,1).times(e.s>0?.25:.75),i.s=n.s):i=new this(NaN),i}function _(n){return new this(n).cbrt()}function k(n){return o(n=new this(n),n.e+1,2)}function S(n){if(!n||"object"!=typeof n)throw Error(Mn+"Object expected");var e,i,t,r=n.defaults===!0,s=["precision",1,mn,"rounding",0,8,"toExpNeg",-wn,0,"toExpPos",0,wn,"maxE",0,wn,"minE",-wn,0,"modulo",0,9];for(e=0;e<s.length;e+=3)if(i=s[e],r&&(this[i]=xn[i]),void 0!==(t=n[i])){if(!(Dn(t)===t&&t>=s[e+1]&&t<=s[e+2]))throw Error(yn+i+": "+t);this[i]=t}if(i="crypto",r&&(this[i]=xn[i]),void 0!==(t=n[i])){if(t!==!0&&t!==!1&&0!==t&&1!==t)throw Error(yn+i+": "+t);if(t){if("undefined"==typeof crypto||!crypto||!crypto.getRandomValues&&!crypto.randomBytes)throw Error(On);this[i]=!0}else this[i]=!1}return this}function T(n){return new this(n).cos()}function C(n){return new this(n).cosh()}function I(n){function e(n){var i,t,r,s=this;if(!(s instanceof e))return new e(n);if(s.constructor=e,n instanceof e)return s.s=n.s,s.e=n.e,void(s.d=(n=n.d)?n.slice():n);if(r=typeof n,"number"===r){if(0===n)return s.s=0>1/n?-1:1,s.e=0,void(s.d=[0]);if(0>n?(n=-n,s.s=-1):s.s=1,n===~~n&&1e7>n){for(i=0,t=n;t>=10;t/=10)i++;return s.e=i,void(s.d=[n])}return 0*n!==0?(n||(s.s=NaN),s.e=NaN,void(s.d=null)):N(s,n.toString())}if("string"!==r)throw Error(yn+n);return 45===n.charCodeAt(0)?(n=n.slice(1),s.s=-1):s.s=1,Rn.test(n)?N(s,n):b(s,n)}var i,t,r;if(e.prototype=Tn,e.ROUND_UP=0,e.ROUND_DOWN=1,e.ROUND_CEIL=2,e.ROUND_FLOOR=3,e.ROUND_HALF_UP=4,e.ROUND_HALF_DOWN=5,e.ROUND_HALF_EVEN=6,e.ROUND_HALF_CEIL=7,e.ROUND_HALF_FLOOR=8,e.EUCLID=9,e.config=e.set=S,e.clone=I,e.isDecimal=$,e.abs=O,e.acos=D,e.acosh=F,e.add=A,e.asin=Z,e.asinh=P,e.atan=R,e.atanh=L,e.atan2=U,e.cbrt=_,e.ceil=k,e.cos=T,e.cosh=C,e.div=H,e.exp=B,e.floor=V,e.hypot=j,e.ln=W,e.log=J,e.log10=G,e.log2=z,e.max=K,e.min=Q,e.mod=X,e.mul=Y,e.pow=nn,e.random=en,e.round=tn,e.sign=rn,e.sin=sn,e.sinh=on,e.sqrt=un,e.sub=cn,e.tan=fn,e.tanh=an,e.trunc=hn,void 0===n&&(n={}),n&&n.defaults!==!0)for(r=["precision","rounding","toExpNeg","toExpPos","maxE","minE","modulo","crypto"],i=0;i<r.length;)n.hasOwnProperty(t=r[i++])||(n[t]=this[t]);return e.config(n),e}function H(n,e){return new this(n).div(e)}function B(n){return new this(n).exp()}function V(n){return o(n=new this(n),n.e+1,3)}function j(){var n,e,i=new this(0);for(En=!1,n=0;n<arguments.length;)if(e=new this(arguments[n++]),e.d)i.d&&(i=i.plus(e.times(e)));else{if(e.s)return En=!0,new this(1/0);i=e}return En=!0,i.sqrt()}function $(n){return n instanceof dn||n&&"[object Decimal]"===n.name||!1}function W(n){return new this(n).ln()}function J(n,e){return new this(n).log(e)}function z(n){return new this(n).log(2)}function G(n){return new this(n).log(10)}function K(){return g(this,arguments,"lt")}function Q(){return g(this,arguments,"gt")}function X(n,e){return new this(n).mod(e)}function Y(n,e){return new this(n).mul(e)}function nn(n,e){return new this(n).pow(e)}function en(n){var e,t,r,s,o=0,u=new this(1),c=[];if(void 0===n?n=this.precision:i(n,1,mn),r=Math.ceil(n/Un),this.crypto)if(crypto.getRandomValues)for(e=crypto.getRandomValues(new Uint32Array(r));r>o;)s=e[o],s>=429e7?e[o]=crypto.getRandomValues(new Uint32Array(1))[0]:c[o++]=s%1e7;else{if(!crypto.randomBytes)throw Error(On);for(e=crypto.randomBytes(r*=4);r>o;)s=e[o]+(e[o+1]<<8)+(e[o+2]<<16)+((127&e[o+3])<<24),s>=214e7?crypto.randomBytes(4).copy(e,o):(c.push(s%1e7),o+=4);o=r/4}else for(;r>o;)c[o++]=1e7*Math.random()|0;for(r=c[--o],n%=Un,r&&n&&(s=Fn(10,Un-n),c[o]=(r/s|0)*s);0===c[o];o--)c.pop();if(0>o)t=0,c=[0];else{for(t=-1;0===c[0];t-=Un)c.shift();for(r=1,s=c[0];s>=10;s/=10)r++;Un>r&&(t-=Un-r)}return u.e=t,u.d=c,u}function tn(n){return o(n=new this(n),n.e+1,this.rounding)}function rn(n){return n=new this(n),n.d?n.d[0]?n.s:0*n.s:n.s||NaN}function sn(n){return new this(n).sin()}function on(n){return new this(n).sinh()}function un(n){return new this(n).sqrt()}function cn(n,e){return new this(n).sub(e)}function fn(n){return new this(n).tan()}function an(n){return new this(n).tanh()}function hn(n){return o(n=new this(n),n.e+1,1)}var dn,ln,pn,gn,wn=9e15,mn=1e9,vn="0123456789abcdef",Nn="2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",bn="3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",xn={precision:20,rounding:4,modulo:1,toExpNeg:-7,toExpPos:21,minE:-wn,maxE:wn,crypto:!1},En=!0,Mn="[DecimalError] ",yn=Mn+"Invalid argument: ",qn=Mn+"Precision limit exceeded",On=Mn+"crypto unavailable",Dn=Math.floor,Fn=Math.pow,An=/^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,Zn=/^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,Pn=/^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,Rn=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,Ln=1e7,Un=7,_n=9007199254740991,kn=Nn.length-1,Sn=bn.length-1,Tn={name:"[object Decimal]"};Tn.absoluteValue=Tn.abs=function(){var n=new this.constructor(this);return n.s<0&&(n.s=1),o(n)},Tn.ceil=function(){return o(new this.constructor(this),this.e+1,2)},Tn.comparedTo=Tn.cmp=function(n){var e,i,t,r,s=this,o=s.d,u=(n=new s.constructor(n)).d,c=s.s,f=n.s;if(!o||!u)return c&&f?c!==f?c:o===u?0:!o^0>c?1:-1:NaN;if(!o[0]||!u[0])return o[0]?c:u[0]?-f:0;if(c!==f)return c;if(s.e!==n.e)return s.e>n.e^0>c?1:-1;for(t=o.length,r=u.length,e=0,i=r>t?t:r;i>e;++e)if(o[e]!==u[e])return o[e]>u[e]^0>c?1:-1;return t===r?0:t>r^0>c?1:-1},Tn.cosine=Tn.cos=function(){var n,e,i=this,t=i.constructor;return i.d?i.d[0]?(n=t.precision,e=t.rounding,t.precision=n+Math.max(i.e,i.sd())+Un,t.rounding=1,i=s(t,M(t,i)),t.precision=n,t.rounding=e,o(2==gn||3==gn?i.neg():i,n,e,!0)):new t(1):new t(NaN)},Tn.cubeRoot=Tn.cbrt=function(){var n,i,t,r,s,u,c,f,a,h,d=this,l=d.constructor;if(!d.isFinite()||d.isZero())return new l(d);for(En=!1,u=d.s*Math.pow(d.s*d,1/3),u&&Math.abs(u)!=1/0?r=new l(u.toString()):(t=e(d.d),n=d.e,(u=(n-t.length+1)%3)&&(t+=1==u||-2==u?"0":"00"),u=Math.pow(t,1/3),n=Dn((n+1)/3)-(n%3==(0>n?-1:2)),u==1/0?t="5e"+n:(t=u.toExponential(),t=t.slice(0,t.indexOf("e")+1)+n),r=new l(t),r.s=d.s),c=(n=l.precision)+3;;)if(f=r,a=f.times(f).times(f),h=a.plus(d),r=Cn(h.plus(d).times(f),h.plus(a),c+2,1),e(f.d).slice(0,c)===(t=e(r.d)).slice(0,c)){if(t=t.slice(c-3,c+1),"9999"!=t&&(s||"4999"!=t)){(!+t||!+t.slice(1)&&"5"==t.charAt(0))&&(o(r,n+1,1),i=!r.times(r).times(r).eq(d));break}if(!s&&(o(f,n+1,0),f.times(f).times(f).eq(d))){r=f;break}c+=4,s=1}return En=!0,o(r,n,l.rounding,i)},Tn.decimalPlaces=Tn.dp=function(){var n,e=this.d,i=NaN;if(e){if(n=e.length-1,i=(n-Dn(this.e/Un))*Un,n=e[n])for(;n%10==0;n/=10)i--;0>i&&(i=0)}return i},Tn.dividedBy=Tn.div=function(n){return Cn(this,new this.constructor(n))},Tn.dividedToIntegerBy=Tn.divToInt=function(n){var e=this,i=e.constructor;return o(Cn(e,new i(n),0,1,1),i.precision,i.rounding)},Tn.equals=Tn.eq=function(n){return 0===this.cmp(n)},Tn.floor=function(){return o(new this.constructor(this),this.e+1,3)},Tn.greaterThan=Tn.gt=function(n){return this.cmp(n)>0},Tn.greaterThanOrEqualTo=Tn.gte=function(n){var e=this.cmp(n);return 1==e||0===e},Tn.hyperbolicCosine=Tn.cosh=function(){var n,e,i,t,r,s=this,u=s.constructor,c=new u(1);if(!s.isFinite())return new u(s.s?1/0:NaN);if(s.isZero())return c;i=u.precision,t=u.rounding,u.precision=i+Math.max(s.e,s.sd())+4,u.rounding=1,r=s.d.length,32>r?(n=Math.ceil(r/3),e=Math.pow(4,-n).toString()):(n=16,e="2.3283064365386962890625e-10"),s=E(u,1,s.times(e),new u(1),!0);for(var f,a=n,h=new u(8);a--;)f=s.times(s),s=c.minus(f.times(h.minus(f.times(h))));return o(s,u.precision=i,u.rounding=t,!0)},Tn.hyperbolicSine=Tn.sinh=function(){var n,e,i,t,r=this,s=r.constructor;if(!r.isFinite()||r.isZero())return new s(r);if(e=s.precision,i=s.rounding,s.precision=e+Math.max(r.e,r.sd())+4,s.rounding=1,t=r.d.length,3>t)r=E(s,2,r,r,!0);else{n=1.4*Math.sqrt(t),n=n>16?16:0|n,r=r.times(Math.pow(5,-n)),r=E(s,2,r,r,!0);for(var u,c=new s(5),f=new s(16),a=new s(20);n--;)u=r.times(r),r=r.times(c.plus(u.times(f.times(u).plus(a))))}return s.precision=e,s.rounding=i,o(r,e,i,!0)},Tn.hyperbolicTangent=Tn.tanh=function(){var n,e,i=this,t=i.constructor;return i.isFinite()?i.isZero()?new t(i):(n=t.precision,e=t.rounding,t.precision=n+7,t.rounding=1,Cn(i.sinh(),i.cosh(),t.precision=n,t.rounding=e)):new t(i.s)},Tn.inverseCosine=Tn.acos=function(){var n,e=this,i=e.constructor,t=e.abs().cmp(1),r=i.precision,s=i.rounding;return-1!==t?0===t?e.isNeg()?a(i,r,s):new i(0):new i(NaN):e.isZero()?a(i,r+4,s).times(.5):(i.precision=r+6,i.rounding=1,e=e.asin(),n=a(i,r+4,s).times(.5),i.precision=r,i.rounding=s,n.minus(e))},Tn.inverseHyperbolicCosine=Tn.acosh=function(){var n,e,i=this,t=i.constructor;return i.lte(1)?new t(i.eq(1)?0:NaN):i.isFinite()?(n=t.precision,e=t.rounding,t.precision=n+Math.max(Math.abs(i.e),i.sd())+4,t.rounding=1,En=!1,i=i.times(i).minus(1).sqrt().plus(i),En=!0,t.precision=n,t.rounding=e,i.ln()):new t(i)},Tn.inverseHyperbolicSine=Tn.asinh=function(){var n,e,i=this,t=i.constructor;return!i.isFinite()||i.isZero()?new t(i):(n=t.precision,e=t.rounding,t.precision=n+2*Math.max(Math.abs(i.e),i.sd())+6,t.rounding=1,En=!1,i=i.times(i).plus(1).sqrt().plus(i),En=!0,t.precision=n,t.rounding=e,i.ln())},Tn.inverseHyperbolicTangent=Tn.atanh=function(){var n,e,i,t,r=this,s=r.constructor;return r.isFinite()?r.e>=0?new s(r.abs().eq(1)?r.s/0:r.isZero()?r:NaN):(n=s.precision,e=s.rounding,t=r.sd(),Math.max(t,n)<2*-r.e-1?o(new s(r),n,e,!0):(s.precision=i=t-r.e,r=Cn(r.plus(1),new s(1).minus(r),i+n,1),s.precision=n+4,s.rounding=1,r=r.ln(),s.precision=n,s.rounding=e,r.times(.5))):new s(NaN)},Tn.inverseSine=Tn.asin=function(){var n,e,i,t,r=this,s=r.constructor;return r.isZero()?new s(r):(e=r.abs().cmp(1),i=s.precision,t=s.rounding,-1!==e?0===e?(n=a(s,i+4,t).times(.5),n.s=r.s,n):new s(NaN):(s.precision=i+6,s.rounding=1,r=r.div(new s(1).minus(r.times(r)).sqrt().plus(1)).atan(),s.precision=i,s.rounding=t,r.times(2)))},Tn.inverseTangent=Tn.atan=function(){var n,e,i,t,r,s,u,c,f,h=this,d=h.constructor,l=d.precision,p=d.rounding;if(h.isFinite()){if(h.isZero())return new d(h);if(h.abs().eq(1)&&Sn>=l+4)return u=a(d,l+4,p).times(.25),u.s=h.s,u}else{if(!h.s)return new d(NaN);if(Sn>=l+4)return u=a(d,l+4,p).times(.5),u.s=h.s,u}for(d.precision=c=l+10,d.rounding=1,i=Math.min(28,c/Un+2|0),n=i;n;--n)h=h.div(h.times(h).plus(1).sqrt().plus(1));for(En=!1,e=Math.ceil(c/Un),t=1,f=h.times(h),u=new d(h),r=h;-1!==n;)if(r=r.times(f),s=u.minus(r.div(t+=2)),r=r.times(f),u=s.plus(r.div(t+=2)),void 0!==u.d[e])for(n=e;u.d[n]===s.d[n]&&n--;);return i&&(u=u.times(2<<i-1)),En=!0,o(u,d.precision=l,d.rounding=p,!0)},Tn.isFinite=function(){return!!this.d},Tn.isInteger=Tn.isInt=function(){return!!this.d&&Dn(this.e/Un)>this.d.length-2},Tn.isNaN=function(){return!this.s},Tn.isNegative=Tn.isNeg=function(){return this.s<0},Tn.isPositive=Tn.isPos=function(){return this.s>0},Tn.isZero=function(){return!!this.d&&0===this.d[0]},Tn.lessThan=Tn.lt=function(n){return this.cmp(n)<0},Tn.lessThanOrEqualTo=Tn.lte=function(n){return this.cmp(n)<1},Tn.logarithm=Tn.log=function(n){var i,r,s,u,c,a,h,d,l=this,p=l.constructor,g=p.precision,w=p.rounding,v=5;if(null==n)n=new p(10),i=!0;else{if(n=new p(n),r=n.d,n.s<0||!r||!r[0]||n.eq(1))return new p(NaN);i=n.eq(10)}if(r=l.d,l.s<0||!r||!r[0]||l.eq(1))return new p(r&&!r[0]?-1/0:1!=l.s?NaN:r?0:1/0);if(i)if(r.length>1)c=!0;else{for(u=r[0];u%10===0;)u/=10;c=1!==u}if(En=!1,h=g+v,a=m(l,h),s=i?f(p,h+10):m(n,h),d=Cn(a,s,h,1),t(d.d,u=g,w))do if(h+=10,a=m(l,h),s=i?f(p,h+10):m(n,h),d=Cn(a,s,h,1),!c){+e(d.d).slice(u+1,u+15)+1==1e14&&(d=o(d,g+1,0));break}while(t(d.d,u+=10,w));return En=!0,o(d,g,w)},Tn.minus=Tn.sub=function(n){var e,i,t,r,s,u,f,a,h,d,l,p,g=this,w=g.constructor;if(n=new w(n),!g.d||!n.d)return g.s&&n.s?g.d?n.s=-n.s:n=new w(n.d||g.s!==n.s?g:NaN):n=new w(NaN),n;if(g.s!=n.s)return n.s=-n.s,g.plus(n);if(h=g.d,p=n.d,f=w.precision,a=w.rounding,!h[0]||!p[0]){if(p[0])n.s=-n.s;else{if(!h[0])return new w(3===a?-0:0);n=new w(g)}return En?o(n,f,a):n}if(i=Dn(n.e/Un),d=Dn(g.e/Un),h=h.slice(),s=d-i){for(l=0>s,l?(e=h,s=-s,u=p.length):(e=p,i=d,u=h.length),t=Math.max(Math.ceil(f/Un),u)+2,s>t&&(s=t,e.length=1),e.reverse(),t=s;t--;)e.push(0);e.reverse()}else{for(t=h.length,u=p.length,l=u>t,l&&(u=t),t=0;u>t;t++)if(h[t]!=p[t]){l=h[t]<p[t];break}s=0}for(l&&(e=h,h=p,p=e,n.s=-n.s),u=h.length,t=p.length-u;t>0;--t)h[u++]=0;for(t=p.length;t>s;){if(h[--t]<p[t]){for(r=t;r&&0===h[--r];)h[r]=Ln-1;--h[r],h[t]+=Ln}h[t]-=p[t]}for(;0===h[--u];)h.pop();for(;0===h[0];h.shift())--i;return h[0]?(n.d=h,n.e=c(h,i),En?o(n,f,a):n):new w(3===a?-0:0)},Tn.modulo=Tn.mod=function(n){var e,i=this,t=i.constructor;return n=new t(n),!i.d||!n.s||n.d&&!n.d[0]?new t(NaN):!n.d||i.d&&!i.d[0]?o(new t(i),t.precision,t.rounding):(En=!1,9==t.modulo?(e=Cn(i,n.abs(),0,3,1),e.s*=n.s):e=Cn(i,n,0,t.modulo,1),e=e.times(n),En=!0,i.minus(e))},Tn.naturalExponential=Tn.exp=function(){return w(this)},Tn.naturalLogarithm=Tn.ln=function(){return m(this)},Tn.negated=Tn.neg=function(){var n=new this.constructor(this);return n.s=-n.s,o(n)},Tn.plus=Tn.add=function(n){var e,i,t,r,s,u,f,a,h,d,l=this,p=l.constructor;if(n=new p(n),!l.d||!n.d)return l.s&&n.s?l.d||(n=new p(n.d||l.s===n.s?l:NaN)):n=new p(NaN),n;if(l.s!=n.s)return n.s=-n.s,l.minus(n);if(h=l.d,d=n.d,f=p.precision,a=p.rounding,!h[0]||!d[0])return d[0]||(n=new p(l)),En?o(n,f,a):n;if(s=Dn(l.e/Un),t=Dn(n.e/Un),h=h.slice(),r=s-t){for(0>r?(i=h,r=-r,u=d.length):(i=d,t=s,u=h.length),s=Math.ceil(f/Un),u=s>u?s+1:u+1,r>u&&(r=u,i.length=1),i.reverse();r--;)i.push(0);i.reverse()}for(u=h.length,r=d.length,0>u-r&&(r=u,i=d,d=h,h=i),e=0;r;)e=(h[--r]=h[r]+d[r]+e)/Ln|0,h[r]%=Ln;for(e&&(h.unshift(e),++t),u=h.length;0==h[--u];)h.pop();return n.d=h,n.e=c(h,t),En?o(n,f,a):n},Tn.precision=Tn.sd=function(n){var e,i=this;if(void 0!==n&&n!==!!n&&1!==n&&0!==n)throw Error(yn+n);return i.d?(e=h(i.d),n&&i.e+1>e&&(e=i.e+1)):e=NaN,e},Tn.round=function(){var n=this,e=n.constructor;return o(new e(n),n.e+1,e.rounding)},Tn.sine=Tn.sin=function(){var n,e,i=this,t=i.constructor;return i.isFinite()?i.isZero()?new t(i):(n=t.precision,e=t.rounding,t.precision=n+Math.max(i.e,i.sd())+Un,t.rounding=1,i=x(t,M(t,i)),t.precision=n,t.rounding=e,o(gn>2?i.neg():i,n,e,!0)):new t(NaN)},Tn.squareRoot=Tn.sqrt=function(){var n,i,t,r,s,u,c=this,f=c.d,a=c.e,h=c.s,d=c.constructor;if(1!==h||!f||!f[0])return new d(!h||0>h&&(!f||f[0])?NaN:f?c:1/0);for(En=!1,h=Math.sqrt(+c),0==h||h==1/0?(i=e(f),(i.length+a)%2==0&&(i+="0"),h=Math.sqrt(i),a=Dn((a+1)/2)-(0>a||a%2),h==1/0?i="1e"+a:(i=h.toExponential(),i=i.slice(0,i.indexOf("e")+1)+a),r=new d(i)):r=new d(h.toString()),t=(a=d.precision)+3;;)if(u=r,r=u.plus(Cn(c,u,t+2,1)).times(.5),e(u.d).slice(0,t)===(i=e(r.d)).slice(0,t)){if(i=i.slice(t-3,t+1),"9999"!=i&&(s||"4999"!=i)){(!+i||!+i.slice(1)&&"5"==i.charAt(0))&&(o(r,a+1,1),n=!r.times(r).eq(c));break}if(!s&&(o(u,a+1,0),u.times(u).eq(c))){r=u;break}t+=4,s=1}return En=!0,o(r,a,d.rounding,n)},Tn.tangent=Tn.tan=function(){var n,e,i=this,t=i.constructor;return i.isFinite()?i.isZero()?new t(i):(n=t.precision,e=t.rounding,t.precision=n+10,t.rounding=1,i=i.sin(),i.s=1,i=Cn(i,new t(1).minus(i.times(i)).sqrt(),n+10,0),t.precision=n,t.rounding=e,o(2==gn||4==gn?i.neg():i,n,e,!0)):new t(NaN)},Tn.times=Tn.mul=function(n){var e,i,t,r,s,u,f,a,h,d=this,l=d.constructor,p=d.d,g=(n=new l(n)).d;if(n.s*=d.s,!(p&&p[0]&&g&&g[0]))return new l(!n.s||p&&!p[0]&&!g||g&&!g[0]&&!p?NaN:p&&g?0*n.s:n.s/0);for(i=Dn(d.e/Un)+Dn(n.e/Un),a=p.length,h=g.length,h>a&&(s=p,p=g,g=s,u=a,a=h,h=u),s=[],u=a+h,t=u;t--;)s.push(0);for(t=h;--t>=0;){for(e=0,r=a+t;r>t;)f=s[r]+g[t]*p[r-t-1]+e,s[r--]=f%Ln|0,e=f/Ln|0;s[r]=(s[r]+e)%Ln|0}for(;!s[--u];)s.pop();return e?++i:s.shift(),n.d=s,n.e=c(s,i),En?o(n,l.precision,l.rounding):n},Tn.toBinary=function(n,e){return y(this,2,n,e)},Tn.toDecimalPlaces=Tn.toDP=function(n,e){var t=this,r=t.constructor;return t=new r(t),void 0===n?t:(i(n,0,mn),void 0===e?e=r.rounding:i(e,0,8),o(t,n+t.e+1,e))},Tn.toExponential=function(n,e){var t,r=this,s=r.constructor;return void 0===n?t=u(r,!0):(i(n,0,mn),void 0===e?e=s.rounding:i(e,0,8),r=o(new s(r),n+1,e),t=u(r,!0,n+1)),r.isNeg()&&!r.isZero()?"-"+t:t},Tn.toFixed=function(n,e){var t,r,s=this,c=s.constructor;return void 0===n?t=u(s):(i(n,0,mn),void 0===e?e=c.rounding:i(e,0,8),r=o(new c(s),n+s.e+1,e),t=u(r,!1,n+r.e+1)),s.isNeg()&&!s.isZero()?"-"+t:t},Tn.toFraction=function(n){var i,t,r,s,o,u,c,f,a,d,l,p,g=this,w=g.d,m=g.constructor;if(!w)return new m(g);if(a=t=new m(1),r=f=new m(0),i=new m(r),o=i.e=h(w)-g.e-1,u=o%Un,i.d[0]=Fn(10,0>u?Un+u:u),null==n)n=o>0?i:a;else{if(c=new m(n),!c.isInt()||c.lt(a))throw Error(yn+c);n=c.gt(i)?o>0?i:a:c}for(En=!1,c=new m(e(w)),d=m.precision,m.precision=o=w.length*Un*2;l=Cn(c,i,0,1,1),s=t.plus(l.times(r)),1!=s.cmp(n);)t=r,r=s,s=a,a=f.plus(l.times(s)),f=s,s=i,i=c.minus(l.times(s)),c=s;return s=Cn(n.minus(t),r,0,1,1),f=f.plus(s.times(a)),t=t.plus(s.times(r)),f.s=a.s=g.s,p=Cn(a,r,o,1).minus(g).abs().cmp(Cn(f,t,o,1).minus(g).abs())<1?[a,r]:[f,t],m.precision=d,En=!0,p},Tn.toHexadecimal=Tn.toHex=function(n,e){return y(this,16,n,e)},Tn.toNearest=function(n,e){var t=this,r=t.constructor;if(t=new r(t),null==n){if(!t.d)return t;n=new r(1),e=r.rounding}else{if(n=new r(n),void 0===e?e=r.rounding:i(e,0,8),!t.d)return n.s?t:n;if(!n.d)return n.s&&(n.s=t.s),n}return n.d[0]?(En=!1,t=Cn(t,n,0,e,1).times(n),En=!0,o(t)):(n.s=t.s,t=n),t},Tn.toNumber=function(){return+this},Tn.toOctal=function(n,e){return y(this,8,n,e)},Tn.toPower=Tn.pow=function(n){var i,r,s,u,c,f,a=this,h=a.constructor,d=+(n=new h(n));if(!(a.d&&n.d&&a.d[0]&&n.d[0]))return new h(Fn(+a,d));if(a=new h(a),a.eq(1))return a;if(s=h.precision,c=h.rounding,n.eq(1))return o(a,s,c);if(i=Dn(n.e/Un),i>=n.d.length-1&&(r=0>d?-d:d)<=_n)return u=l(h,a,r,s),n.s<0?new h(1).div(u):o(u,s,c);if(f=a.s,0>f){if(i<n.d.length-1)return new h(NaN);if(0==(1&n.d[i])&&(f=1),0==a.e&&1==a.d[0]&&1==a.d.length)return a.s=f,a}return r=Fn(+a,d),i=0!=r&&isFinite(r)?new h(r+"").e:Dn(d*(Math.log("0."+e(a.d))/Math.LN10+a.e+1)),i>h.maxE+1||i<h.minE-1?new h(i>0?f/0:0):(En=!1,h.rounding=a.s=1,r=Math.min(12,(i+"").length),u=w(n.times(m(a,s+r)),s),u.d&&(u=o(u,s+5,1),t(u.d,s,c)&&(i=s+10,u=o(w(n.times(m(a,i+r)),i),i+5,1),+e(u.d).slice(s+1,s+15)+1==1e14&&(u=o(u,s+1,0)))),u.s=f,En=!0,h.rounding=c,o(u,s,c))},Tn.toPrecision=function(n,e){var t,r=this,s=r.constructor;return void 0===n?t=u(r,r.e<=s.toExpNeg||r.e>=s.toExpPos):(i(n,1,mn),void 0===e?e=s.rounding:i(e,0,8),r=o(new s(r),n,e),t=u(r,n<=r.e||r.e<=s.toExpNeg,n)),r.isNeg()&&!r.isZero()?"-"+t:t},Tn.toSignificantDigits=Tn.toSD=function(n,e){var t=this,r=t.constructor;return void 0===n?(n=r.precision,e=r.rounding):(i(n,1,mn),void 0===e?e=r.rounding:i(e,0,8)),o(new r(t),n,e)},Tn.toString=function(){var n=this,e=n.constructor,i=u(n,n.e<=e.toExpNeg||n.e>=e.toExpPos);return n.isNeg()&&!n.isZero()?"-"+i:i},Tn.truncated=Tn.trunc=function(){return o(new this.constructor(this),this.e+1,1)},Tn.valueOf=Tn.toJSON=function(){var n=this,e=n.constructor,i=u(n,n.e<=e.toExpNeg||n.e>=e.toExpPos);return n.isNeg()?"-"+i:i};var Cn=function(){function n(n,e,i){var t,r=0,s=n.length;for(n=n.slice();s--;)t=n[s]*e+r,n[s]=t%i|0,r=t/i|0;return r&&n.unshift(r),n}function e(n,e,i,t){var r,s;if(i!=t)s=i>t?1:-1;else for(r=s=0;i>r;r++)if(n[r]!=e[r]){s=n[r]>e[r]?1:-1;break}return s}function i(n,e,i,t){for(var r=0;i--;)n[i]-=r,r=n[i]<e[i]?1:0,n[i]=r*t+n[i]-e[i];for(;!n[0]&&n.length>1;)n.shift()}return function(t,r,s,u,c,f){var a,h,d,l,p,g,w,m,v,N,b,x,E,M,y,q,O,D,F,A,Z=t.constructor,P=t.s==r.s?1:-1,R=t.d,L=r.d;if(!(R&&R[0]&&L&&L[0]))return new Z(t.s&&r.s&&(R?!L||R[0]!=L[0]:L)?R&&0==R[0]||!L?0*P:P/0:NaN);for(f?(p=1,h=t.e-r.e):(f=Ln,p=Un,h=Dn(t.e/p)-Dn(r.e/p)),F=L.length,O=R.length,v=new Z(P),N=v.d=[],d=0;L[d]==(R[d]||0);d++);if(L[d]>(R[d]||0)&&h--,null==s?(M=s=Z.precision,u=Z.rounding):M=c?s+(t.e-r.e)+1:s,0>M)N.push(1),g=!0;else{if(M=M/p+2|0,d=0,1==F){for(l=0,L=L[0],M++;(O>d||l)&&M--;d++)y=l*f+(R[d]||0),N[d]=y/L|0,l=y%L|0;g=l||O>d}else{for(l=f/(L[0]+1)|0,l>1&&(L=n(L,l,f),R=n(R,l,f),F=L.length,O=R.length),q=F,b=R.slice(0,F),x=b.length;F>x;)b[x++]=0;A=L.slice(),A.unshift(0),D=L[0],L[1]>=f/2&&++D;do l=0,a=e(L,b,F,x),0>a?(E=b[0],F!=x&&(E=E*f+(b[1]||0)),l=E/D|0,l>1?(l>=f&&(l=f-1),w=n(L,l,f),m=w.length,x=b.length,a=e(w,b,m,x),1==a&&(l--,i(w,m>F?A:L,m,f))):(0==l&&(a=l=1),w=L.slice()),m=w.length,x>m&&w.unshift(0),i(b,w,x,f),-1==a&&(x=b.length,a=e(L,b,F,x),1>a&&(l++,i(b,x>F?A:L,x,f))),x=b.length):0===a&&(l++,b=[0]),N[d++]=l,a&&b[0]?b[x++]=R[q]||0:(b=[R[q]],x=1);while((q++<O||void 0!==b[0])&&M--);g=void 0!==b[0]}N[0]||N.shift()}if(1==p)v.e=h,ln=g;else{for(d=1,l=N[0];l>=10;l/=10)d++;v.e=d+h*p-1,o(v,c?s+v.e+1:s,u,g)}return v}}();dn=I(xn),dn["default"]=dn.Decimal=dn,Nn=new dn(Nn),bn=new dn(bn),"function"==typeof define&&define.amd?define(function(){return dn}):"undefined"!=typeof module&&module.exports?module.exports=dn:(n||(n="undefined"!=typeof self&&self&&self.self==self?self:Function("return this")()),pn=n.Decimal,dn.noConflict=function(){return n.Decimal=pn,dn},n.Decimal=dn)}(this);
//# sourceMappingURL=doc/decimal.js.map
