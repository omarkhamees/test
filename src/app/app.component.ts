import { Component } from '@angular/core';
import { IconService } from '@visurel/iconify-angular';
import arrowRightLinear from '@iconify/icons-mdi/arrow-right-thin';
import microsoftIcon from '@iconify/icons-mdi/microsoft-dynamics-365';
import eye from '@iconify/icons-mdi/eye';
import hideEye from '@iconify/icons-mdi/hide';
import leadIcon from '@iconify/icons-mdi/leads-outline';
import dealIcon from '@iconify/icons-mdi/deal-outline';
import contactsIcon from '@iconify/icons-mdi/contact-outline';
import accountsIcon from '@iconify/icons-mdi/account-add-outline';
import activitiesIcon from '@iconify/icons-mdi/list-box-outline';
import leftArrowIcon from '@iconify/icons-mdi/arrow-left-thick';
import rightArrowIcon from '@iconify/icons-mdi/arrow-right-thick';
import bottomArrowIcon from '@iconify/icons-mdi/arrow-down-circle-outline';
import userAccountIcon from '@iconify/icons-mdi/user';
import addIcon from '@iconify/icons-mdi/add-circle-outline';
import saveIcon from '@iconify/icons-mdi/content-save-add';
import deleteIcon from '@iconify/icons-mdi/delete-outline';
import logOutIcon from '@iconify/icons-mdi/log-out';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appIcons = {
    arrowRightLinear,
    microsoftIcon,
    eye,
    hideEye,
    leadIcon,
    dealIcon,
    contactsIcon,
    accountsIcon,
    activitiesIcon,
    leftArrowIcon,
    rightArrowIcon,
    bottomArrowIcon,
    userAccountIcon,
    addIcon,
    saveIcon,
    deleteIcon,
    logOutIcon
  }

  constructor(iconService: IconService) {
    iconService.registerAll(this.appIcons);
  }

}
