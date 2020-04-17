import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmInfoPageRoutingModule } from './confirm-info-routing.module';

import { ConfirmInfoPage } from './confirm-info.page';
import {TranslateModule} from '@ngx-translate/core';
import {PoliciesModule} from '../../../../shared/component/policies/policies.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ConfirmInfoPageRoutingModule,
        TranslateModule,
        PoliciesModule
    ],
  declarations: [ConfirmInfoPage]
})
export class ConfirmInfoPageModule {}
