import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./presentacion/presentacion.module').then( m => m.PresentacionPageModule),
  },
  {
    path: 'productos',
    loadChildren: () => import('./productos/productos.module').then( m => m.ProductosPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'producto/:id',
    loadChildren: () => import('./producto/producto.module').then( m => m.ProductoPageModule)
  },
  {
    path: 'importadoras',
    loadChildren: () => import('./importadoras/importadoras.module').then( m => m.ImportadorasPageModule)
  },
  {
    path: 'importadora/:id',
    loadChildren: () => import('./importadora/importadora.module').then( m => m.ImportadoraPageModule)
  },
  {
    path: 'contactanos',
    loadChildren: () => import('./contactanos/contactanos.module').then( m => m.ContactanosPageModule)
  },{
    path: 'favoritos',
    loadChildren: () => import('./favoritos/favoritos.module').then( m => m.FavoritosPageModule)
  },
  {
    path: 'novedades',
    loadChildren: () => import('./novedades/novedades.module').then( m => m.NovedadesPageModule)
  },
  {
    path: 'select',
    loadChildren: () => import('./select/select.module').then( m => m.SelectPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'pedidomodal',
    loadChildren: () => import('./pedidomodal/pedidomodal.module').then( m => m.PedidomodalPageModule)
  },
  {
    path: 'pedidos',
    loadChildren: () => import('./pedidos/pedidos.module').then( m => m.PedidosPageModule)
  },
  {
    path: 'calculadora',
    loadChildren: () => import('./calculadora/calculadora.module').then( m => m.CalculadoraPageModule)
  },
  {
    path: 'cotizacionmodal',
    loadChildren: () => import('./cotizacionmodal/cotizacionmodal.module').then( m => m.CotizacionmodalPageModule)
  },
  {
    path: 'carrito',
    loadChildren: () => import('./carrito/carrito.module').then( m => m.CarritoPageModule)
  },
  {
    path: 'modalfavoritos',
    loadChildren: () => import('./modalfavoritos/modalfavoritos.module').then( m => m.ModalfavoritosPageModule)
  },
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}