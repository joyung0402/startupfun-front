import{m as X,a as Y,b as $,c as ee,d as ae,e as te,f as oe,u as le,p as re,g as se,h as de,i as ue,j as ne,k as ie,l as ce,n as S,o as V,q as x,r as w}from"./VDataTable-B_uX6eXp.js";import{p as me,v as ge,c as m,D as l,aq as ve,L as pe,x as be,d as o,F as B,Z as g}from"./index-fW4Q9JnC.js";import{V as Pe}from"./VDivider-fJtA7CSD.js";const he=me({itemsLength:{type:[Number,String],required:!0},...X(),...Y(),...$()},"VDataTableServer"),Te=ge()({name:"VDataTableServer",props:he(),emits:{"update:modelValue":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:expanded":e=>!0,"update:groupBy":e=>!0},setup(e,I){let{attrs:k,slots:a}=I;const{groupBy:d}=ee(e),{sortBy:r,multiSort:F,mustSort:G}=ae(e),{page:u,itemsPerPage:i}=te(e),R=m(()=>parseInt(e.itemsLength,10)),{columns:v,headers:E}=oe(e,{groupBy:d,showSelect:l(e,"showSelect"),showExpand:l(e,"showExpand")}),{items:n}=le(e,v),{toggleSort:p}=re({sortBy:r,multiSort:F,mustSort:G,page:u}),{opened:H,isGroupOpen:L,toggleGroup:N,extractRows:_}=se({groupBy:d,sortBy:r}),{pageCount:q,setItemsPerPage:C}=de({page:u,itemsPerPage:i,itemsLength:R}),{flatItems:b}=ue(n,d,H),{isSelected:O,select:j,selectAll:A,toggleSelect:W,someSelected:Z,allSelected:z}=ne(e,{allItems:n,currentPage:n}),{isExpanded:J,toggleExpand:K}=ie(e),P=m(()=>_(n.value));ce({page:u,itemsPerPage:i,sortBy:r,groupBy:d,search:l(e,"search")}),ve("v-data-table",{toggleSort:p,sortBy:r}),pe({VDataTableRows:{hideNoData:l(e,"hideNoData"),noDataText:l(e,"noDataText"),loading:l(e,"loading"),loadingText:l(e,"loadingText")}});const t=m(()=>({page:u.value,itemsPerPage:i.value,sortBy:r.value,pageCount:q.value,toggleSort:p,setItemsPerPage:C,someSelected:Z.value,allSelected:z.value,isSelected:O,select:j,selectAll:A,toggleSelect:W,isExpanded:J,toggleExpand:K,isGroupOpen:L,toggleGroup:N,items:P.value.map(c=>c.raw),internalItems:P.value,groupedItems:b.value,columns:v.value,headers:E.value}));be(()=>{const c=S.filterProps(e),M=V.filterProps(e),Q=x.filterProps(e),U=w.filterProps(e);return o(w,g({class:["v-data-table",{"v-data-table--loading":e.loading},e.class],style:e.style},U),{top:()=>{var s;return(s=a.top)==null?void 0:s.call(a,t.value)},default:()=>{var s,h,y,D,f,T;return a.default?a.default(t.value):o(B,null,[(s=a.colgroup)==null?void 0:s.call(a,t.value),!e.hideDefaultHeader&&o("thead",{key:"thead",class:"v-data-table__thead",role:"rowgroup"},[o(V,g(M,{sticky:e.fixedHeader}),a)]),(h=a.thead)==null?void 0:h.call(a,t.value),!e.hideDefaultBody&&o("tbody",{class:"v-data-table__tbody",role:"rowgroup"},[(y=a["body.prepend"])==null?void 0:y.call(a,t.value),a.body?a.body(t.value):o(x,g(k,Q,{items:b.value}),a),(D=a["body.append"])==null?void 0:D.call(a,t.value)]),(f=a.tbody)==null?void 0:f.call(a,t.value),(T=a.tfoot)==null?void 0:T.call(a,t.value)])},bottom:()=>a.bottom?a.bottom(t.value):!e.hideDefaultFooter&&o(B,null,[o(Pe,null,null),o(S,c,{prepend:a["footer.prepend"]})])})})}});export{Te as V};
