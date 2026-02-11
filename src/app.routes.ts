import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./components/pages/home-page/home-page.component').then(m => m.HomePageComponent)
  },
  {
    path: 'stiegen',
    loadComponent: () => import('./components/pages/stairs-page/stairs-page.component').then(m => m.StairsPageComponent)
  },
  {
    path: 'stiegen/holmstiegen',
    loadComponent: () => import('./components/pages/holmstiegen-page/holmstiegen-page.component').then(m => m.HolmstiegenPageComponent)
  },
  {
    path: 'stiegen/wangenstiegen',
    loadComponent: () => import('./components/pages/wangenstiegen-page/wangenstiegen-page.component').then(m => m.WangenstiegenPageComponent)
  },
  {
    path: 'stiegen/kragarmstiegen',
    loadComponent: () => import('./components/pages/kragarmstiegen-page/kragarmstiegen-page.component').then(m => m.KragarmstiegenPageComponent)
  },
  {
    path: 'stiegen/stahlstiegen',
    loadComponent: () => import('./components/pages/stahlstiegen-page/stahlstiegen-page.component').then(m => m.StahlstiegenPageComponent)
  },
  {
    path: 'stiegen/bolzenstiegen',
    loadComponent: () => import('./components/pages/bolzenstiegen-page/bolzenstiegen-page.component').then(m => m.BolzenstiegenPageComponent)
  },
  {
    path: 'stiegen/wendeltreppen',
    loadComponent: () => import('./components/pages/wendeltreppen-page/wendeltreppen-page.component').then(m => m.WendeltreppenPageComponent)
  },
  {
    path: 'stiegen/faltwerkstiegen',
    loadComponent: () => import('./components/pages/faltwerkstiegen-page/faltwerkstiegen-page.component').then(m => m.FaltwerkstiegenPageComponent)
  },
  {
    path: 'stiegen/stiegengelaender',
    loadComponent: () => import('./components/pages/stiegengelaender-page/stiegengelaender-page.component').then(m => m.StiegengelaenderPageComponent)
  },
  {
    path: 'stiegen/betonstiegen',
    loadComponent: () => import('./components/pages/betonstiegen-page/betonstiegen-page.component').then(m => m.BetonstiegenPageComponent)
  },
  {
    path: 'innentueren',
    loadComponent: () => import('./components/pages/doors-page/doors-page.component').then(m => m.DoorsPageComponent)
  },
  {
    path: 'innentueren/windfaenge',
    loadComponent: () => import('./components/pages/windfaenge-page/windfaenge-page.component').then(m => m.WindfaengePageComponent)
  },
  {
    path: 'innentueren/schiebetueren',
    loadComponent: () => import('./components/pages/schiebetueren-page/schiebetueren-page.component').then(m => m.SchiebetuerenPageComponent)
  },
  {
    path: 'innentueren/glastueren',
    loadComponent: () => import('./components/pages/glastueren-page/glastueren-page.component').then(m => m.GlastuerenPageComponent)
  },
  {
    path: 'innentueren/alt-wiener-tueren',
    loadComponent: () => import('./components/pages/alt-wiener-tueren-page/alt-wiener-tueren-page.component').then(m => m.AltWienerTuerenPageComponent)
  },
  {
    path: 'innentueren/vollbautueren',
    loadComponent: () => import('./components/pages/vollbautueren-page/vollbautueren-page.component').then(m => m.VollbautuerenPageComponent)
  },
  {
    path: 'innentueren/friesglastueren',
    loadComponent: () => import('./components/pages/friesglastueren-page/friesglastueren-page.component').then(m => m.FriesglastuerenPageComponent)
  },
  {
    path: 'wohnbauprojekte',
    loadComponent: () => import('./components/pages/projects-page/projects-page.component').then(m => m.ProjectsPageComponent)
  },
  {
    path: 'kontakt',
    loadComponent: () => import('./components/pages/contact-page/contact-page.component').then(m => m.ContactPageComponent)
  },
  {
    path: 'impressum',
    loadComponent: () => import('./components/pages/imprint-page/imprint-page.component').then(m => m.ImprintPageComponent)
  },
  {
    path: 'datenschutz',
    loadComponent: () => import('./components/pages/privacy-page/privacy-page.component').then(m => m.PrivacyPageComponent)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
