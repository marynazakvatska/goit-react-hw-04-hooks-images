(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{11:function(e,t,a){e.exports={overlay:"Modal_overlay__1pLwd",modal:"Modal_modal__1rsO-"}},13:function(e,t,a){e.exports={button:"Button_button__2yhOm"}},15:function(e,t,a){},20:function(e,t,a){},23:function(e,t,a){e.exports={App:"App_App__sfDnz"}},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),o=a.n(c),i=(a(20),a(12)),s=a(3),l=a(5),u=a.n(l),m=a(9),b=(a(21),a(1));function j(e){var t=e.onSubmit,a=Object(n.useState)(""),r=Object(s.a)(a,2),c=r[0],o=r[1];return Object(b.jsx)("header",{className:u.a.searchbar,children:Object(b.jsxs)("form",{className:u.a.searchForm,onSubmit:function(e){if(e.preventDefault(),""===c.trim())return m.b.error("Enter the name");t(c),o("")},children:[Object(b.jsx)("button",{type:"submit",className:u.a.searchForm_button,children:Object(b.jsx)("span",{className:u.a.searchForm_button_label,children:"Search"})}),Object(b.jsx)("input",{value:c,onChange:function(e){o(e.currentTarget.value.toLowerCase())},className:u.a.searchForm_input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}var h=a(7),d=a.n(h),f=function(e){var t=e.webformatURL,a=e.openModal,n=(e.largeImageURL,e.tag);e.id;return Object(b.jsx)("li",{onClick:a,className:d.a.imageGalleryItem,children:Object(b.jsx)("img",{src:t,alt:n,width:480,className:d.a.imageGalleryItem_image})})},_=function(e){var t=e.images,a=e.openModal;return Object(b.jsx)("ul",{className:d.a.imageGallery,children:t.map((function(e){var t=e.webformatURL,n=e.largeImageURL,r=e.tag,c=e.id;return Object(b.jsx)(f,{webformatURL:t,largeImageURL:n,tag:r,openModal:function(){return a(t,n,r,c)}},c)}))})},g=a(13),O=a.n(g),p=function(e){var t=e.onClick;return Object(b.jsx)("button",{type:"button",onClick:t,className:O.a.button,children:"Load more"})},x=a(11),y=a.n(x),v=document.querySelector("#modal-root");function w(e){var t=e.onClose,a=e.image;Object(n.useEffect)((function(){return window.addEventListener("keydown",r),function(){window.removeEventListener("keydown",r)}}));var r=function(e){"Escape"===e.code&&t()};return Object(c.createPortal)(Object(b.jsx)("div",{className:y.a.overlay,onClick:function(e){e.currentTarget===e.target&&t()},children:Object(b.jsx)("div",{className:y.a.modal,children:Object(b.jsx)("img",{src:a.src,alt:a.alt})})}),v)}a(23),a(24);var S=a(14),F=a.n(S),N=a(15),k=a.n(N);function G(){return Object(b.jsx)("div",{className:k.a.loader,children:Object(b.jsx)(F.a,{type:"ThreeDots",color:"#00BFFF",height:120,width:120,timeout:3e3})})}function I(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),o=Object(s.a)(c,2),l=o[0],u=o[1],h=Object(n.useState)(1),d=Object(s.a)(h,2),f=d[0],g=d[1],O=Object(n.useState)(""),x=Object(s.a)(O,2),y=x[0],v=x[1],S=Object(n.useState)(null),F=Object(s.a)(S,2),N=F[0],k=F[1],I=Object(n.useState)(null),L=Object(s.a)(I,2),C=L[0],E=L[1],R=Object(n.useState)(!1),M=Object(s.a)(R,2),U=M[0],T=M[1];Object(n.useEffect)((function(){if(y){T(!0);fetch("".concat("https://pixabay.com/api","/?q=").concat(y,"&page=").concat(f,"&key=").concat("21675881-9f2314d809854342b3af65054","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.ok?e.json():Promise.reject(new Error("No image with name ".concat(y)))})).then((function(e){return e.hits})).then((function(e){u((function(t){return[].concat(Object(i.a)(t),Object(i.a)(e))}))})).catch((function(e){return e})).finally((function(){T(!1),window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})}))}}),[y,f]);return Object(b.jsxs)("div",{children:[Object(b.jsx)(j,{onSubmit:function(e){r(!1),u([]),g(1),v(""),k(null),E(null),T(!1),v(e)}}),N&&Object(b.jsx)("h1",{children:N.message}),y&&Object(b.jsx)(_,{openModal:function(e,t){r(!0),E({src:e,alt:t})},images:l}),!y&&Object(b.jsx)("h2",{children:"Type the name of the image"}),Object(b.jsx)(m.a,{}),U&&Object(b.jsx)(G,{}),l.length>0&&Object(b.jsx)(p,{onClick:function(){g((function(e){return e+1}))}}),a&&Object(b.jsx)(w,{image:C,onClose:function(){return r(!1)}})]})}o.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(I,{})}),document.getElementById("root"))},5:function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__bA-1h",searchForm:"Searchbar_searchForm__3XeYi",searchForm_button:"Searchbar_searchForm_button__j3qfR",searchForm_button_label:"Searchbar_searchForm_button_label__3SG3l",searchForm_input:"Searchbar_searchForm_input__pQ3lq"}},7:function(e,t,a){e.exports={imageGallery:"ImageGallery_imageGallery__3aRi_",imageGalleryItem:"ImageGallery_imageGalleryItem__24NcK",imageGalleryItem_image:"ImageGallery_imageGalleryItem_image__3Luid"}}},[[45,1,2]]]);
//# sourceMappingURL=main.a4e4e820.chunk.js.map