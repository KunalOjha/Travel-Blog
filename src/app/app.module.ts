import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule, FirebaseOptionsToken } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { SigninDialogComponent } from './components/signin-dialog/signin-dialog.component';
import { AuthService } from './shared/auth.service';
import { BlogEffects } from './store/effects/blogPost.effects';
import { reducers } from './store/store';
import { routes } from './app.routes';
import { environment } from '../environments/environment';
import { PostsModule } from './posts/posts.module';
import { WorldMapModule } from './world-map/world-map.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainDashboardComponent,
    SigninDialogComponent
  ],
  entryComponents: [SigninDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    WorldMapModule,
    PostsModule,
    AngularFireModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    EffectsModule.forRoot([BlogEffects]),
    StoreModule.forRoot(reducers),
    RouterModule.forRoot(routes),
    StoreRouterConnectingModule,
    // ServiceWorkerModule.register("/ngsw-worker.js", {
    //   enabled: environment.production
    // }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [
    {
      provide: FirebaseOptionsToken,
      useValue: environment.firebase
    },
    AuthService,
    AngularFireAuth
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
