"use strict";(self.webpackChunkdeftlad_website=self.webpackChunkdeftlad_website||[]).push([[701],{3701:(L,g,i)=>{i.r(g),i.d(g,{BlogsModule:()=>U});var s=i(8982),d=i(1070),u=i(2258),f=i(2340),t=i(4650),p=i(8423),r=i(180),c=i(3077),h=i(2821),b=i(4394),m=i(6895);let v=(()=>{class o{constructor(e,n,a){this.route=e,this.spinner=n,this.apiService=a,this.apiURL=f.N.apiURL,this.blogSlug="",this.content="",this.blogInfo={}}ngOnInit(){this.route.paramMap.subscribe(e=>{this.blogSlug=e.get("blogSlug"),this.spinner.show(),Promise.all([this.apiService.getBlogContent(this.blogSlug),this.apiService.getBlogInfo(this.blogSlug)]).then(([n,a])=>{this.loadBlogContent(n),this.loadBlogInfo(a),this.spinner.hide()})})}loadBlogContent(e){this.content=e}loadBlogInfo(e){this.blogInfo=e}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(s.gz),t.Y36(p.t2),t.Y36(r.s))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-blog-content"]],decls:28,vars:20,consts:[[1,"col-8","mx-auto"],[1,"py-4"],[1,"mt-4",3,"imageURL"],[1,"mb-0","mt-4","fw-bold"],[1,"content-wrapper","d-flex","justify-content-between"],[1,"content","col-9","pe-4","mt-4"],[1,"my-3","flex","align-items-center","text-end","w-100"],[1,"me-3","fw-light","text-secondary"],[1,"text-secondary","fw-light","fs-7"],["emoji","",3,"data"],[1,"content-info","col-3","ps-4","d-flex","flex-column","justify-content-start","mt-4"],[1,"text-warning","fw-bold","mb-4","ms-auto","fs-3"],[1,"d-block","text-primary","text-truncate","text-end","mt-2","ms-auto"],["data-toggle","tooltip","data-placement","top","title","Clean Code: A Subjective Guide for better programming",1,"d-block","text-primary","text-truncate","text-end","mt-2","ms-auto"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"div",1)(2,"app-top-banner",2),t.TgZ(3,"h1",3),t._uU(4),t.qZA(),t.TgZ(5,"div",4)(6,"div",5)(7,"div",6)(8,"span",7),t._uU(9),t.ALo(10,"date"),t.qZA(),t.TgZ(11,"span",8),t._uU(12),t.ALo(13,"readingTime"),t.qZA()(),t._UZ(14,"markdown",9),t.qZA(),t.TgZ(15,"div",10)(16,"span",11),t._uU(17,"Related Topics"),t.qZA(),t.TgZ(18,"a",12),t._uU(19,"Set up Docker on your PC"),t.qZA(),t.TgZ(20,"a",13),t._uU(21),t.ALo(22,"truncate"),t.qZA(),t.TgZ(23,"a",12),t._uU(24,"Getting Things Done!"),t.qZA(),t.TgZ(25,"a",12),t._uU(26),t.ALo(27,"truncate"),t.qZA()()()()),2&e&&(t.xp6(2),t.Q6J("imageURL",n.blogInfo.bannerURL),t.xp6(2),t.Oqu(n.blogInfo.title||"Deftlad Blogs"),t.xp6(5),t.hij("Updated, ",t.lcZ(10,7,n.blogInfo.updatedAt),""),t.xp6(3),t.hij("",t.xi3(13,9,n.content,250)," min read"),t.xp6(2),t.Q6J("data",n.content),t.xp6(7),t.hij(" ",t.Dn7(22,12,"Clean Code: A Subjective Guide for better programming",25,!0)," "),t.xp6(5),t.Oqu(t.Dn7(27,16,"Setup Your Machine: Java",25,!0)))},dependencies:[c.a,d.lF,h.W,b.F,m.uU],styles:[".table[_ngcontent-%COMP%]{--bs-table-striped-bg: #fcfcfc;--bs-table-hover-bg: #e9ecef}.table-secondary[_ngcontent-%COMP%]{--bs-table-bg: #f8f9fa}.blog-summary[_ngcontent-%COMP%]{font-family:Merriweather,serif;line-height:1.5}.blog-content[_ngcontent-%COMP%]{font-family:Merriweather,serif;font-size:1.15rem;line-height:1.75;color:#4a5159;margin-top:2rem}.content-info[_ngcontent-%COMP%]{border-left:2px solid #f8f9fa}"]}),o})();var x=i(5108);function B(o,l){if(1&o&&(t.TgZ(0,"a",5)(1,"p",6),t._uU(2),t.qZA(),t._UZ(3,"p-divider"),t.TgZ(4,"div")(5,"span",7),t._uU(6),t.qZA()()()),2&o){const e=l.$implicit,n=t.oxw();t.MGl("href","/blogs/blog/",e.link,"",t.LSH),t.xp6(2),t.Oqu(n.blogMetadata[e.file].title),t.xp6(4),t.hij(" ",n.blogMetadata[e.file].summary," ")}}const Z=[{path:"",component:(()=>{class o{constructor(e,n){this.apiService=e,this.spinner=n,this.dataLoaded=!1,this.blogs=[],this.blogMetadata={}}ngOnInit(){this.spinner.show(),Promise.all([this.apiService.listBlogs(),this.apiService.getBlogsMetadata()]).then(([e,n])=>{this.blogs=e.files.map(a=>({...a,file:a.path.replace(/content\/BLOG\//g,""),link:a.path.replace(/content\/BLOG\//g,"").replace(".md","")})),this.blogMetadata=n.info,this.dataLoaded=!0,this.spinner.hide()}).catch(console.error).finally(()=>{this.spinner.hide(),this.dataLoaded=!0})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(r.s),t.Y36(p.t2))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-blog-list"]],decls:7,vars:2,consts:[[1,"col-8","mx-auto","mt-4"],[3,"imageURL"],[1,"text-dark","fw-bold","text-uppercase"],[1,"col-12","d-flex","flex-wrap","justify-content-start"],["class","blog-card col-3 rounded rounded-4 border p-4 border-lgrey d-flex flex-column",3,"href",4,"ngFor","ngForOf"],[1,"blog-card","col-3","rounded","rounded-4","border","p-4","border-lgrey","d-flex","flex-column",3,"href"],[1,"fs-3","text-primary","fw-bold"],[1,"text-secondary"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"app-top-banner",1),t.TgZ(2,"h1",2),t._uU(3,"Blogs"),t.qZA(),t._UZ(4,"p-divider"),t.TgZ(5,"div",3),t.YNc(6,B,7,3,"a",4),t.qZA()()),2&e&&(t.xp6(1),t.Q6J("imageURL","/assets/images/blogs-background.jpg"),t.xp6(5),t.Q6J("ngForOf",n.blogs))},dependencies:[x.i,m.sg,c.a]}),o})()},{path:"blog/:blogSlug",component:v}];let C=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[s.Bz.forRoot(Z),s.Bz]}),o})();var y=i(7696);let U=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[r.s],imports:[s.Bz,C,u.g,y.f,d.JP.forChild()]}),o})()}}]);