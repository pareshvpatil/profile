import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from '../components/home/home.component';
import {AboutComponent} from '../components/about/about.component';
import {BlogsComponent} from "../components/blogs/blogs.component";
import {ProjectsComponent} from "../components/projects/projects.component";
import {ContactComponent} from "../components/contact/contact.component";
import {ResumeComponent} from "../components/resume/resume.component";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'blogs',
        component: BlogsComponent
    },
    {
        path: 'projects',
        component: ProjectsComponent
    },
    {
      path: 'resume',
      component: ResumeComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
