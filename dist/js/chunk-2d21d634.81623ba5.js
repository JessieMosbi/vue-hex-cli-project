(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21d634"],{d0a3:function(e,t,o){"use strict";o.r(t);var c=o("7a23"),a={class:"text-end mt-4"},n={class:"table mt-4"},d=Object(c["createVNode"])("thead",null,[Object(c["createVNode"])("tr",null,[Object(c["createVNode"])("th",null,"名稱"),Object(c["createVNode"])("th",null,"折扣百分比"),Object(c["createVNode"])("th",null,"到期日"),Object(c["createVNode"])("th",null,"是否啟用"),Object(c["createVNode"])("th",null,"編輯")])],-1),l={key:0,class:"text-success"},i={key:1,class:"text-muted"},s={class:"btn-group"};function r(e,t,o,r,u,p){var b=this,m=Object(c["resolveComponent"])("pagination"),j=Object(c["resolveComponent"])("coupon-modal"),O=Object(c["resolveComponent"])("del-coupon-modal");return Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],null,[Object(c["createVNode"])("div",a,[Object(c["createVNode"])("button",{type:"button",class:"btn btn-primary",onClick:t[1]||(t[1]=function(e){return p.openModal("add")})}," 建立新的優惠券 ")]),Object(c["createVNode"])("table",n,[d,Object(c["createVNode"])("tbody",null,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(u.coupons,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])("tr",{key:e.id},[Object(c["createVNode"])("td",null,Object(c["toDisplayString"])(e.title),1),Object(c["createVNode"])("td",null,Object(c["toDisplayString"])(e.percent),1),Object(c["createVNode"])("td",null,Object(c["toDisplayString"])(b.$formatDate(e.due_date,"YYYY/MM/DD")),1),Object(c["createVNode"])("td",null,[e.is_enabled?(Object(c["openBlock"])(),Object(c["createBlock"])("span",l,"啟用")):(Object(c["openBlock"])(),Object(c["createBlock"])("span",i,"未啟用"))]),Object(c["createVNode"])("td",null,[Object(c["createVNode"])("div",s,[Object(c["createVNode"])("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:function(t){return p.openModal("edit",e.id)}}," 編輯 ",8,["onClick"]),Object(c["createVNode"])("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:function(t){return p.openModal("delete",e.id)}}," 刪除 ",8,["onClick"])])])])})),128))])]),Object(c["createVNode"])(m,{pagination:u.page,onChangePage:p.getData},null,8,["pagination","onChangePage"]),Object(c["createVNode"])(j,{"temp-coupon":u.tempCoupon,action:u.nowAction,"list-page":u.page.current,onUpdateData:p.getData,ref:"couponModal"},null,8,["temp-coupon","action","list-page","onUpdateData"]),Object(c["createVNode"])(O,{"temp-coupon":u.tempCoupon,action:u.nowAction,onUpdateData:p.getData,ref:"delCouponModal"},null,8,["temp-coupon","action","onUpdateData"])],64)}var u=o("5530"),p=(o("99af"),o("7db0"),o("1799")),b={class:"modal fade",id:"couponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},m={class:"modal-dialog",role:"document"},j={class:"modal-content"},O={class:"modal-header"},h={class:"modal-title",id:"exampleModalLabel"},g={key:0},V={key:1},N=Object(c["createVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),f={class:"modal-body"},k={class:"mb-3"},v=Object(c["createVNode"])("label",{for:"title"},[Object(c["createVNode"])("span",{class:"text-danger"},"*"),Object(c["createTextVNode"])(" 標題")],-1),C={class:"mb-3"},y=Object(c["createVNode"])("label",{for:"coupon_code"},[Object(c["createVNode"])("span",{class:"text-danger"},"*"),Object(c["createTextVNode"])(" 優惠碼")],-1),B={class:"mb-3"},x=Object(c["createVNode"])("label",{for:"due_date"},[Object(c["createVNode"])("span",{class:"text-danger"},"*"),Object(c["createTextVNode"])(" 到期日")],-1),M={class:"mb-3"},D=Object(c["createVNode"])("label",{for:"price"},[Object(c["createVNode"])("span",{class:"text-danger"},"*"),Object(c["createTextVNode"])(" 折扣百分比")],-1),$={class:"mb-3"},_={class:"form-check"},w=Object(c["createVNode"])("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),S={class:"modal-footer"},T=Object(c["createVNode"])("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," Close ",-1),U={key:0},P={key:1};function Y(e,t,o,a,n,d){return Object(c["openBlock"])(),Object(c["createBlock"])("div",b,[Object(c["createVNode"])("div",m,[Object(c["createVNode"])("div",j,[Object(c["createVNode"])("div",O,[Object(c["createVNode"])("h5",h,[n.coupon.id?(Object(c["openBlock"])(),Object(c["createBlock"])("span",V,"編輯優惠卷")):(Object(c["openBlock"])(),Object(c["createBlock"])("span",g,"新增優惠卷")),Object(c["createTextVNode"])(" "+Object(c["toDisplayString"])(n.isClickSendBtn),1)]),N]),Object(c["createVNode"])("div",f,[Object(c["createTextVNode"])(Object(c["toDisplayString"])(n.coupon)+" ",1),Object(c["createVNode"])("div",k,[v,Object(c["withDirectives"])(Object(c["createVNode"])("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":t[1]||(t[1]=function(e){return n.coupon.title=e}),placeholder:"請輸入標題"},null,512),[[c["vModelText"],n.coupon.title]]),n.isClickSendBtn?(Object(c["openBlock"])(),Object(c["createBlock"])("div",{key:0,class:["invalid-feedback",{"d-block":!n.coupon.title}]}," 標題為必填 ",2)):Object(c["createCommentVNode"])("",!0)]),Object(c["createVNode"])("div",C,[y,Object(c["withDirectives"])(Object(c["createVNode"])("input",{type:"text",class:"form-control",id:"coupon_code","onUpdate:modelValue":t[2]||(t[2]=function(e){return n.coupon.code=e}),placeholder:"請輸入優惠碼"},null,512),[[c["vModelText"],n.coupon.code]]),n.isClickSendBtn?(Object(c["openBlock"])(),Object(c["createBlock"])("div",{key:0,class:["invalid-feedback",{"d-block":!n.coupon.code}]}," 優惠碼為必填 ",2)):Object(c["createCommentVNode"])("",!0)]),Object(c["createVNode"])("div",B,[x,Object(c["withDirectives"])(Object(c["createVNode"])("input",{type:"date",class:"form-control",id:"due_date","onUpdate:modelValue":t[3]||(t[3]=function(e){return n.coupon.due_date=e})},null,512),[[c["vModelText"],n.coupon.due_date]]),n.isClickSendBtn?(Object(c["openBlock"])(),Object(c["createBlock"])("div",{key:0,class:["invalid-feedback",{"d-block":!n.coupon.due_date}]}," 到期日為必填 ",2)):Object(c["createCommentVNode"])("",!0)]),Object(c["createVNode"])("div",M,[D,Object(c["withDirectives"])(Object(c["createVNode"])("input",{type:"number",class:"form-control",id:"price",min:"0","onUpdate:modelValue":t[4]||(t[4]=function(e){return n.coupon.percent=e}),placeholder:"請輸入折扣百分比"},null,512),[[c["vModelText"],n.coupon.percent]]),n.isClickSendBtn?(Object(c["openBlock"])(),Object(c["createBlock"])("div",{key:0,class:["invalid-feedback",{"d-block":!n.coupon.percent}]}," 折扣百分比為必填 ",2)):Object(c["createCommentVNode"])("",!0)]),Object(c["createVNode"])("div",$,[Object(c["createVNode"])("div",_,[Object(c["withDirectives"])(Object(c["createVNode"])("input",{class:"form-check-input",type:"checkbox",id:"is_enabled","onUpdate:modelValue":t[5]||(t[5]=function(e){return n.coupon.is_enabled=e}),"true-value":"1","false-value":"0"},null,512),[[c["vModelCheckbox"],n.coupon.is_enabled]]),w])])]),Object(c["createVNode"])("div",S,[T,Object(c["createVNode"])("button",{type:"button",class:"btn btn-primary",onClick:t[6]||(t[6]=function(){return d.editCoupon&&d.editCoupon.apply(d,arguments)})},[n.coupon.id?(Object(c["openBlock"])(),Object(c["createBlock"])("span",P,"更新")):(Object(c["openBlock"])(),Object(c["createBlock"])("span",U,"新增"))])])])])],512)}var L=o("7c2b"),A=o.n(L),F={props:["tempCoupon","action","listPage"],data:function(){return{isClickSendBtn:0,modal:null,coupon:{is_enabled:0}}},watch:{tempCoupon:function(){this.coupon=Object(u["a"])({},this.tempCoupon),"edit"===this.action&&(this.coupon.due_date=this.$formatDate(this.tempCoupon.due_date,"YYYY-MM-DD")),console.log("CouponsOmdal.vue watch"),console.log(this.coupon)}},mounted:function(){this.modal=new A.a(this.$refs.modal,null)},methods:{openModal:function(){console.log("CouponsOmdal.vue openModal"),console.log(this.tempCoupon),this.modal.show()},editCoupon:function(){var e=this;if(this.isClickSendBtn=1,this.coupon.title&&this.coupon.percent&&this.coupon.due_date&&this.coupon.code){this.$emitter.emit("loading",!0);var t=Object(u["a"])({},this.coupon);t.due_date=new Date(t.due_date).getTime()/1e3,t.percent=+t.percent,t.is_enabled=+t.is_enabled,console.log(t);var o="",c="",a="",n={data:t};"add"===this.action?(o="新增",c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("jessiemosbi","/admin/coupon"),a="post"):"edit"===this.action&&(o="編輯",c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("jessiemosbi","/admin/coupon/").concat(t.id),a="put"),this.$http[a](c,n).then((function(t){if(console.log(t.data),!t.data.success)return e.$toastMsg("".concat(o,"失敗！")),void e.$emitter.emit("loading",!1);e.$toastMsg("".concat(o,"成功！"),"success"),e.$emitter.emit("loading",!1),e.modal.hide(),e.$emit("updateData",e.listPage),e.isClickSendBtn=0})).catch((function(e){return console.dir(e)}))}else this.$toastMsg("請檢查必填欄位！","warning")}}};F.render=Y;var J=F,q={id:"delOrderModal",ref:"modal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},z={class:"modal-dialog"},E={class:"modal-content border-0"},G=Object(c["createVNode"])("div",{class:"modal-header bg-danger text-white"},[Object(c["createVNode"])("h5",{id:"delProductModalLabel",class:"modal-title"},[Object(c["createVNode"])("span",null,"刪除優惠券")]),Object(c["createVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),H={class:"modal-body"},I=Object(c["createTextVNode"])(" 是否刪除 "),K={class:"text-danger"},Q=Object(c["createTextVNode"])(" 的優惠券(刪除後將無法恢復)。 "),R={class:"modal-footer"},W=Object(c["createVNode"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function X(e,t,o,a,n,d){return Object(c["openBlock"])(),Object(c["createBlock"])("div",q,[Object(c["createVNode"])("div",z,[Object(c["createVNode"])("div",E,[G,Object(c["createVNode"])("div",H,[I,Object(c["createVNode"])("strong",K,Object(c["toDisplayString"])(n.coupon.title),1),Q]),Object(c["createVNode"])("div",R,[W,Object(c["createVNode"])("button",{type:"button",class:"btn btn-danger",onClick:t[1]||(t[1]=function(){return d.deleteCoupon&&d.deleteCoupon.apply(d,arguments)})}," 確認刪除 ")])])])],512)}var Z={props:["tempCoupon"],data:function(){return{modal:null,coupon:{}}},mounted:function(){this.modal=new A.a(this.$refs.modal,null)},watch:{tempCoupon:function(){this.coupon=Object(u["a"])({},this.tempCoupon),console.log(this.coupon)}},methods:{openModal:function(){this.modal.show()},deleteCoupon:function(){var e=this;this.$emitter.emit("loading",!0),this.$http.delete("".concat("https://vue3-course-api.hexschool.io","/api/").concat("jessiemosbi","/admin/coupon/").concat(this.tempCoupon.id)).then((function(t){if(console.log(t.data),!t.data.success)return e.$toastMsg("刪除優惠券失敗！"),void e.$emitter.emit("loading",!1);e.$toastMsg("成功刪除優惠券！","success"),e.$emitter.emit("loading",!1),e.modal.hide(),e.$emit("updateData")})).catch((function(e){return console.dir(e)}))}}};Z.render=X;var ee=Z,te={data:function(){return{coupons:[],page:{total:0,current:0,hasPre:!1,hasNext:!1},tempCoupon:{},nowAction:""}},components:{pagination:p["a"],couponModal:J,delCouponModal:ee},mounted:function(){this.getData()},methods:{getData:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$emitter.emit("loading",!0),this.$http.get("".concat("https://vue3-course-api.hexschool.io","/api/").concat("jessiemosbi","/admin/coupons?page=").concat(t)).then((function(t){if(console.log(t.data),!t.data.success)return e.$toastMsg("獲取優惠券列表資料失敗！"),void e.$emitter.emit("loading",!1);e.coupons=t.data.coupons,e.page.total=t.data.pagination.total_pages,e.page.current=t.data.pagination.current_page,e.page.hasPre=t.data.pagination.has_pre,e.page.hasNext=t.data.pagination.has_next,e.$emitter.emit("loading",!1)})).catch((function(e){return console.dir(e)}))},openModal:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.nowAction=e,"add"===e?this.tempCoupon={is_enabled:0}:"edit"!==e&&"delete"!==e||!t||(this.tempCoupon=Object(u["a"])({},this.coupons.find((function(e){return e.id===t}))),console.log("Coupons.vue"),console.log(this.tempCoupon)),"add"===e||"edit"===e?this.$refs.couponModal.openModal():"delete"===e&&this.$refs.delCouponModal.openModal()}}};te.render=r;t["default"]=te}}]);
//# sourceMappingURL=chunk-2d21d634.81623ba5.js.map