"use strict";(self.webpackChunkdeftlad_website=self.webpackChunkdeftlad_website||[]).push([[443],{6443:(U,c,r)=>{r.r(c),r.d(c,{ProjectsModule:()=>y});var s=r(8982),p=r(1070),f=r(2258),g=r(7696),t=r(4650),l=r(180),d=r(8423),h=r(5108),m=r(6895),u=r(3077);function j(o,i){if(1&o&&(t.TgZ(0,"a",5)(1,"p",6),t._uU(2),t.qZA(),t._UZ(3,"p-divider"),t.TgZ(4,"div")(5,"span",7),t._uU(6),t.qZA()()()),2&o){const e=i.$implicit,n=t.oxw();t.MGl("href","/projects/project/",e.link,"",t.LSH),t.xp6(2),t.Oqu(n.projectMetadata[e.file].title),t.xp6(4),t.hij(" ",n.projectMetadata[e.file].summary," ")}}let v=(()=>{class o{constructor(e,n){this.apiService=e,this.spinner=n,this.dataLoaded=!1,this.projects=[],this.projectMetadata={}}ngOnInit(){this.spinner.show(),Promise.all([this.apiService.listProjects(),this.apiService.getProjectsMetadata()]).then(([e,n])=>{this.projects=e.map(a=>({...a,file:a.name,link:a.name.replace(".md","")})),this.projectMetadata=n.info,this.dataLoaded=!0,this.spinner.hide()}).catch(console.error).finally(()=>{this.spinner.hide(),this.dataLoaded=!0})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(l.s),t.Y36(d.t2))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-project-list"]],decls:7,vars:2,consts:[[1,"col-8","mx-auto","mt-4"],[3,"imageURL"],[1,"text-dark","fw-bold","text-uppercase"],[1,"col-12","d-flex","flex-wrap","justify-content-start"],["class","blog-card col-3 rounded rounded-4 border p-4 border-lgrey d-flex flex-column",3,"href",4,"ngFor","ngForOf"],[1,"blog-card","col-3","rounded","rounded-4","border","p-4","border-lgrey","d-flex","flex-column",3,"href"],[1,"fs-3","text-primary","fw-bold"],[1,"text-secondary"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"app-top-banner",1),t.TgZ(2,"h1",2),t._uU(3,"Projects"),t.qZA(),t._UZ(4,"p-divider"),t.TgZ(5,"div",3),t.YNc(6,j,7,3,"a",4),t.qZA()()),2&e&&(t.xp6(1),t.Q6J("imageURL","/assets/images/projects-background.jpg"),t.xp6(5),t.Q6J("ngForOf",n.projects))},dependencies:[h.i,m.sg,u.a],encapsulation:2}),o})();var x=r(2340),P=r(2821),Z=r(4394);const C=[{path:"",component:v},{path:"project/:projectSlug",component:(()=>{class o{constructor(e,n,a){this.route=e,this.spinner=n,this.apiService=a,this.apiURL=x.N.apiURL,this.projectSlug="",this.content="",this.projectInfo={}}ngOnInit(){this.route.paramMap.subscribe(e=>{this.projectSlug=e.get("projectSlug"),this.spinner.show(),Promise.all([this.apiService.getProjectContent(this.projectSlug),this.apiService.getProjectInfo(this.projectSlug)]).then(([n,a])=>{this.loadProjectContent(n),this.loadProjectInfo(a),this.spinner.hide()}).catch(n=>{console.error(n),this.spinner.hide()})})}loadProjectContent(e){this.content=e}loadProjectInfo(e){this.projectInfo=e}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(s.gz),t.Y36(d.t2),t.Y36(l.s))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-project-content"]],decls:28,vars:20,consts:[[1,"col-8","mx-auto"],[1,"py-4"],[1,"mt-4",3,"imageURL"],[1,"mb-0","mt-4","fw-bold"],[1,"content-wrapper","d-flex","justify-content-between"],[1,"content","col-9","pe-4","mt-4"],[1,"my-3","flex","align-items-center","text-end","w-100"],[1,"me-3","fw-light","text-secondary"],[1,"text-secondary","fw-light","fs-7"],["emoji","",3,"data"],[1,"content-info","col-3","ps-4","d-flex","flex-column","justify-content-start","mt-4"],[1,"text-warning","fw-bold","mb-4","ms-auto","fs-3"],[1,"d-block","text-primary","text-truncate","text-end","mt-2","ms-auto"],["data-toggle","tooltip","data-placement","top","title","Clean Code: A Subjective Guide for better programming",1,"d-block","text-primary","text-truncate","text-end","mt-2","ms-auto"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"div",1)(2,"app-top-banner",2),t.TgZ(3,"h1",3),t._uU(4),t.qZA(),t.TgZ(5,"div",4)(6,"div",5)(7,"div",6)(8,"span",7),t._uU(9),t.ALo(10,"date"),t.qZA(),t.TgZ(11,"span",8),t._uU(12),t.ALo(13,"readingTime"),t.qZA()(),t._UZ(14,"markdown",9),t.qZA(),t.TgZ(15,"div",10)(16,"span",11),t._uU(17,"Related Topics"),t.qZA(),t.TgZ(18,"a",12),t._uU(19,"Set up Docker on your PC"),t.qZA(),t.TgZ(20,"a",13),t._uU(21),t.ALo(22,"truncate"),t.qZA(),t.TgZ(23,"a",12),t._uU(24,"Getting Things Done!"),t.qZA(),t.TgZ(25,"a",12),t._uU(26),t.ALo(27,"truncate"),t.qZA()()()()),2&e&&(t.xp6(2),t.Q6J("imageURL",n.projectInfo.bannerURL),t.xp6(2),t.Oqu(n.projectInfo.title||"Deftlad Blogs"),t.xp6(5),t.hij("Updated ",t.lcZ(10,7,n.projectInfo.updatedAt),""),t.xp6(3),t.hij("",t.xi3(13,9,n.content,250)," min read"),t.xp6(2),t.Q6J("data",n.content),t.xp6(7),t.hij(" ",t.Dn7(22,12,"Clean Code: A Subjective Guide for better programming",25,!0)," "),t.xp6(5),t.Oqu(t.Dn7(27,16,"Setup Your Machine: Java",25,!0)))},dependencies:[u.a,p.lF,P.W,Z.F,m.uU],styles:[".table[_ngcontent-%COMP%]{--bs-table-striped-bg: #fcfcfc;--bs-table-hover-bg: #e9ecef}.table-secondary[_ngcontent-%COMP%]{--bs-table-bg: #f8f9fa}.blog-summary[_ngcontent-%COMP%]{font-family:Merriweather,serif;line-height:1.5}.blog-content[_ngcontent-%COMP%]{font-family:Merriweather,serif;font-size:1.15rem;line-height:1.75;color:#4a5159;margin-top:2rem}.content-info[_ngcontent-%COMP%]{border-left:2px solid #f8f9fa}"]}),o})()}];let b=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[s.Bz.forRoot(C),s.Bz]}),o})(),y=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[s.Bz,f.g,b,g.f,p.JP.forChild()]}),o})()}}]);