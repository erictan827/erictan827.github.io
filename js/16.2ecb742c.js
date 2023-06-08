"use strict";(self["webpackChunkdesigner"]=self["webpackChunkdesigner"]||[]).push([[16],{3016:(t,e,s)=>{s.r(e),s.d(e,{default:()=>h});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"project"},[e("div",{staticClass:"project_head"},[e("div",{staticClass:"back"},[e("span",{on:{click:function(e){return t.$router.go(-1)}}},[e("i",{staticClass:"el-icon-arrow-left"}),t._v(" "+t._s(t.lang.back)+" ")])]),e("div",{staticClass:"title"},[t._v(t._s(t.info.title))]),e("div",{staticClass:"share",on:{click:t.share}},[e("i",{staticClass:"el-icon-share"})])]),e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"project_main",attrs:{"element-loading-text":t.lang.loading+"...","element-loading-spinner":"el-icon-loading"}},[e("div",{staticClass:"canvas"},[e("ul",{staticClass:"canvas_toolbar"},[e("li",{class:{active_tool:"paint-brush"==t.currentTool},on:{click:function(e){t.currentTool="paint-brush"}}},[e("svg",{attrs:{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M23.4381 13.5612L26.2627 16.3936M10.9856 29.0081C11.1115 28.1265 11.1817 27.2094 11.4759 26.3642C11.6453 25.8774 11.8768 25.4144 12.1647 24.9867C12.489 24.5047 12.9088 24.0849 13.7483 23.2454L25.4097 11.5897C26.1907 10.8086 27.457 10.8086 28.2381 11.5897C29.0191 12.3707 29.0191 13.6371 28.2381 14.4181L16.3972 26.2533C15.6859 26.9647 15.3302 27.3204 14.9273 27.6084C14.5697 27.8641 14.185 28.0797 13.7803 28.2514C12.8964 28.6262 11.9169 28.7838 10.9856 29.0081Z",stroke:"black","stroke-width":"1.5","stroke-linejoin":"round"}})])]),e("li",{staticClass:"brush_color"},[e("el-color-picker",{attrs:{size:"mini"},model:{value:t.brushColor,callback:function(e){t.brushColor=e},expression:"brushColor"}})],1),e("li",{class:{inactive_tool:t.currentHistory<=0},on:{click:function(e){return t.navCanvas(-1)}}},[e("svg",{attrs:{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M28 25V23.8C28 22.1198 28 21.2798 27.673 20.638C27.3854 20.0735 26.9265 19.6146 26.362 19.327C25.7202 19 24.8802 19 23.2 19H12M12 19L16 15M12 19L16 23",stroke:"black","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})])]),e("li",{class:{inactive_tool:t.currentHistory>=t.canvasHistorys.length-1},on:{click:function(e){return t.navCanvas(1)}}},[e("svg",{attrs:{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M12 25V23.8C12 22.1198 12 21.2798 12.327 20.638C12.6146 20.0735 13.0735 19.6146 13.638 19.327C14.2798 19 15.1198 19 16.8 19H28M28 19L24 15M28 19L24 23",stroke:"black","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})])]),e("li",{class:{inactive_tool:t.currentHistory<=0},on:{click:t.saveCanvas}},[e("svg",{attrs:{width:"83",height:"40",viewBox:"0 0 83 40",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M27 29H13C12.4696 29 11.9609 28.7893 11.5858 28.4142C11.2107 28.0391 11 27.5304 11 27V13C11 12.4696 11.2107 11.9609 11.5858 11.5858C11.9609 11.2107 12.4696 11 13 11H24L29 16V27C29 27.5304 28.7893 28.0391 28.4142 28.4142C28.0391 28.7893 27.5304 29 27 29Z",stroke:"black","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}}),e("path",{attrs:{d:"M25 29V21H15V29",stroke:"black","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}}),e("path",{attrs:{d:"M44.6719 17.4929C44.6188 17.0223 44.4001 16.6577 44.0156 16.3991C43.6312 16.1373 43.1473 16.0064 42.5639 16.0064C42.1463 16.0064 41.785 16.0727 41.4801 16.2053C41.1752 16.3345 40.9382 16.5135 40.7692 16.7422C40.6035 16.9676 40.5206 17.2244 40.5206 17.5128C40.5206 17.7547 40.5769 17.9635 40.6896 18.1392C40.8056 18.3149 40.9564 18.4624 41.142 18.5817C41.331 18.6977 41.5331 18.7955 41.7486 18.875C41.964 18.9512 42.1712 19.0142 42.37 19.0639L43.3643 19.3224C43.6892 19.402 44.0223 19.5097 44.3636 19.6456C44.705 19.7815 45.0215 19.9605 45.3132 20.1825C45.6049 20.4046 45.8402 20.6797 46.0192 21.0078C46.2015 21.3359 46.2926 21.7287 46.2926 22.1861C46.2926 22.7628 46.1435 23.2749 45.8452 23.7223C45.5502 24.1697 45.121 24.5227 44.5575 24.7812C43.9974 25.0398 43.3196 25.169 42.5241 25.169C41.7618 25.169 41.1023 25.0481 40.5455 24.8061C39.9886 24.5642 39.5528 24.2211 39.2379 23.777C38.9231 23.3295 38.7491 22.7992 38.7159 22.1861H40.2571C40.2869 22.554 40.4063 22.8606 40.6151 23.1058C40.8272 23.3478 41.0973 23.5284 41.4254 23.6477C41.7569 23.7637 42.1198 23.8217 42.5142 23.8217C42.9484 23.8217 43.3345 23.7538 43.6726 23.6179C44.014 23.4787 44.2824 23.2865 44.478 23.0412C44.6735 22.7926 44.7713 22.5026 44.7713 22.1712C44.7713 21.8696 44.6851 21.6226 44.5128 21.4304C44.3438 21.2382 44.1134 21.0791 43.8217 20.9531C43.5334 20.8272 43.2069 20.7161 42.8423 20.62L41.6392 20.2919C40.8239 20.0698 40.1776 19.7434 39.7003 19.3125C39.2263 18.8816 38.9893 18.3116 38.9893 17.6023C38.9893 17.0156 39.1484 16.5036 39.4666 16.0661C39.7848 15.6286 40.2157 15.2888 40.7592 15.0469C41.3028 14.8016 41.916 14.679 42.5987 14.679C43.2881 14.679 43.8963 14.8 44.4233 15.0419C44.9536 15.2839 45.3712 15.617 45.6761 16.0412C45.9811 16.4621 46.1402 16.946 46.1534 17.4929H44.6719ZM50.2314 25.169C49.7475 25.169 49.31 25.0795 48.9189 24.9006C48.5278 24.7183 48.2179 24.4548 47.9892 24.1101C47.7638 23.7654 47.6511 23.3428 47.6511 22.8423C47.6511 22.4115 47.734 22.0568 47.8997 21.7784C48.0654 21.5 48.2891 21.2796 48.5708 21.1172C48.8526 20.9548 49.1674 20.8321 49.5154 20.7493C49.8635 20.6664 50.2181 20.6035 50.5794 20.5604C51.0368 20.5073 51.408 20.4643 51.693 20.4311C51.978 20.3946 52.1852 20.3366 52.3145 20.2571C52.4437 20.1776 52.5083 20.0483 52.5083 19.8693V19.8345C52.5083 19.4003 52.3857 19.0639 52.1404 18.8253C51.8985 18.5866 51.5372 18.4673 51.0566 18.4673C50.5562 18.4673 50.1618 18.5784 49.8734 18.8004C49.5884 19.0192 49.3912 19.2628 49.2818 19.5312L47.8848 19.2131C48.0505 18.7491 48.2924 18.3745 48.6106 18.0895C48.9321 17.8011 49.3017 17.5923 49.7193 17.4631C50.1369 17.3305 50.5761 17.2642 51.0368 17.2642C51.3417 17.2642 51.6648 17.3007 52.0062 17.3736C52.3509 17.4432 52.6724 17.5724 52.9707 17.7614C53.2723 17.9503 53.5192 18.2204 53.7115 18.5717C53.9037 18.9197 53.9998 19.3722 53.9998 19.929V25H52.5481V23.956H52.4885C52.3923 24.1482 52.2482 24.3371 52.0559 24.5227C51.8637 24.7083 51.6168 24.8625 51.3152 24.9851C51.0136 25.1077 50.6523 25.169 50.2314 25.169ZM50.5545 23.9759C50.9655 23.9759 51.3168 23.8946 51.6085 23.7322C51.9035 23.5698 52.1272 23.3577 52.2797 23.0959C52.4354 22.8307 52.5133 22.5473 52.5133 22.2457V21.2614C52.4603 21.3144 52.3575 21.3641 52.2051 21.4105C52.0559 21.4536 51.8852 21.4917 51.693 21.5249C51.5008 21.5547 51.3135 21.5829 51.1312 21.6094C50.9489 21.6326 50.7965 21.6525 50.6738 21.669C50.3855 21.7055 50.122 21.7668 49.8833 21.853C49.648 21.9392 49.4591 22.0634 49.3166 22.2259C49.1774 22.3849 49.1078 22.5971 49.1078 22.8622C49.1078 23.2301 49.2437 23.5085 49.5154 23.6974C49.7872 23.883 50.1336 23.9759 50.5545 23.9759ZM62.239 17.3636L59.4698 25H57.8789L55.1048 17.3636H56.7006L58.6346 23.2401H58.7141L60.6431 17.3636H62.239ZM66.6674 25.1541C65.9151 25.1541 65.2671 24.9934 64.7235 24.6719C64.1833 24.3471 63.7657 23.8913 63.4707 23.3047C63.179 22.7147 63.0332 22.0237 63.0332 21.2315C63.0332 20.4493 63.179 19.7599 63.4707 19.1634C63.7657 18.5668 64.1767 18.1011 64.7037 17.7663C65.234 17.4316 65.8538 17.2642 66.563 17.2642C66.9939 17.2642 67.4115 17.3355 67.8159 17.478C68.2202 17.6205 68.5832 17.8442 68.9047 18.1491C69.2261 18.4541 69.4797 18.8501 69.6653 19.3374C69.8509 19.8213 69.9437 20.4096 69.9437 21.1023V21.6293H63.8734V20.5156H68.487C68.487 20.1245 68.4075 19.7782 68.2484 19.4766C68.0893 19.1716 67.8656 18.9313 67.5772 18.7557C67.2922 18.58 66.9574 18.4922 66.573 18.4922C66.1554 18.4922 65.7908 18.5949 65.4792 18.8004C65.171 19.0026 64.9324 19.2678 64.7633 19.5959C64.5976 19.9207 64.5147 20.2737 64.5147 20.6548V21.5249C64.5147 22.0353 64.6042 22.4695 64.7832 22.8274C64.9655 23.1854 65.219 23.4588 65.5439 23.6477C65.8687 23.8333 66.2482 23.9261 66.6824 23.9261C66.9641 23.9261 67.2209 23.8864 67.4529 23.8068C67.685 23.724 67.8855 23.6013 68.0545 23.4389C68.2235 23.2765 68.3528 23.076 68.4423 22.8374L69.8493 23.0909C69.7366 23.5052 69.5344 23.8681 69.2427 24.1797C68.9544 24.4879 68.5914 24.7282 68.1539 24.9006C67.7198 25.0696 67.2243 25.1541 66.6674 25.1541Z",fill:"black"}})])])]),e("ul",{staticClass:"canvas_navbar"},[e("li",{class:{active_tool:"mark"==t.currentTool},on:{click:function(e){t.currentTool="mark"}}},[e("svg",{attrs:{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M15.7455 29.0171L15.6538 28.4241L15.7455 29.0171ZM15.9225 29.0432L15.6657 29.5855L15.9225 29.0432ZM9.87038 29.3984L9.40186 29.0236L9.87038 29.3984ZM10.1505 29.8823L10.0588 29.2893L10.1505 29.8823ZM12.2414 26.0603L12.7185 25.6964L12.2414 26.0603ZM12.2394 26.4372L12.7079 26.812L12.2394 26.4372ZM29.5965 20C29.5965 25.1915 25.388 29.4 20.1965 29.4V30.6C26.0507 30.6 30.7965 25.8542 30.7965 20H29.5965ZM20.1965 10.6C25.388 10.6 29.5965 14.8085 29.5965 20H30.7965C30.7965 14.1458 26.0507 9.4 20.1965 9.4V10.6ZM10.7965 20C10.7965 14.8085 15.005 10.6 20.1965 10.6V9.4C14.3423 9.4 9.59649 14.1458 9.59649 20H10.7965ZM12.7185 25.6964C11.5125 24.1158 10.7965 22.1423 10.7965 20H9.59649C9.59649 22.4144 10.4044 24.6419 11.7644 26.4243L12.7185 25.6964ZM10.3389 29.7732L12.7079 26.812L11.7708 26.0623L9.40186 29.0236L10.3389 29.7732ZM15.6538 28.4241L10.0588 29.2893L10.2422 30.4752L15.8372 29.61L15.6538 28.4241ZM20.1965 29.4C18.758 29.4 17.3966 29.0773 16.1792 28.5009L15.6657 29.5855C17.0402 30.2363 18.5767 30.6 20.1965 30.6V29.4ZM15.8372 29.61C15.776 29.6195 15.7164 29.6095 15.6657 29.5855L16.1792 28.5009C16.0183 28.4247 15.8355 28.396 15.6538 28.4241L15.8372 29.61ZM9.40186 29.0236C8.88929 29.6643 9.43131 30.6006 10.2422 30.4752L10.0588 29.2893C10.3291 29.2475 10.5098 29.5596 10.3389 29.7732L9.40186 29.0236ZM11.7644 26.4243C11.6877 26.3238 11.6811 26.1745 11.7708 26.0623L12.7079 26.812C12.973 26.4806 12.9655 26.0202 12.7185 25.6964L11.7644 26.4243Z",fill:"black"}})])])]),e("div",{staticClass:"canvas_body"},[e("div",{staticClass:"canvas_img"}),e("canvas",{attrs:{id:"canvasImg"}}),e("canvas",{attrs:{id:"canvasDrawing"},on:{mousedown:t.onCanvasMouseDown,mouseup:t.onCanvasMouseUp}}),e("div",{attrs:{id:"canvasMarks"}},t._l(t.marks,(function(s,i){return e("span",{key:i,class:{mark_non_canvas:!(s.pos_x>0)},style:{left:s.pos.x+"px",top:s.pos.y+"px",position:"absolute"}},[e("svg",{attrs:{width:"25",height:"25",viewBox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M0 12.5C0 5.59644 5.59644 0 12.5 0V0C19.4036 0 25 5.59644 25 12.5V12.5C25 19.4036 19.4036 25 12.5 25H0V12.5Z",fill:"#F84D46"}})]),e("label",[t._v(t._s(s.num))])])})),0)])]),t.marks.length>0?e("div",{staticClass:"marks"},t._l(t.marks,(function(s,i){return e("div",{key:s.id,staticClass:"mark_item"},[e("div",{staticClass:"mark_item_num"},[t._v(" # "+t._s(s.num)+" "),e("span",{class:{mark_canvas:s.pos_x>0}})]),e("div",{staticClass:"mark_item_user"},[t._v(t._s(s.user_name))]),e("div",{staticClass:"mark_item_time"},[e("span",[t._v(t._s(s.create_time))])]),e("div",{staticClass:"mark_item_main"},[e("pre",{staticClass:"mark_item_title"},[t._v(t._s(s.content))])]),t.user.id>=0?e("div",{staticClass:"mark_item_menu"},[e("i",{staticClass:"el-icon-edit-outline",on:{click:function(e){return t.openEditDialog(s.id,i)}}}),e("i",{staticClass:"el-icon-microphone",class:{has_content:null!==s.playback},on:{click:function(e){return t.openEditDialog(s.id,i)}}}),e("i",{staticClass:"el-icon-delete",on:{click:function(e){return t.del(s.id,i)}}})]):t._e()])})),0):t._e(),0==t.marks.length?e("div",{staticClass:"marks nodata"},[t._v(" "+t._s(t.lang.nodata)+" ")]):t._e(),e("div",{staticClass:"form"},[0!=this.user.id?[e("el-input",{attrs:{type:"textarea",rows:"8",placeholder:t.lang.inp},model:{value:t.form,callback:function(e){t.form=e},expression:"form"}}),e("el-button",{staticStyle:{"margin-top":"0px",width:"100%","background-color":"#345CA0",padding:"15px 0px","border-color":"#345CA0","border-radius":"0px"},attrs:{loading:t.forming,size:"small",type:"primary"},on:{click:t.submitForm}},[t._v(t._s(t.lang.inpSub))])]:t._e()],2)]),e("el-dialog",{staticClass:"edit-dialog",attrs:{title:t.lang2.edit,visible:t.editForm.show,width:"40%","before-close":()=>{},"show-close":!1},on:{"update:visible":function(e){return t.$set(t.editForm,"show",e)}}},[e("div",[t._v("記點 : "),e("span",[t._v(t._s(t.editForm.num))])]),e("el-input",{staticStyle:{"margin-top":"20px"},attrs:{type:"textarea",autosize:{minRows:3,maxRows:6},placeholder:t.lang2.addContent},model:{value:t.editForm.content,callback:function(e){t.$set(t.editForm,"content",e)},expression:"editForm.content"}}),e("div",{staticStyle:{"margin-top":"20px"}},[e("el-row",[e("el-col",{attrs:{span:4}},[e("i",{staticClass:"el-icon-microphone",class:{record_recording:t.isRecording},on:{click:t.onRecorderClick}}),e("span",{staticClass:"record_conutdown",class:{record_recording:t.isRecording}},[t._v(t._s(t.recorderCountDown))])]),e("el-col",{attrs:{span:20}},[e("audio",{staticClass:"record_playback",attrs:{src:t.editForm.playback,controls:""}})])],1)],1),e("span",{attrs:{slot:"footer"},slot:"footer"},[e("el-button",{attrs:{size:"small",disabled:t.isRecording},on:{click:t.closeEditDialog}},[t._v(t._s(t.lang2.tips19))]),e("el-button",{attrs:{type:"primary",size:"small",disabled:t.isRecording},on:{click:t.updateMark}},[t._v(t._s(t.lang2.tips20))])],1)],1)],1)},a=[],n=s(3675);s(4453);const r={name:"project",data(){return{loading:!0,info:{},marks:[],uploading:!1,lang:{},lang2:{},form:"",forming:!1,editForm:{show:!1,num:0,title:"",content:"",rec:null,playback:null,pos:{x:-1,y:-1},id:0},httping:!1,user:{},currentTool:"",brushColor:"#000000",canvasBody:{width:0,height:0},canvasImg:{width:0,height:0},currentCanvas:{width:0,height:0,top:0,left:0},isCanvasMouseDown:!1,canvasContext:null,canvasHistorys:[],currentHistory:-1,tempPosition:null,tempCanvas:null,recorderStream:null,recorderChunks:[],recorderMedia:null,recorderCountDown:20,isSupportRecording:!1,isRecording:!1,setRecorderInterval:null}},beforeMount(){this.lang=this.$lang("project"),this.lang2=this.$lang("canvas"),this.$ajax.get(`/project/get/?id=${this.$route.query.id}`).then((t=>{this.marks=t.marks.map((t=>(t.create_time=n.Z.time("y-m-d h:i:s",1e3*t.create_time),t.status=this.lang.status[t.status],t.pos={x:-1,y:-1},t))),this.info=t,this.setCanvas(),this.setRecorder()}))},mounted(){this.user=JSON.parse(localStorage.getItem("designer_user")),this.setWindowEvent()},methods:{share(){this.$copy(this.info.group_id,this.info.title)},addMarks(t){let e=this.marks.map((t=>t));e.push(t),this.marks=e},del(t,e){this.$ajax.get(`/marks/del/?id=${t}`).then((t=>{this.marks.splice(e,1),this.$message.success("success")}))},openEditDialog(t,e){console.log(this.marks[e]),this.editForm={show:!0,num:this.marks[e].num,title:this.marks[e].title,content:this.marks[e].content,rec:null,playback:null===this.marks[e].playback?"":this.marks[e].playback,pos:{x:this.marks[e].pos.x,y:this.marks[e].pos.y},id:t}},closeEditDialog(){document.querySelector(".record_playback").pause(),this.editForm={show:!1,num:0,title:"",content:"",rec:null,playback:null,pos:{x:-1,y:-1},id:0}},openAddDialog(t){t.x=t.x/this.currentCanvas.width,t.y=t.y/this.currentCanvas.height,this.editForm={show:!0,num:0,title:"",content:"",rec:null,playback:"",pos:{x:t.x,y:t.y},id:0}},updateMark(){if(!this.httping)if(this.httping=!0,0==this.editForm.num)this.addMark();else{let t={title:this.editForm.title,content:this.editForm.content,rec:this.editForm.rec,id:this.editForm.id};this.$ajax.post("/marks/edit/",t).then((e=>{this.marks=this.marks.map((e=>(e.id==this.editForm.id&&(e.title=t.title,e.content=t.content,null!==t.rec&&(e.playback=t.rec)),e))),this.httping=!1,this.closeEditDialog()}))}},addMark(){let t=0;this.marks.map((e=>{e.num>=t&&(t=Number(e.num))})),t++;let e={title:this.editForm.title,content:this.editForm.content,rec:this.editForm.rec,id:this.editForm.id,projectId:this.$route.query.id,createrId:JSON.parse(localStorage.getItem("designer_user")).id,x:this.editForm.pos.x,y:this.editForm.pos.y,num:t};this.$ajax.post("/marks/add/",e).then((t=>{t.create_time=n.Z.time("y-m-d h:i:s",1e3*t.create_time),t.status=this.lang.status[t.status],t.pos={x:-1,y:-1},t.pos.x=t.pos_x*this.currentCanvas.width,t.pos.y=t.pos_y*this.currentCanvas.height-25,this.marks.push(t),this.httping=!1,this.closeEditDialog()}))},resetMarks(){this.marks=this.marks.map((t=>(t.pos.x=t.pos_x*this.currentCanvas.width,t.pos.y=t.pos_y*this.currentCanvas.height-25,t)))},submitForm(){if(0==this.user.id)return void this.$message.warning("Please login before");if(""==this.form)return void this.$message.warning("Can't submit empty text");this.forming=!0;let t=0;this.marks.map((e=>{e.num>=t&&(t=Number(e.num))})),t++;let e={title:"",content:this.form,rec:null,id:0,projectId:this.$route.query.id,createrId:JSON.parse(localStorage.getItem("designer_user")).id,x:0,y:0,num:t};this.$ajax.post("/marks/add/",e).then((t=>{t.create_time=n.Z.time("y-m-d h:i:s",1e3*t.create_time),t.status=this.lang.status[t.status],t.pos={x:-1,y:-1},t.pos.x=t.pos_x*this.currentCanvas.width,t.pos.y=t.pos_y*this.currentCanvas.height-25,this.marks.push(t),this.form="",this.forming=!1}))},getCanvas(){this.$ajax.get(`/canvas/get/?id=${this.$route.query.id}`).then((t=>{if(t.length>0){let e=new Image;e.onload=()=>{this.canvasContext.drawImage(e,0,0,this.currentCanvas.width,this.currentCanvas.height),this.saveCanvasToHistory()},e.src=t[0].path}else this.saveCanvasToHistory()}))},setCanvas(){let t=document.querySelector(".canvas_body");document.querySelector(".canvas_img");this.canvasBody={width:t.clientWidth,height:t.clientHeight};let e=new Image;e.onload=()=>{this.loading=!1,this.canvasImg={width:e.naturalWidth,height:e.naturalHeight};let t=document.querySelector(".canvas_img"),s=document.querySelector("#canvasImg"),i=document.querySelector("#canvasDrawing"),a=document.querySelector("#canvasMarks"),n=i.getContext("2d");n.lineCap="round",n.lineJoin="round",this.canvasContext=n;let r=s.getContext("2d");this.canvasImg.width>=this.canvasImg.height?(this.currentCanvas.height=.85*this.canvasBody.height,this.currentCanvas.width=this.currentCanvas.height/this.canvasImg.height*this.canvasImg.width):(this.currentCanvas.width=.85*this.canvasBody.width,this.currentCanvas.height=this.currentCanvas.width/this.canvasImg.width*this.canvasImg.height),this.currentCanvas.top=0,this.currentCanvas.left=this.canvasBody.width/2-this.currentCanvas.width/2,t.style.cssText="top: "+this.currentCanvas.top+"px; left: "+this.currentCanvas.left+"px; width: "+this.currentCanvas.width+"px; height: "+this.currentCanvas.height+"px",a.style.cssText="top: "+this.currentCanvas.top+"px; left: "+this.currentCanvas.left+"px; width: "+this.currentCanvas.width+"px; height: "+this.currentCanvas.height+"px",s.style.cssText="top: "+this.currentCanvas.top+"px; left: "+this.currentCanvas.left+"px",s.width=this.currentCanvas.width,s.height=this.currentCanvas.height,i.style.cssText="top: "+this.currentCanvas.top+"px; left: "+this.currentCanvas.left+"px",i.width=this.currentCanvas.width,i.height=this.currentCanvas.height,r.drawImage(e,0,0,this.currentCanvas.width,this.currentCanvas.height),this.getCanvas(),this.resetMarks(),console.log("loaded")},e.src="https://www.simplerevise.com//img/project/v2/content/"+this.info.img_url+".jpg"},saveCanvas(){if(this.currentHistory>0){let e=this.canvasContext,s=e.canvas;var t=s.toDataURL("image/png",1);let i={projectId:this.$route.query.id,createrId:JSON.parse(localStorage.getItem("designer_user")).id,canvasPath:t};this.$ajax.post("/canvas/update/",i).then((t=>{this.$notify({title:"Save Canvas",message:"Saved",type:"warning"})})),this.currentHistory=0,this.canvasHistorys=this.canvasHistorys.slice(-1)}},navCanvas(t){let e=this.canvasContext;switch(t){case-1:if(this.currentHistory<=0)return;this.currentHistory-=1,e.putImageData(this.canvasHistorys[this.currentHistory],0,0);break;case 1:if(this.currentHistory>=this.canvasHistorys.length-1)return;this.currentHistory+=1,e.putImageData(this.canvasHistorys[this.currentHistory],0,0);break}},zoomCanvas(t){this.$notify({title:"Zoom Canvas",message:"Function is under construction",type:"warning"})},saveCanvasToHistory(){this.canvasHistorys=this.canvasHistorys.slice(0,this.currentHistory+1);let t=this.canvasContext,e=t.canvas,s=t.getImageData(0,0,e.width,e.height);this.canvasHistorys.push(s),this.currentHistory+=1,this.canvasHistorys.length>15&&(this.canvasHistorys.shift(),this.currentHistory-=1)},onCanvasMouseDown(t){if(2!=t.button)switch(console.log("onCanvasMouseDown"),this.currentTool){case"paint-brush":this.isCanvasMouseDown=!0;break;case"eraser":this.$notify({title:"Eraser",message:"Function is under construction",type:"warning"});break;case"square":this.$notify({title:"Square",message:"Function is under construction",type:"warning"});break;case"hand":this.$notify({title:"Move Canvas",message:"Function is under construction",type:"warning"});break;case"mark":this.openAddDialog(this.getCanvasMousePosition(t.clientX,t.clientY));break}},onCanvasMouseUp(){console.log("onCanvasMouseUp"),this.isCanvasMouseDown&&(this.saveCanvasToHistory(),this.resetToolState())},setWindowEvent(){let t=document.querySelector("#canvasDrawing");t.addEventListener("mousemove",(t=>{let e=this.getCanvasMousePosition(t.clientX,t.clientY);if(this.isCanvasMouseDown&&this.tempPosition){let e=this.getCanvasMousePosition(t.clientX,t.clientY);switch(this.currentTool){case"paint-brush":this.drawCanvas((t=>{t.strokeStyle=this.brushColor,t.moveTo(this.tempPosition.x,this.tempPosition.y),t.lineTo(e.x,e.y)}));break}}this.setCanvasTempPosition(e.x,e.y)})),t.addEventListener("mouseleave",(t=>{this.onCanvasMouseUp()})),document.addEventListener("keypress",(t=>{t.ctrlKey&&("KeyZ"==t.code&&this.navCanvas(-1),"KeyY"==t.code&&this.navCanvas(1))}))},setTempCanvas(){},getCanvasMousePosition(t,e){let s=this.canvasContext.canvas.getBoundingClientRect(),i=t-s.x,a=e-s.y;return{x:i,y:a}},setCanvasTempPosition(t,e){this.tempPosition={x:t,y:e}},drawCanvas(t){let e=this.canvasContext;e.beginPath(),e.lineWidth=2,t(e),e.stroke()},resetToolState(){this.tempPosition=null,this.isCanvasMouseDown=!1},setRecorder(){navigator.mediaDevices&&navigator.mediaDevices.getUserMedia&&(this.isSupportRecording=!0)},onRecorderClick(){this.isRecording=!this.isRecording,this.isRecording?this.isSupportRecording?navigator.mediaDevices.getUserMedia({audio:!0,video:!1}).then(this.handleDevicesSuccess).catch(this.handleDevicesError):this.handleDevicesError():(clearInterval(this.setRecorderInterval),this.recorderMedia.stop(),this.recorderCountDown=20)},handleDevicesSuccess(t){this.recorderStream=t,this.recorderMedia=new MediaRecorder(t),this.recorderMedia.addEventListener("dataavailable",this.onRecorderMediaDataAvailable),this.recorderMedia.addEventListener("stop",this.onRecorderMediaStop),this.recorderMedia.start(),this.setRecorderInterval=setInterval((()=>{this.isRecording&&this.recorderCountDown>0?this.recorderCountDown-=1:this.onRecorderClick()}),1e3)},handleDevicesError(t){this.isSupportRecording?this.$notify({title:"No Microphone Detected",message:"Please make sure your device is properly connected",type:"warning"}):this.$notify({title:"Reording is not supported",message:"Recording is not supported on your browser",type:"warning"}),this.isRecording=!1},onRecorderMediaDataAvailable(t){this.recorderChunks.push(t.data)},onRecorderMediaStop(t){let e=new Blob(this.recorderChunks,{type:"audio/mp4; codecs=mp4a"}),s=window.URL.createObjectURL(e);this.recorderChunks=[],this.recorderStream.getAudioTracks().forEach((t=>t.stop())),this.recorderStream=null,document.querySelector(".record_playback").src=s;let i=new FileReader;i.readAsDataURL(e),i.onloadend=()=>{this.editForm.rec=i.result}}}},o=r;var c=s(3736),l=(0,c.Z)(o,i,a,!1,null,"023014bc",null);const h=l.exports},3675:(t,e,s)=>{s.d(e,{Z:()=>a});const i={to2:t=>Number(t)<10?`0${t}`:String(t),time(t="y-m-d",e=null){let s=e?new Date(e):new Date;return t=t.replace("y",s.getFullYear()),t=t.replace("m",this.to2(s.getMonth()+1)),t=t.replace("d",this.to2(s.getDate())),t=t.replace("h",this.to2(s.getHours())),t=t.replace("i",this.to2(s.getMinutes())),t=t.replace("s",this.to2(s.getSeconds())),t=t.replace("w",s.getDay()),t},monthLength(t=null){let e=1*this.time("y",t),s=this.to2(1*this.time("m",t)+1),i=new Date(`${e}-${s}-01`).getTime()-864e5;return Number(this.time("d",i))},preMonthLenggth(t=null){let e=1*this.time("y",t),s=this.to2(1*this.time("m",t)),i=new Date(`${e}-${s}-01`).getTime()-864e5;return Number(this.time("d",i))},nextMonthLenggth(t=null){let e=1*this.time("y",t),s=this.to2(1*this.time("m",t)+2),i=new Date(`${e}-${s}-01`).getTime()-864e5;return Number(this.time("d",i))},monthFirst(t=null){let e=this.time("y-m",t)+"-01";return this.time("y-m-d",e)},monthLast(t=null){let e=1*this.time("y",t),s=this.to2(1*this.time("m",t)+1),i=new Date(`${e}-${s}-01`).getTime()-864e5;return this.time("y-m-d",i)},preMonthToday(t=null){let e=this.time("y",t),s=this.to2(1*this.time("m",t)-1),i=this.time("d",t);return this.time("y-m-d",`${e}-${s}-${i}`)},nextMonthToday(t=null){let e=this.time("y",t),s=this.to2(1*this.time("m",t)+1),i=this.time("d",t);return this.time("y-m-d",`${e}-${s}-${i}`)},timeout(t){},timeRemaining(t,e){return t-=parseInt((new Date).getTime()/1e3),this.unixToString(e,t)},unixToString(t,e){let s=parseInt(e/60/60/24),a=parseInt((e-86400*s)/3600),n=parseInt((e-86400*s-3600*a)/60),r=e-86400*s-3600*a-60*n;return t=t.replace("d",i.to2(i.low(s))),t=t.replace("h",i.to2(i.low(a))),t=t.replace("i",i.to2(i.low(n))),t=t.replace("s",i.to2(i.low(r))),t},low(t){return t<0?0:t},parse(t){return new Date(t)}},a=i}}]);
//# sourceMappingURL=16.2ecb742c.js.map