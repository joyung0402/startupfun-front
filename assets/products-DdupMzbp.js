import{i as Q,k as u,o as W,b as X,d as l,w as r,V,l as M,aE as L,aF as Y,M as D,aG as Z,e as o,au as _,aB as ee,t as ae,av as le,aC as te,aH as re,F as oe,n as se,aD as ne,r as ie}from"./index-nkHSaf_L.js";import{c as ue,a as U,u as de,b as B}from"./vee-validate.esm-Dd1iWdy4.js";import{b as N}from"./route-block-B_A1xBdJ.js";import{V as me}from"./VRow-DRLisv2o.js";import{V as z}from"./VCol-DruFO5Vq.js";import{V as pe}from"./VDataTableServer-DyG1hXC2.js";import{V as ve}from"./VContainer-Bc3YJ7xb.js";import{V as ge}from"./VForm-D07CZAPC.js";import{V as ce}from"./filter-DIgscWm6.js";import{V as h}from"./VTextarea-B8ozgdez.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./VDataTable-BYWFI1qs.js";import"./VPagination-C9_QRJHJ.js";import"./VDivider-B8kGubJ_.js";import"./VList-CgYOos26.js";import"./ssrBoot-D7XyUCNf.js";const fe=se("h1",{class:"text-center"},"商家管理",-1),Ve={__name:"products",setup(be){const{apiAuth:b}=ne(),f=Q(),i=u({open:!1,id:""}),T=t=>{t?(i.value.id=t._id,y.value.value=t.name,w.value.value=t.service,k.value.value=t.description,x.value.value=t.category):i.value.id="",i.value.open=!0},I=()=>{i.value.open=!1,K(),p.value=[],v.value=[],g.value=[]},q=["找設計","找餐具","找家具","找設備","找原料","其他服務"],E=ue({name:U().required("商家名稱必填"),service:U().required("服務項目必填"),description:U().required("商家說明必填"),category:U().required("商家分類必填").test("isCategory","商家分類錯誤",t=>q.includes(t))}),{handleSubmit:H,isSubmitting:P,resetForm:K}=de({validationSchema:E,initialValues:{name:"",service:"",description:"",category:""}}),y=B("name"),w=B("service"),k=B("description"),x=B("category"),p=u([]),v=u([]),g=u([]),G=H(async t=>{var a,n,e,c,d;if(!((a=p.value[0])!=null&&a.error||(n=v.value[0])!=null&&n.error||(e=g.value[0])!=null&&e.error)&&!(i.value.id.length===0&&p.value.length<1&&v.value.length<1&&g.value.length<1))try{const s=new FormData;s.append("name",t.name),s.append("service",t.service),s.append("description",t.description),s.append("category",t.category),p.value.length>0&&s.append("image1",p.value[0].file),v.value.length>0&&s.append("image2",v.value[0].file),g.value.length>0&&s.append("image3",g.value[0].file),i.value.id===""?await b.post("/product",s):await b.patch("/product/"+i.value.id,s),f({text:i.value.id===""?"新增成功":"編輯成功",snackbarProps:{color:"green"}}),I(),m(!0)}catch(s){f({text:((d=(c=s==null?void 0:s.response)==null?void 0:c.data)==null?void 0:d.message)||"發生錯誤",snackbarProps:{color:"red"}})}}),S=u(10),C=u([{key:"createdAt",order:"desc"}]),R=u(1),$=u([]),O=[{title:"主圖",align:"center",sortable:!1,key:"image1"},{title:"名稱",align:"center",sortable:!0,key:"name"},{title:"分類",align:"center",sortable:!0,key:"category"},{title:"主視覺",align:"center",sortable:!1,key:"image2"},{title:"服務項目-圖",align:"center",sortable:!1,key:"image3"},{title:"編輯",align:"center",sortable:!1,key:"action"}],A=u(!1),j=u(0),F=u(""),m=async t=>{var a,n,e,c;A.value=!0;try{const{data:d}=await b.get("/product/all",{params:{page:R.value,itemsPerPage:S.value,sortBy:((a=C.value[0])==null?void 0:a.key)||"createdAt",sortOrder:((n=C.value[0])==null?void 0:n.order)||"desc",search:F.value}});$.value.splice(0,$.value.length,...d.result.data),j.value=d.result.total}catch(d){f({text:((c=(e=d==null?void 0:d.response)==null?void 0:e.data)==null?void 0:c.message)||"發生錯誤",snackbarProps:{color:"red"}})}A.value=!1};m();const J=async t=>{var a,n;try{await b.delete("/product/"+t),f({text:"刪除成功",snackbarProps:{color:"green"}}),m(!0)}catch(e){f({text:((n=(a=e==null?void 0:e.response)==null?void 0:a.data)==null?void 0:n.message)||"發生錯誤",snackbarProps:{color:"red"}})}};return(t,a)=>{const n=ie("vue-file-agent");return W(),X(oe,null,[l(ve,null,{default:r(()=>[l(me,null,{default:r(()=>[l(z,{cols:"12"},{default:r(()=>[fe]),_:1}),l(z,{cols:"12"},{default:r(()=>[l(V,{color:"green",onClick:a[0]||(a[0]=e=>T(null))},{default:r(()=>[M("新增商家")]),_:1})]),_:1}),l(z,{cols:"12"},{default:r(()=>[l(pe,{"items-per-page":S.value,"onUpdate:itemsPerPage":[a[4]||(a[4]=e=>S.value=e),a[7]||(a[7]=e=>m(!1))],"sort-by":C.value,"onUpdate:sortBy":[a[5]||(a[5]=e=>C.value=e),a[8]||(a[8]=e=>m(!1))],page:R.value,"onUpdate:page":[a[6]||(a[6]=e=>R.value=e),a[9]||(a[9]=e=>m(!1))],items:$.value,headers:O,loading:A.value,"items-length":j.value,search:F.value,hover:""},{top:r(()=>[l(L,{label:"搜尋",modelValue:F.value,"onUpdate:modelValue":a[1]||(a[1]=e=>F.value=e),"append-icon":"mdi-magnify",onClickAppend:a[2]||(a[2]=e=>m(!0)),onKeydown:a[3]||(a[3]=Y(e=>m(!0),["enter"]))},null,8,["modelValue"])]),"item.image1":r(({value:e})=>[l(D,{src:e||"default-image-path.png",height:"50px",contain:""},null,8,["src"])]),"item.image2":r(({value:e})=>[l(D,{src:e||"default-image-path.png",height:"50px",contain:""},null,8,["src"])]),"item.image3":r(({value:e})=>[l(D,{src:e||"default-image-path.png",height:"50px",contain:""},null,8,["src"])]),"item.action":r(({item:e})=>[l(V,{icon:"mdi-pencil",variant:"text",color:"blue",onClick:c=>T(e)},null,8,["onClick"]),l(V,{variant:"text",color:"red",icon:"mdi-delete",onClick:c=>J(e._id)},null,8,["onClick"])]),_:1},8,["items-per-page","sort-by","page","items","loading","items-length","search"])]),_:1})]),_:1})]),_:1}),l(re,{modelValue:i.value.open,"onUpdate:modelValue":a[20]||(a[20]=e=>i.value.open=e),persistent:"",width:"500"},{default:r(()=>[l(ge,{onSubmit:Z(o(G),["prevent"]),disabled:o(P)},{default:r(()=>[l(_,null,{default:r(()=>[l(ee,null,{default:r(()=>[M(ae(i.value.id?"編輯商品":"新增商品"),1)]),_:1}),l(le,null,{default:r(()=>[l(L,{label:"名稱",modelValue:o(y).value.value,"onUpdate:modelValue":a[10]||(a[10]=e=>o(y).value.value=e),"error-messages":o(y).errorMessage.value},null,8,["modelValue","error-messages"]),l(ce,{label:"分類",items:q,modelValue:o(x).value.value,"onUpdate:modelValue":a[11]||(a[11]=e=>o(x).value.value=e),"error-messages":o(x).errorMessage.value},null,8,["modelValue","error-messages"]),l(h,{label:"服務項目",modelValue:o(w).value.value,"onUpdate:modelValue":a[12]||(a[12]=e=>o(w).value.value=e),"error-messages":o(w).errorMessage.value},null,8,["modelValue","error-messages"]),l(h,{label:"說明",modelValue:o(k).value.value,"onUpdate:modelValue":a[13]||(a[13]=e=>o(k).value.value=e),"error-messages":o(k).errorMessage.value},null,8,["modelValue","error-messages"]),l(n,{modelValue:p.value,"onUpdate:modelValue":a[14]||(a[14]=e=>p.value=e),"raw-model-value":t.rawFileRecords1,"onUpdate:rawModelValue":a[15]||(a[15]=e=>t.rawFileRecords1=e),accept:"image/jpeg,image/png",deletable:"","max-size":"5MB","help-text":"選擇檔案或拖曳到這裡","error-text":{type:"檔案格式不支援",size:"檔案大小不能超過 5MB"},ref:"fileAgent1"},null,8,["modelValue","raw-model-value"]),l(n,{modelValue:v.value,"onUpdate:modelValue":a[16]||(a[16]=e=>v.value=e),"raw-model-value":t.rawFileRecords2,"onUpdate:rawModelValue":a[17]||(a[17]=e=>t.rawFileRecords2=e),accept:"image/jpeg,image/png",deletable:"","max-size":"5MB","help-text":"選擇檔案或拖曳到這裡","error-text":{type:"檔案格式不支援",size:"檔案大小不能超過 5MB"},ref:"fileAgent2"},null,8,["modelValue","raw-model-value"]),l(n,{modelValue:g.value,"onUpdate:modelValue":a[18]||(a[18]=e=>g.value=e),"raw-model-value":t.rawFileRecords3,"onUpdate:rawModelValue":a[19]||(a[19]=e=>t.rawFileRecords3=e),accept:"image/jpeg,image/png",deletable:"","max-size":"5MB","help-text":"選擇檔案或拖曳到這裡","error-text":{type:"檔案格式不支援",size:"檔案大小不能超過 5MB"},ref:"fileAgent3"},null,8,["modelValue","raw-model-value"])]),_:1}),l(te,null,{default:r(()=>[l(V,{color:"red",loading:o(P),onClick:I},{default:r(()=>[M("取消")]),_:1},8,["loading"]),l(V,{color:"green",type:"submit",loading:o(P)},{default:r(()=>[M("送出")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["onSubmit","disabled"])]),_:1},8,["modelValue"])],64)}}};typeof N=="function"&&N(Ve);export{Ve as default};
