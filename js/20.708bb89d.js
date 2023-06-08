"use strict";(self["webpackChunkdesigner"]=self["webpackChunkdesigner"]||[]).push([[20],{3020:(t,e,i)=>{i.r(e),i.d(e,{default:()=>d});var s=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"list"},[2!=t.user.role&&0!=t.user.id?e("div",{staticClass:"list_head"},[e("div",{staticClass:"left-button"},[e("el-button",{staticStyle:{color:"#000000","border-width":"0px","background-color":"unset","font-weight":"500"},attrs:{type:"primary",size:"small",icon:"el-icon-arrow-left",plain:""},on:{click:function(e){return t.$router.push("/group")}}},[t._v(t._s(t.lang.back))])],1),e("div",{staticClass:"preference"},[e("router-link",{attrs:{to:t.getDesignPreferenceLink()}},[e("el-button",{staticStyle:{background:"white","border-radius":"12px",color:"black",padding:"15px 24px","border-width":"0px"},attrs:{type:"primary",size:"small"}},[t._v(t._s(t.lang.tips8))])],1)],1),e("div",{staticClass:"upload"},[e("el-button",{staticStyle:{background:"#345CA0","border-radius":"12px",padding:"15px 24px","border-width":"0px"},attrs:{type:"primary",size:"small",icon:"el-icon-upload2"}},[t._v(t._s(t.lang.up))]),e("input",{attrs:{type:"file"},on:{change:t.upload}})],1)]):t._e(),e("div",{staticClass:"list_item"},[0==t.list.length?e("div",{staticClass:"nodata"},[e("el-empty",{attrs:{description:t.lang.nodata}})],1):t._e(),t._l(t.list,(function(i){return e("div",{key:i.id,staticClass:"box",attrs:{id:i.id}},[e("div",{staticClass:"main",on:{click:function(e){return t.goProject(i.id)}}},[e("div",{directives:[{name:"loading",rawName:"v-loading",value:i.loading,expression:"item.loading"}],staticClass:"cover",attrs:{"element-loading-text":t.lang.loading+"..."}},[e("img",{staticClass:"project_cover",attrs:{src:"https://www.simplerevise.com/img/project/v2/thumbnail/"+i.img_url+".jpg",alt:""}})])]),e("div",{staticClass:"title"},[e("div",{staticClass:"action"},[i.creater_id==t.user.id||0==t.user.role||0==t.user.id?e("i",{staticClass:"el-icon-edit",on:{click:function(e){return t.rename(i.id)}}}):t._e(),i.creater_id==t.user.id||0==t.user.role?e("i",{staticClass:"el-icon-delete",on:{click:function(e){return t.del(i.id)}}}):t._e()]),e("p",[t._v(t._s(i.title))]),e("p",[t._v(t._s(i.user_name)+" · "+t._s(i.create_time))])])])}))],2),t.uploading?e("div",{staticClass:"uploading"},[e("div",{staticClass:"box"},[e("el-progress",{attrs:{type:"circle",percentage:t.uploadProgress}}),t._l(t.uploadTips,(function(i){return e("p",{key:i},[t._v(t._s(i)+"...")])}))],2)]):t._e()])},r=[],a=i(3675),l=i(4453);const n={name:"list",data(){return{user:{},list:[],loading:!0,uploadProgress:0,uploadTips:["正在上傳文件"],uploading:!1,httping:!1,lang:{}}},created(){this.lang=this.$lang("list"),this.getList()},mounted(){this.user=JSON.parse(localStorage.getItem("designer_user")),console.log(this.user)},methods:{getList(){this.$ajax.get("/project/list/?id="+this.$route.query.id).then((t=>{this.list=t.map((t=>(t.create_time=a.Z.time("y-m-d",1e3*t.create_time),t.loading=!0,t))),this.$nextTick((()=>{let t=document.querySelectorAll(".project_cover");t.forEach(((t,e)=>{let i=new Image;i.onload=()=>{this.list[e].loading=!1,i.width>i.height?t.classList.add("row"):t.classList.add("col")},i.src=t.src})),this.loading=!1}))}))},rename(t){let e=this;e.$prompt(e.lang.tips2,e.lang.tips1,{inputPattern:/\S/,inputErrorMessage:e.lang.tips5,closeOnPressEscape:!1,closeOnClickModal:!1,cancelButtonText:e.lang.tips3,confirmButtonText:e.lang.tips4,beforeClose(i,s,r){e.httping||(e.httping=!0,"confirm"==i?e.$ajax.post("/project/rename",{id:t,title:s.inputValue}).then((i=>{e.$message.success("success"),e.list.map((e=>{e.id==t&&(e.title=s.inputValue)})),r(),setTimeout((()=>{e.httping=!1}),300)})):r())}}).catch((()=>{}))},del(t){let e=this;this.$confirm(e.lang.tips7,e.lang.tips6,{type:"warning",closeOnPressEscape:!1,closeOnClickModal:!1,cancelButtonText:e.lang.tips3,confirmButtonText:e.lang.tips4,beforeClose(i,s,r){if("confirm"==i){if(e.httping)return;e.httping=!0;let i=0;e.list.map(((e,s)=>{e.id==t&&(i=s)})),e.$ajax.get("/project/del/?id="+t).then((t=>{e.list.splice(i,1),e.$message.success("success"),r(),setTimeout((()=>{e.httping=!1}),300)}))}else r()}}).catch((()=>{}))},goProject(t){this.$router.push({path:"/project",query:{id:t}})},upload(){this.$nextTick((()=>{let t=document.querySelector("input"),e=["jpg","jpeg","png","pdf"],i=l.Z.getFileLastName(t.files[0].name);if(!(e.indexOf(i)>-1))return this.$message.error("不支持的檔案類型"),void(t.value="");{if(t.files[0].size>=6e7)return this.$message.error("檔案大小不能大過 60MB"),void(t.value="");this.uploading=!0;let e={createrId:JSON.parse(localStorage.getItem("designer_user")).id,groupId:this.$route.query.id,fileType:i,file:null};e.file=t.files[0],this.uploadPost(e)}}))},uploadPost(t){this.$ajax.post("/project/upload/",t,(t=>{this.uploadProgress=parseInt(t)})).then((t=>{setTimeout((()=>{this.uploadTips.push("正在解析文件")}),1e3),setTimeout((()=>{this.uploadTips.push("正在保存数据")}),2e3),setTimeout((()=>{this.uploading=!1,this.$router.go(0)}),3e3)}))},getDesignPreferenceLink(){return{name:"design",query:this.$route.query}}}},o=n;var u=i(3736),c=(0,u.Z)(o,s,r,!1,null,"a67d9ece",null);const d=c.exports},3675:(t,e,i)=>{i.d(e,{Z:()=>r});const s={to2:t=>Number(t)<10?`0${t}`:String(t),time(t="y-m-d",e=null){let i=e?new Date(e):new Date;return t=t.replace("y",i.getFullYear()),t=t.replace("m",this.to2(i.getMonth()+1)),t=t.replace("d",this.to2(i.getDate())),t=t.replace("h",this.to2(i.getHours())),t=t.replace("i",this.to2(i.getMinutes())),t=t.replace("s",this.to2(i.getSeconds())),t=t.replace("w",i.getDay()),t},monthLength(t=null){let e=1*this.time("y",t),i=this.to2(1*this.time("m",t)+1),s=new Date(`${e}-${i}-01`).getTime()-864e5;return Number(this.time("d",s))},preMonthLenggth(t=null){let e=1*this.time("y",t),i=this.to2(1*this.time("m",t)),s=new Date(`${e}-${i}-01`).getTime()-864e5;return Number(this.time("d",s))},nextMonthLenggth(t=null){let e=1*this.time("y",t),i=this.to2(1*this.time("m",t)+2),s=new Date(`${e}-${i}-01`).getTime()-864e5;return Number(this.time("d",s))},monthFirst(t=null){let e=this.time("y-m",t)+"-01";return this.time("y-m-d",e)},monthLast(t=null){let e=1*this.time("y",t),i=this.to2(1*this.time("m",t)+1),s=new Date(`${e}-${i}-01`).getTime()-864e5;return this.time("y-m-d",s)},preMonthToday(t=null){let e=this.time("y",t),i=this.to2(1*this.time("m",t)-1),s=this.time("d",t);return this.time("y-m-d",`${e}-${i}-${s}`)},nextMonthToday(t=null){let e=this.time("y",t),i=this.to2(1*this.time("m",t)+1),s=this.time("d",t);return this.time("y-m-d",`${e}-${i}-${s}`)},timeout(t){},timeRemaining(t,e){return t-=parseInt((new Date).getTime()/1e3),this.unixToString(e,t)},unixToString(t,e){let i=parseInt(e/60/60/24),r=parseInt((e-86400*i)/3600),a=parseInt((e-86400*i-3600*r)/60),l=e-86400*i-3600*r-60*a;return t=t.replace("d",s.to2(s.low(i))),t=t.replace("h",s.to2(s.low(r))),t=t.replace("i",s.to2(s.low(a))),t=t.replace("s",s.to2(s.low(l))),t},low(t){return t<0?0:t},parse(t){return new Date(t)}},r=s}}]);
//# sourceMappingURL=20.708bb89d.js.map