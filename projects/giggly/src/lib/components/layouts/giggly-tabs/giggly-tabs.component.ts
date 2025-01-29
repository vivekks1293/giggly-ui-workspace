import { Component, ContentChildren, QueryList, AfterContentInit, Input } from '@angular/core';
import { GigglyTabComponent } from '../giggly-tab/giggly-tab.component';

@Component({
  selector: 'giggly-tabs',
  standalone: false,
  templateUrl: './giggly-tabs.component.html',
  styleUrl: './giggly-tabs.component.scss'
})
export class GigglyTabsComponent {
  @ContentChildren(GigglyTabComponent) tabs!: QueryList<GigglyTabComponent>;
  @Input() activeTabIndex: number = 0;

  ngAfterContentInit() {
    const tabsArray = this.tabs.toArray();
    if (tabsArray.length > 0) {
      this.selectTab(this.activeTabIndex || 0);
    }
  }

  selectTab(index: number) {
    this.tabs.forEach((tab, i) => {
      tab.isActive = i === index;
    });
  }
}
