"use strict";(self["webpackChunkdesigner"]=self["webpackChunkdesigner"]||[]).push([[380],{6380:(t,e,s)=>{s.r(e),s.d(e,{default:()=>u});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"user"},[e("div",{staticClass:"head"},[e("p",[t._v(t._s(t.lang.title))]),e("p",[t._v(t._s(t.lang.title2))])]),e("div",{staticClass:"content"},[e("div",{staticClass:"item itemImg"},[e("img",{staticStyle:{"margin-left":"30px"},attrs:{src:t.user.avatar,alt:""}})]),e("div",{staticClass:"item",staticStyle:{"margin-top":"20px"}},[e("p",[t._v(t._s(t.lang.form.account)+"："+t._s(t.user.user_name))]),e("p",[e("i",{staticClass:"el-icon-edit-outline",on:{click:t.rename}})])]),e("div",{staticClass:"item"},[e("p",[t._v(t._s(t.lang.form.passwd)+"：******")]),e("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"text"},on:{click:t.repass}},[t._v(t._s(t.lang.form.reset))])],1)])])},n=[],r=s(4453);const l={name:"user",data(){return{lang:{},user:{},httping:!1}},created(){this.lang=this.$lang("user")},mounted(){this.user=JSON.parse(localStorage.getItem("designer_user")),this.user.avatar=r.Z.host+this.user.avatar},methods:{rename(t){let e=this;e.$prompt(e.lang.alert.account.title2,e.lang.alert.account.title,{inputPattern:/\S/,inputErrorMessage:e.lang.alert.account.error,closeOnPressEscape:!1,closeOnClickModal:!1,cancelButtonText:this.lang.alert.account.cancel,confirmButtonText:this.lang.alert.account.confirm,beforeClose(t,s,a){if("confirm"==t){if(e.httping)return;e.httping=!0,e.$ajax.post("/user/rename",{id:e.user.id,name:s.inputValue}).then((t=>{a(),e.$message.success(e.lang.alert.account.success),setTimeout((()=>{e.$message.warning(e.lang.alert.account.success2),e.httping=!1}),200),setTimeout((()=>{e.$router.push("/login")}),1e3)}))}else a()}}).catch((()=>{}))},repass(t){let e=this;e.$prompt(e.lang.alert.passwd.title2,e.lang.alert.passwd.title,{inputPattern:/\S/,inputErrorMessage:e.lang.alert.passwd.error,closeOnPressEscape:!1,closeOnClickModal:!1,cancelButtonText:this.lang.alert.passwd.cancel,confirmButtonText:this.lang.alert.passwd.confirm,beforeClose(t,s,a){if("confirm"==t){if(e.httping)return;e.httping=!0,e.$ajax.post("/user/repass",{id:e.user.id,password:s.inputValue}).then((t=>{a(),e.$message.success(e.lang.alert.passwd.success),setTimeout((()=>{e.$message.warning(e.lang.alert.passwd.success2),e.httping=!1}),200),setTimeout((()=>{e.$router.push("/login")}),1e3)}))}else a()}}).catch((()=>{}))}}},i=l;var c=s(3736),o=(0,c.Z)(i,a,n,!1,null,"5a093930",null);const u=o.exports}}]);
//# sourceMappingURL=380.ced04ec9.js.map