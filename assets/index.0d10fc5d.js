var O=Object.defineProperty,D=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var k=(o,e,r)=>e in o?O(o,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[e]=r,u=(o,e)=>{for(var r in e||(e={}))I.call(e,r)&&k(o,r,e[r]);if(S)for(var r of S(e))B.call(e,r)&&k(o,r,e[r]);return o},p=(o,e)=>D(o,L(e));import{s as b,j as C,p as P,r as c,a as x,b as R,W as A,R as G,c as U}from"./vendor.43ddebdc.js";const _=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}};_();const W=b.select`
   height: 30px;
   font-size: 1.4rem;
   border: none;
   border-radius: 4px;
`,$=b.input`
   height: 30px;
   width: 11vw;
   font-size: 1.4rem;
   padding: 0.8rem;
   border: none;
   border-radius: 4px;
`,a=C.exports.jsx,l=C.exports.jsxs,T=C.exports.Fragment;function q({column:{filterValue:o,preFilteredRows:e,setFilter:r}}){const i=e.length;return a($,{value:o||"",name:"default-column-filter",onChange:t=>{r(t.target.value||"")},placeholder:`Search in ${P("record",i,!0)}...`})}const K=b.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   height: 50px;
   padding: 1.5rem;
   background-color: #f2f2f2;

   button {
      cursor: pointer;
      padding: 1rem;
      color: white;
      font-weight: bold;
      margin: 0.5rem;
      background-color: #2ec497;
      border: none;
      border-radius: 4px;

      transition: all 0.2s ease-in-out;

      :hover {
         filter: brightness(0.8);
      }
   }

   span {
      font-size: 1.7rem;
      text-align: center;
   }
`;function J({gotoPage:o,previousPage:e,nextPage:r,canPreviousPage:i,canNextPage:t,pageCount:n,pageIndex:s,pageOptions:f,page:g,preFilteredRows:m}){return l(K,{children:[a("div",{children:i&&l(T,{children:[a("button",{onClick:()=>o(0),children:"First Page"}),a("button",{onClick:()=>e(),children:"Prev"})]})}),l("span",{children:["Page"," ",l("strong",{children:[s+1," of ",f.length]})," ",l("div",{children:["Showing ",P("record",g==null?void 0:g.length,!0)," of"," ",P("record",m==null?void 0:m.length,!0)]})]}),a("div",{children:t&&l(T,{children:[a("button",{onClick:()=>r(),children:"Next"}),a("button",{onClick:()=>o(n-1),children:"Last Page"})]})})]})}const Q=b.div`
   margin: 0 auto;
   border: 1px solid #2ec497;
   border-radius: 8px;
   padding: 2rem;
   width: 80vw;

   table {
      border-collapse: collapse;
      width: 100%;

      #filter {
         margin-top: 10px;
      }

      thead {
         tr {
            height: 80px;
            background-color: #2ec497;

            color: white;
            text-align: center;
         }
      }
      tbody {
         tr {
            &:nth-child(even) {
               background-color: #f2f2f2;
            }

            &:nth-child(odd) {
               background-color: white;
            }

            th,
            td {
               height: 50px;
               text-align: center;
               padding: 1.5rem;
            }
         }
      }
   }
`;function V({columns:o,data:e}){const r=c.exports.useMemo(()=>({Filter:q}),[]),{getTableProps:i,getTableBodyProps:t,headerGroups:n,prepareRow:s,page:f,canPreviousPage:g,canNextPage:m,pageOptions:F,pageCount:H,gotoPage:j,nextPage:z,previousPage:E,preFilteredRows:M,state:{pageIndex:N}}=x.exports.useTable({columns:o,data:e,defaultColumn:r,initialState:{pageIndex:0,pageSize:7}},x.exports.useFilters,x.exports.useGlobalFilter,x.exports.usePagination);return l(Q,{children:[l("table",p(u({},i()),{children:[a("thead",{children:n.map((h,y)=>c.exports.createElement("tr",p(u({},h.getHeaderGroupProps()),{key:y}),h.headers.map((d,v)=>c.exports.createElement("th",p(u({},d.getHeaderProps()),{key:v}),d.render("Header"),a("div",{id:"filter",children:d.canFilter?d.render("Filter"):null})))))}),a("tbody",p(u({},t()),{children:f.map((h,y)=>(s(h),c.exports.createElement("tr",p(u({},h.getRowProps()),{key:y}),h.cells.map((d,v)=>c.exports.createElement("td",p(u({},d.getCellProps()),{key:v}),d.render("Cell"))))))}))]})),a(J,{gotoPage:j,previousPage:E,nextPage:z,canPreviousPage:g,canNextPage:m,pageCount:H,pageIndex:N,pageOptions:F,page:f,preFilteredRows:M})]})}function w({column:{filterValue:o,setFilter:e,preFilteredRows:r,id:i}}){const t=c.exports.useMemo(()=>{const n=new Set;return r.forEach(s=>{n.add(s.values[i])}),[...n]},[i,r]);return l(W,{value:o||"",onChange:n=>{e(n.target.value||"")},"data-testid":"select",children:[a("option",{value:"","data-testid":"select-option",children:"All"}),t.map((n,s)=>a("option",{value:n,children:n},s))]})}const X=[{Header:"Status",accessor:"status",Filter:w,filter:"exactText"},{Header:"Type",accessor:"type",Filter:w,filter:"exactText"},{Header:"Number",accessor:"number"},{Header:"Client Name",accessor:"client_name"},{Header:"Date",accessor:"date"},{Header:"Total",accessor:"total_w_vat"}],Y=R.create({baseURL:"https://henrypadua.github.io/invoicexpress-challenge/"});function Z(){const[o,e]=c.exports.useState([]);c.exports.useEffect(()=>{Y.get("./data.json").then(t=>{e(t.data.documents)})},[]);const r=c.exports.useMemo(()=>X,[]),i=c.exports.useMemo(()=>o,[o]);return a("div",{style:{marginBottom:"2rem",marginTop:"5rem"},children:a(V,{columns:r,data:i})})}const ee=A`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  body {
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
     Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;G.render(l(U.StrictMode,{children:[a(ee,{}),a(Z,{})]}),document.getElementById("root"));
