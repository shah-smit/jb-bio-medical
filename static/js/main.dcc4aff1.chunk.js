(this.webpackJsonpjbbiomedical=this.webpackJsonpjbbiomedical||[]).push([[0],{33:function(e){e.exports=JSON.parse('[{"Id":1,"Name":"Resuable video Laryanhscope","ImageUrl":"/images/product image 1.JPG","Images":["/images/imac120.png","/images/imac120.png","/images/imac120.png"],"PdfUrl":"/pdf/1 Resuable video Laryanhscope.pdf","Category":"Digital","Description":"Resuable video Laryanhscope"},{"Id":2,"Name":"Single use digital flexible ureteroscope","ImageUrl":"/images/singleusedigitalflexibleureteroscope.jpeg","Images":["/images/imac120.png","/images/imac120.png","/images/imac120.png"],"PdfUrl":"/pdf/singleusedigitalflexibleureteroscope.pdf","Category":"Equipment","Description":"Renowned technology in the world of urology for kidney/ureteric /bladder stone removal with finest digital advance picture quality"},{"Id":3,"Name":"iMac 1200","ImageUrl":"/images/imac1200.png","Images":["/images/imac120.png","/images/imac120.png","/images/imac120.png"],"PdfUrl":"/pdf/iMAC1200.pdf","Category":"Digital","Description":"iMac 1200"},{"Id":4,"Name":"Zoncare","ImageUrl":"/images/zonecareq3.png","Images":["/images/imac120.png","/images/imac120.png","/images/imac120.png"],"PdfUrl":"/pdf/ZONCAREQ3.pdf","Category":"Digital","Description":"Zoncare"}]')},59:function(e,a,t){e.exports=t.p+"static/media/maps.6b62e891.png"},62:function(e,a,t){e.exports=t(95)},69:function(e,a,t){},90:function(e,a,t){},91:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},92:function(e,a,t){},93:function(e,a,t){},94:function(e,a,t){},95:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(25),c=t.n(l),i=t(18),o=t(5);t(67),t(68),t(69),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=t(10),u=t(12),m=t(11),d=t(15),p=t(14),h=t(104),g=t(102),b=t(101),E=t(56),f=t(97),v=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).onChangeSearchField=n.onChangeSearchField.bind(Object(m.a)(n)),n.onSearchClicked=n.onSearchClicked.bind(Object(m.a)(n)),n.state={searchField:""},n}return Object(u.a)(t,[{key:"onChangeSearchField",value:function(e){this.setState({searchField:e.target.value})}},{key:"onSearchClicked",value:function(e){this.props.history.push("/products?search="+this.state.searchField)}},{key:"render",value:function(){return r.a.createElement(h.a,{bg:"light",expand:"lg"},r.a.createElement(h.a.Brand,{href:"#home"},r.a.createElement("img",{src:"/jb-bio-medical/images/logo.png",width:"30",height:"30",className:"d-inline-block align-top",alt:"React Bootstrap logo"})),r.a.createElement(h.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(h.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(g.a,{className:"mr-auto"},r.a.createElement(g.a.Link,{href:"#products"},"Catalogue"),r.a.createElement(g.a.Link,{href:"#contact"},"Contact Us"),r.a.createElement(g.a.Link,{href:"#about"},"About Us")),r.a.createElement(b.a,{inline:!0},r.a.createElement(E.a,{type:"text",placeholder:"Enter Product Name",value:this.state.searchField,onChange:this.onChangeSearchField,className:"mr-sm-2"}),r.a.createElement(f.a,{variant:"outline-success",onClick:this.onSearchClicked},"Search"))))}}]),t}(r.a.Component),y=Object(o.e)(v),C=t(106),j=t(57),N=t(98),k=t(105),O=t(26),S=(t(90),t(59)),P=t.n(S),w=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(e){var n;Object(s.a)(this,t),(n=a.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(m.a)(n)),n.handleMessage=n.handleMessage.bind(Object(m.a)(n)),n.handleProductCategory=n.handleProductCategory.bind(Object(m.a)(n)),n.handleProductName=n.handleProductName.bind(Object(m.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(m.a)(n)),n.handleUserEmail=n.handleUserEmail.bind(Object(m.a)(n)),n.handleUserPhone=n.handleUserPhone.bind(Object(m.a)(n)),n.handleUserName=n.handleUserName.bind(Object(m.a)(n)),n.onChangeCaptcha=n.onChangeCaptcha.bind(Object(m.a)(n)),console.log(e);var r="";console.log(e.match.params.product_name),e.match.params.product_name&&(r=e.match.params.product_name);var l="";console.log(e.match.params.product_category),e.match.params.product_category&&(l=e.match.params.product_category);var c=!1;return""==l||""==r?(l="",r=""):c=!0,console.log(l),console.log(r),n.state={timestamp:"",user_name:"",user_phone:"",user_email:"",message:"",product_name:r,product_category:l,disable_product_fields:c,formSubmitted:!1,processing:!1},n}return Object(u.a)(t,[{key:"onChangeCaptcha",value:function(e){console.log("Captcha value:",e)}},{key:"handleSubmit",value:function(e){var a=this,t=this.state;t.timestamp=this.getCurrentDateTime(),t.timezone=Intl.DateTimeFormat().resolvedOptions().timeZone,this.setState({processing:!0}),this.validateFields(t)?fetch("https://sendmail-nodejs.herokuapp.com/sendmail",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify(t)}).then((function(e){429==e.status?(a.sendWarningNotifs("Error in submiting contact form.",18e4),a.setState({processing:!1})):a.setState({formSubmitted:!0,processing:!1})})).catch((function(e){console.log(e),a.sendWarningNotifs("Something went wrong!",3e3),a.setState({processing:!1})})):this.setState({processing:!1})}},{key:"validateFields",value:function(e){return null!==e&&void 0!==e&&""!==e.timestamp&&""!==e.user_name&&""!==e.user_email&&""!==e.user_phone&&""!==e.message||(this.sendWarningNotifs("All fileds must be filled!",3e3),!1)}},{key:"getCurrentDateTime",value:function(){var e=new Date,a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],t=e.getHours(),n=e.getMinutes();n<10&&(n="0"+n);var r="am";return t>12&&(t-=12,r="pm"),a+" "+t+":"+n+r+" "+e.getDate()+" "+["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()]+" "+e.getFullYear()}},{key:"handleProductName",value:function(e){this.setState({product_name:e.target.value})}},{key:"handleProductCategory",value:function(e){this.setState({product_category:e.target.value})}},{key:"handleUserEmail",value:function(e){this.setState({user_email:e.target.value})}},{key:"handleUserPhone",value:function(e){this.setState({user_phone:e.target.value})}},{key:"handleUserName",value:function(e){this.setState({user_name:e.target.value})}},{key:"handleMessage",value:function(e){this.setState({message:e.target.value})}},{key:"sendWarningNotifs",value:function(e,a){this.createNotification("warning",e,null,a)}},{key:"createNotification",value:function(e,a,t,n){switch(t=null==t?"Close after ".concat(n,"ms"):t,e){case"info":O.NotificationManager.info(a);break;case"success":O.NotificationManager.success(t,a);break;case"warning":O.NotificationManager.warning(t,a,n);break;case"error":O.NotificationManager.error("Error message","Click me!",5e3,(function(){console.log("callback")}))}}},{key:"render",value:function(){return this.state.formSubmitted?this.renderSubmission():r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{currentPage:"products"}),r.a.createElement(O.NotificationContainer,null),r.a.createElement(C.a,null,r.a.createElement(C.a.Header,{as:"h5"},"Inquire"),r.a.createElement(C.a.Body,null,r.a.createElement(b.a,null,r.a.createElement(b.a.Row,null,r.a.createElement(b.a.Group,{as:j.a},r.a.createElement(b.a.Label,null,"Product Name"),r.a.createElement(b.a.Control,{type:"text",value:this.state.product_name,onChange:this.handleProductName,placeholder:"product name",disabled:this.state.disable_product_fields||this.state.processing})),r.a.createElement(b.a.Group,{as:j.a},r.a.createElement(b.a.Label,null,"Product Category"),r.a.createElement(b.a.Control,{type:"ext",value:this.state.product_category,onChange:this.handleProductCategory,placeholder:"Category",disabled:this.state.disable_product_fields||this.state.processing}))),r.a.createElement(b.a.Row,null,r.a.createElement(b.a.Group,{as:j.a,controlId:"formGridName"},r.a.createElement(b.a.Label,null,"Name",r.a.createElement("sup",null,"*")),r.a.createElement(b.a.Control,{type:"text",value:this.state.user_name,onChange:this.handleUserName,placeholder:"Enter Name",disabled:this.state.processing})),r.a.createElement(b.a.Group,{as:j.a,controlId:"formGridEmail"},r.a.createElement(b.a.Label,null,"Email",r.a.createElement("sup",null,"*")),r.a.createElement(b.a.Control,{type:"email",value:this.state.user_email,onChange:this.handleUserEmail,placeholder:"Enter email",disabled:this.state.processing})),r.a.createElement(b.a.Group,{as:j.a},r.a.createElement(b.a.Label,null,"Phone Number",r.a.createElement("sup",null,"*")),r.a.createElement(b.a.Control,{type:"text",value:this.state.user_phone,onChange:this.handleUserPhone,placeholder:"Enter phone number",disabled:this.state.processing}))),r.a.createElement(b.a.Group,{controlId:"exampleForm.ControlTextarea1"},r.a.createElement(b.a.Label,null,"Message",r.a.createElement("sup",null,"*")),r.a.createElement(b.a.Control,{as:"textarea",rows:"3",value:this.state.message,onChange:this.handleMessage,disabled:this.state.processing})),r.a.createElement("p",null,r.a.createElement("sup",null,"*")," Mandatory fields. ",r.a.createElement("br",null)),r.a.createElement(f.a,{variant:"primary",type:"submit",onClick:this.handleSubmit,disabled:this.state.processing},this.state.processing?this.renderLoading():"Submit")))),r.a.createElement(C.a,null,r.a.createElement(C.a.Header,{as:"h5"},"Contact Details"),r.a.createElement(C.a.Body,null,r.a.createElement(C.a.Title,null,"Company Address"),r.a.createElement(C.a.Text,null,"A-117, Tirthraj Complex, Opp. V S Hospital, ",r.a.createElement("br",null),"Ellisbridge, Ahmedabad-380006 ",r.a.createElement("br",null),r.a.createElement("img",{src:P.a})),r.a.createElement(C.a.Title,null,"Contact Number"),r.a.createElement(C.a.Text,null,"+91 9825065681"),r.a.createElement(f.a,{variant:"primary",href:"whatsapp://send?phone=+919825065681"},"Open on Whatsapp"))))}},{key:"renderLoading",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"}),"Processing...")}},{key:"renderSubmission",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{currentPage:"products"}),r.a.createElement(O.NotificationContainer,null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(k.a,{variant:"success"},r.a.createElement(k.a.Heading,null,"Thank you for contacting us!"),r.a.createElement("p",null,"Contact form has been submitted based on the contact details, the admin will contact you as soon as possible."),r.a.createElement("hr",null),r.a.createElement("div",{className:"d-flex justify-content-end"},r.a.createElement(i.b,{to:"/products"},r.a.createElement(f.a,{variant:"outline-success"},"View Products")))))}}]),t}(r.a.Component),_=(t(91),t(92),t(103)),I=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{currentPage:"products"}),r.a.createElement("div",{className:"App"},r.a.createElement(_.a,null,r.a.createElement(_.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"/jb-bio-medical/images/banner.png",alt:"First slide"})))))}}]),t}(r.a.Component),x=t(99),U=t(33),F=function(){function e(){Object(s.a)(this,e)}return Object(u.a)(e,null,[{key:"getProducts",value:function(e){return null==e||""==e.trim()?U:(e=e.toLowerCase().trim(),U.filter((function(a){var t=a.Description+a.Name+a.Category;return console.log(t),(t=t.toLowerCase().trim()).includes(e)})))}},{key:"getProductById",value:function(e){return U.filter((function(a){return a.Id===e})).pop()}},{key:"getProductCategories",value:function(){var e=[];return U.forEach((function(a){e.indexOf(a.Category)<0&&e.push(a.Category)})),e}}]),e}(),M=(t(93),function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).products=[],n}return Object(u.a)(t,[{key:"render",value:function(){var e=this,a=[],t=new URLSearchParams(this.props.location.search).get("search");return this.products=F.getProducts(t),this.products.forEach((function(t){a.push(e.getCard(t))})),console.log(F.getProductCategories()),r.a.createElement("div",null,r.a.createElement(y,{currentPage:"products"}),a)}},{key:"getCard",value:function(e){return r.a.createElement(C.a,{style:{width:"18rem",display:"inline-block"}},r.a.createElement(C.a.Img,{variant:"top",src:"/jb-bio-medical"+e.ImageUrl}),r.a.createElement(C.a.Body,null,r.a.createElement(C.a.Title,{className:"producttitle"},e.Name),r.a.createElement(C.a.Text,null,r.a.createElement(x.a,{variant:"secondary"},e.Category),r.a.createElement("p",{className:"product-description"},e.Description)),r.a.createElement(i.b,{to:"/contact/"+e.Name+"/General"},r.a.createElement(f.a,{variant:"primary"},"Enquire Now")),r.a.createElement(f.a,{variant:"outline-info",style:{float:"right"},href:"/jb-bio-medical"+e.PdfUrl},"Info")))}}]),t}(r.a.Component)),T=t(100),D=(t(94),function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(s.a)(this,t),n=a.call(this,e),console.log("props"),n.productId=e.match.params.id,console.log(n.productId),n.product=F.getProductById(n.productId),console.log(n.product),n.products=[],n.products=F.getProducts(),n}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{currentPage:"products"}),r.a.createElement("div",{className:"product"},r.a.createElement("div",{className:"product-left-div"},r.a.createElement(T.a,{src:"/jb-bio-medical"+this.product.ImageUrl,height:"100",width:"150",thumbnail:!0}),r.a.createElement("br",null)),r.a.createElement("div",{className:"product-right-div"},r.a.createElement("h3",null,this.product.Name),r.a.createElement("br",null),r.a.createElement("span",{className:"description"},this.product.Description),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("a",{href:"/jb-bio-medical"+this.product.PdfUrl},"pdf version")),r.a.createElement("br",null),r.a.createElement("br",null)))}}]),t}(r.a.Component)),L=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{currentPage:"products"}),r.a.createElement(C.a,null,r.a.createElement(C.a.Header,{as:"h5"},"About Us"),r.a.createElement(C.a.Body,null,r.a.createElement(C.a.Text,null,"J B Biomed is a leading brand in dealing with High tech medical and Endoscopy equipemnts/ instruments, Surgical Lasers in all the major discipline."))),r.a.createElement(C.a,null,r.a.createElement(C.a.Header,{as:"h5"},"Mission and Vision"),r.a.createElement(C.a.Body,null,r.a.createElement(C.a.Text,null,"Our Mission and vision are to provide high-tech/ minimal invasive surgical and medical equipment at a very economical price. Also will provide the necessary service to maintain the equipment.",r.a.createElement("br",null),"Our contribution to give continuous support and provide academic help to explore more and more advance surgical operative procedures with high-tech equipments at reasonable charges."))))}}]),t}(r.a.Component),A=r.a.createElement(i.a,{basename:"/"},r.a.createElement("div",null,r.a.createElement(o.a,{path:"/home",component:I}),r.a.createElement(o.a,{path:"/products",component:M}),r.a.createElement(o.a,{path:"/product/:id",component:D}),r.a.createElement(o.a,{exact:!0,path:"/contact",component:w}),r.a.createElement(o.a,{exact:!0,path:"/about",component:L}),r.a.createElement(o.a,{exact:!0,path:"/contact/:product_name/:product_category",component:w})));c.a.render(A,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[62,1,2]]]);
//# sourceMappingURL=main.dcc4aff1.chunk.js.map