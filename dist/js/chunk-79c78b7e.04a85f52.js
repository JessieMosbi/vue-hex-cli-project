(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-79c78b7e"],{1276:function(e,t,c){"use strict";var o=c("d784"),a=c("44e7"),r=c("825a"),n=c("1d80"),i=c("4840"),d=c("8aa5"),l=c("50c4"),s=c("14c3"),u=c("9263"),p=c("9f7f"),b=p.UNSUPPORTED_Y,m=[].push,h=Math.min,g=4294967295;o("split",2,(function(e,t,c){var o;return o="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,c){var o=String(n(this)),r=void 0===c?g:c>>>0;if(0===r)return[];if(void 0===e)return[o];if(!a(e))return t.call(o,e,r);var i,d,l,s=[],p=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),b=0,h=new RegExp(e.source,p+"g");while(i=u.call(h,o)){if(d=h.lastIndex,d>b&&(s.push(o.slice(b,i.index)),i.length>1&&i.index<o.length&&m.apply(s,i.slice(1)),l=i[0].length,b=d,s.length>=r))break;h.lastIndex===i.index&&h.lastIndex++}return b===o.length?!l&&h.test("")||s.push(""):s.push(o.slice(b)),s.length>r?s.slice(0,r):s}:"0".split(void 0,0).length?function(e,c){return void 0===e&&0===c?[]:t.call(this,e,c)}:t,[function(t,c){var a=n(this),r=void 0==t?void 0:t[e];return void 0!==r?r.call(t,a,c):o.call(String(a),t,c)},function(e,a){var n=c(o,e,this,a,o!==t);if(n.done)return n.value;var u=r(e),p=String(this),m=i(u,RegExp),j=u.unicode,f=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(b?"g":"y"),O=new m(b?"^(?:"+u.source+")":u,f),v=void 0===a?g:a>>>0;if(0===v)return[];if(0===p.length)return null===s(O,p)?[p]:[];var V=0,N=0,k=[];while(N<p.length){O.lastIndex=b?0:N;var y,x=s(O,b?p.slice(N):p);if(null===x||(y=h(l(O.lastIndex+(b?N:0)),p.length))===V)N=d(p,N,j);else{if(k.push(p.slice(V,N)),k.length===v)return k;for(var B=1;B<=x.length-1;B++)if(k.push(x[B]),k.length===v)return k;N=V=y}}return k.push(p.slice(V)),k}]}),b)},"44e7":function(e,t,c){var o=c("861d"),a=c("c6b6"),r=c("b622"),n=r("match");e.exports=function(e){var t;return o(e)&&(void 0!==(t=e[n])?!!t:"RegExp"==a(e))}},a434:function(e,t,c){"use strict";var o=c("23e7"),a=c("23cb"),r=c("a691"),n=c("50c4"),i=c("7b0b"),d=c("65f0"),l=c("8418"),s=c("1dde"),u=s("splice"),p=Math.max,b=Math.min,m=9007199254740991,h="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!u},{splice:function(e,t){var c,o,s,u,g,j,f=i(this),O=n(f.length),v=a(e,O),V=arguments.length;if(0===V?c=o=0:1===V?(c=0,o=O-v):(c=V-2,o=b(p(r(t),0),O-v)),O+c-o>m)throw TypeError(h);for(s=d(f,o),u=0;u<o;u++)g=v+u,g in f&&l(s,u,f[g]);if(s.length=o,c<o){for(u=v;u<O-o;u++)g=u+o,j=u+c,g in f?f[j]=f[g]:delete f[j];for(u=O;u>O-o+c;u--)delete f[u-1]}else if(c>o)for(u=O-o;u>v;u--)g=u+o-1,j=u+c-1,g in f?f[j]=f[g]:delete f[j];for(u=0;u<c;u++)f[u+v]=arguments[u+2];return f.length=O-o+c,s}})},d416:function(e,t,c){"use strict";c.r(t);var o=c("7a23"),a={class:"text-end mt-4"},r={class:"table mt-4"},n=Object(o["createVNode"])("thead",null,[Object(o["createVNode"])("tr",null,[Object(o["createVNode"])("th",{width:"120"},"分類"),Object(o["createVNode"])("th",null,"產品名稱"),Object(o["createVNode"])("th",{width:"120"},"原價"),Object(o["createVNode"])("th",{width:"120"},"售價"),Object(o["createVNode"])("th",{width:"100"},"是否啟用"),Object(o["createVNode"])("th",{width:"120"},"編輯")])],-1),i={class:"text-end"},d={class:"text-end"},l={key:0,class:"text-success"},s={key:1},u={class:"btn-group"};function p(e,t,c,p,b,m){var h=Object(o["resolveComponent"])("pagination"),g=Object(o["resolveComponent"])("product-modal"),j=Object(o["resolveComponent"])("delete-product-modal");return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],null,[Object(o["createVNode"])("div",a,[Object(o["createVNode"])("button",{class:"btn btn-primary",onClick:t[1]||(t[1]=function(e){return m.openModal("add")})}," 建立新的產品 ")]),Object(o["createVNode"])("table",r,[n,Object(o["createVNode"])("tbody",null,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(b.products,(function(t){return Object(o["openBlock"])(),Object(o["createBlock"])("tr",{key:t.id},[Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(t.category),1),Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(t.title),1),Object(o["createVNode"])("td",i,"$"+Object(o["toDisplayString"])(e.currency(t.origin_price)),1),Object(o["createVNode"])("td",d,"$"+Object(o["toDisplayString"])(e.currency(t.price)),1),Object(o["createVNode"])("td",null,[t.is_enabled?(Object(o["openBlock"])(),Object(o["createBlock"])("span",l,"啟用")):(Object(o["openBlock"])(),Object(o["createBlock"])("span",s,"未啟用"))]),Object(o["createVNode"])("td",null,[Object(o["createVNode"])("div",u,[Object(o["createVNode"])("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:function(e){return m.openModal("edit",t.id)}}," 編輯 ",8,["onClick"]),Object(o["createVNode"])("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:function(e){return m.openModal("delete",t.id)}}," 刪除 ",8,["onClick"])])])])})),128))])]),Object(o["createVNode"])(h,{pagination:b.page,onChangePage:m.getData},null,8,["pagination","onChangePage"]),Object(o["createVNode"])(g,{ref:"productModal","temp-product":b.tempProduct,action:b.nowAction,onUpdateData:m.getData},null,8,["temp-product","action","onUpdateData"]),Object(o["createVNode"])(j,{ref:"delProductModal","temp-product":b.tempProduct,onUpdateData:m.getData},null,8,["temp-product","onUpdateData"])],64)}var b=c("5530"),m=(c("99af"),c("7db0"),c("1799")),h=(c("a4d3"),c("e01a"),{id:"productModal",ref:"productModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"}),g={class:"modal-dialog modal-xl"},j={class:"modal-content border-0"},f={class:"modal-header bg-dark text-white"},O={id:"productModalLabel",class:"modal-title"},v={key:0},V={key:1},N=Object(o["createVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),k={ref:"product-form"},y={class:"modal-body"},x={class:"row"},B={class:"col-sm-4"},w={class:"mb-1"},M={class:"form-group"},P=Object(o["createVNode"])("label",{for:"imageUrl"},"主圖片",-1),C={key:0},U={class:"mb-1"},$={class:"form-group"},D=Object(o["createVNode"])("label",{for:"imageUrl"},"圖片",-1),S={key:1},_={class:"col-sm-8"},T={class:"form-group"},F=Object(o["createVNode"])("label",{for:"title"},[Object(o["createVNode"])("span",{class:"text-danger"},"*"),Object(o["createTextVNode"])(" 標題")],-1),L={class:"row"},E={class:"form-group col-md-6"},I=Object(o["createVNode"])("label",{for:"category"},[Object(o["createVNode"])("span",{class:"text-danger"},"*"),Object(o["createTextVNode"])(" 分類")],-1),A={class:"form-group col-md-6"},R=Object(o["createVNode"])("label",{for:"unit"},[Object(o["createVNode"])("span",{class:"text-danger"},"*"),Object(o["createTextVNode"])(" 單位")],-1),J={class:"row"},Y={class:"form-group col-md-6"},q=Object(o["createVNode"])("label",{for:"origin_price"},[Object(o["createVNode"])("span",{class:"text-danger"},"*"),Object(o["createTextVNode"])(" 原價")],-1),z={class:"form-group col-md-6"},G=Object(o["createVNode"])("label",{for:"price"},[Object(o["createVNode"])("span",{class:"text-danger"},"*"),Object(o["createTextVNode"])(" 售價")],-1),H=Object(o["createVNode"])("hr",null,null,-1),K={class:"form-group"},Q=Object(o["createVNode"])("label",{for:"description"},"產品描述",-1),W={class:"form-group"},X=Object(o["createVNode"])("label",{for:"content"},"說明內容",-1),Z={class:"form-group"},ee={class:"form-check"},te=Object(o["createVNode"])("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),ce={class:"modal-footer"};function oe(e,t,c,a,r,n){return Object(o["openBlock"])(),Object(o["createBlock"])("div",h,[Object(o["createVNode"])("div",g,[Object(o["createVNode"])("div",j,[Object(o["createVNode"])("div",f,[Object(o["createVNode"])("h5",O,[r.product.id?(Object(o["openBlock"])(),Object(o["createBlock"])("span",v,"編輯產品")):(Object(o["openBlock"])(),Object(o["createBlock"])("span",V,"新增產品"))]),N]),Object(o["createVNode"])("form",k,[Object(o["createVNode"])("div",y,[Object(o["createVNode"])("div",x,[Object(o["createVNode"])("div",B,[Object(o["createVNode"])("div",w,[Object(o["createVNode"])("div",M,[P,Object(o["createVNode"])("input",{type:"file",class:"form-control",name:"main-file",onChange:t[1]||(t[1]=function(e){return n.uploadFile("imageUrl")}),ref:"imageUrl"},null,544)]),Object(o["createVNode"])("img",{class:"img-fluid",src:r.product.imageUrl,alt:r.product.imageUrl},null,8,["src","alt"])]),r.product.imageUrl?(Object(o["openBlock"])(),Object(o["createBlock"])("div",C,[Object(o["createVNode"])("button",{class:"btn btn-outline-danger btn-sm d-block w-100",onClick:t[2]||(t[2]=function(e){return n.deletePicture("main")})}," 刪除主圖片 ")])):Object(o["createCommentVNode"])("",!0),(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(r.product.imagesUrl,(function(e,t){return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],{key:t},[Object(o["createVNode"])("div",U,[Object(o["createVNode"])("div",$,[D,Object(o["createVNode"])("input",{type:"file",class:"form-control",name:"imagesUrl-".concat(t),onChange:function(e){return n.uploadFile("imagesUrl-".concat(t))},ref:"imagesUrl-".concat(t)},null,40,["name","onChange"])]),e?(Object(o["openBlock"])(),Object(o["createBlock"])("img",{key:0,class:"img-fluid",src:e,alt:e},null,8,["src","alt"])):Object(o["createCommentVNode"])("",!0)]),Object(o["createVNode"])("div",null,[Object(o["createVNode"])("button",{type:"button",class:"btn btn-outline-danger btn-sm d-block w-100",onClick:function(e){return n.deletePicture(t)}}," 刪除圖片 ",8,["onClick"])])],64)})),128)),r.product.imagesUrl.length<5?(Object(o["openBlock"])(),Object(o["createBlock"])("div",S,[Object(o["createVNode"])("button",{type:"button",class:"btn btn-outline-primary btn-sm d-block w-100",onClick:t[3]||(t[3]=function(){return n.addPicture&&n.addPicture.apply(n,arguments)})}," 新增圖片 ")])):Object(o["createCommentVNode"])("",!0)]),Object(o["createVNode"])("div",_,[Object(o["createVNode"])("div",T,[F,Object(o["withDirectives"])(Object(o["createVNode"])("input",{id:"title",type:"text",class:"form-control",placeholder:"請輸入標題","onUpdate:modelValue":t[4]||(t[4]=function(e){return r.product.title=e})},null,512),[[o["vModelText"],r.product.title,void 0,{trim:!0}]]),r.isClickSendBtn?(Object(o["openBlock"])(),Object(o["createBlock"])("div",{key:0,class:["invalid-feedback",{"d-block":!r.product.title}]}," 標題為必填 ",2)):Object(o["createCommentVNode"])("",!0)]),Object(o["createVNode"])("div",L,[Object(o["createVNode"])("div",E,[I,Object(o["withDirectives"])(Object(o["createVNode"])("input",{id:"category",type:"text",class:"form-control",placeholder:"請輸入分類","onUpdate:modelValue":t[5]||(t[5]=function(e){return r.product.category=e})},null,512),[[o["vModelText"],r.product.category,void 0,{trim:!0}]]),r.isClickSendBtn?(Object(o["openBlock"])(),Object(o["createBlock"])("div",{key:0,class:["invalid-feedback",{"d-block":!r.product.category}]}," 分類為必填 ",2)):Object(o["createCommentVNode"])("",!0)]),Object(o["createVNode"])("div",A,[R,Object(o["withDirectives"])(Object(o["createVNode"])("input",{id:"unit",type:"text",class:"form-control",placeholder:"請輸入單位","onUpdate:modelValue":t[6]||(t[6]=function(e){return r.product.unit=e})},null,512),[[o["vModelText"],r.product.unit,void 0,{trim:!0}]]),r.isClickSendBtn?(Object(o["openBlock"])(),Object(o["createBlock"])("div",{key:0,class:["invalid-feedback",{"d-block":!r.product.unit}]}," 單位為必填 ",2)):Object(o["createCommentVNode"])("",!0)])]),Object(o["createVNode"])("div",J,[Object(o["createVNode"])("div",Y,[q,Object(o["withDirectives"])(Object(o["createVNode"])("input",{id:"origin_price",type:"number",min:"0",class:"form-control",placeholder:"請輸入原價","onUpdate:modelValue":t[7]||(t[7]=function(e){return r.product.origin_price=e})},null,512),[[o["vModelText"],r.product.origin_price,void 0,{number:!0}]]),r.isClickSendBtn?(Object(o["openBlock"])(),Object(o["createBlock"])("div",{key:0,class:["invalid-feedback",{"d-block":!r.product.origin_price}]}," 原價為必填 ",2)):Object(o["createCommentVNode"])("",!0)]),Object(o["createVNode"])("div",z,[G,Object(o["withDirectives"])(Object(o["createVNode"])("input",{id:"price",type:"number",min:"0",class:"form-control",placeholder:"請輸入售價","onUpdate:modelValue":t[8]||(t[8]=function(e){return r.product.price=e})},null,512),[[o["vModelText"],r.product.price,void 0,{number:!0}]]),r.isClickSendBtn?(Object(o["openBlock"])(),Object(o["createBlock"])("div",{key:0,class:["invalid-feedback",{"d-block":!r.product.price}]}," 售價為必填 ",2)):Object(o["createCommentVNode"])("",!0)])]),H,Object(o["createVNode"])("div",K,[Q,Object(o["withDirectives"])(Object(o["createVNode"])("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入產品描述","onUpdate:modelValue":t[9]||(t[9]=function(e){return r.product.description=e})},"\n                  ",512),[[o["vModelText"],r.product.description,void 0,{trim:!0}]])]),Object(o["createVNode"])("div",W,[X,Object(o["withDirectives"])(Object(o["createVNode"])("textarea",{id:"content",type:"text",class:"form-control",placeholder:"請輸入說明內容","onUpdate:modelValue":t[10]||(t[10]=function(e){return r.product.content=e})},"\n                  ",512),[[o["vModelText"],r.product.content,void 0,{trim:!0}]])]),Object(o["createVNode"])("div",Z,[Object(o["createVNode"])("div",ee,[Object(o["withDirectives"])(Object(o["createVNode"])("input",{id:"is_enabled",class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":t[11]||(t[11]=function(e){return r.product.is_enabled=e})},null,512),[[o["vModelCheckbox"],r.product.is_enabled]]),te])])])])])],512),Object(o["createVNode"])("div",ce,[Object(o["createVNode"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal",onClick:t[12]||(t[12]=function(e){return r.isClickSendBtn=0})}," 取消 "),Object(o["createVNode"])("button",{type:"button",class:"btn btn-primary",onClick:t[13]||(t[13]=function(){return n.editProduct&&n.editProduct.apply(n,arguments)})}," 確認 ")])])])],512)}c("a434"),c("ac1f"),c("1276");var ae=c("7c2b"),re=c.n(ae),ne={props:["tempProduct","action"],data:function(){return{isClickSendBtn:0,modal:null,product:{imagesUrl:[]}}},mounted:function(){this.modal=new re.a(this.$refs.productModal,null)},watch:{tempProduct:function(){this.product=Object(b["a"])({},this.tempProduct)}},methods:{openModal:function(){this.$refs["product-form"].reset(),this.modal.show()},editProduct:function(){var e=this;if(this.isClickSendBtn=1,this.product.title&&this.product.category&&this.product.unit&&this.product.origin_price&&this.product.price){var t="",c="",o="",a={data:this.product};"add"===this.action?(t="新增",c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("jessiemosbi","/admin/product"),o="post"):"edit"===this.action&&(t="編輯",c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("jessiemosbi","/admin/product/").concat(this.product.id),o="put"),this.$emitter.emit("loading",!0),this.$http[o](c,a).then((function(c){if(!c.data.success)return e.$toastMsg("".concat(t,"失敗！")),void e.$emitter.emit("loading",!1);e.$toastMsg("".concat(t,"成功"),"success"),e.$emitter.emit("loading",!1),e.modal.hide(),e.$emit("updateData"),e.isClickSendBtn=0})).catch((function(e){return console.dir(e)}))}else this.$toastMsg("請檢查必填欄位","warning")},addPicture:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";5!==this.product.imagesUrl.length&&this.product.imagesUrl.push(t)},deletePicture:function(e){"main"===e?this.product.imageUrl="":this.product.imagesUrl.splice(e,1)},uploadFile:function(e){var t=this;this.$emitter.emit("loading",!0);var c=new FormData;c.append("file-to-upload",this.$refs[e].files[0]),this.$http.post("".concat("https://vue3-course-api.hexschool.io","/api/").concat("jessiemosbi","/admin/upload"),c).then((function(c){if(!c.data.success)return t.$toastMsg("檔案上傳失敗！"),void t.$emitter.emit("loading",!1);"imageUrl"===e?t.product.imageUrl=c.data.imageUrl:t.product.imagesUrl[e.split("-")[1]]=c.data.imageUrl,t.$emitter.emit("loading",!1)})).catch((function(e){return console.dir(e)}))}}};ne.render=oe;var ie=ne,de={id:"delProductModal",ref:"delProductModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},le={class:"modal-dialog"},se={class:"modal-content border-0"},ue=Object(o["createVNode"])("div",{class:"modal-header bg-danger text-white"},[Object(o["createVNode"])("h5",{id:"delProductModalLabel",class:"modal-title"},[Object(o["createVNode"])("span",null,"刪除產品")]),Object(o["createVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),pe={class:"modal-body"},be=Object(o["createTextVNode"])(" 是否刪除 "),me={class:"text-danger"},he=Object(o["createTextVNode"])(" 商品(刪除後將無法恢復)。 "),ge={class:"modal-footer"},je=Object(o["createVNode"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function fe(e,t,c,a,r,n){return Object(o["openBlock"])(),Object(o["createBlock"])("div",de,[Object(o["createVNode"])("div",le,[Object(o["createVNode"])("div",se,[ue,Object(o["createVNode"])("div",pe,[be,Object(o["createVNode"])("strong",me,Object(o["toDisplayString"])(c.tempProduct.title),1),he]),Object(o["createVNode"])("div",ge,[je,Object(o["createVNode"])("button",{type:"button",class:"btn btn-danger",onClick:t[1]||(t[1]=function(){return n.deleteProduct&&n.deleteProduct.apply(n,arguments)})}," 確認刪除 ")])])])],512)}var Oe={props:["tempProduct"],data:function(){return{modal:null,product:{}}},mounted:function(){this.modal=new re.a(this.$refs.delProductModal,null)},watch:{tempProduct:function(){this.product=Object(b["a"])({},this.tempProduct)}},methods:{openModal:function(){this.modal.show()},deleteProduct:function(){var e=this;this.$emitter.emit("loading",!0),this.$http.delete("".concat("https://vue3-course-api.hexschool.io","/api/").concat("jessiemosbi","/admin/product/").concat(this.tempProduct.id)).then((function(t){if(!t.data.success)return e.$toastMsg("刪除產品失敗！"),void e.$emitter.emit("loading",!1);e.$emitter.emit("loading",!1),e.$toastMsg("成功刪除產品！","success"),e.modal.hide(),e.$emit("updateData")})).catch((function(e){return console.dir(e)}))}}};Oe.render=fe;var ve=Oe,Ve={data:function(){return{products:[],page:{total:0,current:0,hasPre:!1,hasNext:!1},tempProduct:{imagesUrl:[]},nowAction:""}},components:{pagination:m["a"],productModal:ie,deleteProductModal:ve},mounted:function(){this.getData()},methods:{getData:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$emitter.emit("loading",!0),this.$http.get("".concat("https://vue3-course-api.hexschool.io","/api/").concat("jessiemosbi","/admin/products?page=").concat(t)).then((function(t){if(!t.data.success)return e.$toastMsg("獲取產品列表資料失敗！"),void e.$emitter.emit("loading",!1);e.products=t.data.products,e.page.total=t.data.pagination.total_pages,e.page.current=t.data.pagination.current_page,e.page.hasPre=t.data.pagination.has_pre,e.page.hasNext=t.data.pagination.has_next,e.$emitter.emit("loading",!1)})).catch((function(e){return console.dir(e)}))},openModal:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.nowAction=e,"add"===e?this.tempProduct={imagesUrl:[]}:"edit"!==e&&"delete"!==e||!t||(this.tempProduct=Object(b["a"])({},this.products.find((function(e){return e.id===t}))),this.tempProduct.id=t,void 0===this.tempProduct.imagesUrl&&(this.tempProduct.imagesUrl=[])),this.tempProduct.num=1,"add"===e||"edit"===e?this.$refs.productModal.openModal():"delete"===e&&this.$refs.delProductModal.openModal()}}};Ve.render=p;t["default"]=Ve},e01a:function(e,t,c){"use strict";var o=c("23e7"),a=c("83ab"),r=c("da84"),n=c("5135"),i=c("861d"),d=c("9bf2").f,l=c("e893"),s=r.Symbol;if(a&&"function"==typeof s&&(!("description"in s.prototype)||void 0!==s().description)){var u={},p=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof p?new s(e):void 0===e?s():s(e);return""===e&&(u[t]=!0),t};l(p,s);var b=p.prototype=s.prototype;b.constructor=p;var m=b.toString,h="Symbol(test)"==String(s("test")),g=/^Symbol\((.*)\)[^)]+$/;d(b,"description",{configurable:!0,get:function(){var e=i(this)?this.valueOf():this,t=m.call(e);if(n(u,e))return"";var c=h?t.slice(7,-1):t.replace(g,"$1");return""===c?void 0:c}}),o({global:!0,forced:!0},{Symbol:p})}}}]);
//# sourceMappingURL=chunk-79c78b7e.04a85f52.js.map