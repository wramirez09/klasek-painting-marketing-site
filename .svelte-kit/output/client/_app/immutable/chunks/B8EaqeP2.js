import{S as g,i as x,s as v,c as w,d as c,t as y,b as k,u as C,g as S,e as j,p,f as d,J as m,v as z,j as E,B as u,K as _,l as H,M as q}from"./KUc_ZfUX.js";import"./IHki7fMi.js";function h(o){let e,l=`.extend-heading-ribbon > * {

			position: relative;

			&::before {

						position: absolute
			}

			&::before {

						top: 0px
			}

			&::before {

						right: 100%
			}

			&::before {

						height: 100%
			}

			&::before {

						width: 100vw
			}

			&::before {

						--tw-bg-opacity: 1;

						background-color: hsl(var(--primary-dark) / var(--tw-bg-opacity, 1))
			}

			&::before {

						--tw-content: '';

						content: var(--tw-content)
			}
}`;return{c(){e=_("style"),e.textContent=l,this.h()},l(r){e=m(r,"STYLE",{lang:!0,"data-svelte-h":!0}),q(e)!=="svelte-152jmem"&&(e.textContent=l),this.h()},h(){p(e,"lang","postcss")},m(r,s){d(r,e,s)},d(r){r&&c(e)}}}function A(o){let e,l,r,s,f;const b=o[3].default,n=w(b,o,o[2],null);let a=o[1]&&h();return{c(){e=_("div"),n&&n.c(),r=H(),a&&a.c(),s=u(),this.h()},l(t){e=m(t,"DIV",{class:!0});var i=z(e);n&&n.l(i),i.forEach(c),r=E(t),a&&a.l(t),s=u(),this.h()},h(){p(e,"class",l=`
    ${o[0]}
    ${o[1]?"extend-heading-ribbon":"sm:pl-6"}
    size-fit  text-white [&>*]:!text-white font-semibold bg-primary-dark px-1 [&>*]:py-1 relative w-[calc(100%-25px)]
    before:absolute before:content-[''] before:h-full before:w-[25px] before:left-[calc(100%-4px)] before:top-0 before:ribbon-right before:bg-primary-dark before:[--r:1rem]
    after:lg:hidden after:absolute after:content-[''] after:h-full after:w-[400px] after:right-[calc(100%-4px)] after:top-0 after:bg-primary-dark
`)},m(t,i){d(t,e,i),n&&n.m(e,null),d(t,r,i),a&&a.m(t,i),d(t,s,i),f=!0},p(t,[i]){n&&n.p&&(!f||i&4)&&C(n,b,t,t[2],f?j(b,t[2],i,null):S(t[2]),null),(!f||i&3&&l!==(l=`
    ${t[0]}
    ${t[1]?"extend-heading-ribbon":"sm:pl-6"}
    size-fit  text-white [&>*]:!text-white font-semibold bg-primary-dark px-1 [&>*]:py-1 relative w-[calc(100%-25px)]
    before:absolute before:content-[''] before:h-full before:w-[25px] before:left-[calc(100%-4px)] before:top-0 before:ribbon-right before:bg-primary-dark before:[--r:1rem]
    after:lg:hidden after:absolute after:content-[''] after:h-full after:w-[400px] after:right-[calc(100%-4px)] after:top-0 after:bg-primary-dark
`))&&p(e,"class",l),t[1]?a||(a=h(),a.c(),a.m(s.parentNode,s)):a&&(a.d(1),a=null)},i(t){f||(k(n,t),f=!0)},o(t){y(n,t),f=!1},d(t){t&&(c(e),c(r),c(s)),n&&n.d(t),a&&a.d(t)}}}function B(o,e,l){let{$$slots:r={},$$scope:s}=e,{class:f=""}=e,{extend:b=!1}=e;return o.$$set=n=>{"class"in n&&l(0,f=n.class),"extend"in n&&l(1,b=n.extend),"$$scope"in n&&l(2,s=n.$$scope)},[f,b,s,r]}class J extends g{constructor(e){super(),x(this,e,B,A,v,{class:0,extend:1})}}export{J as H};
